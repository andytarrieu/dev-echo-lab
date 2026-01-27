import NavbarNew from "@/components/NavbarNew";
import AuditHero from "@/components/AuditHero";
import LogoSlider from "@/components/LogoSlider";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        <AuditHero />
        <LogoSlider />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AuditExpress;
