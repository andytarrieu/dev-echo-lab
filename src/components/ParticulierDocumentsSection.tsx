import { FileText, CreditCard, Shield, Home, FileCheck, AlertTriangle, ChevronRight, FolderOpen, Building, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const notarialDocuments = [
  {
    icon: FolderOpen,
    title: "DPE & Diagnostics Techniques",
    detail: "Électricité, gaz, plomb, amiante, termites..."
  },
  {
    icon: Building,
    title: "Dossier Copropriété",
    detail: "PV d'AG, règlement, état daté, charges"
  },
  {
    icon: FileText,
    title: "Titre de Propriété",
    detail: "Origine de propriété sur 30 ans, servitudes"
  },
  {
    icon: AlertTriangle,
    title: "Documents Juridiques",
    detail: "Urbanisme, préemption, hypothèques"
  }
];

const documentCategories = [
  {
    icon: FileText,
    title: "L'Offre de Prêt",
    subtitle: "Le document maître",
    description: "Un contrat ultra-dense où chaque mot compte.",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-600",
    points: [
      {
        label: "TAEG (Taux Annuel Effectif Global)",
        detail: "Vérifie s'il inclut bien tout : frais de dossier, courtage, garantie. Évitez les mauvaises surprises."
      },
      {
        label: "Coût total du crédit",
        detail: "Ce que vous payez réellement au-delà du prix du bien."
      },
      {
        label: "Conditions de déblocage",
        detail: "Crucial pour les achats en VEFA (neuf) ou avec travaux."
      }
    ]
  },
  {
    icon: CreditCard,
    title: "Les Clauses de Remboursement",
    subtitle: "Le \"Flex\" du prêt",
    description: "C'est ici que les particuliers perdent souvent de l'argent sans le savoir.",
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-600",
    points: [
      {
        label: "IRA (Indemnités de Remboursement Anticipé)",
        detail: "Détecte si elles sont négociées à zéro ou si elles coûteront une fortune en cas de revente."
      },
      {
        label: "Modularité des échéances",
        detail: "Pouvez-vous augmenter ou baisser vos mensualités selon vos coups durs ?"
      },
      {
        label: "Différé de remboursement",
        detail: "Avez-vous une période de grâce pendant les travaux ?"
      }
    ]
  },
  {
    icon: Shield,
    title: "Les Garanties Bancaires",
    subtitle: "La sécurité du prêteur",
    description: "Comprenez ce que la banque exige en contrepartie de votre prêt.",
    color: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-600",
    points: [
      {
        label: "Hypothèque vs Caution (Crédit Logement)",
        detail: "Différence de coût et modalités de récupération des fonds à la fin du prêt."
      },
      {
        label: "IPPD (Inscription en Privilège de Prêteur)",
        detail: "Traduit simplement : \"priorité de la banque sur la saisie\" en cas de défaut."
      }
    ]
  },
  {
    icon: Home,
    title: "L'Assurance Emprunteur",
    subtitle: "Économies massives possibles",
    description: "Le poste où les économies sont les plus importantes. Chaque détail compte.",
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-600",
    points: [
      {
        label: "Quotité de couverture",
        detail: "Êtes-vous couvert à 100% sur chaque tête (200% total) ? Implications en cas de décès."
      },
      {
        label: "Irrévocabilités de garanties",
        detail: "L'assurance peut-elle changer les tarifs si vous changez de métier ou de sport ?"
      },
      {
        label: "Exclusions (Dos et Psy)",
        detail: "Repère si l'assurance refuse de payer pour burn-out ou mal de dos — les arrêts les plus fréquents."
      }
    ]
  },
  {
    icon: FileCheck,
    title: "Le Volet Assurance",
    subtitle: "Les \"petites lignes\"",
    description: "Le domaine où l'on croit être couvert, alors qu'on ne l'est pas.",
    color: "from-rose-500/20 to-rose-600/10",
    iconColor: "text-rose-600",
    points: [
      {
        label: "Assurance Dommages-Ouvrage (DO)",
        detail: "Essentielle pour une construction de moins de 10 ans. Validité et couverture réelle."
      },
      {
        label: "MRH (Multirisque Habitation)",
        detail: "60 pages d'exclusions : votre cave est-elle vraiment couverte en cas d'inondation ?"
      },
      {
        label: "Délais de carence et franchises",
        detail: "Comprendre les exclusions liées à la santé ou aux métiers \"à risque\"."
      }
    ]
  },
  {
    icon: AlertTriangle,
    title: "Le Compromis de Vente",
    subtitle: "L'engagement",
    description: "30 à 50 pages. Vous ne voyez que le prix, mais les pièges sont ailleurs.",
    color: "from-red-500/20 to-red-600/10",
    iconColor: "text-red-600",
    points: [
      {
        label: "Clauses suspensives",
        detail: "Détecte les clauses mal rédigées qui pourraient vous empêcher de vous rétracter."
      },
      {
        label: "Conditions de rétractation",
        detail: "Vos droits de sortie sont-ils correctement protégés ?"
      },
      {
        label: "Pièges juridiques cachés",
        detail: "Servitudes, droits de préemption, vices de forme..."
      }
    ]
  }
];

const ParticulierDocumentsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            Pour les Particuliers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que Vault <span className="text-primary">décode pour vous</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Des centaines de pages de jargon bancaire et juridique, traduites en alertes claires et actionnables.
          </p>
        </div>

        {/* Notarial Documents Hero Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-primary/5 p-6 sm:p-8 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FolderOpen className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Analyse automatique de votre "Dossier de Notaire"
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    300 à 600 pages scannées et analysées en quelques minutes
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Au lieu de lire les <span className="font-semibold text-foreground">300 à 600 pages</span> de documents que vous envoie le notaire ou l'agent, 
                vous les uploadez sur le Vault. En <span className="font-semibold text-primary">1 à 15 minutes</span>, l'outil scanne tout et extrait les informations critiques.
              </p>

              {/* Notarial documents grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {notarialDocuments.map((doc, idx) => (
                  <div key={idx} className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary/30 transition-colors">
                    <doc.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-semibold text-foreground">{doc.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{doc.detail}</p>
                  </div>
                ))}
              </div>

              {/* Time indicator */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">1 à 15 minutes</span> pour analyser l'intégralité de votre dossier
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section subtitle for banking docs */}
        <div className="text-center mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
            Documents Bancaires & Assurance
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Vault analyse également vos offres de prêt, assurances et contrats
          </p>
        </div>

        {/* Document Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {documentCategories.map((category, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl border border-border bg-card p-6",
                "hover:shadow-xl hover:border-primary/30 transition-all duration-300",
                "hover:-translate-y-1"
              )}
            >
              {/* Gradient background */}
              <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                category.color
              )} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    "bg-gradient-to-br from-primary/10 to-primary/5",
                    "group-hover:from-primary/20 group-hover:to-primary/10 transition-colors"
                  )}>
                    <category.icon className={cn("w-6 h-6", category.iconColor)} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg">{category.title}</h3>
                    <p className="text-sm text-primary font-medium">{category.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Points */}
                <div className="space-y-3">
                  {category.points.map((point, idx) => (
                    <div key={idx} className="group/point">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{point.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {point.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl p-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/20" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">+50 points de contrôle</span> analysés automatiquement en moins de 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParticulierDocumentsSection;
