import React, { useState } from "react";

const VaultFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu'est-ce qui différencie AURÉA Vault d'un chatbot classique ?",
      answer: "Le Vault ne discute pas dans le vide : il est ancré dans vos documents. Si une information n'est pas dans le PDF, il ne l'invente pas. Chaque réponse est directement liée à une source vérifiable dans vos fichiers.",
    },
    {
      question: "Comment fonctionne la citation des sources ?",
      answer: "À chaque analyse, un lien cliquable vous renvoie directement à la page et au paragraphe exact du document source. Vous pouvez ainsi vérifier instantanément chaque information extraite par l'IA.",
    },
    {
      question: "Puis-je utiliser AURÉA Vault pour d'autres types d'actifs ?",
      answer: "AURÉA Vault est optimisé pour l'immobilier résidentiel, le commercial et les immeubles de rapport. Notre IA comprend les spécificités de chaque type de bien et adapte son analyse en conséquence.",
    },
    {
      question: "Mes données sont-elles en sécurité ?",
      answer: "Oui, nous utilisons un chiffrement de bout en bout et un environnement isolé. Vos documents ne sont jamais utilisés pour entraîner nos modèles et peuvent être supprimés définitivement dès que vous décidez de fermer votre Vault.",
    },
    {
      question: "Quels types de documents puis-je analyser ?",
      answer: "Vous pouvez importer tous les documents d'une transaction immobilière : DPE, diagnostics techniques (amiante, électricité, gaz...), PV d'Assemblées Générales, états datés, titres de propriété, règlements de copropriété, compromis de vente, et plus encore.",
    },
    {
      question: "Combien de temps prend une analyse ?",
      answer: "L'analyse initiale prend généralement entre 30 secondes et 2 minutes selon le volume de documents. Une fois le Vault constitué, les réponses à vos questions sont quasi instantanées.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Tout ce que vous devez savoir sur AURÉA Vault et comment notre IA sécurise vos investissements immobiliers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <div
                className="flex items-center justify-between w-full cursor-pointer p-6 hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-base font-medium text-foreground pr-4 text-left">
                  {faq.question}
                </h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground"
                  />
                </svg>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm text-muted-foreground px-6 pb-6 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VaultFAQ;
