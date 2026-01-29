import { FileText, AlertTriangle, Languages, TrendingDown, HelpCircle } from "lucide-react";

const WhatWeDoSection = () => {
  const features = [
    {
      icon: FileText,
      number: "1",
      title: "Analyse automatique de votre Dossier de Notaire",
      description: "Au lieu de lire les 300 à 600 pages de documents que vous envoie le notaire ou l'agent, vous les uploadez sur le Vault (DPE, PV d'Assemblées Générales, Règlement de copropriété, État daté, etc.).",
      highlight: "En 1 à 15 minutes, l'outil scanne tout.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: AlertTriangle,
      number: "2",
      title: "Détection de +50 points de contrôle",
      description: "Le Vault cherche spécifiquement les \"pièges\" qui coûtent cher :",
      bullets: [
        "Charges de copropriété : évolution sur les dernières années",
        "Travaux votés mais non payés (ravalement, toiture...)",
        "Santé de la copropriété : impayés et procédures judiciaires",
        "DPE : risque d'interdiction de louer, préconisations de travaux",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Languages,
      number: "3",
      title: "Transformation du Jargon en Français Simple",
      description: "Auréa Vault génère un rapport de synthèse ultra-clair. Il traduit les clauses juridiques complexes en explications simples :",
      bullets: [
        "\"Qu'est-ce que cela signifie pour mon portefeuille ?\"",
        "\"Quels sont les points positifs et les points de vigilance ?\"",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingDown,
      number: "4",
      title: "Aide à la Négociation",
      description: "L'aspect le plus rentable : le rapport vous donne des arguments factuels pour faire baisser le prix.",
      highlight: "Exemple : Si l'outil détecte qu'un fonds de travaux ALUR n'est pas à jour ou qu'un audit énergétique est obligatoire en 2026, vous pouvez négocier une remise de plusieurs milliers d'euros.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: HelpCircle,
      number: "5",
      title: "Préparation aux questions de l'agent/notaire",
      description: "Le Vault vous fournit une liste de questions précises à poser au vendeur ou au notaire pour lever les derniers doutes.",
      highlight: "Ne signez plus jamais dans le flou.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-sm font-medium text-primary mb-2">COMMENT ÇA MARCHE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ce que fait AURÉA Vault pour vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De l'analyse automatique à la négociation, découvrez comment nous sécurisons votre achat immobilier.
          </p>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon & Number */}
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${feature.bgColor} flex items-center justify-center relative`}>
                  <feature.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${feature.color}`} />
                  <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center`}>
                    {feature.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2">
                  {feature.description}
                </p>
                
                {feature.bullets && (
                  <ul className="space-y-1 mb-2">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${feature.bgColor} flex-shrink-0`} style={{ backgroundColor: feature.color.replace('text-', '') }} />
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {feature.highlight && (
                  <p className="text-sm font-medium text-foreground bg-muted/50 px-3 py-2 rounded-lg">
                    {feature.highlight}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
