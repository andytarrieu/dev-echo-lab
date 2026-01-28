import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistBadge from "./WaitlistBadge";

const VaultHero = () => {
  return (
    <section className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Waitlist Badge */}
        <div className="flex justify-center mb-6">
          <WaitlistBadge />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AURÉA Vault</span>
            <span className="text-sm text-muted-foreground">Le nouveau standard de l'audit immobilier</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Vous allez enfin tout comprendre à vos{" "}
            <span className="text-primary">dossiers de vente</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Votre coffre-fort d'analyse et de vérification, basé exclusivement sur les documents officiels 
            auxquels vous faites confiance. Optimisé par la puissance de{" "}
            <span className="font-semibold text-foreground">Gemini 1.5 Pro</span>.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button size="lg" className="gap-2 text-lg px-10 py-7" asChild>
            <Link to="/waitlist">
              Essayer Aurea Vault
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Value Props */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Sécurisez vos sources</h4>
              <p className="text-sm text-muted-foreground">
                Vos documents cryptés, jamais partagés ni utilisés pour l'entraînement IA.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Insights Factuels</h4>
              <p className="text-sm text-muted-foreground">
                Plus besoin de feuilleter 300 pages : l'essentiel remonte automatiquement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Eye className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Transparence Totale</h4>
              <p className="text-sm text-muted-foreground">
                Chaque réponse cite l'extrait exact de vos PDF. Zéro hallucination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultHero;
