import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Stethoscope, Building2, FlaskConical, Mail, Phone, Lock, Eye, EyeOff, UserCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("signup");
  const [role, setRole] = useState<Role>("patient");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      setMode(detail.mode || "signup");
      setOpen(true);
    };
    window.addEventListener("open-auth-modal", handler);
    return () => window.removeEventListener("open-auth-modal", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);
  const roleLabel = roles.find((r) => r.id === role)?.label || "Patient";

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

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary mb-5">
              Welcome to Aceso Health Solutions
            </h2>

            {/* Tabs */}
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

            {mode === "signup" ? (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
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
                      <Input id="fname" placeholder="First name" className="pl-9" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lname">Last Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="lname" placeholder="Last name" className="pl-9" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="Enter your email" className="pl-9" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input id="dob" type="date" className="pl-9" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="phone" type="tel" placeholder="Enter your phone number" className="pl-9" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="pw">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="pw" type={showPw ? "text" : "password"} placeholder="Create a password" className="pl-9 pr-9" required />
                    <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="pw2">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="pw2" type={showPw2 ? "text" : "password"} placeholder="Confirm your password" className="pl-9 pr-9" required />
                    <button type="button" onClick={() => setShowPw2(!showPw2)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {showPw2 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1 accent-primary" />
                  <span>
                    I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and{" "}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  </span>
                </label>

                <Button type="submit" variant="hero" size="lg" className="w-full rounded-xl">
                  Sign Up as {roleLabel}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
