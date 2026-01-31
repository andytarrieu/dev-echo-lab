import { Headphones, Play, Clock } from "lucide-react";

const AudioFeature = () => {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <Headphones className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-primary">Audio Overview</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Écoutez votre dossier 
                <span className="text-primary"> comme un podcast</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Vault génère une discussion audio entre deux IA qui résument votre dossier immobilier. 
                Parfait pour comprendre l'essentiel en allant au travail.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>5 minutes d'écoute</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>Points clés uniquement</span>
                </div>
              </div>
            </div>

            {/* Mock Audio Player */}
            <div className="relative">
              <div className="bg-background rounded-2xl p-6 border border-border shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">
                    <Play className="h-6 w-6 ml-1" />
                  </button>
                  <div>
                    <p className="font-semibold text-foreground">Résumé Audio</p>
                    <p className="text-sm text-muted-foreground">Appartement 75m² - Paris 11</p>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-primary rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1:42</span>
                    <span>5:18</span>
                  </div>
                </div>
                
                {/* Key points preview */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Points abordés</p>
                  <div className="flex flex-wrap gap-2">
                    {["DPE classé E", "Travaux façade 2025", "Charges 280€/mois"].map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transform translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioFeature;
