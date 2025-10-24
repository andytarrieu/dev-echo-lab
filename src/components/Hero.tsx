import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unlock Client Acquisition Growth
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
              We help financial advisors build, grow, and scale their practices with modern marketing, 
              non-salesy referral strategies and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="default"
                className="text-lg group"
                asChild
              >
                <Link to="/contact">
                  Start Growing Your Firm
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg"
                asChild
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="animate-scale-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl font-semibold mb-6">Our Clients Have Seen Growth:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[hsl(var(--stat-card-bg))] rounded-xl p-6">
                  <p className="text-sm text-foreground mb-2">Referral Growth</p>
                  <p className="text-4xl font-bold text-primary">87%</p>
                </div>
                <div className="bg-[hsl(var(--stat-card-bg))] rounded-xl p-6">
                  <p className="text-sm text-foreground mb-2">Client Acquisition</p>
                  <p className="text-4xl font-bold text-primary">58%</p>
                </div>
                <div className="bg-[hsl(var(--stat-card-bg))] rounded-xl p-6">
                  <p className="text-sm text-foreground mb-2">AUM Growth</p>
                  <p className="text-4xl font-bold text-primary">53%</p>
                </div>
                <div className="bg-[hsl(var(--stat-card-bg))] rounded-xl p-6">
                  <p className="text-sm text-foreground mb-2">Revenue Growth</p>
                  <p className="text-4xl font-bold text-primary">53%</p>
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
