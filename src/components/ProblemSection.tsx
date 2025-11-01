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
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Le Problème Que Vous Vivez
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
            Que ce soit pour votre future maison ou un investissement locatif, vous perdez un temps fou à :
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="p-4 sm:p-6 bg-card border-destructive/20 hover:border-destructive/50 transition-colors">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base md:text-lg text-foreground">{problem.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center px-2">
          <Card className="p-4 sm:p-6 md:p-8 bg-destructive/5 border-destructive/30">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-destructive mb-2">
              Résultat : Vous hésitez, vous doutez, vous risquez de vous faire arnaquer ou de payer trop cher.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
              Et si vous achetiez en toute confiance ?
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
