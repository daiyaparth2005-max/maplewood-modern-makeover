import { useState } from "react";
import { X, Coffee, Sandwich, Cake, Salad, UtensilsCrossed, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tag?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description?: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: UtensilsCrossed,
    description: "Start your day right",
    items: [
      { name: "Breakfast Sando", description: "Eggs, white cheddar, herb cream cheese, brioche bun", price: "$6.75" },
      { name: "Veggie Quiche", description: "Mushroom, red pepper, goat cheese", price: "$7.99", tag: "V" },
      { name: "Meat Quiche", description: "Ham and swiss", price: "$7.99" },
      { name: "Avocado Toast", description: "Tomato, red onion, roasted garlic, sourdough", price: "$7.99", tag: "VE" },
      { name: "BLT Biscuit", description: "Two biscuits, bacon, spinach, tomato, blackberry jam", price: "$4.99" },
      { name: "Bagels", description: "Plain or everything bagel, plain or herb cream cheese", price: "$1.90", tag: "VE" },
      { name: "Ham and Cheese Burrito", description: "Eggs, ham, cheddar, flour tortilla, salsa", price: "$9.25" },
      { name: "The Bucko Burrito", description: "Eggs, refried beans, cheddar, onions, red bell peppers", price: "$9", tag: "V" },
      { name: "Potato Burrito", description: "Eggs, potatoes, cheddar, flour tortilla, salsa", price: "$9", tag: "V" },
      { name: "Sweet Potato Burrito", description: "Refried beans, spiced sweet potatoes, cilantro chutney, spinach", price: "$9", tag: "VE" },
      { name: "Smothered Buffalo Chicken Burrito", description: "Buffalo chicken, refried beans, tomatoes, lettuce, cheddar", price: "$9.25" },
      { name: "Everything Bagel Sando", description: "Eggs, cheddar, guacamole, spinach, tomato, herbed cream cheese", price: "$10.25" },
      { name: "Bacon & Egg Panini", description: "Egg, white cheddar, herbed cream cheese, sourdough", price: "$9.25" },
      { name: "Garden Bagel", description: "Romaine, tomato, red onion, shredded carrots, cucumber, hummus", price: "$6.25", tag: "VE" },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    icon: Salad,
    description: "Perfect additions",
    items: [
      { name: "Side Salad", description: "Spring mix, tomato, onion, cheddar", price: "$2.25", tag: "VE" },
      { name: "Mac n Cheese", description: "Add bacon $1", price: "$6.50" },
      { name: "Potato Salad", price: "$2.49" },
      { name: "Hummus and Pita", price: "$4.99" },
      { name: "Soup of the Day", price: "$5.25" },
      { name: "Whole Pickle", price: "$1.39" },
      { name: "Super Slaw", price: "$2.75", tag: "VE" },
      { name: "Bacon (2 slices)", price: "$2.50" },
      { name: "Sweet & Spicy Bacon", description: "2 slices", price: "$3.50" },
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    icon: Sandwich,
    description: "All sandwiches come with chips or choice of side",
    items: [
      { name: "House Salad", description: "Spring mix, cheddar, tomato, onion, avocado", price: "$9.25" },
      { name: "Greek Chopped Salad", description: "Romaine, Kalamata olives, sun-dried tomato, cucumber, feta", price: "$10.95" },
      { name: "Blueberry Salad", description: "Spinach, feta, blueberries, almonds, red onions", price: "$10.95", tag: "V" },
      { name: "Apple Salad", description: "Spring mix, apple, craisins, almond, onion", price: "$10.50" },
      { name: "Chicken Salad Sandwich", description: "Housemade chicken salad, lettuce, tomato, brioche bun", price: "$10.75" },
      { name: "Blair Sandwich", description: "Roast beef, pepper jack, lettuce, horseradish mayo, pickled onions", price: "$10.75" },
      { name: "Toasted Club Sandwich", description: "Roast beef, smoked turkey, bacon, white cheddar, lettuce, tomato", price: "$10.75" },
      { name: "Black Bean Burger", description: "Black bean patty, lettuce, tomato, onion, chipotle mayo", price: "$10.25", tag: "V" },
      { name: "Turkey Panini", description: "Roasted turkey, white cheddar, tomato, onion, sourdough", price: "$9.75" },
      { name: "Grilled Cheese Panini", description: "Cheddar, white cheddar, tomato, herb cream cheese", price: "$8.25" },
      { name: "Grilled PB&J Panini", description: "Peanut butter, grape jelly, cheddar, bacon", price: "$8.50", tag: "V" },
      { name: "Ham & Gouda", description: "Hot ham & gouda, dijon aioli, hoagie", price: "$10.50" },
      { name: "Buffalo Chicken Panini", description: "Buffalo chicken, pepperjack, lettuce, tomato, ranch, pickles", price: "$10.75" },
      { name: "Open Face Sandwich", description: "Roast beef, white cheese sauce, roasted jalapeno garnish", price: "$10.75" },
      { name: "Buffalo Chicken Salad", description: "Buffalo chicken, romaine, tomato, cucumber, onion, ranch", price: "$12" },
      { name: "Tuna Melt Panini", description: "White fish tuna salad, cheddar, tomato, sourdough", price: "$11.75" },
      { name: "Tuna Salad", description: "White fish tuna, shredded carrots, red cabbage, fresh ginger", price: "$11.75" },
    ],
  },
  {
    id: "kids",
    name: "Kids Menu",
    icon: Baby,
    description: "Includes chips and a drink",
    items: [
      { name: "Grilled Cheese", price: "$5.45" },
      { name: "PB&J", price: "$5.45" },
      { name: "Turkey Sandwich", price: "$5.45" },
    ],
  },
  {
    id: "brunch",
    name: "Weekend Brunch",
    icon: Cake,
    description: "Served Sat-Sun 10am-2pm",
    items: [
      { name: "Classic Belgian Waffles", description: "Topped with strawberries and whipped cream", price: "$9.99" },
      { name: "Seasonal Waffle", description: "Call for details", price: "$9.99" },
      { name: "Build Your Own Omelet", description: "3 toppings, served with toast", price: "$12.99" },
      { name: "Biscuits and Gravy", description: "Two biscuits with white pepper gravy", price: "$9.99" },
      { name: "Meat Lovers Burrito", description: "Eggs, ham, sausage, bacon, and cheddar", price: "$11.99" },
      { name: "Hot Honey Biscuits", description: "2 biscuits, pork sausage & bacon, white cheddar, pickles", price: "$9.25" },
      { name: "Breakfast Grilled Cheese Panini", description: "Sweet & spicy bacon, pork sausage, white cheddar, cheddar", price: "$10.25" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: Coffee,
    description: "Expertly crafted beverages",
    items: [
      { name: "Espresso Double", price: "$2.66" },
      { name: "Cortado", price: "$3.10" },
      { name: "Cappuccino", price: "$3.10" },
      { name: "Americano", description: "12oz / 16oz / 20oz", price: "$3.35 - $4.10" },
      { name: "Iced Americano", description: "16oz / 20oz", price: "$3.60 - $4.10" },
      { name: "Latte", description: "12oz / 16oz / 20oz", price: "$4.10 - $5.10" },
      { name: "Iced Latte", description: "16oz / 20oz", price: "$4.60 - $5.10" },
      { name: "Drip Coffee", description: "Light, medium, or dark roast", price: "$2.70 - $3.50" },
      { name: "Cold Brew Coffee", description: "16oz / 20oz", price: "$4.15 - $4.60" },
      { name: "Chai Tea Latte", description: "12oz / 16oz / 20oz", price: "$4.55 - $5.55" },
      { name: "Matcha Latte", description: "12oz / 16oz / 20oz", price: "$4.55 - $5.55" },
      { name: "Sundust Latte", description: "Tumeric-based", price: "$4.55 - $5.55" },
      { name: "Iced Tea", description: "16oz / 20oz", price: "$2.65 - $3.15" },
      { name: "Lemonade", description: "16oz / 20oz", price: "$3.15 - $3.50" },
      { name: "Mocha Frappe", description: "16oz", price: "$6.60" },
      { name: "Caramel Frappe", description: "16oz", price: "$6.60" },
      { name: "Banana Blueberry Smoothie", description: "16oz", price: "$6.85" },
      { name: "Banana Strawberry Smoothie", description: "16oz", price: "$6.85" },
      { name: "Banana Mixed Berry Smoothie", description: "16oz", price: "$6.85" },
    ],
  },
];

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-espresso/95 backdrop-blur-sm animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="h-full flex flex-col lg:flex-row">
        {/* Sidebar - Categories */}
        <div className="lg:w-72 bg-primary/50 backdrop-blur-md p-6 lg:p-8">
          <div className="mb-8">
            <h2 className="font-display text-3xl lg:text-4xl text-primary-foreground font-semibold mb-2">
              Our Menu
            </h2>
            <p className="text-primary-foreground/70 text-sm">
              Made with love, served with care
            </p>
          </div>

          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                }`}
              >
                <category.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6 lg:p-12">
              {menuData
                .filter((cat) => cat.id === activeCategory)
                .map((category) => (
                  <div key={category.id} className="animate-fade-up">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-3xl lg:text-4xl text-primary-foreground font-semibold">
                          {category.name}
                        </h3>
                        {category.description && (
                          <p className="text-primary-foreground/60 text-sm mt-1">
                            {category.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {category.items.map((item, index) => (
                        <div
                          key={item.name}
                          className="group bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h4 className="font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                              {item.name}
                            </h4>
                            {item.tag && (
                              <span className="px-2 py-0.5 bg-sage/20 text-sage text-xs rounded-full flex-shrink-0">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-primary-foreground/60 text-sm mb-3 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                          <p className="text-accent font-semibold">{item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Order CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-espresso via-espresso/90 to-transparent p-6 pointer-events-none">
        <div className="flex justify-center pointer-events-auto">
          <Button variant="hero" size="lg" className="shadow-glow">
            Order Online
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
