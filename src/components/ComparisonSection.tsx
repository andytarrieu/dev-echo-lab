import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      others: "Voici les annonces",
      aurea: "Voici les 3 meilleures affaires + pourquoi + combien offrir",
    },
    {
      others: "Prix moyen : 4 500€/m²",
      aurea: "Ce bien est surévalué de 8%. Négociez à 172k€ max avec ces arguments",
    },
    {
      others: "Pas d'analyse de travaux",
      aurea: "8 500€ de travaux détectés en analysant les photos",
    },
    {
      others: "Aucune gestion après achat",
      aurea: "Votre bien à Lyon : vous pouvez augmenter le loyer de 60€/mois",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Pourquoi Auréa Écrase la Concurrence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 px-2">
              Les autres outils vous donnent des données brutes
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary px-2">
              Auréa vous donne des DÉCISIONS claires
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {comparisons.map((comparison, index) => (
              <Card key={index} className="overflow-hidden border-primary/20">
                <div className="grid md:grid-cols-2">
                  <div className="bg-muted/30 p-4 sm:p-6 border-b md:border-b-0 md:border-r border-border">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1 sm:mb-2">Autres outils</p>
                        <p className="text-sm sm:text-base text-foreground">{comparison.others}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 sm:p-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-primary mb-1 sm:mb-2">Auréa</p>
                        <p className="text-sm sm:text-base text-foreground font-medium">{comparison.aurea}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center px-2">
            <Card className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                  Auréa ne se contente pas de montrer des chiffres.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mt-2">
                  Auréa vous révèle TOUTES LES POSSIBILITÉS.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mt-4">
                  Et vous pouvez mettre en pause votre abonnement une fois votre achat réalisé.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
