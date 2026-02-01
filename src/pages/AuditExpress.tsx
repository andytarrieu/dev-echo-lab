import NavbarNew from "@/components/NavbarNew";
import VaultHeroNew from "@/components/VaultHeroNew";
import LogoSlider from "@/components/LogoSlider";
import HowItWorksSection from "@/components/HowItWorksSection";
import WeaponSection from "@/components/WeaponSection";
import SentinelSection from "@/components/SentinelSection";
import AudienceSection from "@/components/AudienceSection";
import ProofSourceSection from "@/components/ProofSourceSection";
import ClosingSection from "@/components/ClosingSection";
import VaultFAQ from "@/components/VaultFAQ";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        {/* 1. Hero - Ce que vous ne voyez pas peut vous ruiner */}
        <VaultHeroNew />
        
        {/* Trust indicators */}
        <LogoSlider />
        
        {/* 2. Comment ça marche */}
        <HowItWorksSection />
        
        {/* 3. L'Arme Fatale - Dialogue & Réaction */}
        <WeaponSection />
        
        {/* 3. Sentinelle - L'Alerte qui sauve */}
        <SentinelSection />
        
        {/* 4. Indispensable pour qui - La Chaîne de Confiance */}
        <AudienceSection />
        
        {/* 5. La Preuve par la Source */}
        <ProofSourceSection />
        
        {/* 6. Closing - Le Coût de l'Inaction */}
        <ClosingSection />
        
        {/* FAQ */}
        <VaultFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AuditExpress;
