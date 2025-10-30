import { Calculator, FileText, Camera, TrendingDown, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgentCalculator = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Agent #2 : Le Calculateur Impitoyable
            </h2>
            <p className="text-2xl text-primary font-semibold mb-6">
              Il sait si c'est rentable AVANT que vous ne signiez
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fini les calculs approximatifs sur Excel. Fini les illusions de rentabilité.
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
                  <p className="text-foreground">Colle n'importe quel lien d'annonce → Analyse complète en 60 secondes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Compare avec 50+ ventes réelles similaires</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Détecte les travaux cachés en analysant les photos avec l'IA</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Calcule le rendement NET réel (après TOUTES les charges)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Te dit combien négocier avec des arguments béton</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Votre avantage :</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Vous ne payez <span className="font-semibold text-primary">JAMAIS trop cher</span>. Vous savez EXACTEMENT combien vous allez gagner. 
                  Vous négociez comme un pro et économisez <span className="font-semibold text-primary">5 000-15 000€ par achat</span>.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Exemple concret
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                <span className="font-semibold">David</span> trouve un T3 à <span className="font-semibold">230k€</span>. Il analyse avec l'agent.
              </p>
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <p className="text-foreground"><span className="text-destructive font-semibold">Résultat :</span></p>
                <p className="text-foreground">• Prix surévalué de 8%</p>
                <p className="text-foreground">• Travaux électriques : 2 500€</p>
                <p className="text-foreground">• Travaux copro : 4 800€</p>
              </div>
              <p className="text-foreground">
                David négocie à <span className="font-semibold text-primary">215k€</span> avec les arguments fournis.
              </p>
              <p className="text-xl font-bold text-primary">
                Économie : 15 000€
              </p>
              <div className="pt-4 border-t border-primary/20">
                <p className="text-muted-foreground italic">
                  Sans l'agent : David aurait payé 230k€ et découvert 17 300€ de coûts cachés après signature.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AgentCalculator;
