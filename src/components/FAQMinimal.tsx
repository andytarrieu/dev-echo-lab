import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQMinimal = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu'est-ce qui différencie Vault d'un ChatGPT classique ?",
      answer: "Vault ne répond qu'à partir de vos documents. Si une information n'est pas dans vos fichiers, il ne l'invente pas. Chaque réponse inclut un lien vers la source exacte.",
    },
    {
      question: "Quels documents puis-je analyser ?",
      answer: "Tous les documents d'une transaction immobilière : DPE, diagnostics, PV d'AG, états datés, titres de propriété, compromis, dossiers bancaires et d'assurance.",
    },
    {
      question: "Mes données sont-elles en sécurité ?",
      answer: "Oui. Chiffrement de bout en bout, environnement isolé. Vos documents ne sont jamais utilisés pour entraîner l'IA et peuvent être supprimés à tout moment.",
    },
    {
      question: "Combien de temps prend une analyse ?",
      answer: "L'analyse initiale prend 30 secondes à 2 minutes selon le volume. Ensuite, les réponses à vos questions sont instantanées.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  className="flex items-center justify-between w-full p-5 text-left hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )} 
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openIndex === index ? "max-h-48" : "max-h-0"
                  )}
                >
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQMinimal;
