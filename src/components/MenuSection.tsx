import { useState } from "react";
import { Coffee, Sandwich, Cake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuModal from "@/components/MenuModal";
import latteArt from "@/assets/latte-art.jpg";
import sandwich from "@/assets/sandwich.jpg";
import pastries from "@/assets/pastries.jpg";

const menuCategories = [
  {
    icon: Coffee,
    title: "Coffee & Drinks",
    description: "Expertly crafted espresso drinks, pour-overs, teas, and refreshing beverages.",
    image: latteArt,
    items: ["Lattes", "Cappuccinos", "Cold Brew", "Fresh Juices"],
  },
  {
    icon: Sandwich,
    title: "Deli Sandwiches",
    description: "Artisan sandwiches made fresh daily with premium meats and local produce.",
    image: sandwich,
    items: ["Turkey Club", "BLT Deluxe", "Veggie Wrap", "Grilled Panini"],
  },
  {
    icon: Cake,
    title: "Pastries & Treats",
    description: "Freshly baked goods from local bakeries, perfect with your morning coffee.",
    image: pastries,
    items: ["Muffins", "Croissants", "Scones", "Cookies"],
  },
];

const MenuSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section id="menu" className="section-padding bg-secondary/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container-custom relative">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Menu
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-6">
              Crafted with Care,
              <span className="text-accent"> Served with Love</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From morning espresso to midday sandwiches, every item on our menu 
              is thoughtfully prepared using quality ingredients.
            </p>
          </div>

          {/* Menu Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {menuCategories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover-lift"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  
                  {/* Items Preview */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="default" 
              size="lg" 
              className="group"
              onClick={() => setIsMenuOpen(true)}
            >
              View Full Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default MenuSection;
