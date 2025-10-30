import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, TrendingUp, Users, Briefcase, Clock } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: Sparkles,
      title: "Débutants",
      description: "Les agents vous guident pas à pas pour éviter les erreurs coûteuses",
    },
    {
      icon: TrendingUp,
      title: "Investisseurs confirmés",
      description: "Multipliez votre vitesse d'analyse par 10 et scannez le marché entier",
    },
    {
      icon: Users,
      title: "Professionnels de l'immobilier",
      description: "Automatisez votre sourcing et vos analyses pour traiter plus de dossiers",
    },
    {
      icon: Briefcase,
      title: "Gestionnaires de patrimoine",
      description: "Optimisez les portefeuilles de vos clients avec des données précises",
    },
    {
      icon: Clock,
      title: "Ceux qui manquent de temps",
      description: "Les agents travaillent pendant que vous vivez votre vie",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              À Qui S'adresse Auréa ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">{audience.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{audience.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/30">
            <CardContent className="pt-6 text-center">
              <p className="text-xl text-foreground">
                Que vous ayez <span className="font-semibold text-primary">0 ou 50 biens</span>, 
                qu'il s'agisse de votre <span className="font-semibold text-primary">premier achat ou de votre 20ème</span>, 
                Auréa s'adapte à votre niveau.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
