import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import acesoLogo from "@/assets/aceso-logo.png";

const servicesMenu = {
  patients: [
    { label: "Doctor Consultations", href: "#services" },
    { label: "Medicine Delivery", href: "#services" },
    { label: "Laboratory Services", href: "#services" },
    { label: "Home Nursing Care", href: "#services" },
  ],
  providers: [
    { label: "Medical Billing", href: "#services" },
    { label: "Remote Admin Support", href: "#services" },
    { label: "Credentialing Services", href: "#services" },
  ],
  hospitals: [
    { label: "Hospital Management Systems", href: "#services" },
  ],
};

const navLinks = [
  { label: "Care Packages", href: "#packages" },
  { label: "About Us", href: "#cta" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0">
      <div className="container flex items-center justify-between h-[72px]">
        <a href="/" className="flex items-center">
          <img src={acesoLogo} alt="Aceso Health Solutions" className="h-28 w-auto object-cover object-top" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-all duration-200"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-lg py-2 z-50"
                >
                  <a
                    href="#services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-muted/60 transition-colors"
                  >
                    View All Our Services
                  </a>
                  <div className="border-t border-border mx-3 my-1" />
                  <div className="px-4 pt-2 pb-1">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">For Patients</span>
                  </div>
                  {servicesMenu.patients.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="px-4 pt-3 pb-1">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">For Providers</span>
                  </div>
                  {servicesMenu.providers.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="px-4 pt-3 pb-1">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">Hospital Solutions</span>
                  </div>
                  {servicesMenu.hospitals.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <Button variant="outline" size="sm" className="ml-2 rounded-full px-5" asChild>
            <a href="/sign-in">Sign In</a>
          </Button>
          <Button size="sm" className="ml-2 rounded-full px-6">Get Started</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/60 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted/60 transition-all"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden pl-4"
                  >
                    <a href="#services" onClick={() => setOpen(false)} className="block text-sm text-primary py-2 px-3">
                      View All Our Services
                    </a>
                    <span className="block text-xs font-bold text-foreground uppercase tracking-wider px-3 pt-2 pb-1">For Patients</span>
                    {servicesMenu.patients.map((item) => (
                      <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-1.5 px-3">
                        {item.label}
                      </a>
                    ))}
                    <span className="block text-xs font-bold text-foreground uppercase tracking-wider px-3 pt-2 pb-1">For Providers</span>
                    {servicesMenu.providers.map((item) => (
                      <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-1.5 px-3">
                        {item.label}
                      </a>
                    ))}
                    <span className="block text-xs font-bold text-foreground uppercase tracking-wider px-3 pt-2 pb-1">Hospital Solutions</span>
                    {servicesMenu.hospitals.map((item) => (
                      <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-1.5 px-3">
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted/60 transition-all"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="outline" size="sm" className="w-fit mt-2 rounded-full px-5" asChild>
                <a href="/sign-in">Sign In</a>
              </Button>
              <Button size="sm" className="w-fit mt-1 rounded-full px-6">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
