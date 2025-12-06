import { Gift, Heart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
const GiftCardsSection = () => {
  return <section id="gift-cards" className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-primary-foreground rounded-full" />
      </div>
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Perfect Gift</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Share the Love with a<br />
              <span className="text-accent">Gift Card</span>
            </h2>
            
            <p className="text-lg mb-8 max-w-lg text-secondary-foreground">
              Give the gift of delicious food and amazing coffee. Our digital gift cards 
              are perfect for birthdays, holidays, or just because.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="gap-2" onClick={() => window.open("https://www.toasttab.com/maplewooddeli&coffeehouse/giftcards", "_blank")}>
                <Gift className="w-5 h-5" />
                Buy Gift Card
              </Button>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Main Gift Card Visual */}
              <div className="w-80 h-48 bg-gradient-to-br from-espresso to-primary rounded-2xl shadow-elevated transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-primary-foreground/70 text-xs tracking-wider uppercase">Gift Card</span>
                      <h3 className="font-display text-2xl text-primary-foreground font-semibold">Maplewood</h3>
                    </div>
                    <Coffee className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-primary-foreground/50 text-sm">Deli & Coffeehouse</span>
                    <div className="flex gap-1">
                      <div className="w-8 h-8 rounded-full bg-accent/80" />
                      <div className="w-8 h-8 rounded-full bg-primary-foreground/30 -ml-3" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float">
                <Heart className="w-8 h-8 text-accent-foreground fill-accent-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-sage rounded-full flex items-center justify-center shadow-lg animate-float" style={{
              animationDelay: "0.5s"
            }}>
                <Gift className="w-6 h-6 text-sage-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GiftCardsSection;