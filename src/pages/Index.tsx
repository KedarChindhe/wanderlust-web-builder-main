import Hero from "@/components/travel/Hero";
import Navbar from "@/components/travel/Navbar";
import Destinations from "@/components/travel/Destinations";
import Packages from "@/components/travel/Packages";
import Offers from "@/components/travel/Offers";
import LeadForm from "@/components/travel/LeadForm";
import Testimonials from "@/components/travel/Testimonials";
import Contact from "@/components/travel/Contact";
import Footer from "@/components/travel/Footer";
import StickyMobileCTA from "@/components/travel/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Offers />
      <LeadForm />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
