import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VaultHeroMinimal = () => {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <span className="text-xs font-medium text-primary">AURÉA Vault</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span className="text-xs text-muted-foreground">Beta disponible</span>
          </div>

          {/* Main Title - Direct & Minimal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Votre assistant IA
            <br />
            <span className="text-primary">immobilier personnalisé</span>
          </h1>
          
          {/* Subtitle - Clear value prop */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Importez vos documents. Posez vos questions. 
            Obtenez des réponses ancrées dans <span className="text-foreground font-medium">vos sources</span>, 
            pas dans l'imagination de l'IA.
          </p>

          {/* CTA - Single focus */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2 text-base px-8 py-6 shadow-lg shadow-primary/20" asChild>
              <Link to="/waitlist">
                Essayer Vault gratuitement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">4 500+</span> professionnels et particuliers sur liste d'attente
          </p>
        </div>
      </div>
    </section>
  );
};

export default VaultHeroMinimal;
