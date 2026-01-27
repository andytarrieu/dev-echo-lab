import NavbarNew from "@/components/NavbarNew";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Star, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Essentiel",
      price: "39",
      description: "Pour un premier audit rapide",
      icon: Zap,
      popular: false,
      features: [
        "1 audit complet",
        "Jusqu'à 5 documents PDF",
        "Rapport téléchargeable",
        "Analyse technique & juridique",
        "Validité 7 jours",
      ],
      cta: "Commencer",
    },
    {
      name: "Standard",
      price: "89",
      description: "Pour sécuriser votre achat",
      icon: Star,
      popular: true,
      features: [
        "3 audits complets",
        "Jusqu'à 15 documents PDF",
        "Rapports téléchargeables",
        "Analyse technique & juridique",
        "Comparaison multi-biens",
        "Support prioritaire",
        "Validité 30 jours",
      ],
      cta: "Choisir Standard",
    },
    {
      name: "Investisseur",
      price: "120",
      description: "Pour les investisseurs réguliers",
      icon: Building2,
      popular: false,
      features: [
        "10 audits complets",
        "Documents illimités par audit",
        "Rapports personnalisables",
        "Analyse approfondie",
        "Historique des analyses",
        "Support dédié",
        "Validité 90 jours",
        "Accès anticipé nouveaux agents",
      ],
      cta: "Devenir Investisseur",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tarifs transparents
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez la formule adaptée à votre projet. 
              Pas d'abonnement, payez uniquement ce dont vous avez besoin.
            </p>
          </div>

          {/* Grille tarifaire */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4">
                      Le plus populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Prix */}
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-foreground">{plan.price}€</span>
                    <span className="text-muted-foreground ml-1">TTC</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to="/waitlist">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ rapide */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Comment fonctionne le paiement ?",
                  a: "Le paiement est unique et sécurisé par Stripe. Vous achetez un pack d'audits que vous pouvez utiliser pendant la durée de validité."
                },
                {
                  q: "Puis-je obtenir un remboursement ?",
                  a: "Oui, si vous n'êtes pas satisfait de votre premier audit, nous vous remboursons intégralement sous 14 jours."
                },
                {
                  q: "Quels documents puis-je analyser ?",
                  a: "Léon analyse les DPE, diagnostics techniques (électricité, gaz, plomb, amiante), PV d'assemblées générales, règlements de copropriété et états datés."
                },
              ].map((faq, i) => (
                <div key={i} className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
