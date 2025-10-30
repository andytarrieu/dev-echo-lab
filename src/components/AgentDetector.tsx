import { Shield, Upload, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgentDetector = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Agent #4 : Le Détecteur de Pièges
            </h2>
            <p className="text-2xl text-primary font-semibold mb-6">
              Il vous évite les catastrophes à 30 000€
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vous êtes sur le point d'acheter ? Cet agent peut vous sauver la mise.
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
                  <p className="text-foreground">Upload vos documents (DPE, diagnostics, PV de copro)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">L'IA les analyse en 5 minutes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Détecte TOUS les vices cachés, travaux non mentionnés, pièges de copropriété</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Calcule précisément les coûts à prévoir</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Te dit si c'est safe ou dangereux</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Votre avantage :</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Vous n'achetez <span className="font-semibold text-primary">JAMAIS un bien avec des surprises cachées</span>. 
                  Vous économisez <span className="font-semibold text-primary">10 000-30 000€ de travaux imprévus</span>. 
                  Vous dormez sur vos deux oreilles.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                Exemple concret
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                <span className="font-semibold">Julie</span> va acheter un T2 à <span className="font-semibold">175k€</span>. Elle upload les documents.
              </p>
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <p className="text-foreground"><span className="text-destructive font-semibold">L'agent détecte :</span></p>
                <p className="text-foreground">• Électricité non conforme : 2 500€</p>
                <p className="text-foreground">• DPE E (10 000€ de travaux)</p>
                <p className="text-foreground">• Travaux copro votés : 4 800€</p>
                <p className="text-xl font-bold text-destructive pt-2">Total : 17 300€ de coûts cachés</p>
              </div>
              <p className="text-foreground">
                Julie négocie le prix de <span className="line-through">175k€</span> à <span className="font-semibold text-primary">160k€</span> ou passe son chemin.
              </p>
              <p className="text-xl font-bold text-primary">
                Elle est protégée.
              </p>
              <div className="pt-4 border-t border-primary/20">
                <p className="text-muted-foreground italic">
                  Sans l'agent : Julie aurait signé et découvert 17 300€ de surprises 2 semaines après.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AgentDetector;
