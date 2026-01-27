import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Prêt à sécuriser votre achat ?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Rejoignez les +500 acheteurs qui ont déjà utilisé Léon pour prendre une décision éclairée.
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="gap-2 text-base px-8 py-6"
          asChild
        >
          <Link to="/waitlist">
            Lancer mon premier audit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
