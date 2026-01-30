import { Shield, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarNew from "@/components/NavbarNew";
import WaitlistBadge from "@/components/WaitlistBadge";
import WaitlistForm from "@/components/WaitlistForm";

const Waitlist = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      
      {/* Hero Section - Matching VaultHero style */}
      <section className="pt-24 pb-12 sm:pt-28 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Retour à l'accueil
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Waitlist Badge */}
              <div className="mb-4">
                <WaitlistBadge />
              </div>

              {/* Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">AURÉA Vault</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Créez votre compte{" "}
                <span className="text-primary">AURÉA Vault</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Rejoignez les premiers utilisateurs et accédez à la plateforme de{" "}
                <span className="font-semibold text-foreground">Property Intelligence</span>{" "}
                qui transforme vos dossiers immobiliers complexes en données exploitables.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Analyse ultra-rapide</h3>
                    <p className="text-sm text-muted-foreground">400 pages analysées en 2 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Tous documents supportés</h3>
                    <p className="text-sm text-muted-foreground">Actes notariés, diagnostics, PLU, cadastre...</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sécurité maximale</h3>
                    <p className="text-sm text-muted-foreground">Données chiffrées, hébergement souverain</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">4,500+</p>
                  <p className="text-sm text-muted-foreground">Inscrits</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">1500+</p>
                  <p className="text-sm text-muted-foreground">Sources</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2 min</p>
                  <p className="text-sm text-muted-foreground">Par analyse</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <WaitlistForm />
              
              {/* Login link */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Déjà un compte ?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Se connecter
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
