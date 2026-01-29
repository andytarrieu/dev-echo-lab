import NavbarNew from "@/components/NavbarNew";
import VaultHero from "@/components/VaultHero";
import FeaturesBentoGrid from "@/components/FeaturesBentoGrid";
import LogoSlider from "@/components/LogoSlider";
import VaultFAQ from "@/components/VaultFAQ";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        {/* 1. Hero */}
        <VaultHero />
        
        {/* 2. Trust indicators */}
        <LogoSlider />
        
        {/* 3. Features Bento Grid */}
        <FeaturesBentoGrid />
        
        {/* 4. FAQ */}
        <VaultFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AuditExpress;
