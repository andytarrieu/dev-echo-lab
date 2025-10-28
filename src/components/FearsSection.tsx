import { AlertTriangle, FileText, UserX, Wallet, Brain, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FearsSection = () => {
  const fears = [
    {
      icon: AlertTriangle,
      title: "Peur de Se Faire Arnaquer",
      problems: [
        "Bien surpayé de 20-30%",
        "Travaux cachés découverts après l'achat",
        "Quartier qui se dégrade",
      ],
      solution: "Analyse automatique des prix du marché + historique quartier",
    },
    {
      icon: FileText,
      title: "Peur de la Paperasse Fiscale",
      problems: [
        "Ne pas savoir quel régime choisir (LMNP, réel, micro-foncier)",
        "Rater des déductions fiscales = payer trop d'impôts",
        "Erreurs dans les déclarations → redressement fiscal",
      ],
      solution: "Tools fiscaux automatiques",
    },
    {
      icon: UserX,
      title: "Peur des Locataires Problématiques",
      problems: [
        "Impayés de loyer",
        "Dégradations du bien",
        "Procédures d'expulsion longues et coûteuses",
      ],
      solution: "Automatisation relances + suivi paiements",
    },
    {
      icon: Wallet,
      title: "Peur de Manquer de Liquidités",
      problems: [
        "Travaux imprévus (chaudière, toiture)",
        "Vacance locative (pas de loyer pendant 3 mois)",
        "Mensualités de prêt qui pèsent",
      ],
      solution: "Tableaux de bord cash-flow temps réel",
    },
    {
      icon: Shield,
      title: "Peur de Faire le Mauvais Choix",
      problems: [
        "Hésiter entre 3 biens pendant des semaines",
        "Acheter par émotion au lieu de calculs",
        "Regretter son achat après signature",
      ],
      solution: "Comparaisons automatiques + simulations rentabilité",
    },
    {
      icon: Brain,
      title: "Peur de la Charge Mentale",
      problems: [
        "Gérer 5 biens = jongler entre 15 tâches/semaine",
        "Appels locataires à 22h pour une fuite",
        "Oublier une deadline fiscale importante",
      ],
      solution: "Automatisation 80% des tâches répétitives",
    },
    {
      icon: Clock,
      title: "Peur de Rater des Opportunités",
      problems: [
        "Bon bien vendu en 48h pendant qu'on hésite",
        "Taux qui remontent avant de se décider",
        "Ne pas voir les annonces qui matchent ses critères",
      ],
      solution: "Alertes automatiques + scraping 24/7",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Les 7 PEURS des Investisseurs Débutants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos agents IA éliminent toutes vos craintes et vous accompagnent sereinement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {fears.map((fear, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <fear.icon className="h-7 w-7 text-destructive" />
                  </div>
                </div>
                <CardTitle className="text-xl">{fear.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {fear.problems.map((problem, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm font-medium text-primary flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span><strong>Notre solution :</strong> {fear.solution}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FearsSection;
