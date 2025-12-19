import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Landmark, 
  Scale, 
  Search, 
  HardHat, 
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Brain,
  MessageCircle
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
  { step: "Étape 1", text: "Posez votre question ou définissez votre objectif." },
  { step: "Étape 2", text: "Victor vous donne la stratégie gagnante (Gratuit)." },
  { step: "Étape 3", text: "Utilisez nos 4 agents (Noah, Emma, Léon, Lucie) pour exécuter et sécuriser l'achat." }
];

const VictorSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header avec Badge distinctif */}
        <div className="text-center mb-10 md:mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Nouveau — Agent Gratuit & Illimité
          </Badge>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg shadow-accent/30">
              <Brain className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Victor</span> : Le Mentor IA
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-2">
            Remplace les formations à 2 000 €
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Posez n'importe quelle question sur votre projet immobilier. De la stratégie fiscale aux secrets bancaires, 
            <span className="text-foreground font-semibold"> Victor détient 100% du savoir</span> pour vous guider gratuitement.
          </p>
        </div>

        {/* Domaines d'expertise - Grille */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-center text-lg md:text-xl font-semibold text-foreground mb-6">
            Les Piliers du Savoir de Victor
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {expertiseDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <Card 
                  key={index}
                  className="group border-border/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 bg-card/50 backdrop-blur-sm cursor-pointer"
                >
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-accent/15 flex items-center justify-center mb-3 group-hover:bg-accent/25 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">{domain.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{domain.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* La Promesse - Étapes */}
        <Card className="max-w-4xl mx-auto mb-12 border-accent/20 bg-gradient-to-br from-card to-accent/5">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl md:text-2xl flex items-center justify-center gap-2">
              <MessageCircle className="w-6 h-6 text-accent" />
              Victor est votre cerveau stratégique
            </CardTitle>
            <p className="text-muted-foreground">
              Il ne se contente pas de répondre, <span className="text-accent font-medium">il bâtit votre feuille de route personnalisée.</span>
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-3 gap-4">
              {steps.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-background/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <span className="text-accent font-bold">{index + 1}</span>
                  </div>
                  <p className="text-xs text-accent font-medium mb-1">{item.step}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  <CheckCircle2 className="w-5 h-5 text-accent/60 mt-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
