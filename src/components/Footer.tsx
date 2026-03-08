import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import acesoLogo from "@/assets/aceso-logo.png";

const Footer = () => (
  <footer id="footer" className="bg-foreground text-primary-foreground/60 py-10 md:py-14">
    <div className="container px-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-14">
        <div className="col-span-2 lg:col-span-1">
          <img src={acesoLogo} alt="Aceso Health Solutions" className="h-14 w-auto object-cover object-top mb-3 md:mb-4 brightness-0 invert" />
          <p className="text-xs md:text-sm leading-relaxed mb-4">
            End-to-end healthcare management platform connecting patients with quality healthcare services across Kenya.
          </p>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/10 transition-colors duration-200 text-xs md:text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"
          >
            <Download className="w-3.5 md:w-4 h-3.5 md:h-4" />
            Get it on Google Play
          </a>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/10 transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/10 transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 md:mb-5 text-[10px] md:text-xs uppercase tracking-[0.2em]">Quick Links</h4>
          <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm">
            <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">About Us</a></li>
            <li><a href="#services" className="hover:text-primary-foreground transition-colors duration-200">Services</a></li>
            <li><a href="#packages" className="hover:text-primary-foreground transition-colors duration-200">Care Packages</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 md:mb-5 text-[10px] md:text-xs uppercase tracking-[0.2em]">Legal</h4>
          <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm">
            <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors duration-200">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 md:mb-5 text-[10px] md:text-xs uppercase tracking-[0.2em]">Contact Us</h4>
          <ul className="space-y-3 text-xs md:text-sm">
            <li className="flex items-center gap-2.5 md:gap-3"><Mail className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary" strokeWidth={1.5} /> info@acesohealth.co.ke</li>
            <li className="flex items-center gap-2.5 md:gap-3"><Phone className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary" strokeWidth={1.5} /> +254 700 000 000</li>
            <li className="flex items-center gap-2.5 md:gap-3"><MapPin className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary" strokeWidth={1.5} /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 md:pt-8 text-center text-xs md:text-sm">
        © {new Date().getFullYear()} Aceso Health Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
