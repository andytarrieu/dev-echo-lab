import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <CardHeader className="text-center relative z-10 pb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 mx-auto">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-3xl sm:text-4xl font-bold mb-4">
                Accès Anticipé Sans Engagement
              </CardTitle>
              <p className="text-2xl font-semibold text-primary">
                Rejoignez la waiting list gratuitement
              </p>
            </CardHeader>

            <CardContent className="relative z-10 space-y-6">
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-lg text-foreground mb-4">
                    Inscrivez-vous dès maintenant à la <span className="font-semibold text-primary">waiting list</span> pour être parmi les premiers à accéder à Auréa.
                  </p>
                  <p className="text-lg text-foreground">
                    Bénéficiez d'un accès anticipé et de conditions préférentielles. 
                    <span className="font-semibold text-primary"> Aucun engagement, aucun paiement</span>.
                  </p>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-semibold">Inscription gratuite</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-semibold">Accès anticipé</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-foreground font-semibold">Sans engagement</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-6">
                <p className="text-xl font-bold text-foreground mb-2">
                  Soyez parmi les premiers.
                </p>
                <p className="text-xl font-bold text-primary mb-8">
                  Accédez aux agents IA en exclusivité.
                </p>

                <Button 
                  size="lg" 
                  className="text-lg group"
                  asChild
                >
                  <Link to="/waitlist">
                    Rejoindre la Waiting List
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Inscription gratuite. Aucune carte bancaire.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
