import { User, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type UserType = 'particulier' | 'professionnel';

interface AudienceSelectorProps {
  selectedType: UserType | null;
  onSelect: (type: UserType) => void;
}

const AudienceSelector = ({ selectedType, onSelect }: AudienceSelectorProps) => {
  const options = [
    {
      type: 'particulier' as UserType,
      icon: User,
      title: "Particulier",
      subtitle: "J'achète pour moi ou ma famille",
      description: "Analyse de votre compromis de vente, diagnostics, PV d'AG",
      features: ["1 dossier à analyser", "Usage personnel", "Achat résidence principale ou investissement"],
    },
    {
      type: 'professionnel' as UserType,
      icon: Briefcase,
      title: "Professionnel",
      subtitle: "Je conseille mes clients",
      description: "Outil de différenciation pour agents, notaires, banquiers",
      features: ["Plusieurs dossiers par mois", "Usage commercial", "Agents, chasseurs, notaires, banques"],
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-foreground mb-4">
        Vous êtes... <span className="text-destructive">*</span>
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => {
          const isSelected = selectedType === option.type;
          const Icon = option.icon;
          
          return (
            <motion.button
              key={option.type}
              type="button"
              onClick={() => onSelect(option.type)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-card hover:border-primary/50 hover:bg-accent/50"
              }`}
            >
              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                >
                  <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
              
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {option.subtitle}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default AudienceSelector;
