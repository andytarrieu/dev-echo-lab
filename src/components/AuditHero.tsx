import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import agent4 from "@/assets/agent-4.webp";

const AuditHero = () => {
  return (
    <section className="pt-28 pb-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              IA qui audite vos dossiers immobiliers.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Sécurisez votre achat en quelques minutes avec Léon, l'assistant IA qui analyse vos PV d'AG, DPE et diagnostics.
            </p>

            <Button size="lg" className="gap-2 text-base px-8 py-6 mb-6" asChild>
              <Link to="/waitlist">
                Lancer un audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            {/* Trustpilot-style rating */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Excellent</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-emerald-500 flex items-center justify-center">
                    <Star className="h-4 w-4 text-white fill-white" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">+500 audits</span>
            </div>
          </div>

          {/* Right Content - Hero Image with floating cards */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            {/* Main Image */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img 
                src={agent4} 
                alt="Léon - Assistant Due Diligence"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              
              {/* Floating Card 1 - Score */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-4 border border-border animate-fade-in">
                <p className="text-xs text-muted-foreground mb-1">Score du dossier</p>
                <p className="text-2xl font-bold text-primary">85/100</p>
              </div>

              {/* Floating Card 2 - Alerts */}
              <div className="absolute -right-4 sm:right-0 lg:-right-8 top-1/2 bg-white rounded-xl shadow-lg p-4 border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs text-muted-foreground mb-2">Points d'attention</p>
                <div className="flex items-center gap-2">
                  <span className="text-amber-500 text-lg">⚠️</span>
                  <span className="text-sm font-medium">3 alertes</span>
                </div>
              </div>

              {/* Floating Card 3 - Analysis */}
              <div className="absolute left-1/4 -bottom-4 bg-white rounded-xl shadow-lg p-4 border border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-xs text-muted-foreground mb-2">Analyse DPE</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                    E
                  </div>
                  <span className="text-sm">Passoire thermique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditHero;
