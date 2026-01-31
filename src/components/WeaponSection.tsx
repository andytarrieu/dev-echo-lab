import { motion } from "framer-motion";
import { MessageSquare, Zap, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeaponItem {
  icon: React.ElementType;
  title: string;
  query: string;
  response: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

const WeaponSection = () => {
  const items: WeaponItem[] = [
    {
      icon: Zap,
      title: "Réponse immédiate, lien direct vers la page",
      query: "Aurea, trouve la clause d'exclusion dans la garantie décennale.",
      response: "Clause trouvée — Article 7.3, page 23. Exclusion des dommages liés aux fondations si étude G2 non réalisée.",
      colSpan: 2,
      hasPersistentHover: true,
    },
    {
      icon: Search,
      title: "Clarté chirurgicale",
      query: "Traduis-moi ce jargon de l'étude de sol G2 en impact financier réel sur mes fondations.",
      response: "Risque élevé de tassement différentiel. Coût estimé des fondations spéciales : 15 000 € à 25 000 € supplémentaires.",
    },
    {
      icon: MessageSquare,
      title: "Croisement de données automatique",
      query: "Est-ce que la surface mentionnée au cadastre correspond exactement à celle du dernier bail signé ?",
      response: "Écart détecté : Cadastre = 87m² | Bail = 92m². Différence de 5m² à clarifier avant signature.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
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

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative p-5 rounded-xl overflow-hidden transition-all duration-300",
                  "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
                  "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
                  "hover:-translate-y-0.5 will-change-transform",
                  item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
                  {
                    "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5": item.hasPersistentHover,
                    "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]": item.hasPersistentHover,
                  }
                )}
              >
                {/* Background pattern */}
                <div className={`absolute inset-0 ${item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                </div>

                <div className="relative flex flex-col space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                      IA Vault
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-base">
                    {item.title}
                  </h3>

                  {/* Query */}
                  <div className="bg-muted/50 rounded-lg p-3 border-l-2 border-primary">
                    <p className="text-xs text-muted-foreground mb-1">Vous demandez :</p>
                    <p className="text-sm text-foreground font-medium italic">"{item.query}"</p>
                  </div>

                  {/* Response */}
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-primary">AV</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.response}
                      </p>
                      <div className="flex items-center gap-1 mt-2 text-primary text-xs font-medium cursor-pointer hover:underline">
                        <span>Voir dans le document</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 ${item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaponSection;
