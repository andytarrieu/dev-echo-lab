import { FileText, AlertTriangle, History, CheckCircle2, Building2, Wrench, Scale, FileCheck, Mountain, MapPin, HardHat, Shield, Home, Users, Briefcase, Receipt, Gavel } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProfessionalSection = () => {
  const complexDocuments = [
    {
      icon: FileText,
      title: "L'État Daté (et le Pré-état daté)",
      description: "Le document financier de la copropriété. Souvent un tableau illisible avec des colonnes de chiffres.",
      difficulty: "Faire la différence entre les charges \"courantes\", les \"travaux votés non encore payés\", et les sommes que le vendeur doit au syndic.",
      trap: "Confondre ce que l'acheteur devra payer après la vente avec ce que le vendeur doit payer le jour de la vente.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: AlertTriangle,
      title: "Les Diagnostics Techniques (DDT)",
      description: "Si les rapports de plomb ou d'amiante sont clairs, deux autres sont souvent obscurs.",
      bullets: [
        "DPE : Depuis sa réforme, les calculs sont très techniques. Comprendre pourquoi un logement est classé \"F\" plutôt que \"E\" demande de lire des pages d'analyses.",
        "ERP : Contient des cartes géologiques complexes montrant les risques d'inondations, de séismes ou de retrait-gonflement des argiles.",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: History,
      title: "L'Origine de Propriété",
      description: "La section qui raconte l'histoire du bien sur les 30 dernières années.",
      difficulty: "Rédigée dans un style très ancien (\"Par-devant Maître X...\"). Si le bien provient d'une succession complexe, suivre qui possédait quelle part devient un problème d'arithmétique.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  const keyTerms = [
    {
      term: "Servitudes",
      meaning: "Un voisin a un droit sur votre terrain (passage, vue, canalisations).",
    },
    {
      term: "Privilège de Prêteur de Deniers (PPD)",
      meaning: "Une garantie pour la banque (similaire à une hypothèque).",
    },
    {
      term: "Droit de préemption",
      meaning: "La priorité donnée à une mairie ou un locataire pour acheter.",
    },
  ];

  const documentFamilies = [
    {
      icon: Mountain,
      title: "Terrain et Sol",
      subtitle: "L'origine foncière",
      documents: [
        "Extrait de Plan Cadastral (situation de la parcelle)",
        "Modèle 1 Cadastre (fiche d'identité fiscale)",
        "Procès-verbal de Bornage (géomètre + voisins)",
        "Études de sol (G1, G2, G5) - rapports géotechniques",
        "État des Risques et Pollutions (ERP)",
        "Certificat d'alignement (limite domaine public/privé)",
        "Attestation d'accessibilité aux réseaux (eau, électricité, gaz, fibre)",
      ],
      color: "text-amber-700",
      bgColor: "bg-amber-50",
    },
    {
      icon: MapPin,
      title: "Urbanisme",
      subtitle: "Le droit de faire",
      documents: [
        "Note de renseignement d'urbanisme",
        "Certificat d'Urbanisme (Opérationnel ou d'Information)",
        "Dossier de Permis de Construire (PC) complet",
        "Arrêté d'octroi du Permis + prescriptions mairie",
        "Affichage du permis (constat d'huissier)",
        "Déclaration d'Ouverture de Chantier (DOC)",
        "Certificat de non-recours (aucune attaque en justice)",
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: HardHat,
      title: "Construction & Travaux",
      subtitle: "Le technique",
      documents: [
        "CCMI ou Contrat d'Architecte",
        "CCTP (Cahier des Clauses Techniques Particulières)",
        "CCAP (Clauses Administratives - pénalités, paiements)",
        "Marché de travaux (contrat avec chaque artisan)",
        "PPSPS (Plan de sécurité chantier)",
        "PV de Réception de travaux + réserves",
        "DOE (Dossier des Ouvrages Exécutés)",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Shield,
      title: "Assurances",
      subtitle: "La protection",
      documents: [
        "Attestation Dommage-Ouvrage (DO)",
        "Garantie Décennale des constructeurs",
        "Responsabilité Civile Professionnelle (RC Pro)",
        "Garantie Financière d'Achèvement (GFA)",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Scale,
      title: "Vente et Propriété",
      subtitle: "Le transfert juridique",
      documents: [
        "Titre de propriété antérieur (historique 30 ans)",
        "Promesse ou Compromis de vente",
        "État Hypothécaire (Service Publicité Foncière)",
        "DDT complet (Amiante, Plomb, Gaz, Électricité, Termites, DPE)",
        "Notification DPU (réponse mairie)",
        "Décompte de vente (frais notaire + prix)",
        "Acte de vente authentique",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Building2,
      title: "Copropriété",
      subtitle: "Le collectif",
      documents: [
        "Règlement de Copropriété (RC)",
        "État Descriptif de Division (EDD)",
        "Fiche synthétique de la copropriété",
        "Carnet d'entretien de l'immeuble",
        "3 derniers PV d'Assemblées Générales",
        "Diagnostic Technique Global (DTG)",
        "Pré-état daté et État daté",
        "Appels de fonds (charges + travaux)",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Home,
      title: "Location & Gestion",
      subtitle: "L'usage",
      documents: [
        "Bail (Habitation, Commercial, Professionnel, Précaire)",
        "État des lieux (entrée/sortie)",
        "Acte de cautionnement",
        "Quittances de loyer",
        "Avis d'indexation du loyer",
        "Décompte de régularisation des charges",
        "Mandat de gestion",
        "Congé (lettre de rupture par huissier ou RAR)",
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Briefcase,
      title: "Commerce & Entreprise",
      subtitle: "Le professionnel",
      documents: [
        "Kbis de la société",
        "Baux commerciaux",
        "Inventaire du matériel et mobilier",
        "État des créances et dettes",
        "Contrats de travail des salariés (transfert)",
        "Chiffre d'affaires certifié (expert-comptable)",
      ],
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      icon: Receipt,
      title: "Fiscal & Successoral",
      subtitle: "La transmission",
      documents: [
        "Déclaration de succession",
        "Avis de Taxe Foncière",
        "Statuts de la SCI",
        "Registre des décisions de la SCI",
        "Déclaration de plus-value immobilière",
      ],
      color: "text-slate-600",
      bgColor: "bg-slate-100",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gavel className="h-4 w-4" />
            POUR LES PROFESSIONNELS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            70+ types de documents par dossier. Vault les scanne tous.
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Agents immobiliers, notaires, avocats, juristes, banquiers, investisseurs : automatisez l'analyse du "jargon notarial" et gagnez des heures sur chaque dossier.
          </p>
          <p className="text-sm text-muted-foreground mt-3 max-w-3xl mx-auto">
            Développé en collaboration avec des <span className="font-semibold text-foreground">notaires, avocats, juristes, banquiers, assureurs et diagnostiqueurs</span> pour couvrir 100% des cas d'usage.
          </p>
        </div>

        {/* Complex Documents */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Les 3 documents les plus complexes à déchiffrer
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {complexDocuments.map((doc, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl ${doc.bgColor} flex items-center justify-center mb-3`}>
                    <doc.icon className={`h-6 w-6 ${doc.color}`} />
                  </div>
                  <CardTitle className="text-lg text-foreground leading-tight">
                    {doc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {doc.description}
                  </p>
                  {doc.difficulty && (
                    <div className="text-xs bg-muted/50 p-2 rounded-lg">
                      <span className="font-medium text-foreground">Difficulté :</span>{" "}
                      <span className="text-muted-foreground">{doc.difficulty}</span>
                    </div>
                  )}
                  {doc.bullets && (
                    <ul className="space-y-2">
                      {doc.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full ${doc.bgColor} flex-shrink-0`} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {doc.trap && (
                    <div className="text-xs bg-destructive/10 text-destructive p-2 rounded-lg">
                      <span className="font-medium">⚠️ Piège :</span> {doc.trap}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Terms */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Mots-clés qui signalent une difficulté
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {keyTerms.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="font-semibold text-primary mb-2">{item.term}</p>
                <p className="text-xs text-muted-foreground">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist - Document Families */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
            La Checklist Ultime : 9 familles de documents analysées par Vault
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Terrain, urbanisme, construction, assurances, vente, copropriété, location, commerce et fiscal
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {documentFamilies.map((family, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-4 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${family.bgColor} flex items-center justify-center`}>
                      <family.icon className={`h-5 w-5 ${family.color}`} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{family.title}</p>
                      <p className="text-xs text-muted-foreground">{family.subtitle}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-2 pl-14">
                    {family.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-primary/5 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-xl text-foreground font-semibold mb-4">
            Auréa Vault analyse automatiquement ces <span className="text-primary">70+ types de documents</span> en quelques minutes.
          </p>
          <p className="text-muted-foreground mb-2">
            Terrain • Urbanisme • Construction • Assurances • Vente • Copropriété • Location • Commerce • Fiscal
          </p>
          <p className="text-sm text-muted-foreground">
            Gagnez du temps, réduisez les erreurs, impressionnez vos clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
