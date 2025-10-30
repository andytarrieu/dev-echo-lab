import { TrendingUp, Eye, Bell, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgentOptimizer = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Agent #3 : L'Optimiseur de Patrimoine
            </h2>
            <p className="text-2xl text-primary font-semibold mb-6">
              Il transforme vos biens moyens en machines à cash
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vous avez déjà investi ? Cet agent va changer votre vie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Ce qu'il fait :</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Surveille tous vos biens 24/7 automatiquement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Détecte les opportunités que vous ratez (loyer sous-évalué, LMNP possible, moment de revente optimal)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Vous alerte quand il faut agir</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Vous dit précisément quoi faire pour gagner plus</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Votre avantage :</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Votre patrimoine ne dort plus. Chaque bien est constamment optimisé. 
                  <span className="font-semibold text-primary"> Vos revenus passifs augmentent de 15-25% sans effort supplémentaire.</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                Exemple concret
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                <span className="font-semibold">Marc</span> a 4 appartements. L'agent détecte :
              </p>
              <div className="space-y-3">
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-foreground font-semibold mb-2">Appartement Paris</p>
                    <p className="text-foreground">Marché ralentit → vendre maintenant = <span className="text-primary font-semibold">+18% depuis achat</span></p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-foreground font-semibold mb-2">Studio Lyon</p>
                    <p className="text-foreground">Loyer sous-évalué de 60€/mois → <span className="text-primary font-semibold">augmentation légale possible</span></p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-foreground font-semibold mb-2">Bien Toulouse</p>
                    <p className="text-foreground">Éligible LMNP → <span className="text-primary font-semibold">économie fiscale 1 200€/an</span></p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-xl font-bold text-primary pt-4">
                En 6 mois, Marc augmente ses revenus nets de 18% grâce aux alertes.
              </p>
              <div className="pt-4 border-t border-primary/20">
                <p className="text-muted-foreground italic">
                  Sans l'agent : Marc laissait 3 600€/an sur la table sans le savoir.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AgentOptimizer;
