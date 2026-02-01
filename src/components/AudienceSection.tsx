import { motion } from "framer-motion";
import { TrendingUp, Scale, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AudienceSection = () => {
  const audiences = [{
    icon: TrendingUp,
    title: "Investisseurs",
    description: "Analysez 10 fois plus de dossiers sans augmenter votre risque. Détectez les loups avant la fin du délai de rétractation.",
    benefit: "10x plus de dossiers analysés",
    color: "primary"
  }, {
    icon: Scale,
    title: "Professionnels",
    subtitle: "Avocats, Notaires, Agents",
    description: "Divisez votre temps d'audit par 20. Libérez-vous de la relecture de bas étage pour vous concentrer sur la stratégie juridique de haut vol.",
    benefit: "÷20 sur le temps d'audit",
    color: "primary"
  }, {
    icon: User,
    title: "Particuliers",
    description: "Ne soyez plus la proie du jargon. Soyez l'acheteur le plus averti de la table de négociation.",
    benefit: "0 zone d'ombre",
    color: "primary"
  }];
  return <section className="py-12 sm:py-16 bg-muted/30">
      
    </section>;
};
export default AudienceSection;