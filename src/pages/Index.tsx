import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import HoursSection from "@/components/HoursSection";
import EventsSection from "@/components/EventsSection";
import GiftCardsSection from "@/components/GiftCardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <HoursSection />
      <EventsSection />
      <GiftCardsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
