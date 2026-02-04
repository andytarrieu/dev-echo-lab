import { Headphones, Network, FileOutput, Table2 } from "lucide-react";
import { motion } from "framer-motion";

const VaultAdvancedFeaturesSection = () => {
  const features = [
    {
      icon: Headphones,
      title: "Podcast IA",
      subtitle: "Briefing Audio",
      description: "Importez 500 pages et générez un résumé audio de 5 minutes à écouter en voiture ou entre deux rendez-vous.",
      example: "\"Voici le briefing de l'immeuble du 12 rue de la Paix : les points de vigilance sont le ravalement de façade prévu en 2026 et une baisse de rentabilité sur le lot n°4...\"",
      audience: "Idéal pour les pros ultra-pressés (agents, marchands de biens)",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-600/5",
    },
    {
      icon: Network,
      title: "Carte Mentale IA",
      subtitle: "Mind Map Interactive",
      description: "Une visualisation graphique de tout le dossier. Au centre : le bien. Autour : les branches Juridique, Technique, Financier, Copropriété.",
      example: "Cliquez sur \"Travaux\" pour voir tous les devis extraits, sur \"Charges\" pour le détail des appels de fonds.",
      audience: "Comprenez un dossier complexe en un coup d'œil, sans lire une seule ligne",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/5",
    },
    {
      icon: FileOutput,
      title: "Rapports Contextuels",
      subtitle: "Documents Officiels",
      description: "Créez des documents professionnels basés sur les données extraites : rapports de risques, notes de synthèse, mémos clients.",
      example: "\"Générer un rapport de risques pour mon banquier\" ou \"Générer une note de synthèse pour mon client\"",
      audience: "Chaque rapport cite les sources et pages pour une crédibilité absolue",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-500/10 to-orange-600/5",
    },
    {
      icon: Table2,
      title: "Tableaux Dynamiques",
      subtitle: "Export de Données",
      description: "Extraction automatique de toutes les valeurs chiffrées dans un tableau structuré, exportable en Excel.",
      example: "N° du lot | Surface | Loyer | Date de fin de bail — Toutes vos données organisées en colonnes.",
      audience: "Indispensable pour gérer des immeubles de rapport ou des portefeuilles",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/5",
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Fonctionnalités Avancées
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Au-delà de l'Analyse :{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                L'Action
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AURÉA Vault ne se contente pas d'analyser. Il transforme vos données en outils décisionnels immédiatement exploitables.
            </p>
          </motion.div>
        </div>

        {/* Features Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-card border border-border rounded-2xl p-6 lg:p-8 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-5 shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <span className={`text-sm font-medium bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>

                {/* Example Quote */}
                <div className="bg-muted/50 rounded-lg p-4 mb-4 border-l-4 border-primary/50">
                  <p className="text-sm text-foreground/80 italic">
                    {feature.example}
                  </p>
                </div>

                {/* Audience Tag */}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                  <span className="text-sm text-muted-foreground">
                    {feature.audience}
                  </span>
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground max-w-xl mx-auto">
            <span className="font-semibold text-foreground">Toutes ces fonctionnalités</span>{" "}
            sont accessibles en un clic depuis votre tableau de bord Vault.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VaultAdvancedFeaturesSection;
