import { useState } from "react";
import { FileSearch, Headphones, AlertTriangle, TrendingDown, Shield, BookOpen, CheckCircle2, Zap, FileText, User, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

type AudienceType = "particulier" | "professionnel";

const FeaturesBentoGrid = () => {
  const [audience, setAudience] = useState<AudienceType>("particulier");

  const audienceContent = {
    particulier: {
      tagline: "Achetez en toute sérénité, sans peur des coûts cachés",
      mainTitle: "Score de Santé Immobilier",
      mainDescription: "Fini la lecture manuelle de 400 pages. Aurea scanne instantanément Compromis, DPE, PV d'AG et État Daté pour vous donner une vision claire.",
      highlights: ["Alertes Rouges", "Charges impayées", "Travaux votés", "Vices juridiques"],
      negotiationExamples: ["DPE classé F → -15% négociable", "Travaux votés → Déduction directe"],
      audioDesc: "Un podcast IA qui résume votre dossier en 5 min. Parfait pour comprendre l'essentiel sans lire 400 pages.",
      jargonDesc: "Traduction instantanée du jargon notarial en langage simple. PPD, servitudes, état daté... tout devient clair.",
      chatDesc: "Dialoguez avec vos documents. Chaque réponse est prouvée par un lien vers le paragraphe exact du document source.",
    },
    professionnel: {
      tagline: "Agents, notaires, investisseurs & courtiers",
      mainTitle: "Audit Automatique Pro",
      mainDescription: "Ce qui prenait 4h à un clerc de notaire prend désormais moins de 2 minutes. Automatisez l'extraction de données pour vos actes.",
      highlights: ["Dossiers pré-remplis", "Extraction données", "Rentabilité réelle", "Risques copro"],
      negotiationExamples: ["État daté incomplet → Demande compléments", "DTG obsolète → Renégociation prix"],
      audioDesc: "Briefez-vous sur un dossier entre deux rendez-vous. Sécurisez vos mandats et accélérez les ventes.",
      jargonDesc: "Watchlist de termes juridiques clés. Détection automatique des clauses critiques dans vos documents.",
      chatDesc: "L'IA ne hallucine pas : elle se base exclusivement sur les documents du Vault. Citations directes garanties.",
    },
  };

  const content = audienceContent[audience];

  const features = [
    {
      icon: AlertTriangle,
      title: content.mainTitle,
      description: content.mainDescription,
      badge: "Audit IA",
      badgeColor: "bg-destructive/10 text-destructive",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      size: "large",
      stats: [
        { label: "Alertes Rouges détectées automatiquement", value: "50+" },
        { label: "Ce qui prenait 4h prend maintenant", value: "2 min" },
      ],
      highlights: content.highlights,
      detailedCategories: audience === "particulier" 
        ? ["🔍 Compromis, DPE, PV d'AG, État Daté", "⚠️ Charges impayées, travaux votés, vices", "📊 Score de Santé du bien immobilier"]
        : ["📋 Dossiers d'audit pré-remplis pour vos mandats", "💰 Rentabilité réelle & risques copropriété", "⚡ Extraction automatisée pour actes & financement"],
    },
    {
      icon: FileSearch,
      title: "IA Conversationnelle",
      description: content.chatDesc,
      badge: "Grounding",
      badgeColor: "bg-primary/10 text-primary",
      colSpan: "",
      rowSpan: "",
      size: "small",
      miniFeature: "Zéro hallucination",
    },
    {
      icon: Headphones,
      title: "Résumé Audio",
      description: content.audioDesc,
      badge: "Innovation",
      badgeColor: "bg-accent/20 text-accent-foreground",
      colSpan: "",
      rowSpan: "",
      size: "small",
      miniFeature: "5 min d'écoute",
    },
    {
      icon: TrendingDown,
      title: "Négociation Stratégique",
      description: audience === "particulier" 
        ? "Rapports d'arguments basés sur les failles détectées. Ajustez le prix d'achat de manière factuelle."
        : "Générez des rapports d'arguments pour ajuster le prix basés sur les failles techniques et juridiques.",
      badge: "Gain €€€",
      badgeColor: "bg-emerald-100 text-emerald-700",
      linkedBadge: "Basé sur les failles détectées",
      colSpan: "md:col-span-2",
      rowSpan: "",
      size: "medium",
      examples: content.negotiationExamples,
    },
    {
      icon: BookOpen,
      title: audience === "particulier" ? "Vulgarisation Juridique" : "Passeport Numérique",
      description: content.jargonDesc,
      badge: audience === "particulier" ? "Clarté" : "Tiers de Confiance",
      badgeColor: "bg-blue-100 text-blue-700",
      colSpan: "",
      rowSpan: "",
      size: "small",
      miniFeature: audience === "particulier" ? "Langage simple" : "Source de vérité unique",
    },
    {
      icon: Shield,
      title: "Coffre-Fort Numérique",
      description: "Vault ultra-sécurisé. Vos documents ne sont jamais utilisés pour entraîner l'IA. Chiffrement AES-256.",
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
        {/* Section Header with Audience Toggle */}
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-primary mb-2">PROPERTY INTELLIGENCE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vous ne lisez plus vos documents : <span className="text-primary">vous dialoguez avec eux.</span>
          </h2>
          
          {/* Audience Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-full gap-1">
            <button
              onClick={() => setAudience("particulier")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                audience === "particulier"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <User className="w-4 h-4" />
              Particuliers
            </button>
            <button
              onClick={() => setAudience("professionnel")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                audience === "professionnel"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Briefcase className="w-4 h-4" />
              Professionnels
            </button>
          </div>
          
          {/* Audience tagline */}
          <p className="text-sm text-muted-foreground mt-3">{content.tagline}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={`${audience}-${index}`}
              className={cn(
                "group relative rounded-2xl border border-border bg-card overflow-hidden",
                "hover:shadow-xl hover:border-primary/30 transition-all duration-300",
                "hover:-translate-y-1",
                feature.colSpan,
                feature.rowSpan,
                feature.size === "large" ? "p-5" : "p-4"
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
                  "font-bold text-foreground mb-1.5",
                  feature.size === "large" ? "text-lg" : "text-base"
                )}>
                  {feature.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground leading-relaxed",
                  feature.size === "large" ? "text-sm mb-4" : "text-xs mb-3"
                )}>
                  {feature.description}
                </p>

                {/* Large card: Stats + Highlights */}
                {feature.size === "large" && feature.stats && (
                  <>
                    {/* Stats with detailed labels */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="bg-muted/50 rounded-lg p-2.5 text-center">
                          <div className="text-xl font-bold text-primary">{stat.value}</div>
                          <div className="text-[10px] text-muted-foreground leading-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Detailed Categories - What Vault analyzes */}
                    {feature.detailedCategories && (
                      <div className="space-y-1.5 mb-3 p-2.5 bg-muted/30 rounded-lg border border-border/50">
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Ce que Vault analyse :</p>
                        {feature.detailedCategories.map((cat: string, idx: number) => (
                          <div key={idx} className="text-xs text-foreground/80">
                            {cat}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Highlights */}
                    {feature.highlights && (
                      <div className="grid grid-cols-2 gap-1.5 mt-auto">
                        {feature.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs">
                            <Zap className="w-3 h-3 text-destructive flex-shrink-0" />
                            <span className="text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Medium card: Examples */}
                {feature.size === "medium" && feature.examples && (
                  <div className="space-y-1.5 mt-auto">
                    {feature.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs text-emerald-800 font-medium">{example}</span>
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
