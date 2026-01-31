import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ClosingSection = () => {
  const costs = [
    {
      label: "Procès pour vice caché",
      amount: "45 000 €",
      detail: "coût moyen"
    },
    {
      label: "Erreur d'urbanisme",
      amount: "3 ans",
      detail: "de chantier gelé"
    },
    {
      label: "Servitude non détectée",
      amount: "30%",
      detail: "de perte de valeur"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Warning Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center border-2 border-destructive/30">
              <AlertTriangle className="h-10 w-10 text-destructive" />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              "Le prix de l'erreur est bien plus élevé{" "}
              <span className="text-destructive">que le prix d'Aurea.</span>"
            </h2>
          </motion.div>

          {/* Cost cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-3 gap-4 mb-12"
          >
            {costs.map((cost, index) => (
              <div
                key={index}
                className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 text-center"
              >
                <p className="text-sm text-muted-foreground mb-2">{cost.label}</p>
                <p className="text-3xl font-bold text-destructive mb-1">{cost.amount}</p>
                <p className="text-xs text-muted-foreground">{cost.detail}</p>
              </div>
            ))}
          </motion.div>

          {/* Value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mb-10"
          >
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              Aurea Vault coûte <span className="font-bold text-primary">une fraction de ces risques</span> et vous offre la{" "}
              <span className="font-bold">tranquillité d'esprit en 30 secondes</span>.
            </p>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 group bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/waitlist">
                <Shield className="mr-2 h-5 w-5" />
                Protéger mon investissement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Rejoignez 4 500+ professionnels et particuliers avertis
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
