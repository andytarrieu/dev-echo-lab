import NavbarNew from "@/components/NavbarNew";
import VaultHeroNew from "@/components/VaultHeroNew";
import ChaosSection from "@/components/ChaosSection";
import VaultSolutionSection from "@/components/VaultSolutionSection";
import UseCasesScenariosSection from "@/components/UseCasesScenariosSection";
import WhyAureaSection from "@/components/WhyAureaSection";
import ProofSection from "@/components/ProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import VaultFAQ from "@/components/VaultFAQ";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        {/* 1. Hero - Le Cerveau Analytique */}
        <VaultHeroNew />
        
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
        
        {/* 7. Témoignages clients */}
        <TestimonialsSection />
        
        {/* 8. Tarification */}
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
