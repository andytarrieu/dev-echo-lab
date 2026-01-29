import { FileSearch, Headphones, AlertTriangle, TrendingDown, Shield, BookOpen } from "lucide-react";
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
                "group relative p-5 rounded-2xl border border-border bg-card",
                "hover:shadow-lg hover:border-primary/20 transition-all duration-300",
                "hover:-translate-y-1",
                feature.colSpan,
                feature.rowSpan
              )}
            >
              {/* Background pattern on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[length:8px_8px]" />
              </div>

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={cn(
                    "text-xs font-medium px-2.5 py-1 rounded-full",
                    feature.badgeColor
                  )}>
                    {feature.badge}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    "bg-primary/5 group-hover:bg-primary/10 transition-colors"
                  )}>
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className={cn(
                  "font-semibold text-foreground mb-2",
                  feature.size === "large" ? "text-xl sm:text-2xl" : "text-lg"
                )}>
                  {feature.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground leading-relaxed",
                  feature.size === "large" ? "text-base" : "text-sm"
                )}>
                  {feature.description}
                </p>

                {/* Linked Badge */}
                {feature.linkedBadge && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <AlertTriangle className="w-3 h-3 text-primary" />
                      {feature.linkedBadge}
                    </span>
                  </div>
                )}
              </div>

              {/* Gradient border effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl p-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
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
