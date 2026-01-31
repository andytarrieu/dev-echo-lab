import { useState } from "react";
import { AlertTriangle, Calculator, FileCheck, ChevronRight, Bug, TrendingDown, FileWarning } from "lucide-react";
import { cn } from "@/lib/utils";

const UseCasesScenariosSection = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      id: 0,
      icon: Bug,
      tag: "Risque invisible",
      title: "La détection de la Mérule",
      context: "Un investisseur souhaite acheter un immeuble de rapport dans le centre historique de Bordeaux.",
      problem: "Le diagnostic mentionne en page 74 une \"infestation de champignons lignivores\" sans utiliser explicitement le mot \"Mérule\".",
      intervention: "L'IA extrait cette information et alerte l'utilisateur avec une notification prioritaire :",
      alert: {
        type: "danger",
        title: "Risque de Mérule détecté",
        details: [
          "Impact estimé sur la structure : Élevé",
          "Recommandation : Expertise mycologique complémentaire avant offre"
        ]
      },
      result: "L'investisseur renégocie le prix de 50 000 € ou se retire, évitant un procès en vice caché.",
      savings: "50 000 €",
      savingsLabel: "économisés"
    },
    {
      id: 1,
      icon: Calculator,
      tag: "Rentabilité cachée",
      title: "L'Audit de Rentabilité",
      context: "Un agent immobilier doit présenter un bien à un client exigeant.",
      problem: "Les charges de copropriété semblent basses, mais le règlement mentionne une clause spéciale de répartition pour l'ascenseur qui va être remplacé.",
      intervention: "Le logiciel calcule automatiquement le \"Vrai Coût de Détention\" en extrayant :",
      alert: {
        type: "warning",
        title: "Coût de détention recalculé",
        details: [
          "Taxe foncière : 2 400 €/an",
          "Charges courantes : 3 600 €/an",
          "Appel de fonds ascenseur prévu : 8 500 €"
        ]
      },
      result: "Un tableau de rentabilité net-net généré en 30 secondes, prêt à être envoyé par email.",
      savings: "30 sec",
      savingsLabel: "au lieu de 4h"
    },
    {
      id: 2,
      icon: FileCheck,
      tag: "Conformité juridique",
      title: "Le bras droit du Notaire",
      context: "Un clerc de notaire prépare un compromis de vente.",
      problem: "Il manque une attestation d'assurance dommages-ouvrage pour des travaux de rénovation faits il y a 8 ans.",
      intervention: "En scannant l'historique, l'IA signale le document manquant :",
      alert: {
        type: "warning",
        title: "Document manquant détecté",
        details: [
          "Assurance Dommages-Ouvrage pour l'extension de 2018",
          "Risque : Blocage du prêt bancaire de l'acquéreur"
        ]
      },
      result: "Le problème est réglé en amont, évitant le report de la signature.",
      savings: "2 mois",
      savingsLabel: "de délai évités"
    }
  ];

  const activeCase = scenarios[activeScenario];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2">CAS PRATIQUES</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              L'Intelligence en Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trois scénarios où Aurea Vault sauve une transaction ou évite un désastre financier.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {scenarios.map((scenario, index) => (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(index)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all",
                  activeScenario === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                )}
              >
                <scenario.icon className="h-4 w-4" />
                {scenario.title}
              </button>
            ))}
          </div>

          {/* Active Scenario Content */}
          <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left: Context */}
              <div className="lg:col-span-2 p-6 sm:p-8 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {activeCase.tag}
                </span>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {activeCase.title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Contexte</p>
                    <p className="text-sm text-foreground">{activeCase.context}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-destructive uppercase tracking-wide mb-1">Le problème</p>
                    <p className="text-sm text-foreground">{activeCase.problem}</p>
                  </div>
                </div>
              </div>

              {/* Right: Intervention & Result */}
              <div className="lg:col-span-3 p-6 sm:p-8">
                <div className="space-y-6">
                  {/* Intervention */}
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-3">
                      Intervention d'Aurea Vault
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">{activeCase.intervention}</p>
                    
                    {/* Alert Card */}
                    <div className={cn(
                      "rounded-xl p-4 border",
                      activeCase.alert.type === "danger" 
                        ? "bg-destructive/5 border-destructive/20" 
                        : "bg-amber-50 border-amber-200"
                    )}>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className={cn(
                          "h-5 w-5 flex-shrink-0 mt-0.5",
                          activeCase.alert.type === "danger" ? "text-destructive" : "text-amber-600"
                        )} />
                        <div>
                          <p className={cn(
                            "font-semibold mb-2",
                            activeCase.alert.type === "danger" ? "text-destructive" : "text-amber-800"
                          )}>
                            {activeCase.alert.title}
                          </p>
                          <ul className="space-y-1">
                            {activeCase.alert.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                <ChevronRight className="h-3 w-3" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-1">Résultat</p>
                      <p className="text-sm text-foreground">{activeCase.result}</p>
                    </div>
                    <div className="text-right bg-emerald-50 rounded-xl px-4 py-3 border border-emerald-200">
                      <div className="text-2xl font-bold text-emerald-600">{activeCase.savings}</div>
                      <div className="text-xs text-emerald-700">{activeCase.savingsLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesScenariosSection;
