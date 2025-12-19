import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Landmark, 
  Scale, 
  Search, 
  HardHat, 
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const expertiseDomains = [
  {
    icon: Landmark,
    title: "Stratégie & Financement",
    description: "Scoring bancaire, dossier en béton, prêt à 110%, différé de remboursement."
  },
  {
    icon: Scale,
    title: "Fiscalité & Juridique",
    description: "LMNP, SCI (IS/IR), amortissements, clauses suspensives, choix du notaire."
  },
  {
    icon: Search,
    title: "Recherche & Off-Market",
    description: "Techniques de visite, négociation agressive, trouver avant les annonces."
  },
  {
    icon: HardHat,
    title: "Travaux & Rénovation",
    description: "Chiffrage rapide, gestion des artisans, optimisation d'espace (Micro-logements)."
  },
  {
    icon: Rocket,
    title: "Modes d'Exploitation",
    description: "Colocation, LCD (Saisonnier), Immeuble de rapport, stratégie Cash-flow."
  }
];

const steps = [
  "Posez votre question ou définissez votre objectif.",
  "Victor vous donne la stratégie gagnante (Gratuit).",
  "Utilisez nos 4 agents (Noah, Emma, Léon, Lucie) pour exécuter et sécuriser l'achat."
];

const VictorSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent opacity-60" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Nouveau — Accès 100% Gratuit</span>
          </div>
        </div>

        {/* Titre & Accroche */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-accent">Victor</span> : Le Mentor IA qui remplace les formations à 2 000 €
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Posez n'importe quelle question sur votre projet immobilier. De la stratégie fiscale aux secrets bancaires, 
            <span className="text-foreground font-semibold"> Victor détient 100% du savoir</span> pour vous guider gratuitement.
          </p>
        </div>

        {/* Domaines d'expertise - Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 md:mb-16">
          {expertiseDomains.map((domain, index) => (
            <div 
              key={index}
              className="group relative p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent/30 transition-colors">
                  <domain.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{domain.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{domain.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Texte explicatif avec étapes */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50">
            <p className="text-center text-lg text-foreground mb-6 font-medium">
              Victor est votre cerveau stratégique. Il ne se contente pas de répondre, 
              <span className="text-accent"> il bâtit votre feuille de route personnalisée.</span>
            </p>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-muted-foreground">
                      {step}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-accent/60 flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/waitlist">
            <Button 
              size="lg" 
              className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
            >
              Interroger Victor maintenant (Gratuit)
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Accès illimité à toute l'expertise immobilière 2025-2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VictorSection;
