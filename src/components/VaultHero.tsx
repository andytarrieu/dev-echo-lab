import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistBadge from "./WaitlistBadge";

const VaultHero = () => {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Waitlist Badge */}
        <div className="flex justify-center mb-6">
          <WaitlistBadge />
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Dossiers Immobiliers :{" "}
            <span className="text-primary">Comprenez enfin tout ce que vous signez.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            L'audit complet qui sécurise votre achat, de la technique au juridique. 
            Scannez 600+ pages et détectez les pièges cachés en 15 minutes.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="gap-2 text-lg px-10 py-7" asChild>
              <Link to="/waitlist">
                Essayer Aurea Vault
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">14,500+</span> inscrits sur la liste d'attente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultHero;
