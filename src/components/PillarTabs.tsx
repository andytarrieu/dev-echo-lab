import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Building2, 
  Scale, 
  Cpu,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Zap,
  FileSearch,
  MessageSquare,
  Shield,
  Upload,
  Sparkles,
  Link2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const PillarTabs = () => {
  const [activePillar, setActivePillar] = useState("technique");

  const pillars = [
    {
      id: "technique",
      label: "Audit Technique",
      icon: Wrench,
      gradient: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      headline: "Santé Physique du Bien",
      subheadline: "Diagnostics obligatoires décryptés en 2 minutes",
      description: "Importez vos diagnostics techniques (DPE, amiante, plomb...). Aurea Vault les analyse et établit des liens entre les anomalies grâce à sa compréhension multimodale.",
      keyPoints: [
        { text: "DPE, Amiante, Plomb, Électricité, Gaz", highlight: true },
        { text: "Termites, Assainissement, ERP", highlight: false },
        { text: "Score de conformité automatique", highlight: false },
      ],
      alerts: [
        "DPE classé F/G → Interdiction de louer dès 2025",
        "Non-conformité électrique détectée",
        "Audit énergétique obligatoire manquant",
      ],
      insightText: "L'IA devient votre expert technique personnel, capable de répondre à toutes vos questions sur l'état du bien.",
      sourceText: "Chaque anomalie détectée est liée à l'extrait exact du diagnostic source. Vérifiez en un clic.",
      stats: { value: "15+", label: "diagnostics analysés" }
    },
    {
      id: "copro",
      label: "Santé Copropriété",
      icon: Building2,
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      headline: "Finances & Gestion Immeuble",
      subheadline: "État Daté et PV d'AG passés au crible",
      description: "Importez l'État Daté et les PV d'Assemblée Générale. Aurea Vault croise les données financières et détecte les incohérences cachées.",
      keyPoints: [
        { text: "Charges impayées, travaux votés", highlight: true },
        { text: "Historique des 3 dernières AG", highlight: false },
        { text: "Santé financière du syndicat", highlight: false },
      ],
      alerts: [
        "Travaux votés non appelés : 15 000€",
        "Impayés copropriétaires > 25%",
        "Procédure judiciaire en cours",
      ],
      insightText: "L'IA synthétise 3 années de PV d'AG et vous alerte sur les décisions qui impactent votre achat.",
      sourceText: "Chaque montant, chaque vote est traçable jusqu'au document original avec numéro de page.",
      stats: { value: "50+", label: "points de contrôle" }
    },
    {
      id: "juridique",
      label: "Risques Juridiques",
      icon: Scale,
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      headline: "Pedigree Légal du Bien",
      subheadline: "30 ans d'historique propriété analysés",
      description: "Importez le compromis et les annexes juridiques. Aurea Vault reconstitue l'historique de propriété et identifie les risques légaux.",
      keyPoints: [
        { text: "Servitudes, hypothèques, préemption", highlight: true },
        { text: "Origine de propriété complexe", highlight: false },
        { text: "Litiges et contentieux passés", highlight: false },
      ],
      alerts: [
        "Servitude de passage sur le terrain",
        "Droit de préemption urbain actif",
        "Succession non réglée détectée",
      ],
      insightText: "L'IA vulgarise le jargon notarial et vous explique les implications concrètes pour votre achat.",
      sourceText: "Chaque clause, chaque servitude est citée avec l'article exact du compromis de vente.",
      stats: { value: "30", label: "années d'historique" }
    },
    {
      id: "lab",
      label: "Lab IA",
      icon: Cpu,
      gradient: "from-primary to-primary/70",
      bgGlow: "bg-primary/10",
      borderColor: "border-primary/20",
      headline: "Intelligence Conversationnelle",
      subheadline: "Dialoguez avec vos documents, obtenez des preuves",
      description: "Posez n'importe quelle question sur vos 400+ pages de documents. L'IA comprend le contexte global et établit des connexions entre tous les thèmes.",
      keyPoints: [
        { text: "Chat contextuel avec citations", highlight: true },
        { text: "Vulgarisation juridique instantanée", highlight: false },
        { text: "Zéro hallucination, 100% sourcé", highlight: false },
      ],
      alerts: [
        "Nouveau : Audio Overview disponible",
        "Générateur de questions notaire",
        "Export PDF rapport complet",
      ],
      insightText: "L'IA devient votre expert immobilier personnel, capable de croiser toutes les informations en temps réel.",
      sourceText: "Chaque réponse affiche les extraits exacts de vos sources. Pas de réponse sans preuve.",
      stats: { value: "2min", label: "pour 400 pages" }
    },
  ];

  const activePillarData = pillars.find(p => p.id === activePillar);

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/50 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5 border-primary/30 text-primary">
            <FileSearch className="w-4 h-4 mr-2" />
            Analyse à 360°
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trois piliers, <span className="text-primary">une vision complète</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque document est analysé sous trois angles complémentaires pour ne rien laisser au hasard.
          </p>
        </div>

        {/* Pillar Selector - Horizontal Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={cn(
                "relative p-5 rounded-2xl border-2 transition-all duration-300 text-left group",
                activePillar === pillar.id
                  ? `${pillar.borderColor} ${pillar.bgGlow} border-2`
                  : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/50"
              )}
            >
              {/* Active indicator */}
              {activePillar === pillar.id && (
                <motion.div
                  layoutId="activePillar"
                  className={cn("absolute inset-0 rounded-2xl", pillar.bgGlow)}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <div className="relative z-10">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all",
                  activePillar === pillar.id
                    ? `bg-gradient-to-br ${pillar.gradient} text-white shadow-lg`
                    : "bg-muted text-muted-foreground group-hover:bg-muted-foreground/20"
                )}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className={cn(
                  "font-semibold text-base mb-1 transition-colors",
                  activePillar === pillar.id ? "text-foreground" : "text-muted-foreground"
                )}>
                  {pillar.label}
                </h3>
                <div className={cn(
                  "text-2xl font-bold",
                  activePillar === pillar.id ? "text-foreground" : "text-muted-foreground/60"
                )}>
                  {pillar.stats.value}
                </div>
                <p className="text-xs text-muted-foreground">{pillar.stats.label}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Pillar Content */}
        <AnimatePresence mode="wait">
          {activePillarData && (
            <motion.div
              key={activePillarData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {/* Left: What's Analyzed */}
              <div className={cn(
                "rounded-2xl border-2 p-6 sm:p-8",
                activePillarData.borderColor,
                activePillarData.bgGlow
              )}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg",
                    activePillarData.gradient
                  )}>
                    <activePillarData.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{activePillarData.headline}</h3>
                    <p className="text-sm text-muted-foreground">{activePillarData.subheadline}</p>
                  </div>
                </div>

                {/* Description - Import your sources */}
                <div className="mb-6 p-4 rounded-xl bg-background/60 border border-border/50">
                  <div className="flex items-start gap-3">
                    <Upload className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Importez vos sources</p>
                      <p className="text-sm text-muted-foreground">{activePillarData.description}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {activePillarData.keyPoints.map((point, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-xl transition-all",
                        point.highlight 
                          ? "bg-background/80 border border-border shadow-sm" 
                          : "bg-background/40"
                      )}
                    >
                      <CheckCircle2 className={cn(
                        "w-5 h-5 flex-shrink-0",
                        point.highlight ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "text-sm",
                        point.highlight ? "font-medium text-foreground" : "text-muted-foreground"
                      )}>
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Insight text */}
                <div className="mt-5 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Insights instantanés</p>
                      <p className="text-sm text-muted-foreground">{activePillarData.insightText}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Alerts Detected */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-destructive/10">
                    <AlertTriangle className="w-7 h-7 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Alertes Rouges</h3>
                    <p className="text-sm text-muted-foreground">Exemples de risques détectés</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activePillarData.alerts.map((alert, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                    >
                      <Zap className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-base text-foreground">{alert}</span>
                    </div>
                  ))}
                </div>

                {/* Source text - Citations */}
                <div className="mt-5 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start gap-3">
                    <Link2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Voir la source, pas seulement la réponse</p>
                      <p className="text-sm text-muted-foreground">{activePillarData.sourceText}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                      Chat pour approfondir
                    </Badge>
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      <ArrowRight className="w-3.5 h-3.5 mr-1.5" />
                      Générer questions notaire
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PillarTabs;
