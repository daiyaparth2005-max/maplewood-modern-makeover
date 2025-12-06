import { Heart, Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ORDER_ONLINE_URL = "https://www.toasttab.com/maplewooddeli&coffeehouse";
const GIFT_CARDS_URL = "https://www.toasttab.com/maplewooddeli&coffeehouse/giftcards";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Events", href: "#events" },
    { label: "Gift Cards", href: "#gift-cards" },
  ],
  connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Order Online", href: ORDER_ONLINE_URL, external: true },
    { label: "Buy Gift Card", href: GIFT_CARDS_URL, external: true },
  ],
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-espresso text-primary-foreground pt-20 pb-8">
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="bg-primary/50 rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Join Our Community
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for updates on events, specials, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-2xl font-bold">M</span>
              </div>
              <div>
                <span className="font-display text-2xl font-semibold block">Maplewood</span>
                <span className="text-primary-foreground/70 text-sm tracking-widest uppercase">Deli & Coffeehouse</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Your neighborhood deli & coffeehouse in Maplewood, MO. 
              Serving food and drinks made with love since day one.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@maplewooddeli.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Maplewood Deli & Coffeehouse. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-primary-foreground/50 text-sm">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Maplewood, MO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
