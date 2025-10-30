import { Search, TrendingUp, MapPin, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgentHunter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Agent #1 : Le Chasseur d'Opportunités
            </h2>
            <p className="text-2xl text-primary font-semibold mb-6">
              Il trouve les pépites que personne ne voit
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Imaginez avoir un expert qui surveille en permanence le marché français entier pour vous.
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
                  <p className="text-foreground">Analyse en continu 1 500+ sources de données immobilières</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Détecte les quartiers AVANT leur explosion de prix</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Compare instantanément des dizaines de villes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <p className="text-foreground">Vous alerte dès qu'une vraie opportunité apparaît</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Votre avantage :</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Pendant que les autres achètent dans des quartiers déjà chers, vous investissez dans les zones qui vont exploser. 
                  <span className="font-semibold text-primary"> Vous avez 6-12 mois d'avance sur le marché.</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Exemple concret
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                <span className="font-semibold">Sophie</span> utilise l'agent. Il lui recommande un quartier de Nantes à <span className="font-semibold text-primary">3 200€/m²</span>. 
              </p>
              <p className="text-foreground">
                6 mois plus tard : annonce d'une nouvelle ligne de tramway. Le quartier est maintenant à <span className="font-semibold text-primary">3 800€/m²</span>.
              </p>
              <p className="text-xl font-bold text-primary">
                Sophie a gagné 42 000€ de valorisation.
              </p>
              <div className="pt-4 border-t border-primary/20">
                <p className="text-muted-foreground italic">
                  Sans l'agent : Sophie aurait acheté à Bordeaux (déjà cher) comme tout le monde.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AgentHunter;
