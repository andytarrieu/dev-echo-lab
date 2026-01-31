import { motion } from "framer-motion";
import { TrendingUp, Scale, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AudienceSection = () => {
  const audiences = [
    {
      icon: TrendingUp,
      title: "Investisseurs",
      description: "Analysez 10 fois plus de dossiers sans augmenter votre risque. Détectez les loups avant la fin du délai de rétractation.",
      benefit: "10x plus de dossiers analysés",
      color: "primary"
    },
    {
      icon: Scale,
      title: "Professionnels",
      subtitle: "Avocats, Notaires, Agents",
      description: "Divisez votre temps d'audit par 20. Libérez-vous de la relecture de bas étage pour vous concentrer sur la stratégie juridique de haut vol.",
      benefit: "÷20 sur le temps d'audit",
      color: "primary"
    },
    {
      icon: User,
      title: "Particuliers",
      description: "Ne soyez plus la proie du jargon. Soyez l'acheteur le plus averti de la table de négociation.",
      benefit: "0 zone d'ombre",
      color: "primary"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Indispensable pour qui ?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Sans Aurea, vous travaillez avec un handicap. Voici comment chaque profil gagne un avantage décisif.
            </p>
          </motion.div>

          {/* Audience Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl border border-border p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <audience.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {audience.title}
                </h3>
                {audience.subtitle && (
                  <p className="text-sm text-muted-foreground mb-4">{audience.subtitle}</p>
                )}
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {audience.description}
                </p>
                
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-primary font-bold text-lg">{audience.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button size="lg" className="group" asChild>
              <Link to="/waitlist">
                Rejoindre la liste d'attente
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
