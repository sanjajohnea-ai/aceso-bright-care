import { createClient } from "npm:@supabase/supabase-js@2.45.0";
import { SMTPClient } from "npm:emailjs@4.0.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { email } = await req.json();
    if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      return json({ error: "Please enter a valid email address." }, 400);
    }
    const normalized = email.trim().toLowerCase();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Check if the email is already registered in Supabase auth
    const { data: existing, error: listErr } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1,
      // @ts-expect-error - supabase-js accepts a filter for email lookup via getUserByEmail
    });
    if (listErr) console.error("listUsers err", listErr);

    // Preferred exact lookup
    // deno-lint-ignore no-explicit-any
    const anyClient: any = supabase.auth.admin;
    let alreadyExists = false;
    try {
      const { data } = await anyClient.getUserByEmail?.(normalized) ?? {};
      if (data?.user) alreadyExists = true;
    } catch (_) { /* fallback below */ }
    if (!alreadyExists && existing?.users) {
      alreadyExists = existing.users.some((u) => u.email?.toLowerCase() === normalized);
    }
    if (alreadyExists) {
      return json({ error: "An account with this email already exists.", code: "email_exists" }, 409);
    }

    // Generate a secure 6-digit code
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    const code = (100000 + (buf[0] % 900000)).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    // Invalidate previous unverified codes for this email
    await supabase
      .from("email_verifications")
      .update({ verified: false, expires_at: new Date(Date.now() - 1000).toISOString() })
      .eq("email", normalized)
      .eq("verified", false);

    const { error: insertErr } = await supabase.from("email_verifications").insert({
      email: normalized,
      code,
      expires_at: expiresAt,
      verified: false,
      attempts: 0,
    });
    if (insertErr) {
      console.error("insert error", insertErr);
      return json({ error: "Could not create verification code." }, 500);
    }

    // Send email via SMTP
    const host = Deno.env.get("SMTP_HOST");
    const port = Number(Deno.env.get("SMTP_PORT") ?? "587");
    const user = Deno.env.get("SMTP_USERNAME");
    const pass = Deno.env.get("SMTP_PASSWORD");
    const encryption = (Deno.env.get("SMTP_ENCRYPTION") ?? "tls").toLowerCase(); // tls | ssl | none
    const fromEmail = Deno.env.get("SMTP_FROM_EMAIL") ?? "noreply@acesohealth.co.ke";
    const fromName = Deno.env.get("SMTP_FROM_NAME") ?? "Aceso Health";

    if (!host || !user || !pass) {
      console.error("SMTP env vars missing");
      return json({ error: "Email service is not configured. Please contact support." }, 500);
    }

    const client = new SMTPClient({
      user,
      password: pass,
      host,
      port,
      ssl: encryption === "ssl",
      tls: encryption === "tls",
    });

    const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;background:#f6f8fb;padding:24px;color:#111">
      <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;padding:28px;border:1px solid #e5e7eb">
        <h2 style="color:#0f766e;margin:0 0 12px">Verify your email</h2>
        <p style="color:#374151;margin:0 0 16px">Thank you for signing up with Aceso Health. Use the code below to verify your email address. This code expires in 10 minutes.</p>
        <div style="font-size:32px;font-weight:800;letter-spacing:8px;text-align:center;background:#f0fdfa;color:#0f766e;padding:16px;border-radius:10px;border:1px solid #99f6e4;margin:12px 0">${code}</div>
        <p style="color:#6b7280;font-size:12px;margin:16px 0 0">If you didn't request this, you can safely ignore this email.</p>
        <p style="color:#6b7280;font-size:12px;margin:8px 0 0">— Aceso Health Solutions</p>
      </div></body></html>`;

    await new Promise<void>((resolve, reject) => {
      client.send(
        {
          text: `Your Aceso Health verification code is: ${code}\nThis code expires in 10 minutes.`,
          from: `${fromName} <${fromEmail}>`,
          to: normalized,
          subject: "Your Aceso Health verification code",
          attachment: [{ data: html, alternative: true }],
        },
        (err) => (err ? reject(err) : resolve()),
      );
    });

    return json({ ok: true, expiresAt });
  } catch (e) {
    console.error("send-verification-code error", e);
    return json({ error: (e as Error).message || "Unexpected error" }, 500);
  }
});
