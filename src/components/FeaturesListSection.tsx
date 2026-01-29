import { 
  AlertTriangle, 
  FileSearch, 
  Headphones, 
  TrendingDown, 
  BookOpen, 
  MessageSquare,
  Wrench,
  Building2,
  Scale,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const FeaturesListSection = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "+50 Alertes Détectées",
      description: "Charges cachées, travaux votés, impayés, procédures judiciaires... Notre IA scanne vos documents et identifie tous les risques potentiels.",
      relatedIcons: [Wrench, Building2, Scale],
      relatedLabel: "Couvre Technique, Copro & Juridique",
    },
    {
      icon: FileSearch,
      title: "Citations Sources Vérifiables",
      description: "Chaque alerte renvoie à l'extrait exact de vos PDF. Zéro hallucination, 100% vérifiable. Cliquez et retrouvez le passage original.",
      relatedIcons: [AlertTriangle],
      relatedLabel: "Lié aux 50+ alertes",
    },
    {
      icon: Headphones,
      title: "Résumé Audio Podcast",
      description: "Un podcast IA qui résume votre dossier en 5 minutes. Écoutez en voiture, en marchant, ou partagez-le avec votre famille.",
      relatedIcons: [Cpu],
      relatedLabel: "Propulsé par le Lab IA",
    },
    {
      icon: TrendingDown,
      title: "Arguments de Négociation",
      description: "Fonds travaux ALUR non à jour ? Audit énergétique obligatoire ? Obtenez des arguments factuels pour négocier le prix d'achat.",
      relatedIcons: [AlertTriangle, FileSearch],
      relatedLabel: "Basé sur les alertes & citations",
    },
    {
      icon: BookOpen,
      title: "Jargon Traduit en Français",
      description: "État daté, PPD, servitudes, droit de préemption... Tout le vocabulaire notarial est expliqué simplement pour les non-experts.",
      relatedIcons: [Building2, Scale],
      relatedLabel: "Copro & Juridique simplifiés",
    },
    {
      icon: MessageSquare,
      title: "Questions pour le Notaire",
      description: "Une liste de questions précises à poser lors de votre rendez-vous notaire ou agent, basée sur l'analyse de votre dossier.",
      relatedIcons: [AlertTriangle, TrendingDown],
      relatedLabel: "Généré depuis vos alertes",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">FONCTIONNALITÉS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto">
            Plus qu'un scan : <span className="text-primary">Votre tour de contrôle immobilière.</span>
          </h2>
        </div>

        {/* Features List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-5">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Related Icons Footer */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1.5">
                      {feature.relatedIcons.map((RelatedIcon, idx) => (
                        <div 
                          key={idx}
                          className="w-6 h-6 rounded-md bg-muted flex items-center justify-center"
                        >
                          <RelatedIcon className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {feature.relatedLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesListSection;
