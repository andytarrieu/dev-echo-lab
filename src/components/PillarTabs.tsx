import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Building2, 
  Scale, 
  Cpu,
  FileText,
  AlertCircle,
  CheckCircle2,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const PillarTabs = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillars = [
    {
      id: "technique",
      label: "Audit Technique",
      icon: Wrench,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "Analysez la santé physique du bien",
      documents: [
        { name: "DPE", status: "Obligatoire", critical: true },
        { name: "Amiante", status: "Avant 1997" },
        { name: "Plomb", status: "Avant 1949" },
        { name: "Électricité & Gaz", status: "+15 ans" },
        { name: "Termites", status: "Zone à risque" },
        { name: "Assainissement", status: "Fosse/Égout" },
      ],
      alerts: [
        "DPE classé F ou G : interdiction de louer dès 2025",
        "Audit énergétique obligatoire pour les passoires thermiques",
        "Non-conformité électrique détectée",
      ]
    },
    {
      id: "copro",
      label: "Santé Copro",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Décryptez la gestion de l'immeuble",
      documents: [
        { name: "État Daté", status: "Clé", critical: true },
        { name: "PV d'Assemblées (x3)", status: "Obligatoire" },
        { name: "Règlement Copropriété", status: "Lot" },
        { name: "Carnet d'entretien", status: "Historique" },
        { name: "DTG", status: "Diagnostic" },
        { name: "Fiche synthétique", status: "Résumé" },
      ],
      alerts: [
        "Travaux votés non encore appelés : 15 000€",
        "Impayés copropriétaires > 25%",
        "Procédure judiciaire en cours contre le syndic",
      ]
    },
    {
      id: "juridique",
      label: "Risques Juridiques",
      icon: Scale,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Vérifiez le pedigree légal du bien",
      documents: [
        { name: "Titre de propriété", status: "30 ans", critical: true },
        { name: "État hypothécaire", status: "Dettes" },
        { name: "Certificat d'Urbanisme", status: "CU" },
        { name: "Servitudes", status: "Droits" },
        { name: "Cadastre", status: "Limites" },
        { name: "ERP", status: "Risques" },
      ],
      alerts: [
        "Servitude de passage détectée sur le terrain",
        "Droit de préemption urbain actif",
        "Origine de propriété complexe (succession)",
      ]
    },
    {
      id: "lab",
      label: "Lab IA",
      icon: Cpu,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Fonctionnalités avancées & Agents IA",
      documents: [
        { name: "Résumé Audio", status: "Podcast", critical: true },
        { name: "Chat Documents", status: "Q&A" },
        { name: "Comparateur Prix", status: "Marché" },
        { name: "Simulateur Rentabilité", status: "Calcul" },
        { name: "Détecteur d'Annonces", status: "Veille" },
        { name: "Générateur Questions", status: "Notaire" },
      ],
      alerts: [
        "Nouveau : Audio Overview disponible",
        "5 agents IA analysent votre dossier",
        "Export PDF automatique",
      ]
    },
  ];

  return (
    <section 
      id="pillars"
      className={cn(
        "py-8 sm:py-12 bg-muted/30 relative transition-all duration-300",
        isSticky && "pt-20"
      )}
    >
      {/* Visual connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-primary mb-2">TROIS PILIERS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Un seul outil pour trois piliers : <span className="text-primary">Technique, Copropriété et Juridique.</span>
          </h2>
        </div>

        <Tabs defaultValue="technique" className="w-full">
          {/* Sticky Tabs */}
          <div className={cn(
            "transition-all duration-300 z-40",
            isSticky && "fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2"
          )}>
            <div className={cn(
              "mx-auto",
              isSticky && "container px-4"
            )}>
              <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent p-0">
                {pillars.map((pillar) => (
                  <TabsTrigger
                    key={pillar.id}
                    value={pillar.id}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-full border",
                      "data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                      "data-[state=inactive]:border-border data-[state=inactive]:bg-card hover:bg-muted",
                      "transition-all duration-200"
                    )}
                  >
                    <pillar.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{pillar.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Tab Contents */}
          <div className="mt-6">
            {pillars.map((pillar) => (
              <TabsContent 
                key={pillar.id} 
                value={pillar.id}
                className="focus-visible:outline-none"
              >
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {/* Documents List */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", pillar.bgColor)}>
                        <FileText className={cn("w-5 h-5", pillar.color)} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Documents Analysés</h3>
                        <p className="text-sm text-muted-foreground">{pillar.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {pillar.documents.map((doc, idx) => (
                        <div 
                          key={idx}
                          className={cn(
                            "flex items-center justify-between gap-2 p-3 rounded-xl",
                            "bg-muted/50 hover:bg-muted transition-colors",
                            doc.critical && "ring-1 ring-primary/20"
                          )}
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground truncate">{doc.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs flex-shrink-0">
                            {doc.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alerts Preview */}
                  <div className="bg-card rounded-2xl border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", pillar.bgColor)}>
                        <AlertCircle className={cn("w-5 h-5", pillar.color)} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Alertes Détectables</h3>
                        <p className="text-sm text-muted-foreground">Exemples de signaux d'alerte</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {pillar.alerts.map((alert, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5 border border-destructive/10"
                        >
                          <Zap className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{alert}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Cross-reference badge */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          Lié à +50 points de contrôle
                        </Badge>
                        <span>•</span>
                        <span>Citations sources incluses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>

      {/* Visual connector to next section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-primary/20" />
    </section>
  );
};

export default PillarTabs;
