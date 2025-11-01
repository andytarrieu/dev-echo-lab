import { Brain, Bell, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligence Proactive",
      description: "Chaque agent analyse en continu plus de 1 500 sources immobilières et t'envoie une alerte automatique quand un nouveau bien correspond à tes critères d'investissement.",
    },
    {
      icon: Bell,
      title: "Alertes Automatiques",
      description: "Reçois des notifications instantanées pour les nouvelles opportunités, les évolutions de marché, les hausses de valeur détectées et les recommandations personnalisées.",
    },
    {
      icon: FileText,
      title: "Dossiers Professionnels",
      description: "Chaque analyse génère automatiquement un document PDF complet et professionnel, prêt à présenter à ta banque ou à tes partenaires.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">Une Suite IA Complète</h2>
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base md:text-lg px-4">
            <p>Couvrez tout le cycle de vie de votre investissement immobilier.</p>
            <p>De l'analyse de marché à la gestion de patrimoine, en passant par l'évaluation et la sécurisation.</p>
            <p>Pour tous types de biens : résidentiel, bureaux, commerces, entrepôts, achat-revente, location.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="pb-3 sm:pb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
