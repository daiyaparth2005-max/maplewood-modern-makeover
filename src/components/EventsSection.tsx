import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Doggie Drag Show",
    date: "Coming Soon",
    description: "Our famous annual event celebrating our furry friends in style! Join us for a paw-some time.",
    tag: "Annual Event",
  },
  {
    title: "Live Music Fridays",
    date: "Every Friday",
    description: "Enjoy local musicians while sipping your favorite coffee. Performances start at 6 PM.",
    tag: "Weekly",
  },
  {
    title: "Community Coffee Hour",
    date: "Saturdays 9-10 AM",
    description: "Meet your neighbors over complimentary coffee samples. Everyone is welcome!",
    tag: "Free Event",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-accent font-medium tracking-widest uppercase text-sm mb-4">
            <Calendar className="w-4 h-4" />
            What's Happening
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-6">
            Upcoming
            <span className="text-accent"> Events</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join us for special events that bring our community together. 
            There's always something exciting happening at Maplewood Deli!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover-lift border border-border/50"
            >
              {/* Tag */}
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium mb-4">
                {event.tag}
              </span>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground font-semibold mb-2">
                {event.title}
              </h3>
              <p className="text-accent font-medium text-sm mb-4">{event.date}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="warm" size="lg" className="group">
            View All Events
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
