import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Calculator, TrendingUp, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  whatItDoes: string[];
  advantage: string;
  example: {
    situation: string;
    result: string;
    savings: string;
  };
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

const agentTabs: Tab[] = [
  {
    value: "chasseur",
    icon: <Target className="h-auto w-4 shrink-0" />,
    label: "Noah",
    content: {
      badge: "👨 Agent #1 : NOAH",
      title: "Le Chasseur d'Opportunités",
      description:
        "Il trouve les pépites que personne ne voit. Imaginez avoir un expert qui surveille en permanence le marché français entier pour vous.",
      whatItDoes: [
        "Analyse en continu 1 500+ sources de données immobilières",
        "Détecte les quartiers AVANT leur explosion de prix",
        "Compare instantanément des dizaines de villes",
        "Vous alerte dès qu'une vraie opportunité apparaît",
      ],
      advantage:
        "Pendant que les autres achètent dans des quartiers déjà chers, vous investissez dans les zones qui vont exploser. Vous avez 6-12 mois d'avance sur le marché.",
      example: {
        situation:
          "Sophie utilise l'agent. Il lui recommande un quartier de Nantes à 3 200€/m².",
        result:
          "6 mois plus tard : annonce d'une nouvelle ligne de tramway. Le quartier est maintenant à 3 800€/m².",
        savings: "Sophie a gagné 42 000€ de valorisation",
      },
    },
  },
  {
    value: "calculateur",
    icon: <Calculator className="h-auto w-4 shrink-0" />,
    label: "Emma",
    content: {
      badge: "👩 Agent #2 : EMMA",
      title: "La Calculatrice Impitoyable",
      description:
        "Elle sait si c'est rentable AVANT que vous ne signiez. Fini les calculs approximatifs sur Excel. Fini les illusions de rentabilité.",
      whatItDoes: [
        "Colle n'importe quel lien d'annonce → Analyse complète en 60 secondes",
        "Compare avec 50+ ventes réelles similaires",
        "Détecte les travaux cachés en analysant les photos avec l'IA",
        "Calcule le rendement NET réel (après TOUTES les charges)",
        "Te dit combien négocier avec des arguments béton",
      ],
      advantage:
        "Vous ne payez JAMAIS trop cher. Vous savez EXACTEMENT combien vous allez gagner. Vous négociez comme un pro et économisez 5 000-15 000€ par achat.",
      example: {
        situation:
          "David trouve un T3 à 230k€. Il analyse avec l'agent.",
        result:
          "Résultat : prix surévalué de 8%, travaux électriques 2 500€, travaux copro 4 800€. David négocie à 215k€ avec les arguments fournis.",
        savings: "Économie : 15 000€",
      },
    },
  },
  {
    value: "optimiseur",
    icon: <TrendingUp className="h-auto w-4 shrink-0" />,
    label: "Lucie",
    content: {
      badge: "👩 Agent #3 : LUCIE",
      title: "L'Optimiseuse de Patrimoine",
      description:
        "Elle transforme vos biens moyens en machines à cash. Vous avez déjà investi ? Cet agent va changer votre vie.",
      whatItDoes: [
        "Surveille tous vos biens 24/7 automatiquement",
        "Détecte les opportunités que vous ratez (loyer sous-évalué, LMNP possible, moment de revente optimal)",
        "Vous alerte quand il faut agir",
        "Vous dit précisément quoi faire pour gagner plus",
      ],
      advantage:
        "Votre patrimoine ne dort plus. Chaque bien est constamment optimisé. Vos revenus passifs augmentent de 15-25% sans effort supplémentaire.",
      example: {
        situation:
          "Marc a 4 appartements. L'agent détecte : Appartement Paris → vendre maintenant = +18%, Studio Lyon → loyer sous-évalué de 60€/mois, Bien Toulouse → éligible LMNP = 1 200€/an d'économie fiscale.",
        result:
          "En 6 mois, Marc augmente ses revenus nets de 18% grâce aux alertes.",
        savings: "3 600€/an économisés",
      },
    },
  },
  {
    value: "detecteur",
    icon: <Shield className="h-auto w-4 shrink-0" />,
    label: "Léon",
    content: {
      badge: "👨 Agent #4 : LÉON",
      title: "Le Détecteur de Pièges",
      description:
        "Il vous évite les catastrophes à 30 000€. Vous êtes sur le point d'acheter ? Cet agent peut vous sauver la mise.",
      whatItDoes: [
        "Upload vos documents (DPE, diagnostics, PV de copro)",
        "L'IA les analyse en 5 minutes",
        "Détecte TOUS les vices cachés, travaux non mentionnés, pièges de copropriété",
        "Calcule précisément les coûts à prévoir",
        "Te dit si c'est safe ou dangereux",
      ],
      advantage:
        "Vous n'achetez JAMAIS un bien avec des surprises cachées. Vous économisez 10 000-30 000€ de travaux imprévus. Vous dormez sur vos deux oreilles.",
      example: {
        situation:
          "Julie va acheter un T2 à 175k€. Elle upload les documents.",
        result:
          "L'agent détecte : électricité non conforme (2 500€), DPE E (10 000€ de travaux), travaux copro votés (4 800€). Julie négocie le prix de 175k€ à 160k€.",
        savings: "17 300€ de coûts cachés évités",
      },
    },
  },
];

const AgentsTabs = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center mb-8 sm:mb-12 px-2">
          <Badge variant="outline" className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2">
            🤖 4 Agents IA
          </Badge>
          <h2 className="max-w-3xl text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl px-2">
            4 Agents IA qui travaillent pour vous 24/7
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl px-4">
            Chaque agent est spécialisé dans une tâche critique de votre investissement immobilier
          </p>
        </div>

        <Tabs defaultValue={agentTabs[0].value} className="mt-6 sm:mt-8">
          <TabsList className="container flex items-center justify-start sm:justify-center gap-2 sm:gap-4 md:gap-10 bg-muted/50 p-2 rounded-2xl overflow-x-auto">
            {agentTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all whitespace-nowrap flex-shrink-0"
              >
                {tab.icon} <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-6 sm:mt-8 max-w-screen-xl rounded-2xl bg-card border border-border/50 p-4 sm:p-8 lg:p-16 shadow-xl">
            {agentTabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid gap-8 sm:gap-12 lg:gap-16"
              >
                <div className="flex flex-col gap-4 sm:gap-6">
                  <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm px-2 sm:px-3 py-1">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold lg:text-4xl xl:text-5xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                </div>

                <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                  <Card className="border-primary/20">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl">Ce qu'il fait</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {tab.content.whatItDoes.map((item, index) => (
                          <li key={index} className="flex gap-2 sm:gap-3">
                            <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                            <span className="text-muted-foreground text-sm sm:text-base leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl">Votre avantage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground font-medium leading-relaxed text-sm sm:text-base">
                        {tab.content.advantage}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl flex items-center gap-2">
                      <span className="text-xl sm:text-2xl">💡</span> Exemple concret
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <CardDescription className="text-sm sm:text-base text-foreground leading-relaxed">
                      <strong>Situation :</strong> {tab.content.example.situation}
                    </CardDescription>
                    <CardDescription className="text-sm sm:text-base text-foreground leading-relaxed">
                      <strong>Résultat :</strong> {tab.content.example.result}
                    </CardDescription>
                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-primary/20 rounded-lg border border-primary/30">
                      <p className="text-base sm:text-lg font-bold text-primary">
                        💰 {tab.content.example.savings}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center mt-4 sm:mt-6">
                  <Button size="lg" className="gap-2 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto" asChild>
                    <Link to="/waitlist">Rejoindre la waiting list</Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default AgentsTabs;
