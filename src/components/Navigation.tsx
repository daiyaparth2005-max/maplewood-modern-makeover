import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import maplewoodLogo from "@/assets/maplewood-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Hours", href: "#hours" },
  { label: "Events", href: "#events" },
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "Contact", href: "#contact" },
];

const ORDER_ONLINE_URL = "https://www.toasttab.com/maplewooddeli&coffeehouse";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src={maplewoodLogo} 
            alt="Maplewood Deli & Coffeehouse" 
            className="w-14 h-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative font-medium tracking-wide transition-colors duration-300 hover:text-accent
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                after:bg-accent after:transition-all after:duration-300 hover:after:w-full
                ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => window.open(ORDER_ONLINE_URL, "_blank")}
          >
            Order Online
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground font-medium py-2 border-b border-border/50 transition-colors hover:text-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="hero" 
            className="mt-4"
            onClick={() => window.open(ORDER_ONLINE_URL, "_blank")}
          >
            Order Online
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
