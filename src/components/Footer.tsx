import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="footer" className="bg-foreground text-primary-foreground/70 py-16">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-display font-extrabold text-xl text-primary-foreground mb-4">
            <span className="text-primary">Aceso</span> Health
          </h3>
          <p className="text-sm leading-relaxed">
            End-to-end healthcare management platform connecting patients with quality healthcare services across Kenya.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
            <li><a href="#packages" className="hover:text-primary-foreground transition-colors">Care Packages</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@acesohealth.co.ke</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +254 700 000 000</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm">
        © 2025 Aceso Health Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
