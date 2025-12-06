import { Heart, Users, Dog } from "lucide-react";
import foodSpread from "@/assets/food-spread.jpg";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish crafted with care using fresh, quality ingredients.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "A welcoming space for neighbors to gather and connect.",
  },
  {
    icon: Dog,
    title: "Pet Friendly",
    description: "Your furry friends are always welcome here!",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={foodSpread}
                alt="Delicious food spread at Maplewood Deli"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated max-w-xs">
              <p className="font-display text-2xl text-foreground italic mb-2">
                "Love for ALL humans and pets"
              </p>
              <p className="text-muted-foreground text-sm">— Our Vision</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-6 leading-tight">
              More Than a Deli,
              <span className="block text-accent">A Community Hub</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nestled in the heart of Maplewood, Missouri, we're proud to be your neighborhood's 
              favorite spot for artisan coffee, fresh sandwiches, and warm hospitality. 
              Whether you're grabbing your morning latte or enjoying lunch with friends, 
              you'll always find a welcoming smile.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
