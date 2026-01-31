import { Button } from "@/components/ui/button";
import { ArrowRight, Vault, FileText, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistBadge from "./WaitlistBadge";

const VaultHero = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Waitlist Badge */}
        <div className="flex justify-center mb-6">
          <WaitlistBadge />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Vault className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AURÉA Vault</span>
            <span className="text-sm text-muted-foreground">Property Intelligence</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Le Coffre-Fort{" "}
            <span className="text-primary">Intelligent</span>{" "}
            de l'Immobilier
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            Transformez vos <span className="font-semibold text-foreground">500 pages</span> de diagnostics et documents immobiliers 
            en <span className="font-semibold text-foreground">décisions stratégiques</span> — en moins de 2 minutes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
              <FileText className="h-3.5 w-3.5" />
              Analyse croisée intelligente
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">
              <Zap className="h-3.5 w-3.5" />
              Zéro hallucination
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="gap-2 text-lg px-10 py-7" asChild>
            <Link to="/waitlist">
              Accéder à Aurea Vault
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">4,500+</span> professionnels sur la liste d'attente
          </p>
        </div>
      </div>
    </section>
  );
};

export default VaultHero;