import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ProblemSection from "@/components/ProblemSection";
import AgentsTabs from "@/components/AgentsTabs";
import ComparisonSection from "@/components/ComparisonSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import Features from "@/components/Features";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import FearsSection from "@/components/FearsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
const Home = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div id="home">
          <Hero />
        </div>
        <ClientLogos />
        
        <div id="services">
          <Services />
        </div>
        <AgentsTabs />
        <ComparisonSection />
        <TargetAudienceSection />
        <div id="features">
          <Features />
          <WhoWeHelp />
        </div>
        <FearsSection />
        <GuaranteeSection />
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </main>
    </div>;
};
export default Home;