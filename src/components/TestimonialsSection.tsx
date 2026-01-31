import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Aurea Vault a détecté une servitude de tréfonds enfouie en page 127 du règlement de copropriété. Sans cet outil, mon client aurait signé sans savoir qu'il ne pouvait pas créer de parking souterrain.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Maître Philippe Durand",
    role: "Notaire à Paris",
  },
  {
    text: "En 15 minutes, j'ai eu un rapport complet sur un immeuble de rapport. Avant, je passais une journée entière à éplucher les PV d'AG. C'est un gain de temps considérable.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sophie Martin",
    role: "Investisseur immobilier",
  },
  {
    text: "L'IA a repéré une incohérence entre le DPE et les travaux votés en AG. Le vendeur avait 'oublié' de mentionner le ravalement prévu à 45 000€. J'ai renégocié le prix de 30 000€.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Antoine Lefebvre",
    role: "Chasseur immobilier",
  },
  {
    text: "Mes clients me font davantage confiance depuis que je leur fournis un rapport Aurea Vault. C'est devenu mon argument commercial différenciant face à la concurrence.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Claire Dubois",
    role: "Agent immobilier Century 21",
  },
  {
    text: "La détection automatique des documents manquants nous a évité plusieurs reports de signature. L'attestation d'assurance dommages-ouvrage manquante est notre problème récurrent, et Vault le signale immédiatement.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Thomas Bernard",
    role: "Clerc de notaire",
  },
  {
    text: "Pour mon premier achat, j'étais terrorisée par les 500 pages de documents. Aurea Vault m'a tout expliqué simplement et m'a alertée sur 3 points à négocier. J'ai économisé 8 000€.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Julie Moreau",
    role: "Acheteuse particulière",
  },
  {
    text: "L'analyse croisée entre le diagnostic amiante et les PV d'AG est brillante. L'outil a détecté que le désamiantage voté n'avait jamais été réalisé. Vice caché évité.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Marc Rousseau",
    role: "Avocat en droit immobilier",
  },
  {
    text: "Je gère 47 copropriétés. Aurea Vault me permet de préparer mes AG en quelques heures au lieu de plusieurs jours. Les propriétaires apprécient la clarté des rapports.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Isabelle Petit",
    role: "Syndic de copropriété",
  },
  {
    text: "Le fait que chaque information soit sourcée avec le paragraphe exact du document me rassure. Pas d'hallucination, que des faits. C'est exactement ce dont j'avais besoin.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "François Girard",
    role: "Juriste immobilier",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ce que nos utilisateurs disent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment AURÉA Vault transforme le quotidien des professionnels et particuliers de l'immobilier.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
          <TestimonialsColumn testimonials={secondColumn} duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
