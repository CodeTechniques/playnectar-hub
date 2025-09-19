import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GamingZone from "@/components/GamingZone";
import FoodSection from "@/components/FoodSection";
import Celebrations from "@/components/Celebrations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <GamingZone />
        <FoodSection />
        <Celebrations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
