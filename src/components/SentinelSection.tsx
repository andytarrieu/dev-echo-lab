import { motion } from "framer-motion";
import { Shield, AlertTriangle, Ban, Scale, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const SentinelSection = () => {
  const alerts = [
    {
      type: "juridique",
      icon: Scale,
      title: "Alerte \"Bombe Juridique\"",
      message: "Attention, j'ai détecté une servitude de passage non signalée dans votre compromis mais présente dans l'acte de 1982.",
      color: "primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/30"
    },
    {
      type: "financier",
      icon: AlertTriangle,
      title: "Alerte \"Désastre Financier\"",
      message: "Probabilité élevée : Le diagnostic termites signale une activité passée, mais aucune facture de traitement n'apparaît dans le carnet d'entretien.",
      color: "amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300"
    },
    {
      type: "conformité",
      icon: Ban,
      title: "Alerte \"Conformité Critique\"",
      message: "Bloquant : Le permis d'urbanisme a été affiché, mais le constat d'huissier est incomplet. Risque de recours prolongé.",
      color: "orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sentinelle</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Le gardien de votre patrimoine{" "}
              <span className="text-primary">qui ne dort jamais.</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Pendant que vous discutez avec vos documents, Aurea Vault scanne chaque ligne en arrière-plan pour détecter les risques probables que <span className="font-semibold text-foreground">personne — même un expert — n'a le temps de corréler manuellement</span>.
            </p>
          </motion.div>

          {/* Animated Sentinel Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/5 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            <div className="relative flex items-center justify-center py-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Alert Cards */}
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={cn(
                  "rounded-xl p-6 border-2 shadow-lg",
                  alert.bgColor,
                  alert.borderColor
                )}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                    alert.type === "juridique" ? "bg-primary/10" : 
                    alert.type === "financier" ? "bg-amber-100" : "bg-orange-100"
                  )}>
                    <alert.icon className={cn(
                      "h-6 w-6",
                      alert.type === "juridique" ? "text-primary" : 
                      alert.type === "financier" ? "text-amber-600" : "text-orange-600"
                    )} />
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-bold text-lg mb-2",
                      alert.type === "juridique" ? "text-primary" : 
                      alert.type === "financier" ? "text-amber-800" : "text-orange-800"
                    )}>
                      {alert.title}
                    </h3>
                    <p className="text-foreground">{alert.message}</p>
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
