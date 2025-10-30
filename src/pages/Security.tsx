import { Shield, AlertTriangle, BookOpen, Target, Scale, Phone, FileText, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Clause de Non-Responsabilité
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🛡️ CLAUSE DE NON-RESPONSABILITÉ AURÉA
            </h1>
          </div>
          {/* Clause de Non-responsabilité Importante */}
          <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">⚠️ Clause de Non-responsabilité Importante</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Il est crucial de souligner que les contenus et services fournis par Auréa, y compris les analyses et recommandations générées par nos 4 agents IA (Noah, Emma, Lucie et Léon), ne sont en aucun cas conçus pour servir de conseils en investissement, de services d'investissement, ou de services auxiliaires liés à l'investissement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Auréa est un outil d'aide à la décision basé sur l'intelligence artificielle. Nous ne détenons pas le statut de conseiller en gestion de patrimoine indépendant ou de conseiller en investissement financier, et ne sommes donc pas autorisés à dispenser des conseils en investissement ou des services financiers spécialisés.
                </p>
              </div>
            </div>
          </section>

          {/* Usage Éducatif et Informatif */}
          <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">📚 Usage Éducatif et Informatif</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toutes les analyses, projections et recommandations générées par nos agents IA ont une vocation strictement informative et éducative.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les résultats fournis par :
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="text-muted-foreground">👨 <strong>Noah</strong> (Chasseur d'Opportunités)</li>
                  <li className="text-muted-foreground">👩 <strong>Emma</strong> (Calculatrice Impitoyable)</li>
                  <li className="text-muted-foreground">👩 <strong>Lucie</strong> (Optimiseuse de Patrimoine)</li>
                  <li className="text-muted-foreground">👨 <strong>Léon</strong> (Détecteur de Pièges)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ...sont de nature générale et ne prennent pas en considération l'intégralité de vos objectifs personnels, votre situation financière spécifique, votre tolérance au risque ou vos besoins particuliers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Par conséquent, il est impératif de ne pas se baser uniquement sur les informations fournies par Auréa pour prendre des décisions d'investissement sans consultation préalable d'un professionnel qualifié.
                </p>
              </div>
            </div>
          </section>

          {/* Sources Fiables et Vérifications Nécessaires */}
          <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">🔍 Sources Fiables et Vérifications Nécessaires</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les analyses d'Auréa s'appuient sur plus de 1 500 sources de données, incluant :
                </p>
                <ul className="space-y-2 mb-6 ml-6">
                  <li className="text-muted-foreground">• Données notariales officielles (DVF)</li>
                  <li className="text-muted-foreground">• APIs immobilières certifiées</li>
                  <li className="text-muted-foreground">• Statistiques INSEE</li>
                  <li className="text-muted-foreground">• Projets d'urbanisme publics</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cependant, nous soulignons l'importance de :
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Vérifier personnellement les informations présentées</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Consulter les documents officiels fournis par les institutions publiques et privées</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Faire appel à des professionnels qualifiés (notaire, expert-comptable, avocat fiscaliste)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Visiter physiquement les biens avant tout achat</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Effectuer vos propres analyses complémentaires</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Les documents officiels des institutions publiques et privées restent les seules sources auditées et fiables pour évaluer définitivement la rentabilité d'un bien immobilier et sa conformité légale.
                </p>
              </div>
            </div>
          </section>

          {/* Rôle d'Auréa */}
          <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <Target className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">🎯 Rôle d'Auréa</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Auréa et ses 4 agents IA ont pour objectif de :
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Vous faire gagner du temps dans vos recherches</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Vous fournir des données agrégées et analysées automatiquement</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Vous alerter sur des points de vigilance potentiels</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Vous donner des pistes d'analyse pour vos décisions</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mais Auréa ne remplace pas :
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Un notaire pour sécuriser juridiquement votre achat</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Un expert-comptable pour optimiser votre fiscalité</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Un banquier pour valider votre financement</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Un expert en bâtiment pour diagnostiquer l'état réel d'un bien</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Votre propre jugement et votre diligence raisonnable</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations et Responsabilités */}
          <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <Scale className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">⚖️ Limitations et Responsabilités</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Auréa et ses agents IA travaillent sur la base de données disponibles publiquement et via nos partenaires.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous ne pouvons garantir :
                </p>
                <ul className="space-y-2 mb-6 ml-6">
                  <li className="text-muted-foreground">• L'exactitude à 100% des données fournies par des tiers</li>
                  <li className="text-muted-foreground">• L'exhaustivité des informations sur chaque bien</li>
                  <li className="text-muted-foreground">• La prédiction exacte de l'évolution future des marchés</li>
                  <li className="text-muted-foreground">• L'absence totale de vices cachés non détectables dans les documents</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les projections financières générées par Emma (jusqu'à 35 ans) sont basées sur des hypothèses et des données historiques. Les performances passées ne garantissent pas les résultats futurs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L'utilisateur reconnaît utiliser Auréa à ses propres risques et s'engage à effectuer ses propres vérifications avant toute décision d'investissement.
                </p>
              </div>
            </div>
          </section>

          {/* Recommandations Avant Tout Investissement */}
          <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <Phone className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">📞 Recommandations Avant Tout Investissement</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Avant de finaliser un investissement immobilier, nous vous recommandons vivement de :
                </p>
                <ol className="space-y-2 mb-4 ml-6 list-decimal">
                  <li className="text-muted-foreground">Consulter un notaire pour vérifier les aspects juridiques</li>
                  <li className="text-muted-foreground">Faire appel à un expert-comptable pour l'optimisation fiscale</li>
                  <li className="text-muted-foreground">Visiter le bien physiquement avec un professionnel du bâtiment si nécessaire</li>
                  <li className="text-muted-foreground">Vérifier auprès de votre banque la faisabilité de votre financement</li>
                  <li className="text-muted-foreground">Lire attentivement tous les documents officiels (compromis, diagnostics, règlement de copropriété)</li>
                  <li className="text-muted-foreground">Prendre le temps nécessaire pour une décision aussi importante</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Votre Sécurité Avant Tout */}
          <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">🛡️ Votre Sécurité Avant Tout</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Auréa est un outil puissant qui vous donne un avantage informationnel considérable. Mais la responsabilité finale de vos décisions d'investissement vous appartient.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilisez Auréa intelligemment :
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Comme un assistant qui accélère vos recherches</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Comme un filtre qui identifie les opportunités et les risques</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Comme un outil de validation de vos intuitions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Mais jamais comme votre seule source de décision</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Acceptation des Conditions */}
          <section className="mb-16">
            <div className="bg-muted/50 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">📄 Acceptation des Conditions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En utilisant Auréa et ses agents IA, vous reconnaissez avoir lu, compris et accepté cette clause de non-responsabilité. Vous comprenez qu'Auréa est un outil d'information et d'analyse, et non un service de conseil en investissement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question juridique sur l'utilisation d'Auréa, consultez nos Conditions Générales d'Utilisation complètes.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
