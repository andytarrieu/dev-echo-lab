import { Clock, Shield, CheckCircle } from "lucide-react";

const AuditHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge de confiance */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Shield className="h-4 w-4" />
          +500 audits réalisés
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-muted-foreground">4.9/5</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
          L'audit technique et juridique de vos dossiers immobiliers{" "}
          <span className="text-primary">en 60 secondes</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Léon, notre IA, scanne vos PV d'AG, DPE et Diagnostics pour détecter les 
          incohérences et sécuriser votre achat immobilier.
        </p>

        {/* Points clés */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Analyse en 60 secondes</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>+40 points de contrôle</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>RGPD conforme</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditHero;
