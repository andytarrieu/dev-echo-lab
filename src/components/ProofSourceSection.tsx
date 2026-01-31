import { motion } from "framer-motion";
import { FileCheck, Lock, Link as LinkIcon, CheckCircle } from "lucide-react";

const ProofSourceSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
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
              Contrairement aux outils classiques qui inventent des réponses, <span className="font-semibold text-foreground">Aurea Vault est ancré dans vos documents</span>.
            </p>
          </motion.div>

          {/* Two Pillars */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Proof of Source */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <LinkIcon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Preuve de source
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Chaque alerte de risque générée est liée par un <span className="font-semibold text-foreground">surlignage dynamique</span> dans le document source. Vérifiez en un clic.
              </p>
              
              {/* Visual demo */}
              <div className="bg-background rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded w-full" />
                  <div className="h-2 bg-muted rounded w-4/5" />
                  <div className="h-4 bg-primary/30 rounded w-3/4 border-l-4 border-primary" />
                  <div className="h-2 bg-muted rounded w-5/6" />
                  <div className="h-2 bg-muted rounded w-2/3" />
                </div>
                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  Page 47, paragraphe 3 — Cliquez pour voir
                </p>
              </div>
            </motion.div>

            {/* Vault Confidentiality */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6">
                <Lock className="h-7 w-7 text-background" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Confidentialité "Vault"
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Votre coffre-fort est inviolable. Vos secrets industriels et personnels sont cryptés selon les <span className="font-semibold text-foreground">standards les plus stricts</span>.
              </p>
              
              {/* Security badges */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Chiffrement AES-256 bout en bout</span>
                </div>
                <div className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Hébergement HDS/RGPD en Europe</span>
                </div>
                <div className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Zéro utilisation pour entraînement IA</span>
                </div>
                <div className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Suppression automatique à la clôture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSourceSection;
