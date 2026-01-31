import { motion } from "framer-motion";
import { MessageSquare, Zap, Search, ArrowRight } from "lucide-react";

const WeaponSection = () => {
  const dialogues = [
    {
      icon: Zap,
      query: "Aurea, trouve la clause d'exclusion dans la garantie décennale.",
      response: "Clause trouvée — Article 7.3, page 23. Exclusion des dommages liés aux fondations si étude G2 non réalisée.",
      highlight: "Réponse immédiate, lien direct vers la page"
    },
    {
      icon: Search,
      query: "Traduis-moi ce jargon de l'étude de sol G2 en impact financier réel sur mes fondations.",
      response: "Risque élevé de tassement différentiel. Coût estimé des fondations spéciales : 15 000 € à 25 000 € supplémentaires.",
      highlight: "Clarté chirurgicale"
    },
    {
      icon: MessageSquare,
      query: "Est-ce que la surface mentionnée au cadastre correspond exactement à celle du dernier bail signé ?",
      response: "Écart détecté : Cadastre = 87m² | Bail = 92m². Différence de 5m² à clarifier avant signature.",
      highlight: "Croisement de données automatique"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">L'Arme Fatale</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ne subissez plus les 500 pages de votre dossier.{" "}
              <span className="text-primary">Dominez-les.</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Aurea Vault transforme des PDF inertes en une <span className="font-semibold text-foreground">base de connaissances vivante</span>. 
              Vous ne cherchez plus l'information, vous l'exigez.
            </p>
          </motion.div>

          {/* Dialogue Cards */}
          <div className="space-y-6">
            {dialogues.map((dialogue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-background rounded-2xl border border-border overflow-hidden shadow-lg"
              >
                <div className="p-6 sm:p-8">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <dialogue.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{dialogue.highlight}</span>
                  </div>
                  
                  {/* Query */}
                  <div className="bg-muted/50 rounded-xl p-4 mb-4 border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground mb-1">Vous demandez :</p>
                    <p className="text-foreground font-medium italic">"{dialogue.query}"</p>
                  </div>
                  
                  {/* Response */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">AV</span>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-4 flex-1 border border-primary/20">
                      <p className="text-foreground">{dialogue.response}</p>
                      <div className="flex items-center gap-1 mt-3 text-primary text-sm font-medium">
                        <span>Voir dans le document</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
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

export default WeaponSection;
