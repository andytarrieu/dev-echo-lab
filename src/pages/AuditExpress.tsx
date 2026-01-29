import NavbarNew from "@/components/NavbarNew";
import VaultHero from "@/components/VaultHero";
import LogoSlider from "@/components/LogoSlider";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyAureaSection from "@/components/WhyAureaSection";
import BuyerFearsSection from "@/components/BuyerFearsSection";
import UseCasesSection from "@/components/UseCasesSection";
import ProofSection from "@/components/ProofSection";
import SecuritySection from "@/components/SecuritySection";
import VaultFAQ from "@/components/VaultFAQ";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        <VaultHero />
        <LogoSlider />
        <BuyerFearsSection />
        <WhatWeDoSection />
        <WhyAureaSection />
        <UseCasesSection />
        <ProofSection />
        <SecuritySection />
        <VaultFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AuditExpress;
