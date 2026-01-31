"use client";

import { motion } from "framer-motion";
import { Warp } from "@paper-design/shaders-react";
import { FileCheck, Lock, Link as LinkIcon, Shield, Server, Trash2, Brain } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Preuve de source",
    description:
      "Chaque alerte de risque est liée par un surlignage dynamique dans le document source. Vérifiez en un clic.",
    icon: <LinkIcon className="w-5 h-5" />,
  },
  {
    title: "Chiffrement AES-256",
    description: "Vos données sont cryptées bout en bout selon les standards les plus stricts du marché.",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    title: "Hébergement HDS/RGPD",
    description: "Infrastructure sécurisée hébergée en Europe, conforme aux normes de santé et RGPD.",
    icon: <Server className="w-5 h-5" />,
  },
  {
    title: "Zéro hallucination IA",
    description: "Contrairement aux outils classiques, Aurea Vault est ancré dans vos documents uniquement.",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: "Confidentialité Vault",
    description: "Votre coffre-fort est inviolable. Vos secrets industriels et personnels restent protégés.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Suppression automatique",
    description: "Vos documents sont automatiquement supprimés à la clôture du dossier. Aucune trace.",
    icon: <Trash2 className="w-5 h-5" />,
  },
];

const ProofSourceSection = () => {
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(185, 65%, 18%)", "hsl(185, 80%, 35%)", "hsl(180, 60%, 25%)", "hsl(185, 70%, 45%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "stripes" as const,
        shapeScale: 0.12,
        colors: ["hsl(185, 100%, 15%)", "hsl(180, 100%, 40%)", "hsl(175, 90%, 25%)", "hsl(185, 100%, 50%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "edge" as const,
        shapeScale: 0.1,
        colors: ["hsl(180, 80%, 20%)", "hsl(185, 90%, 40%)", "hsl(175, 70%, 30%)", "hsl(180, 85%, 50%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "checks" as const,
        shapeScale: 0.09,
        colors: ["hsl(185, 65%, 22%)", "hsl(180, 80%, 45%)", "hsl(175, 60%, 30%)", "hsl(185, 75%, 55%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "stripes" as const,
        shapeScale: 0.11,
        colors: ["hsl(185, 70%, 18%)", "hsl(180, 85%, 38%)", "hsl(175, 65%, 28%)", "hsl(185, 80%, 48%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "edge" as const,
        shapeScale: 0.13,
        colors: ["hsl(180, 75%, 20%)", "hsl(185, 90%, 42%)", "hsl(175, 70%, 32%)", "hsl(180, 85%, 52%)"],
      },
    ];
    return configs[index % configs.length];
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">La Preuve par la Source</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              L'intelligence artificielle,{" "}
              <span className="text-primary">la rigueur notariale</span> en plus.
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Contrairement aux outils classiques qui inventent des réponses,{" "}
              <span className="font-semibold text-foreground">Aurea Vault est ancré dans vos documents</span>.
            </p>
          </motion.div>

          {/* Shader Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const shaderConfig = getShaderConfig(index);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Shader Background */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                    <Warp
                      speed={0.2}
                      {...shaderConfig}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      En savoir plus
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSourceSection;
