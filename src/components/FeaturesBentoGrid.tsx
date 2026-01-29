import { FileSearch, Headphones, AlertTriangle, TrendingDown, Shield, BookOpen, CheckCircle2, Zap, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const FeaturesBentoGrid = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "+50 Alertes Détectées",
      description: "Charges cachées, travaux votés, impayés, procédures judiciaires... Rien n'échappe à notre scan.",
      badge: "Puissance",
      badgeColor: "bg-destructive/10 text-destructive",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      size: "large",
      stats: [
        { label: "Points de contrôle", value: "50+" },
        { label: "Minutes d'analyse", value: "15" },
      ],
      highlights: ["Charges cachées", "Travaux votés", "Impayés copro", "Litiges en cours"],
    },
    {
      icon: FileSearch,
      title: "Citations Sources",
      description: "Chaque alerte renvoie à l'extrait exact de vos PDF. Zéro hallucination, 100% vérifiable.",
      badge: "La Preuve",
      badgeColor: "bg-primary/10 text-primary",
      colSpan: "",
      rowSpan: "",
      size: "small",
      miniFeature: "Page & paragraphe exacts",
    },
    {
      icon: Headphones,
      title: "Résumé Audio Podcast",
      description: "Un podcast IA qui résume votre dossier en 5 minutes. Écoutez en voiture ou en marchant.",
      badge: "Innovation",
      badgeColor: "bg-accent/20 text-accent-foreground",
      colSpan: "",
      rowSpan: "",
      size: "small",
      miniFeature: "5 min d'écoute",
    },
    {
      icon: TrendingDown,
      title: "Arguments de Négociation",
      description: "Fonds travaux ALUR non à jour ? Audit énergétique obligatoire ? Obtenez des arguments factuels pour négocier le prix.",
      badge: "Gain €€€",
      badgeColor: "bg-emerald-100 text-emerald-700",
      linkedBadge: "Basé sur +50 points de contrôle",
      colSpan: "md:col-span-2",
      rowSpan: "",
      size: "medium",
      examples: ["DPE classé F → -15% négociable", "Travaux votés → Déduction directe"],
    },
    {
      icon: BookOpen,
      title: "Jargon Traduit",
      description: "État daté, PPD, servitudes... Tout est expliqué en français simple.",
      badge: "Clarté",
      badgeColor: "bg-blue-100 text-blue-700",
      colSpan: "",
      rowSpan: "",
      size: "small",
      miniFeature: "Glossaire intégré",
    },
    {
      icon: Shield,
      title: "Données Sécurisées",
      description: "Chiffrement AES-256. Vos documents ne sont jamais utilisés pour entraîner l'IA.",
      badge: "Confiance",
      badgeColor: "bg-primary/10 text-primary",
      colSpan: "",
      rowSpan: "",
      size: "small",
      miniFeature: "RGPD compliant",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-background relative">
      {/* Visual connector from hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-primary mb-2">TOUR DE CONTRÔLE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Plus qu'un scan : <span className="text-primary">Votre tour de contrôle immobilière.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl border border-border bg-card overflow-hidden",
                "hover:shadow-xl hover:border-primary/30 transition-all duration-300",
                "hover:-translate-y-1",
                feature.colSpan,
                feature.rowSpan,
                feature.size === "large" ? "p-6 sm:p-8" : "p-5"
              )}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_1px,transparent_1px)] bg-[length:8px_8px]" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={cn(
                    "text-xs font-semibold px-3 py-1.5 rounded-full",
                    feature.badgeColor
                  )}>
                    {feature.badge}
                  </span>
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    "bg-gradient-to-br from-primary/10 to-primary/5",
                    "group-hover:from-primary/20 group-hover:to-primary/10 transition-colors"
                  )}>
                    <feature.icon className={cn(
                      "text-primary",
                      feature.size === "large" ? "w-6 h-6" : "w-5 h-5"
                    )} />
                  </div>
                </div>

                {/* Content */}
                <h3 className={cn(
                  "font-bold text-foreground mb-2",
                  feature.size === "large" ? "text-xl sm:text-2xl" : "text-lg"
                )}>
                  {feature.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground leading-relaxed",
                  feature.size === "large" ? "text-base mb-6" : "text-sm mb-4"
                )}>
                  {feature.description}
                </p>

                {/* Large card: Stats + Highlights */}
                {feature.size === "large" && feature.stats && (
                  <>
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="bg-muted/50 rounded-xl p-4 text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Highlights */}
                    {feature.highlights && (
                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        {feature.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Zap className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
                            <span className="text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Medium card: Examples */}
                {feature.size === "medium" && feature.examples && (
                  <div className="space-y-2 mt-auto">
                    {feature.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 bg-emerald-50 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-emerald-800 font-medium">{example}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Small card: Mini feature */}
                {feature.size === "small" && feature.miniFeature && (
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground">{feature.miniFeature}</span>
                    </div>
                  </div>
                )}

                {/* Linked Badge */}
                {feature.linkedBadge && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                      <AlertTriangle className="w-3 h-3 text-primary" />
                      {feature.linkedBadge}
                    </span>
                  </div>
                )}
              </div>

              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl p-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/20" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual connector to next section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-primary/20" />
    </section>
  );
};

export default FeaturesBentoGrid;
