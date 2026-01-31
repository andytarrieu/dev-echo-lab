import NavbarNew from "@/components/NavbarNew";
import VaultHero from "@/components/VaultHero";
import LogoSlider from "@/components/LogoSlider";
import ChaosSection from "@/components/ChaosSection";
import VaultSolutionSection from "@/components/VaultSolutionSection";
import UseCasesScenariosSection from "@/components/UseCasesScenariosSection";
import WhyAureaSection from "@/components/WhyAureaSection";
import ProofSection from "@/components/ProofSection";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import VaultFAQ from "@/components/VaultFAQ";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        {/* 1. Hero - Le Coffre-Fort Intelligent */}
        <VaultHero />
        
        {/* Trust indicators */}
        <LogoSlider />
        
        {/* 2. Le problème - Chaos de la donnée immobilière */}
        <ChaosSection />
        
        {/* 3. La solution - Aurea Vault */}
        <VaultSolutionSection />
        
        {/* 4. Cas pratiques - L'intelligence en action */}
        <UseCasesScenariosSection />
        
        {/* 5. Pourquoi Aurea - Avantages uniques */}
        <WhyAureaSection />
        
        {/* 6. Preuve - Citations et transparence */}
        <ProofSection />
        
        {/* 7. Tarification */}
        <PricingSection />
        
        {/* 8. Sécurité & Éthique */}
        <SecuritySection />
        
        {/* 9. FAQ */}
        <VaultFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AuditExpress;
