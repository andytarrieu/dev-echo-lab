import { Clock, Shield, CheckCircle } from "lucide-react";

const AuditHero = () => {
  return (
    <section 
      className="pt-32 pb-16"
      style={{
        background: `linear-gradient(135deg, hsl(var(--hero-gradient-start)) 0%, hsl(var(--hero-gradient-end)) 100%)`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge de confiance */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
          <Shield className="h-4 w-4" />
          +500 audits réalisés
          <span className="text-yellow-300">★★★★★</span>
          <span className="text-white/80">4.9/5</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          L'audit technique et juridique de vos dossiers immobiliers{" "}
          <span className="text-white/90">en 60 secondes</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Léon, notre IA, scanne vos PV d'AG, DPE et Diagnostics pour détecter les 
          incohérences et sécuriser votre achat immobilier.
        </p>

        {/* Points clés */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-white" />
            <span>Analyse en 60 secondes</span>
          </div>
          <span className="hidden sm:inline text-white/40">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-white" />
            <span>+40 points de contrôle</span>
          </div>
          <span className="hidden sm:inline text-white/40">•</span>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-white" />
            <span>RGPD conforme</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditHero;
