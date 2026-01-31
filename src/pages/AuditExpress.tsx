import NavbarNew from "@/components/NavbarNew";
import VaultHeroMinimal from "@/components/VaultHeroMinimal";
import ValuePillars from "@/components/ValuePillars";
import GroundingSection from "@/components/GroundingSection";
import UseCasesMinimal from "@/components/UseCasesMinimal";
import AudioFeature from "@/components/AudioFeature";
import PrivacySection from "@/components/PrivacySection";
import FAQMinimal from "@/components/FAQMinimal";
import CTAMinimal from "@/components/CTAMinimal";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        {/* 1. Hero - Direct & Minimal */}
        <VaultHeroMinimal />
        
        {/* 2. Value Pillars - 3 icônes simples */}
        <ValuePillars />
        
        {/* 3. Grounding - L'IA ancrée sur vos sources */}
        <GroundingSection />
        
        {/* 4. Use Cases - Particuliers & Pros unifiés */}
        <UseCasesMinimal />
        
        {/* 5. Audio Feature - Le Wow Effect */}
        <AudioFeature />
        
        {/* 6. Privacy - Sécurité */}
        <PrivacySection />
        
        {/* 7. FAQ - Minimal */}
        <FAQMinimal />
        
        {/* 8. CTA Final */}
        <CTAMinimal />
      </main>
      <Footer />
    </div>
  );
};

export default AuditExpress;
