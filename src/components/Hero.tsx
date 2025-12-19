import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistBadge from "@/components/WaitlistBadge";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--hero-gradient-start)) 0%, hsl(var(--hero-gradient-end)) 100%)`,
      }}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <div className="mb-4 sm:mb-6">
              <WaitlistBadge />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Achetez en toute sérénité. Décidez avec raison.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-white/90 leading-relaxed">
              5 agents IA qui analysent 1 500+ sources en temps réel pour détecter les pièges cachés, sécuriser vos achats, et vous protéger des arnaques immobilières.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 md:mb-8 border border-white/30">
              <p className="text-sm sm:text-base md:text-lg text-white mb-2">
                <span className="text-white font-bold">Résidence principale ou investissement locatif...</span>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
                Ne vous faites plus arnaquer. Auréa analyse chaque bien en profondeur pour vous.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <Button 
                size="lg" 
                variant="default"
                className="text-sm sm:text-base md:text-lg group w-full sm:w-auto"
                asChild
              >
                <Link to="/waitlist">
                  Réserver mon accès
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-sm sm:text-base md:text-lg w-full sm:w-auto"
                asChild
              >
                <Link to="/services">
                  Voir les Solutions
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="animate-scale-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">Notre Puissance IA :</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="bg-[hsl(var(--stat-card-bg))] rounded-xl p-3 sm:p-4 md:p-6">
                  <p className="text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Sources de Données</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">1500+</p>
                </div>
                <div className="bg-[hsl(var(--stat-card-bg))] rounded-xl p-3 sm:p-4 md:p-6">
                  <p className="text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Agents IA</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">5</p>
                </div>
                <div className="bg-[hsl(var(--stat-card-bg))] rounded-xl p-3 sm:p-4 md:p-6">
                  <p className="text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Types de Biens</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Tous</p>
                </div>
                <div className="bg-[hsl(var(--stat-card-bg))] rounded-xl p-3 sm:p-4 md:p-6">
                  <p className="text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Rapports PDF</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Auto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
