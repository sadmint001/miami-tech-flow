
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutFounder from "@/components/AboutFounder";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <AboutFounder />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Index;
