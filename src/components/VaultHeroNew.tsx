import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, User, Briefcase } from "lucide-react";
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
            className="flex justify-center mb-8"
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
            className="inline-flex bg-muted/50 border border-border rounded-lg px-4 py-2 mb-8"
          >
            <p className="text-foreground font-semibold text-sm">
              +de 400 pages analysées en 5 min
            </p>
          </motion.div>

          {/* CTA Buttons - Particulier / Professionnel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 group"
              asChild
            >
              <Link to="/waitlist?type=particulier">
                <User className="mr-2 h-5 w-5" />
                Je suis Particulier
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 group border-2 hover:border-primary hover:bg-primary/5"
              asChild
            >
              <Link to="/waitlist?type=professionnel">
                <Briefcase className="mr-2 h-5 w-5" />
                Je suis Professionnel
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VaultHeroNew;
