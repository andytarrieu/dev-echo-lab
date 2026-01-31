import { Vault, FileText, ArrowRight, Search, Brain, Zap } from "lucide-react";

const VaultSolutionSection = () => {
  const documents = [
    "Actes de propriété",
    "Règlements de copropriété",
    "Diagnostics (DPE, ERP, Amiante, Plomb, Gaz, Électricité)",
    "Procès-verbaux d'AG (3 dernières années)",
    "Baux de location",
    "Relevés de charges",
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Vault className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">La solution</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Aurea Vault : Le Coffre-Fort Intelligent
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Aurea Vault n'est pas un simple outil de stockage. C'est une couche d'<span className="font-semibold text-foreground">Intelligence Artificielle Spécialisée</span> (Vertical AI) 
              qui transforme le texte brut en <span className="text-primary font-semibold">décisions stratégiques</span>.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: The Vault Concept */}
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Vault className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Le concept du "Vault"</h3>
                  <p className="text-sm text-muted-foreground">Coffre-fort par projet</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Chaque projet immobilier possède son propre "Vault". L'utilisateur y dépose :
              </p>
              
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                    <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Cross-Analysis Innovation */}
            <div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">L'Analyse Contextuelle Croisée</h3>
                    <p className="text-sm text-primary font-medium">L'innovation Aurea</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Contrairement à une IA standard, <span className="font-semibold text-foreground">Aurea Vault croise les informations entre les documents</span>.
                </p>
                
                {/* Example Flow */}
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-xs font-medium text-primary uppercase tracking-wide mb-3">Exemple concret</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Search className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Détection dans le diagnostic</p>
                        <p className="text-xs text-muted-foreground">"trace d'humidité" mentionnée page 47</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Vérification croisée automatique</p>
                        <p className="text-xs text-muted-foreground">Recherche dans les PV d'AG : un vote pour la réfection de toiture a-t-il été effectué ou rejeté ?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">2 min</div>
                  <div className="text-xs text-muted-foreground">Analyse complète</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Points de contrôle</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-xs text-muted-foreground">Hallucination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultSolutionSection;
