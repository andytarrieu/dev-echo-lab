import NavbarNew from "@/components/NavbarNew";
import VaultHero from "@/components/VaultHero";
import FeaturesBentoGrid from "@/components/FeaturesBentoGrid";
import ParticulierDocumentsSection from "@/components/ParticulierDocumentsSection";
import PillarTabs from "@/components/PillarTabs";
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
        {/* 1. Hero with new storytelling title */}
        <VaultHero />
        
        {/* Trust indicators - moved to top */}
        <LogoSlider />
        
        {/* 2. Bento Grid - All features visible at a glance */}
        <FeaturesBentoGrid />
        
        {/* 3. Detailed section for Particuliers */}
        <ParticulierDocumentsSection />
        
        {/* 4. Pillar Tabs - Navigate between sections */}
        <PillarTabs />
        
        {/* Professional deep-dive (complex docs) */}
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
