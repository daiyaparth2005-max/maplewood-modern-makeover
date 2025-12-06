import { Clock, MapPin, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday - Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday - Sunday", time: "7:30 AM - 5:00 PM" },
];

const HoursSection = () => {
  return (
    <section id="hours" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-primary-foreground rounded-full" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hours */}
          <div>
            <span className="inline-flex items-center gap-2 text-accent font-medium tracking-widest uppercase text-sm mb-4">
              <Clock className="w-4 h-4" />
              Hours of Operation
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8">
              Stop By
              <span className="text-accent"> Anytime</span>
            </h2>

            <div className="space-y-4 mb-8">
              {hours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex items-center justify-between py-4 border-b border-primary-foreground/20"
                >
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-accent font-semibold">{schedule.time}</span>
                </div>
              ))}
            </div>

            <p className="text-primary-foreground/70 text-sm mb-6">
              Holiday hours may vary. Follow us on social media for updates!
            </p>
          </div>

          {/* Location */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">Find Us</h3>
                <p className="text-primary-foreground/70 text-sm">In the heart of Maplewood</p>
              </div>
            </div>

            <address className="not-italic mb-6">
              <p className="text-xl font-medium mb-1">7298 Manchester Road</p>
              <p className="text-primary-foreground/80">Maplewood, MO 63143</p>
            </address>

            <div className="flex items-center gap-2 mb-8 text-primary-foreground/80">
              <Phone className="w-4 h-4 text-accent" />
              <span>(314) 555-DELI</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                className="flex-1"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
