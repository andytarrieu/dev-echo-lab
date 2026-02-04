import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const ClosingSection = () => {
  const costs = [{
    label: "Procès pour vice caché",
    amount: "45 000 €",
    detail: "coût moyen"
  }, {
    label: "Erreur d'urbanisme",
    amount: "3 ans",
    detail: "de chantier gelé"
  }, {
    label: "Servitude non détectée",
    amount: "30%",
    detail: "de perte de valeur"
  }];
  return <section className="py-10 sm:py-12 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at center, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />
      </div>

      
    </section>;
};
export default ClosingSection;