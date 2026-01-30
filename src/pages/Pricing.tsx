import NavbarNew from "@/components/NavbarNew";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Star, Building2, Clock, Bell, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Essentiel",
      description: "Pour un premier audit rapide",
      icon: Zap,
    },
    {
      name: "Standard",
      description: "Pour sécuriser votre achat",
      icon: Star,
      popular: true,
    },
    {
      name: "Investisseur",
      description: "Pour les investisseurs réguliers",
      icon: Building2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Lancement bientôt
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tarifs en cours de finalisation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Nous travaillons actuellement sur nos offres pour vous proposer 
              les meilleurs tarifs possibles. Inscrivez-vous pour être informé du lancement 
              et bénéficier d'une offre exclusive.
            </p>
            <Button size="lg" asChild>
              <Link to="/waitlist" className="gap-2">
                <Bell className="h-5 w-5" />
                Être informé du lancement
              </Link>
            </Button>
          </div>

          {/* Aperçu des formules */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Aperçu des formules à venir
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card 
                  key={plan.name}
                  className={`relative text-center ${
                    plan.popular 
                      ? 'border-primary shadow-lg' 
                      : 'border-border'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 text-xs">
                        Recommandé
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="pt-8 pb-6">
                    <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                      plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      <plan.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-4 text-2xl font-bold text-muted-foreground/50">
                      Bientôt
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Avantages early adopters */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Avantages Early Adopter
                </h3>
                <p className="text-muted-foreground mb-6">
                  Les premiers inscrits sur la liste d'attente bénéficieront d'avantages exclusifs :
                </p>
                <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">Réduction sur le premier audit</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">Accès prioritaire à la plateforme</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">Fonctionnalités exclusives en avant-première</span>
                  </li>
                </ul>
                <Button size="lg" asChild>
                  <Link to="/waitlist">Rejoindre la liste d'attente</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
