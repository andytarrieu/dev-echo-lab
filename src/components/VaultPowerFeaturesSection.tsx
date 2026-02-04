import { GitCompare, FileSearch, ClipboardCheck, FileText, Shield, User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AudienceType = "particulier" | "professionnel";

interface VaultPowerFeaturesSectionProps {
  audience?: AudienceType;
  onAudienceChange?: (audience: AudienceType) => void;
  showToggle?: boolean;
}

const VaultPowerFeaturesSection = ({ 
  audience: externalAudience, 
  onAudienceChange,
  showToggle = true 
}: VaultPowerFeaturesSectionProps) => {
  const [internalAudience, setInternalAudience] = React.useState<AudienceType>("particulier");
  const audience = externalAudience ?? internalAudience;
  
  const handleAudienceChange = (newAudience: AudienceType) => {
    if (onAudienceChange) {
      onAudienceChange(newAudience);
    } else {
      setInternalAudience(newAudience);
    }
  };

  const featuresContent = {
    particulier: [
      {
        icon: GitCompare,
        title: "Cross-Check",
        subtitle: "Analyse Croisée",
        description: "Vos documents sont comparés entre eux pour détecter les incohérences cachées.",
        example: "Le Carrez indique 65m² mais l'acte précédent mentionne 63m² ? Alerte immédiate. Les travaux votés en AG ne sont pas provisionnés ? Vous le saurez avant de signer.",
        color: "from-red-500/20 to-red-600/10",
        iconColor: "text-red-500",
        borderColor: "border-red-500/30",
      },
      {
        icon: FileSearch,
        title: "Extracteur de Clauses",
        subtitle: "Résumé de Survie",
        description: "Les informations vitales extraites automatiquement dès l'import de vos documents.",
        example: "5 dates clés (fin rétractation, validité DPE, échéance conditions suspensives) + 3 montants majeurs (charges mensuelles, fonds travaux, taxe foncière).",
        color: "from-amber-500/20 to-amber-600/10",
        iconColor: "text-amber-500",
        borderColor: "border-amber-500/30",
      },
      {
        icon: ClipboardCheck,
        title: "Check-list Acheteur",
        subtitle: "Rien n'est Oublié",
        description: "Vérifiez en un coup d'œil si tous les documents obligatoires sont présents.",
        example: "\"DPE valide : ✓\" — \"Diagnostic plomb parties communes : MANQUANT\" — \"PV AG 2024 : MANQUANT\". Demandez les pièces manquantes avant de vous engager.",
        color: "from-emerald-500/20 to-emerald-600/10",
        iconColor: "text-emerald-500",
        borderColor: "border-emerald-500/30",
      },
      {
        icon: FileText,
        title: "Rapport Clair",
        subtitle: "Tout Comprendre en 5 min",
        description: "Un résumé simple et structuré de votre dossier, sans jargon juridique.",
        example: "Points forts du bien, Risques identifiés (travaux, charges), Questions à poser au vendeur — Le tout en langage clair.",
        color: "from-blue-500/20 to-blue-600/10",
        iconColor: "text-blue-500",
        borderColor: "border-blue-500/30",
      },
      {
        icon: Shield,
        title: "Périmètre de Sécurité",
        subtitle: "Risques Invisibles",
        description: "Découvrez les risques environnementaux que personne ne vous dit.",
        example: "Zone inondable ? Future ligne de métro à 50m ? Usine classée SEVESO à proximité ? L'IA croise l'adresse avec les données publiques.",
        color: "from-purple-500/20 to-purple-600/10",
        iconColor: "text-purple-500",
        borderColor: "border-purple-500/30",
      },
    ],
    professionnel: [
      {
        icon: GitCompare,
        title: "Cross-Check",
        subtitle: "Analyse Croisée",
        description: "Détectez automatiquement les incohérences entre documents avant vos clients.",
        example: "Différence de surface entre Carrez et titre de propriété ? Travaux votés non provisionnés dans l'état daté ? Alertez votre client et sécurisez la transaction.",
        color: "from-red-500/20 to-red-600/10",
        iconColor: "text-red-500",
        borderColor: "border-red-500/30",
      },
      {
        icon: FileSearch,
        title: "Extracteur de Clauses",
        subtitle: "Données Structurées",
        description: "Extraction automatique des données clés pour pré-remplir vos actes et dossiers.",
        example: "Dates critiques (échéances, validités), montants financiers, références cadastrales — Exportables directement vers vos outils métier.",
        color: "from-amber-500/20 to-amber-600/10",
        iconColor: "text-amber-500",
        borderColor: "border-amber-500/30",
      },
      {
        icon: ClipboardCheck,
        title: "Check-list Notariale",
        subtitle: "Conformité Automatique",
        description: "Un tableau de bord qui coche automatiquement ce qui est présent ou manquant.",
        example: "\"Diagnostic plomb parties communes : MANQUANT\" — \"PV d'AG 2024 : ABSENT\". Voyez en un coup d'œil si le dossier est complet pour signer.",
        color: "from-emerald-500/20 to-emerald-600/10",
        iconColor: "text-emerald-500",
        borderColor: "border-emerald-500/30",
      },
      {
        icon: FileText,
        title: "Générateur de Synthèse",
        subtitle: "Mémo Pro en 1 Clic",
        description: "Générez instantanément une note de synthèse professionnelle à destination de l'acheteur.",
        example: "Points forts, Risques identifiés, Travaux à prévoir — Validez, personnalisez et envoyez. Gagnez 2h par dossier.",
        color: "from-blue-500/20 to-blue-600/10",
        iconColor: "text-blue-500",
        borderColor: "border-blue-500/30",
      },
      {
        icon: Shield,
        title: "Périmètre de Sécurité",
        subtitle: "Due Diligence Environnementale",
        description: "Croisez l'adresse avec les bases OpenData pour une analyse de risques complète.",
        example: "Zones réglementées (inondation, PPRI), projets d'urbanisme (PLU, ZAC), servitudes — Intégré automatiquement à votre rapport d'audit.",
        color: "from-purple-500/20 to-purple-600/10",
        iconColor: "text-purple-500",
        borderColor: "border-purple-500/30",
      },
    ],
  };

  const features = featuresContent[audience];

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Intelligence Augmentée
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              5 Super-Pouvoirs pour votre{" "}
              <span className="text-primary">Due Diligence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              {audience === "particulier" 
                ? "Chaque fonctionnalité vous protège des mauvaises surprises et vous donne un avantage décisif."
                : "Chaque fonctionnalité est conçue pour éliminer les angles morts et accélérer vos transactions."
              }
            </p>
            
            {/* Audience Toggle */}
            {showToggle && (
              <div className="inline-flex items-center p-1 bg-muted rounded-full gap-1">
                <button
                  onClick={() => handleAudienceChange("particulier")}
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
                  onClick={() => handleAudienceChange("professionnel")}
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
            )}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={`${audience}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card rounded-2xl border ${feature.borderColor} p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-background border ${feature.borderColor} mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>

                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <span className={`text-sm font-medium ${feature.iconColor}`}>{feature.subtitle}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {feature.description}
                </p>

                {/* Example box */}
                <div className="bg-muted/50 rounded-lg p-3 border border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Exemple : </span>
                    {feature.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Résultat :</span>{" "}
            {audience === "particulier"
              ? "Achetez en toute confiance, négociez avec des arguments solides, évitez les pièges."
              : "Des heures de travail économisées, zéro angle mort, des transactions sécurisées."
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import React from "react";

export default VaultPowerFeaturesSection;
