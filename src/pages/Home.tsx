import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Features from "@/components/Features";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import FearsSection from "@/components/FearsSection";
import { PremiumContact } from "@/components/PremiumContact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div id="home">
          <Hero />
        </div>
        <ClientLogos />
        <div id="services">
          <Services />
        </div>
        <div id="features">
          <Features />
          <WhoWeHelp />
        </div>
        <FearsSection />
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <PremiumContact />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
