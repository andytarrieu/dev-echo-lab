import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Shield, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const VaultHero = () => {
  return (
    <section className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Upload Zone - Heart of the page */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <div className="border-2 border-dashed border-primary/30 rounded-2xl p-12 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Déposez vos documents dans le Vault
                </h3>
                <p className="text-muted-foreground mb-6">
                  DPE, diagnostics, PV d'AG, compromis, titres de propriété...
                </p>
                <Button size="lg" className="gap-2 text-base px-8 py-6" asChild>
                  <Link to="/waitlist">
                    Ouvrir mon Vault
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  PDF, images scannées • Jusqu'à 50 Mo par fichier
                </p>
              </div>
            </div>
          </div>
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
