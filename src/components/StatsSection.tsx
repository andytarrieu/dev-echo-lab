import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StatsSection = () => {
  const stats = [
    { value: "42", label: "points de contrôle" },
    { value: "60s", label: "temps d'analyse" },
    { value: "95%", label: "problèmes détectés" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Laissez l'IA analyser votre dossier, puis prenez une décision éclairée.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Léon extrait les informations clés de vos documents et les présente de manière claire et actionnable.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link to="/waitlist">
                Commencer un audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-muted/50"
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
