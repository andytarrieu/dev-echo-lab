import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Calculator, BarChart3, ShieldCheck, CheckCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Services = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("market");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Les 4 Agents IA Immobiliers
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez en détail comment chaque agent IA transforme votre approche de l'investissement immobilier
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
                <TabsTrigger value="market" className="text-sm md:text-base">
                  <Search className="h-4 w-4 mr-2" />
                  Analyseur de Marché
                </TabsTrigger>
                <TabsTrigger value="profitability" className="text-sm md:text-base">
                  <Calculator className="h-4 w-4 mr-2" />
                  Évaluateur
                </TabsTrigger>
                <TabsTrigger value="portfolio" className="text-sm md:text-base">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Gestionnaire
                </TabsTrigger>
                <TabsTrigger value="diligence" className="text-sm md:text-base">
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Due Diligence
                </TabsTrigger>
              </TabsList>

              {/* Agent #1 - Analyseur de Marché */}
              <TabsContent value="market" className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <Search className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl">Agent #1 — L'Analyseur de Marché 🔍</CardTitle>
                        <p className="text-muted-foreground mt-2">
                          Détermine les meilleures zones d'investissement selon ton budget, ton profil et ton type de bien
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Fonctions principales :</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Analyse de marché précise</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Prix au m² pour résidentiel, commercial, industriel ou mixte</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Évolution sur 3–5 ans, tendance haussière/baissière</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Tension du marché et volume de transactions</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Contexte et environnement</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Projets d'urbanisme (zones tertiaires, nouvelles lignes de métro, zones logistiques, etc.)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Données démographiques et économiques locales</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Rentabilité moyenne par typologie (bureaux, logements, entrepôts, commerces)</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Comparateur d'opportunités</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Repère des zones similaires moins chères à fort potentiel</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Compare plusieurs villes selon le rapport rentabilité / risque</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">🚨 Alertes automatiques</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Notification dès qu'un nouveau bien correspond à tes critères d'investissement</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Résumé de marché envoyé directement (prix, prévisions, rendement estimé)</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Prévisions et recommandations</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Projection de l'évolution des prix et loyers</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Estimation de la rentabilité future selon le type de bien</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Suggestion des zones à fort potentiel avant revalorisation</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">📑 Rapport complet</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Rapport clair et visuel avec carte de chaleur, statistiques, et synthèse personnalisée</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Export PDF utilisable pour ton étude de faisabilité ou dossier bancaire</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Agent #2 - Évaluateur de Rentabilité */}
              <TabsContent value="profitability" className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <Calculator className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl">Agent #2 — L'Évaluateur de Rentabilité 💰</CardTitle>
                        <p className="text-muted-foreground mt-2">
                          Évalue la rentabilité réelle et le potentiel d'un bien précis
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Fonctions principales :</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Analyse du bien en détail</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Import automatique des données (adresse, prix, surface, type de bien, état)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Comparaison avec des biens similaires sur le marché local</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Estimation du prix juste et de la marge de négociation</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Calculs financiers automatisés</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Rendement brut, net, net-net</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Cash-flow mensuel (crédit, fiscalité, charges, assurance)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">ROI sur 5, 10 et 15 ans</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Simulation selon différents types de location (meublé, nu, pro, saisonnier)</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Évaluation travaux et valorisation</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Estimation du coût des rénovations et de l'impact sur le loyer</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Simulation du nouveau rendement après amélioration</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Évaluation de la plus-value potentielle à la revente</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">🎯 Score d'investissement</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Note d'opportunité (sur 100)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Recommandations selon ta stratégie (achat-revente, location, patrimonial, tertiaire, etc.)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Prix maximum conseillé et scénario optimal</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">📑 Documents générés automatiquement</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Rapport PDF complet pour la banque avec données du bien, calculs de rentabilité, cash-flow, ROI, travaux</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Stratégie d'exploitation proposée</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">🚨 Alerte nouvelle opportunité</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Message automatique dès qu'un bien similaire répond à ton profil d'investissement (rendement, localisation, type de bien)</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Agent #3 - Gestionnaire de Portfolio */}
              <TabsContent value="portfolio" className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <BarChart3 className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl">Agent #3 — Le Gestionnaire de Portfolio 📊</CardTitle>
                        <p className="text-muted-foreground mt-2">
                          Centralise, suit et optimise ton patrimoine immobilier, tous types confondus
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Fonctions principales :</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Gestion multi-actifs</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Intègre tous types de biens : logements, bureaux, commerces, entrepôts, parkings, etc.</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Synchronisation automatique (valeurs, loyers, crédits, charges)</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Suivi de performance</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Rendement réel vs prévu</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Cash-flow global et individuel</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Plus-value latente de chaque bien</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Classement des biens selon leur rentabilité</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">🚨 Alertes intelligentes</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">📉 Marché en baisse dans une zone</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">📈 Hausse de valeur détectée sur un bien</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">💰 Opportunité similaire détectée (rendement supérieur)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">🔧 Travaux rentables suggérés (amélioration du ROI)</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Optimisation fiscale et stratégique</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Conseils personnalisés selon le statut (LMNP, SCI, société, foncier, etc.)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Recommandations de refinancement ou arbitrage</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Simulation avant/après pour chaque décision</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border md:col-span-2">
                          <CardHeader>
                            <CardTitle className="text-lg">📑 Reporting et documents</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Dashboard global et graphique de performance</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Rapport hebdomadaire ou mensuel envoyé par email</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Document exportable pour présentation à ta banque ou ton conseiller patrimonial</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Agent #4 - Assistant Due Diligence */}
              <TabsContent value="diligence" className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <ShieldCheck className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl">Agent #4 — L'Assistant Due Diligence 🔎</CardTitle>
                        <p className="text-muted-foreground mt-2">
                          Vérifie la conformité, les risques et les coûts cachés avant d'acheter ou d'exploiter un bien
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Fonctions principales :</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Lecture et analyse documentaire automatique</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">DPE, diagnostics techniques, règlements de copropriété, PV d'AG, plans, etc.</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Lecture assistée des rapports pour identifier anomalies et coûts cachés</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">🚨 Détection des risques ("Red Flags")</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Travaux de copropriété, litiges, impayés</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Défauts de conformité (sécurité, électricité, amiante)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Problèmes énergétiques ou structurels</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Estimation des coûts cachés</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Travaux obligatoires et prévus à court terme</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Quote-parts de copropriété à venir</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Budget global à prévoir avant signature</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">Vérification légale et énergétique</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Validité des diagnostics</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Respect des normes pour la location ou l'exploitation commerciale</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Vérification des droits et usages (division, stationnement, mezzanine, etc.)</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">💡 Détection d'opportunités</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Combles ou annexes aménageables</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Division ou changement de destination possible (ex : bureau → logement)</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Ajout d'actifs complémentaires (parking, cave, local, etc.)</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-border">
                          <CardHeader>
                            <CardTitle className="text-lg">📑 Rapport professionnel complet</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Rapport clair "FEU VERT / ORANGE / ROUGE"</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Résumé des points forts, faiblesses et coûts cachés</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <p className="text-muted-foreground">Document PDF de Due Diligence prêt à remettre à la banque ou au notaire</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Vue d'ensemble */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="text-2xl">🧩 Vue d'ensemble des 4 agents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="border-b border-border">
                      <tr>
                        <th className="py-3 px-4 text-foreground">Étape</th>
                        <th className="py-3 px-4 text-foreground">Agent IA</th>
                        <th className="py-3 px-4 text-foreground">Objectif</th>
                        <th className="py-3 px-4 text-foreground">Types de biens</th>
                        <th className="py-3 px-4 text-foreground">Fonctions clés</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 text-muted-foreground">1️⃣</td>
                        <td className="py-4 px-4 font-medium">Analyseur de Marché</td>
                        <td className="py-4 px-4 text-muted-foreground">Trouver où investir</td>
                        <td className="py-4 px-4 text-muted-foreground">Résidentiel, bureaux, entrepôts, commerces</td>
                        <td className="py-4 px-4 text-muted-foreground">Étude marché, prévisions, alertes</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 text-muted-foreground">2️⃣</td>
                        <td className="py-4 px-4 font-medium">Évaluateur de Rentabilité</td>
                        <td className="py-4 px-4 text-muted-foreground">Évaluer un bien précis</td>
                        <td className="py-4 px-4 text-muted-foreground">Tous types de biens</td>
                        <td className="py-4 px-4 text-muted-foreground">Calculs, travaux, ROI, PDF bancaire</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 text-muted-foreground">3️⃣</td>
                        <td className="py-4 px-4 font-medium">Gestionnaire de Portfolio</td>
                        <td className="py-4 px-4 text-muted-foreground">Optimiser ton patrimoine</td>
                        <td className="py-4 px-4 text-muted-foreground">Multi-actifs immobiliers</td>
                        <td className="py-4 px-4 text-muted-foreground">Suivi, alertes, fiscalité, reporting</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-muted-foreground">4️⃣</td>
                        <td className="py-4 px-4 font-medium">Assistant Due Diligence</td>
                        <td className="py-4 px-4 text-muted-foreground">Sécuriser ton achat</td>
                        <td className="py-4 px-4 text-muted-foreground">Résidentiel & professionnel</td>
                        <td className="py-4 px-4 text-muted-foreground">Analyse documents, red flags, PDF pro</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
