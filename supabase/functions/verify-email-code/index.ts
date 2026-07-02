import { createClient } from "npm:@supabase/supabase-js@2.45.0";

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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const { email, code } = await req.json();
    if (typeof email !== "string" || typeof code !== "string") {
      return json({ error: "Invalid request." }, 400);
    }
    const normalized = email.trim().toLowerCase();
    const trimmedCode = code.trim();
    if (!/^\d{6}$/.test(trimmedCode)) {
      return json({ error: "The verification code is incorrect.", reason: "invalid" }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: rows, error } = await supabase
      .from("email_verifications")
      .select("id, code, expires_at, verified, attempts")
      .eq("email", normalized)
      .order("created_at", { ascending: false })
      .limit(1);

    if (error) {
      console.error(error);
      return json({ error: "Could not verify code." }, 500);
    }
    const row = rows?.[0];
    if (!row) {
      return json({ error: "No verification code found. Please request a new one.", reason: "not_found" }, 404);
    }
    if (new Date(row.expires_at).getTime() < Date.now()) {
      return json({ error: "Your verification code has expired.", reason: "expired" }, 410);
    }
    if (row.verified) {
      return json({ ok: true, alreadyVerified: true });
    }
    if (row.code !== trimmedCode) {
      await supabase
        .from("email_verifications")
        .update({ attempts: (row.attempts ?? 0) + 1 })
        .eq("id", row.id);
      return json({ error: "The verification code is incorrect.", reason: "incorrect" }, 400);
    }

    await supabase
      .from("email_verifications")
      .update({ verified: true })
      .eq("id", row.id);

    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: (e as Error).message || "Unexpected error" }, 500);
  }
});
