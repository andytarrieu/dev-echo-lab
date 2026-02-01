import { motion } from "framer-motion";
import { Eye, AlertTriangle, DollarSign, FileWarning } from "lucide-react";

const alerts = [
  {
    icon: AlertTriangle,
    title: "Alerte \"Bombe Juridique\"",
    content:
      "Attention, j'ai détecté une servitude de passage non signalée dans votre compromis mais présente dans l'acte de 1982. Ce type de risque peut remettre en cause toute la transaction.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    icon: DollarSign,
    title: "Alerte \"Désastre Financier\"",
    content:
      "Probabilité élevée : Le diagnostic termites signale une activité passée, mais aucune facture de traitement n'apparaît dans le carnet d'entretien. Risque de coûts cachés importants.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    icon: FileWarning,
    title: "Alerte \"Conformité Critique\"",
    content:
      "Bloquant : Le permis d'urbanisme a été affiché, mais le constat d'huissier est incomplet. Risque de recours prolongé pouvant bloquer votre projet.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
];

const SentinelSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Sentinelle
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Le gardien de votre patrimoine qui ne dort jamais.
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Pendant que vous discutez avec vos documents, Aurea Vault scanne
              chaque ligne en arrière-plan pour détecter les risques que{" "}
              <span className="font-semibold text-foreground">
                personne n'a le temps de corréler manuellement
              </span>
              .
            </p>
          </motion.div>

          {/* Alert Cards */}
          <div className="grid gap-6">
            {alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative p-6 rounded-2xl border ${alert.borderColor} ${alert.bgColor} backdrop-blur-sm`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${alert.bgColor} ${alert.color}`}>
                    <alert.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${alert.color}`}>
                      {alert.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {alert.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SentinelSection;
