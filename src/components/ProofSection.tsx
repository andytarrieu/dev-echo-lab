import { Quote, FileText, ExternalLink } from "lucide-react";

const ProofSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-primary mb-2">TRANSPARENCE TOTALE</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Consultez la source, pas seulement l'analyse
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ayez une confiance absolue en chaque donnée. AURÉA Vault ne "génère" pas de texte au hasard : 
              il fournit des <span className="font-semibold text-foreground">citations claires</span>, 
              affichant l'extrait exact de vos PDF en face de chaque réponse.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">Lien cliquable vers la page source</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">Paragraphe exact surligné</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">Zéro information inventée</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mock Citation Card */}
          <div className="relative">
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              {/* Mock Analysis Result */}
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border mb-4">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-2">Analyse DPE</p>
                    <p className="text-sm text-muted-foreground">
                      Le bien est classé <span className="font-semibold text-amber-600">E (252 kWh/m²/an)</span>. 
                      Une rénovation énergétique estimée à 18 000€ permettrait d'atteindre la classe C.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary hover:underline cursor-pointer">
                  <FileText className="h-3 w-3" />
                  <span>Voir Source : DPE_2024.pdf, Page 3</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>

              {/* Mock Analysis Result 2 */}
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-2">Travaux votés en AG</p>
                    <p className="text-sm text-muted-foreground">
                      Ravalement de façade voté le 15/03/2024. Quote-part estimée : 
                      <span className="font-semibold text-foreground"> 4 200€</span> (appel de fonds prévu Q3 2025).
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary hover:underline cursor-pointer">
                  <FileText className="h-3 w-3" />
                  <span>Voir Source : PV_AG_2024.pdf, Page 12</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
