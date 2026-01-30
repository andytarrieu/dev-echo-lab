import NavbarNew from "@/components/NavbarNew";
import Footer from "@/components/Footer";
import PricingSection from "@/components/ui/pricing-section";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
