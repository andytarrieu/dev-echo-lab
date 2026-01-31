import { FileText, ExternalLink, Quote, CheckCircle2 } from "lucide-react";

const GroundingSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide">GROUNDED AI</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              L'IA qui ne ment jamais
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Contrairement aux chatbots génériques, Vault est <span className="font-semibold text-foreground">limité à vos sources</span>. 
              Si l'information n'est pas dans vos documents, il vous le dit clairement au lieu d'inventer.
            </p>

            <div className="space-y-4">
              {[
                "Chaque réponse cite sa source exacte",
                "Lien cliquable vers la page du PDF",
                "Paragraphe surligné pour vérification",
                "Aucune information inventée"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mock Citation Card */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-6 border border-border shadow-xl">
              {/* Mock Question */}
              <div className="mb-4 pb-4 border-b border-border">
                <p className="text-sm text-muted-foreground mb-1">Votre question :</p>
                <p className="text-foreground font-medium">"Quel est le montant des travaux votés ?"</p>
              </div>
              
              {/* Mock AI Response */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground mb-3">
                      Un ravalement de façade a été voté le 15 mars 2024 pour un montant total de <span className="font-semibold">127 000€</span>. 
                      Votre quote-part s'élève à <span className="font-semibold text-primary">4 200€</span>, avec un appel de fonds prévu au T3 2025.
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 cursor-pointer transition-colors">
                      <FileText className="h-3 w-3" />
                      <span>PV_AG_2024.pdf, Page 12</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transform translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundingSection;
