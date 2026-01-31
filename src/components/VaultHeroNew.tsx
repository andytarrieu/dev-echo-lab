import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FileText, Shield, Brain, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Logos des partenaires
import seloger from "@/assets/logos/seloger.png";
import leboncoin from "@/assets/logos/leboncoin.png";
import century21 from "@/assets/logos/century21.png";
import orpi from "@/assets/logos/orpi-new.png";
import laforet from "@/assets/logos/laforet.png";
import iad from "@/assets/logos/iad.png";

interface FloatingIcon {
  icon: React.ReactNode;
  label: string;
  position: { x: string; y: string };
}

const floatingIcons: FloatingIcon[] = [
  {
    icon: <FileText className="h-6 w-6 text-primary-foreground" />,
    label: "DPE",
    position: { x: "8%", y: "25%" },
  },
  {
    icon: <Shield className="h-6 w-6 text-primary-foreground" />,
    label: "Diagnostics",
    position: { x: "12%", y: "60%" },
  },
  {
    icon: <Brain className="h-6 w-6 text-primary-foreground" />,
    label: "IA",
    position: { x: "82%", y: "20%" },
  },
  {
    icon: <Zap className="h-6 w-6 text-primary-foreground" />,
    label: "Analyse",
    position: { x: "78%", y: "55%" },
  },
];

const brands = [
  { name: "SeLoger", logo: seloger },
  { name: "Leboncoin", logo: leboncoin },
  { name: "Century 21", logo: century21 },
  { name: "Orpi", logo: orpi },
  { name: "Laforêt", logo: laforet },
  { name: "IAD", logo: iad },
];

const VaultHeroNew = () => {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden pt-20",
        "bg-primary"
      )}
    >
      {/* Radial Glow Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--hero-gradient-end)) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute hidden md:flex flex-col items-center gap-2"
            style={{ left: item.position.x, top: item.position.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              {item.icon}
            </div>
            <span className="text-xs font-medium text-primary-foreground/70">
              {item.label}
            </span>
          </motion.div>
        ))}

        <div className="flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground border border-primary-foreground/20">
              <Brain className="h-4 w-4" />
              AURÉA Vault
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Le cerveau{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
                analytique
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-secondary/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </span>
            <br />
            dédié à la donnée immobilière
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl"
          >
            Transformez vos <span className="font-semibold text-primary-foreground">500 pages</span> de diagnostics et documents immobiliers 
            en <span className="font-semibold text-primary-foreground">décisions stratégiques</span> — en moins de 2 minutes.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-lg px-8 py-6 font-semibold"
              asChild
            >
              <Link to="/waitlist">
                Accéder à Auréa Vault
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/70"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-foreground">4,500+</span>
              <span className="text-sm">professionnels inscrits</span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-foreground">0</span>
              <span className="text-sm">hallucination</span>
            </div>
            <div className="h-6 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-foreground">&lt;2min</span>
              <span className="text-sm">par audit</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand Slider */}
      <div className="relative border-t border-primary-foreground/10 bg-primary/50 backdrop-blur-sm py-6">
        {/* "Trusted by" Text */}
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-gradient-to-r from-primary via-primary to-transparent pl-4 pr-8 sm:pl-8 sm:pr-16">
          <span className="whitespace-nowrap text-sm font-medium text-primary-foreground/60">
            Ils nous font confiance
          </span>
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-32 sm:left-48 top-0 z-10 h-full w-16 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-primary to-transparent" />

        {/* Scrolling Brands */}
        <div className="flex animate-slide-logos pl-36 sm:pl-56">
          {/* Duplicate brands for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="mx-8 flex h-10 w-24 shrink-0 items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaultHeroNew;
