import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import acesoLogo from "@/assets/aceso-logo.png";

const Footer = () => (
  <footer id="footer" className="bg-foreground text-primary-foreground/60 py-10 md:py-14">
    <div className="container px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-14">
        <div className="col-span-2 lg:col-span-1">
          <img src={acesoLogo} alt="Aceso Health Solutions" className="h-14 w-auto object-cover object-top mb-3 md:mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed mb-4">
            End-to-end healthcare management platform connecting patients with quality healthcare services across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-foreground/10 transition-colors duration-200 text-sm font-medium bg-black hover:bg-black/80 text-white whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#4285F4"/><path d="M14.499 12.707l2.302 2.302-10.937 6.333 8.635-8.635z" fill="#EA4335"/><path d="M17.698 9.508l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492z" fill="#FBBC04"/><path d="M5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" fill="#34A853"/></svg>
              Google Play
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-foreground/10 transition-colors duration-200 text-sm font-medium bg-black hover:bg-black/80 text-white whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 md:mb-5 text-xs uppercase tracking-[0.2em]">Quick Links</h4>
          <ul className="space-y-2.5 md:space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">About Us</a></li>
            <li><a href="#services" className="hover:text-primary-foreground transition-colors duration-200">Services</a></li>
            <li><a href="#packages" className="hover:text-primary-foreground transition-colors duration-200">Care Packages</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 md:mb-5 text-xs uppercase tracking-[0.2em]">Legal</h4>
          <ul className="space-y-2.5 md:space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 md:mb-5 text-xs uppercase tracking-[0.2em]">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" strokeWidth={1.5} /> info@acesohealth.co.ke</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" strokeWidth={1.5} /> +254 758 544 241</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} /> Mombasa, Kenya</li>
          </ul>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/10 transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/10 transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 md:pt-8 text-center text-sm">
        © {new Date().getFullYear()} Aceso Health Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
