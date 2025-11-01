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
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Pourquoi Auréa Écrase la Concurrence
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Les autres outils vous donnent des données brutes
            </p>
            <p className="text-2xl font-bold text-primary">
              Auréa vous donne des DÉCISIONS claires
            </p>
          </div>

          <div className="space-y-6">
            {comparisons.map((comparison, index) => (
              <Card key={index} className="overflow-hidden border-primary/20">
                <div className="grid md:grid-cols-2">
                  <div className="bg-muted/30 p-6 border-r border-border">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <X className="w-5 h-5 text-destructive" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Autres outils</p>
                        <p className="text-foreground">{comparison.others}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Auréa</p>
                        <p className="text-foreground font-medium">{comparison.aurea}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30">
              <CardContent className="pt-6">
                <p className="text-2xl font-bold text-foreground">
                  Auréa ne se contente pas de montrer des chiffres.
                </p>
                <p className="text-2xl font-bold text-primary mt-2">
                  Auréa vous révèle TOUTES LES POSSIBILITÉS.
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
