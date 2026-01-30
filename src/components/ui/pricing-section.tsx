"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Star, Building2, CheckCheck, Shield, Users, FileCheck, Clock, Bell, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Particulier",
    description:
      "Pour sécuriser votre achat immobilier en toute sérénité",
    icon: Zap,
    buttonText: "Rejoindre la liste d'attente",
    buttonVariant: "outline" as const,
    audience: "Acheteurs & Vendeurs",
    features: [
      { text: "Coffre-fort numérique sécurisé", icon: <Shield className="size-4" /> },
      { text: "Analyse documentaire IA", icon: <FileCheck className="size-4" /> },
      { text: "Détection des anomalies", icon: <CheckCheck className="size-4" /> },
    ],
    includes: [
      "Inclus :",
      "Stockage illimité de documents",
      "Alertes de sécurité",
      "Support prioritaire",
    ],
  },
  {
    name: "Professionnel",
    description:
      "Pour les agents, notaires et courtiers qui veulent se démarquer",
    icon: Star,
    buttonText: "Rejoindre la liste d'attente",
    buttonVariant: "default" as const,
    popular: true,
    audience: "Agents, Notaires, Juristes",
    features: [
      { text: "Multi-dossiers clients", icon: <Users className="size-4" /> },
      { text: "Rapports professionnels", icon: <FileCheck className="size-4" /> },
      { text: "Intégration CRM", icon: <CheckCheck className="size-4" /> },
    ],
    includes: [
      "Tout Particulier, plus :",
      "Gestion multi-clients",
      "Marque blanche disponible",
      "API d'intégration",
    ],
  },
  {
    name: "Agence",
    description:
      "Pour les équipes et cabinets qui ont besoin d'une solution complète",
    icon: Building2,
    buttonText: "Rejoindre la liste d'attente",
    buttonVariant: "outline" as const,
    audience: "Équipes & Multi-utilisateurs",
    features: [
      { text: "Utilisateurs illimités", icon: <Users className="size-4" /> },
      { text: "Tableau de bord équipe", icon: <FileCheck className="size-4" /> },
      { text: "Gestion des permissions", icon: <Shield className="size-4" /> },
    ],
    includes: [
      "Tout Professionnel, plus :",
      "Administration centralisée",
      "Formation dédiée",
      "Support VIP 24/7",
    ],
  },
];

export default function PricingSection() {
  const pricingRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={pricingRef}
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <TimelineContent animationNum={0} timelineRef={pricingRef}>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Lancement bientôt
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Des formules adaptées à{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              vos besoins
            </span>
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
            Que vous soyez particulier ou professionnel, Aurea Vault vous accompagne
            dans la sécurisation de vos transactions immobilières.
          </p>
        </div>
      </TimelineContent>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            animationNum={index + 1}
            timelineRef={pricingRef}
          >
            <Card
              className={`relative flex h-full flex-col overflow-hidden ${
                plan.popular
                  ? "border-primary shadow-lg ring-2 ring-primary/20"
                  : "border-border"
              }`}
            >
              <CardHeader className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <plan.icon className="h-6 w-6" />
                  </div>

                  {plan.popular && (
                    <Badge className="bg-primary text-primary-foreground">
                      Recommandé
                    </Badge>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <Badge variant="secondary" className="text-xs mt-2">
                    {plan.audience}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground">{plan.description}</p>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-muted-foreground/50">
                    Bientôt
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-6 p-6 pt-0">
                <Button
                  variant={plan.buttonVariant}
                  className="w-full"
                  asChild
                >
                  <Link to="/waitlist" className="gap-2">
                    <Bell className="h-4 w-4" />
                    {plan.buttonText}
                  </Link>
                </Button>
                
                <div className="flex flex-col gap-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {feature.icon}
                      </span>
                      <span className="text-muted-foreground">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
                  <p className="text-sm font-medium text-foreground">
                    {plan.includes[0]}
                  </p>
                  <div className="flex flex-col gap-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary">
                          <CheckCheck className="size-4" />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>

      {/* Early Adopter Section */}
      <TimelineContent animationNum={4} timelineRef={pricingRef}>
        <div className="max-w-2xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Avantages Early Adopter
              </h3>
              <p className="text-muted-foreground mb-6">
                Les premiers inscrits sur la liste d'attente bénéficieront d'avantages exclusifs :
              </p>
              <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCheck className="size-4" />
                  </span>
                  <span className="text-foreground">Réduction sur le premier audit</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCheck className="size-4" />
                  </span>
                  <span className="text-foreground">Accès prioritaire à la plateforme</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCheck className="size-4" />
                  </span>
                  <span className="text-foreground">Fonctionnalités exclusives en avant-première</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/waitlist">Rejoindre la liste d'attente</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </TimelineContent>
    </section>
  );
}
