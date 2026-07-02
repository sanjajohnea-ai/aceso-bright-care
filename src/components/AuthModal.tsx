import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Stethoscope, Building2, FlaskConical, Mail, Phone, Lock, Eye, EyeOff, UserCircle, Calendar, User, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export type AuthMode = "signin" | "signup";

export const openAuthModal = (mode: AuthMode = "signup") => {
  window.dispatchEvent(new CustomEvent("open-auth-modal", { detail: { mode } }));
};

type Role = "patient" | "doctor" | "nursing" | "laboratory";

const roles: { id: Role; label: string; icon: React.ElementType }[] = [
  { id: "patient", label: "Patient", icon: UserCircle },
  { id: "doctor", label: "Healthcare Provider", icon: Stethoscope },
  { id: "nursing", label: "Nursing", icon: Building2 },
  { id: "laboratory", label: "Laboratory", icon: FlaskConical },
];

const calcAge = (dob: string) => {
  if (!dob) return 0;
  const b = new Date(dob);
  if (isNaN(b.getTime())) return 0;
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  const m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
  return age;
};

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("signup");
  const [role, setRole] = useState<Role>("patient");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Email verification (on-page)
  const [codeSent, setCodeSent] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [sending, setSending] = useState(false);
  const [codeExpiresAt, setCodeExpiresAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const [resendCooldown, setResendCooldown] = useState(0);

  const CODE_TTL_MS = 10 * 60 * 1000; // 10 minutes
  const secondsLeft = codeExpiresAt ? Math.max(0, Math.floor((codeExpiresAt - now) / 1000)) : 0;
  const codeExpired = codeSent && !emailVerified && secondsLeft === 0;

  const [submitted, setSubmitted] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [pwTouched, setPwTouched] = useState(false);
  const [pw2Touched, setPw2Touched] = useState(false);

  const validatePassword = (p: string): string | null => {
    if (p.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(p)) return "Password must contain at least one uppercase letter.";
    if (!/[0-9]/.test(p)) return "Password must contain at least one number.";
    return null;
  };

  const pwError = pwTouched && pw ? validatePassword(pw) : null;
  const pw2Error = pw2Touched && pw2 && pw !== pw2 ? "Passwords do not match." : null;

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      setMode(detail.mode || "signup");
      setOpen(true);
      setError(null);
      setSubmitted(false);
    };
    window.addEventListener("open-auth-modal", handler);
    return () => window.removeEventListener("open-auth-modal", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Reset verification when email changes
  useEffect(() => {
    setCodeSent(false);
    setEmailVerified(false);
    setCodeInput("");
    setCodeExpiresAt(null);
    setEmailError(null);
  }, [email]);

  // Ticking clock for countdown + resend cooldown
  useEffect(() => {
    if (!codeSent && resendCooldown === 0) return;
    const id = setInterval(() => {
      setNow(Date.now());
      setResendCooldown((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [codeSent, emailVerified, resendCooldown]);

  // Notify once when the code expires
  useEffect(() => {
    if (codeExpired) {
      toast.error("Your verification code has expired.", { description: "Please request a new code to continue." });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeExpired]);

  const close = () => {
    setOpen(false);
    setSubmitted(false);
  };
  const roleLabel = roles.find((r) => r.id === role)?.label || "Patient";

  const sendCode = async () => {
    setError(null);
    setEmailError(null);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) { setEmailError("Please enter a valid email address."); return; }
    if (resendCooldown > 0) return;
    setSending(true);
    try {
      const { data, error: fnErr } = await supabase.functions.invoke("send-verification-code", {
        body: { email: email.trim() },
      });
      if (fnErr) {
        // Try to parse the error body for structured messages
        // deno-lint-ignore no-explicit-any
        const ctx: any = (fnErr as any).context;
        let payload: { error?: string; code?: string } | null = null;
        try { payload = await ctx?.json?.(); } catch { /* ignore */ }
        const msg = payload?.error || fnErr.message || "Could not send verification code.";
        if (payload?.code === "email_exists") {
          setEmailError("An account with this email already exists.");
        } else {
          setError(msg);
        }
        toast.error(msg);
        return;
      }
      const expiryStr = (data as { expiresAt?: string })?.expiresAt;
      const expiry = expiryStr ? new Date(expiryStr).getTime() : Date.now() + CODE_TTL_MS;
      setCodeExpiresAt(expiry);
      setCodeSent(true);
      setCodeInput("");
      setNow(Date.now());
      setResendCooldown(60);
      toast.success(`Verification code sent to ${email}`, { description: "Check your inbox for the 6-digit code." });
    } catch (e) {
      const msg = (e as Error).message || "Could not send verification code.";
      setError(msg);
      toast.error(msg);
    } finally {
      setSending(false);
    }
  };

  const verifyCode = async () => {
    setError(null);
    if (codeExpired) {
      setError("Your verification code has expired.");
      return;
    }
    setVerifying(true);
    try {
      const { data, error: fnErr } = await supabase.functions.invoke("verify-email-code", {
        body: { email: email.trim(), code: codeInput.trim() },
      });
      if (fnErr) {
        // deno-lint-ignore no-explicit-any
        const ctx: any = (fnErr as any).context;
        let payload: { error?: string; reason?: string } | null = null;
        try { payload = await ctx?.json?.(); } catch { /* ignore */ }
        const reason = payload?.reason;
        if (reason === "expired") {
          setError("Your verification code has expired.");
          setCodeExpiresAt(Date.now() - 1000);
        } else {
          setError(payload?.error || "The verification code is incorrect.");
        }
        toast.error(payload?.error || "The verification code is incorrect.");
        return;
      }
      if ((data as { ok?: boolean })?.ok) {
        setEmailVerified(true);
        setCodeExpiresAt(null);
        toast.success("Email verified successfully");
      }
    } catch (e) {
      const msg = (e as Error).message || "Verification failed.";
      setError(msg);
      toast.error(msg);
    } finally {
      setVerifying(false);
    }
  };


  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!emailVerified) {
      setError("Please verify your email address before creating your account.");
      return;
    }
    if (!dob) { setError("Please enter your date of birth."); return; }
    const age = calcAge(dob);
    if (age < 18) {
      setError("We're sorry — you must be at least 18 years old to register for an Aceso Health account.");
      return;
    }
    const pwErr = validatePassword(pw);
    if (pwErr) { setError(pwErr); return; }
    if (pw !== pw2) { setError("Passwords do not match."); return; }
    if (!agree) { setError("Please agree to the Terms and Privacy Policy."); return; }

    setSubmitted(true);
  };

  const resetAll = () => {
    setFname(""); setLname(""); setEmail(""); setDob(""); setPhone("");
    setPw(""); setPw2(""); setAgree(false); setError(null); setEmailError(null);
    setCodeSent(false); setEmailVerified(false); setCodeInput("");
    setCodeExpiresAt(null);
    setResendCooldown(0);
  };

  const dobAge = calcAge(dob);
  const allFieldsFilled = !!fname.trim() && !!email.trim() && !!dob && !!phone.trim() && !!pw && !!pw2;
  const passwordOk = !validatePassword(pw) && pw === pw2;
  const canSubmit = emailVerified && allFieldsFilled && passwordOk && agree && dobAge >= 18;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-background rounded-2xl shadow-2xl p-6 md:p-8 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-extrabold text-primary mb-3">
                  Your profile is under review
                </h2>
                <p className="text-muted-foreground mb-2">
                  Thank you for registering with Aceso Health Solutions. Our team is reviewing your profile.
                </p>
                <p className="text-muted-foreground mb-6">
                  You will receive an email at <span className="font-semibold text-foreground">{email}</span> letting you know whether your profile has been approved.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-xl"
                  onClick={() => { resetAll(); close(); }}
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary mb-5">
                  Welcome to Aceso Health Solutions
                </h2>

                <div className="grid grid-cols-2 gap-2 p-1 bg-muted/60 rounded-xl mb-6">
                  <button
                    onClick={() => setMode("signin")}
                    className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      mode === "signin" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setMode("signup")}
                    className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      mode === "signup" ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-sm" : "text-muted-foreground"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive">
                    {error}
                  </div>
                )}

                {mode === "signup" ? (
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">I am a:</p>
                      <div className="grid grid-cols-2 gap-2.5">
                        {roles.map((r) => {
                          const Icon = r.icon;
                          const active = role === r.id;
                          return (
                            <button
                              key={r.id}
                              type="button"
                              onClick={() => setRole(r.id)}
                              className={`relative flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                                active
                                  ? "border-primary bg-primary/5"
                                  : "border-border bg-muted/40 hover:border-primary/40"
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className={`text-sm font-medium ${active ? "text-primary" : "text-foreground"}`}>{r.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="fname">First Name <span className="text-destructive">*</span></Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="fname" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First name" className="pl-9" required />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lname">Last Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="lname" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last name" className="pl-9" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="pl-9 pr-9"
                            disabled={emailVerified}
                            required
                          />
                          {emailVerified && (
                            <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                          )}
                        </div>
                        {!emailVerified && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={sendCode}
                            disabled={sending || !email}
                            className="whitespace-nowrap"
                          >
                            {sending ? "Sending..." : codeSent ? "Resend code" : "Send code"}
                          </Button>
                        )}
                      </div>
                      {codeSent && !emailVerified && (
                        <div className="mt-2 p-3 rounded-lg bg-primary/5 border border-primary/20 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                              Enter the 6-digit code sent to your email
                            </p>
                            <span className={`text-xs font-mono font-semibold ${codeExpired ? "text-destructive" : "text-primary"}`}>
                              {codeExpired
                                ? "Expired"
                                : `${Math.floor(secondsLeft / 60)}:${String(secondsLeft % 60).padStart(2, "0")}`}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Input
                              value={codeInput}
                              onChange={(e) => setCodeInput(e.target.value.replace(/\D/g, "").slice(0, 6))}
                              placeholder="000000"
                              inputMode="numeric"
                              maxLength={6}
                              disabled={codeExpired}
                              className="flex-1 tracking-widest text-center font-mono"
                            />
                            <Button
                              type="button"
                              onClick={verifyCode}
                              disabled={codeInput.length !== 6 || codeExpired || verifying}
                              className="min-w-[90px]"
                            >
                              {verifying ? "Verifying…" : "Verify"}
                            </Button>
                          </div>
                          {codeExpired && (
                            <div className="p-2 rounded-md bg-destructive/10 border border-destructive/30 text-xs text-destructive">
                              Your verification code has expired. Please request a new one.
                            </div>
                          )}
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              Status:{" "}
                              <span className={codeExpired ? "text-destructive font-medium" : "text-primary font-medium"}>
                                {codeExpired ? "Code expired" : "Awaiting verification"}
                              </span>
                            </span>
                            <button
                              type="button"
                              onClick={sendCode}
                              disabled={sending || resendCooldown > 0}
                              className={`font-semibold hover:underline disabled:opacity-50 ${codeExpired ? "text-destructive" : "text-primary"}`}
                            >
                              {sending
                                ? "Sending…"
                                : resendCooldown > 0
                                  ? `Resend code (${resendCooldown}s)`
                                  : codeExpired
                                    ? "Request new code"
                                    : "Resend code"}
                            </button>
                          </div>
                        </div>
                      )}
                      {emailVerified && (
                        <p className="text-xs text-primary font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Email verified successfully
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="dob">Date of Birth <span className="text-destructive">*</span></Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <Input
                          id="dob"
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          max={new Date().toISOString().split("T")[0]}
                          className="pl-9"
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">You must be at least 18 years old to register.</p>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" className="pl-9" required />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="pw">Password <span className="text-destructive">*</span></Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="pw"
                          type={showPw ? "text" : "password"}
                          value={pw}
                          onChange={(e) => setPw(e.target.value)}
                          onBlur={() => setPwTouched(true)}
                          placeholder="Create a password"
                          className={`pl-9 pr-9 ${pwError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                          aria-invalid={!!pwError}
                          required
                        />
                        <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {pwError && <p className="text-xs text-destructive mt-1">{pwError}</p>}
                      <ul className="text-xs space-y-0.5 mt-1">
                        <li className={pw.length >= 8 ? "text-primary" : "text-muted-foreground"}>
                          {pw.length >= 8 ? "✓" : "•"} At least 8 characters
                        </li>
                        <li className={/[A-Z]/.test(pw) ? "text-primary" : "text-muted-foreground"}>
                          {/[A-Z]/.test(pw) ? "✓" : "•"} One uppercase letter
                        </li>
                        <li className={/[0-9]/.test(pw) ? "text-primary" : "text-muted-foreground"}>
                          {/[0-9]/.test(pw) ? "✓" : "•"} One number
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="pw2">Confirm Password <span className="text-destructive">*</span></Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="pw2"
                          type={showPw2 ? "text" : "password"}
                          value={pw2}
                          onChange={(e) => setPw2(e.target.value)}
                          onBlur={() => setPw2Touched(true)}
                          placeholder="Confirm your password"
                          className={`pl-9 pr-9 ${pw2Error ? "border-destructive focus-visible:ring-destructive" : ""}`}
                          aria-invalid={!!pw2Error}
                          required
                        />
                        <button type="button" onClick={() => setShowPw2(!showPw2)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          {showPw2 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {pw2Error && <p className="text-xs text-destructive mt-1">{pw2Error}</p>}
                    </div>

                    <label className="flex items-start gap-2 text-sm text-muted-foreground">
                      <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 accent-primary" />
                      <span>
                        I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and{" "}
                        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                      </span>
                    </label>

                    {!emailVerified && (
                      <p className="text-xs text-muted-foreground text-center">
                        Please verify your email address before creating your account.
                      </p>
                    )}
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!canSubmit}
                      aria-disabled={!canSubmit}
                    >
                      Create Account
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="si-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="si-email" type="email" placeholder="Enter your email" className="pl-9" required />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="si-pw">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="si-pw" type={showPw ? "text" : "password"} placeholder="Enter your password" className="pl-9 pr-9" required />
                        <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full rounded-xl">
                      Sign In
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <button type="button" onClick={() => setMode("signup")} className="text-primary font-semibold hover:underline">
                        Sign up
                      </button>
                    </p>
                  </form>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
