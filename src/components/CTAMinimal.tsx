import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTAMinimal = () => {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Prêt à simplifier vos transactions ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Rejoignez les milliers de professionnels et particuliers qui utilisent déjà Vault.
          </p>
          <Button size="lg" className="gap-2 text-base px-8 py-6 shadow-lg shadow-primary/20" asChild>
            <Link to="/waitlist">
              Essayer Vault gratuitement
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAMinimal;
