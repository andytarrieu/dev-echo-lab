import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { FeatureSteps } from "@/components/ui/feature-steps";

const features = [
  {
    step: "Alerte 1",
    title: "Alerte \"Bombe Juridique\"",
    content:
      "Attention, j'ai détecté une servitude de passage non signalée dans votre compromis mais présente dans l'acte de 1982. Ce type de risque peut remettre en cause toute la transaction.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Alerte 2",
    title: "Alerte \"Désastre Financier\"",
    content:
      "Probabilité élevée : Le diagnostic termites signale une activité passée, mais aucune facture de traitement n'apparaît dans le carnet d'entretien. Risque de coûts cachés importants.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Alerte 3",
    title: "Alerte \"Conformité Critique\"",
    content:
      "Bloquant : Le permis d'urbanisme a été affiché, mais le constat d'huissier est incomplet. Risque de recours prolongé pouvant bloquer votre projet.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
];

const SentinelSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-background relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Sentinelle
              </span>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Pendant que vous discutez avec vos documents, Aurea Vault scanne
              chaque ligne en arrière-plan pour détecter les risques probables
              que{" "}
              <span className="font-semibold text-foreground">
                personne — même un expert — n'a le temps de corréler
                manuellement
              </span>
              .
            </p>
          </motion.div>

          {/* Feature Steps */}
          <FeatureSteps
            features={features}
            title="Le gardien de votre patrimoine qui ne dort jamais."
            autoPlayInterval={5000}
            imageHeight="h-[350px] md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SentinelSection;
