import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistBadge from "./WaitlistBadge";
const VaultHero = () => {
  return (
    <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Waitlist Badge */}
        <div className="flex justify-center mb-4">
          <WaitlistBadge />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AURÉA Vault</span>
            <span className="text-sm text-muted-foreground">Particuliers & Professionnels</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-5xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            L'Intelligence Augmentée{" "}
            <span className="text-primary">au Service de l'Immobilier.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
            La première plateforme de <span className="font-semibold text-foreground">Property Intelligence</span> qui transforme 
            vos dossiers notariaux complexes en données claires, exploitables et interactives.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
              ⚡ 400 pages analysées en 2 min
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">
              🎯 Zéro hallucination IA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium">
              🔒 Coffre-fort numérique
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
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
    </section>
  );
};
export default VaultHero;