import { Check, User, Briefcase, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const plans = [
    {
      icon: User,
      name: "Aurea Light",
      subtitle: "Particuliers",
      price: "29€",
      priceDetail: "par dossier",
      description: "Paiement au dossier (Pay-per-Vault). Idéal pour analyser votre compromis de vente.",
      features: [
        "1 Vault complet",
        "Analyse de tous vos documents",
        "Rapport d'audit détaillé",
        "Citations sources cliquables",
        "Support par email",
      ],
      cta: "Essayer gratuitement",
      popular: false,
    },
    {
      icon: Briefcase,
      name: "Aurea Pro",
      subtitle: "Agents, Chasseurs, Syndics",
      price: "149€",
      priceDetail: "/mois",
      description: "Abonnement mensuel avec volume de dossiers. Outil de différenciation commerciale.",
      features: [
        "10 Vaults par mois",
        "Tableau de rentabilité automatique",
        "Rapports personnalisables",
        "Résumé audio des dossiers",
        "Support prioritaire",
        "Exports PDF professionnels",
      ],
      cta: "Démarrer l'essai Pro",
      popular: true,
    },
    {
      icon: Building2,
      name: "Aurea Enterprise",
      subtitle: "Notaires, Avocats, Banques",
      price: "Sur mesure",
      priceDetail: "",
      description: "Intégration API directe dans vos logiciels métiers pour une automatisation totale.",
      features: [
        "Vaults illimités",
        "Intégration API complète",
        "Single Sign-On (SSO)",
        "Audit trail complet",
        "Account manager dédié",
        "SLA garantis",
        "Formation équipes",
      ],
      cta: "Contacter l'équipe",
      popular: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2">TARIFICATION</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Un modèle adapté à votre usage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modèle SaaS avec tarification flexible. Du particulier qui achète son premier bien aux institutions traitant des centaines de dossiers.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular 
                    ? "bg-primary text-primary-foreground border-primary shadow-xl scale-105" 
                    : "bg-background border-border hover:border-primary/50 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                      POPULAIRE
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    plan.popular ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}>
                    <plan.icon className={`h-5 w-5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="font-bold">{plan.name}</h3>
                    <p className={`text-xs ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {plan.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.priceDetail && (
                      <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {plan.priceDetail}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mt-2 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className={`h-4 w-4 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full gap-2 ${
                    plan.popular 
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/waitlist">
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
