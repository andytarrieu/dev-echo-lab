import NavbarNew from "@/components/NavbarNew";
import VaultHero from "@/components/VaultHero";
import FeaturesListSection from "@/components/FeaturesListSection";
import PillarsOverview from "@/components/PillarsOverview";
import LogoSlider from "@/components/LogoSlider";
import ProfessionalSection from "@/components/ProfessionalSection";
import WhyAureaSection from "@/components/WhyAureaSection";
import ProofSection from "@/components/ProofSection";
import SecuritySection from "@/components/SecuritySection";
import VaultFAQ from "@/components/VaultFAQ";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        {/* 1. Hero - Titre + Sous-titre + CTA */}
        <VaultHero />
        
        {/* 2. Features Liste - Toutes les fonctionnalités */}
        <FeaturesListSection />
        
        {/* 3. Piliers - Vue d'ensemble des 3 piliers + Lab */}
        <PillarsOverview />
        
        {/* Trust indicators */}
        <LogoSlider />
        
        {/* Professional deep-dive */}
        <ProfessionalSection />
        
        {/* Why choose Aurea */}
        <WhyAureaSection />
        
        {/* Social proof */}
        <ProofSection />
        
        {/* Security & Trust */}
        <SecuritySection />
        
        {/* FAQ */}
        <VaultFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AuditExpress;
