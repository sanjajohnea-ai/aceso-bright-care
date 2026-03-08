import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import acesoLogo from "@/assets/aceso-logo.png";

const Footer = () => (
  <footer id="footer" className="bg-foreground text-primary-foreground/60">
    {/* Top section: Logo + tagline left, link columns right */}
    <div className="container px-5 py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left: Logo + tagline */}
        <div className="lg:w-2/5">
          <img src={acesoLogo} alt="Aceso Health Solutions" className="h-14 w-auto object-cover object-top mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed max-w-sm">
            End-to-end healthcare management platform connecting patients with quality healthcare services across Kenya.
          </p>
        </div>

        {/* Right: Link columns */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-[10px] md:text-xs uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors duration-200">Services</a></li>
              <li><a href="#packages" className="hover:text-primary-foreground transition-colors duration-200">Care Packages</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-[10px] md:text-xs uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-[10px] md:text-xs uppercase tracking-[0.2em]">Contact Us</h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-primary" strokeWidth={1.5} /> info@acesohealth.co.ke</li>
              <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-primary" strokeWidth={1.5} /> +254 700 000 000</li>
              <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} /> Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar: Store badges + social + copyright */}
    <div className="border-t border-primary-foreground/10">
      <div className="container px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Store badges */}
        <div className="flex items-center gap-3">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/images/google-play-badge.svg" alt="Get it on Google Play" className="h-10" />
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/images/app-store-badge.svg" alt="Download on the App Store" className="h-10" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-center">
          © {new Date().getFullYear()} Aceso Health Solutions. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/10 transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/10 transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
