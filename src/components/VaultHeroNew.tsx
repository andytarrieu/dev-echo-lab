import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WaitlistBadge from "./WaitlistBadge";

const VaultHeroNew = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-background to-primary/5" />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Social proof badge with avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <WaitlistBadge />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8"
          >
            L'intelligence{" "}
            <span className="text-primary">augmentée</span>{" "}
            au service de l'immobilier
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto"
          >
            Votre dossier immobilier devient interactif. Oubliez la lecture manuelle et interrogez directement votre <span className="text-primary font-semibold">"Vault"</span> pour obtenir une <span className="font-semibold text-foreground">analyse de risque chirurgicale</span>.
          </motion.p>

          {/* Warning box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-muted/50 border border-border rounded-xl p-6 mb-10 max-w-2xl mx-auto"
          >
            <p className="text-foreground font-semibold text-lg">
              +de 400 pages analysées en 5 min
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 group"
              asChild
            >
              <Link to="/waitlist">
                <Shield className="mr-2 h-5 w-5" />
                Sécuriser mon dossier maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">2 min</div>
              <div className="text-sm text-muted-foreground mt-1">Audit complet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Points de contrôle</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground mt-1">Hallucination IA</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VaultHeroNew;
