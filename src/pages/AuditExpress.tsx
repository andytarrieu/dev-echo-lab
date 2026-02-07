import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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
import VaultPowerFeaturesSection from "@/components/VaultPowerFeaturesSection";
import VaultAdvancedFeaturesSection from "@/components/VaultAdvancedFeaturesSection";
import Footer from "@/components/Footer";
import PreAccessModal from "@/components/PreAccessModal";

const AuditExpress = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already granted access
    const hasAccess = localStorage.getItem("preAccessGranted") === "true";
    setShowModal(!hasAccess);
    setIsLoading(false);
  }, []);

  const handleAccessGranted = () => {
    setShowModal(false);
  };

  // Show nothing while checking localStorage to avoid flash
  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {showModal && <PreAccessModal onAccessGranted={handleAccessGranted} />}
      </AnimatePresence>
      
      {!showModal && (
        <>
          <NavbarNew />
          <main>
            {/* 1. Hero - Ce que vous ne voyez pas peut vous ruiner */}
            <VaultHeroNew />
            
            {/* Trust indicators */}
            <LogoSlider />
            
            {/* 2. L'Arme Fatale - Dialogue & Réaction */}
            <WeaponSection />
            
            {/* 3. Sentinelle - L'Alerte qui sauve */}
            <SentinelSection />
            
            {/* 4. Les 5 Super-Pouvoirs */}
            <VaultPowerFeaturesSection />
            
            {/* 5. Fonctionnalités Avancées (Podcast, Mind Map, Rapports, Tableaux) */}
            <VaultAdvancedFeaturesSection />
            
            {/* 4. Indispensable pour qui - La Chaîne de Confiance */}
            <AudienceSection />
            
            {/* 5. La Preuve par la Source */}
            <ProofSourceSection />
            
            {/* 6. Closing - Le Coût de l'Inaction */}
            <ClosingSection />
            
            {/* 7. Comment ça marche */}
            <HowItWorksSection />
            
            {/* FAQ */}
            <VaultFAQ />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default AuditExpress;
