import { X, Clock, Calculator, AlertTriangle, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      text: "Naviguer sur 20 sites d'annonces différents",
    },
    {
      icon: Calculator,
      text: "Calculer manuellement la rentabilité sur Excel",
    },
    {
      icon: AlertTriangle,
      text: "Vous demander si vous payez trop cher",
    },
    {
      icon: TrendingDown,
      text: "Découvrir des travaux cachés après avoir signé",
    },
    {
      icon: X,
      text: "Rater les meilleures opportunités par manque d'infos",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Le Problème Que Vous Vivez
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vous perdez un temps fou à :
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 bg-card border-destructive/20 hover:border-destructive/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground">{problem.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 bg-destructive/5 border-destructive/30">
            <p className="text-xl font-semibold text-destructive mb-2">
              Résultat : Vous hésitez, vous doutez, vous perdez de l'argent.
            </p>
            <p className="text-2xl font-bold text-primary">
              Et si tout ça disparaissait ?
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
