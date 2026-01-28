import { FileSearch, Building2, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const UseCasesSection = () => {
  const useCases = [{
    icon: FileSearch,
    title: "Auditer un dossier technique",
    description: "Importez l'intégralité du Dossier de Diagnostic Technique (DDT). Laissez le Vault extraire les anomalies électriques, la présence d'amiante ou les failles du DPE.",
    highlight: "Sécurisez votre investissement avec une rigueur notariale.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  }, {
    icon: Building2,
    title: "Vérifier la santé de la Copropriété",
    description: "Déposez les 3 derniers PV d'AG et l'état daté. Identifiez instantanément les travaux votés, les procédures judiciaires en cours ou les impayés de charges.",
    highlight: "Anticipez les dépenses futures.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }, {
    icon: Scale,
    title: "Détecter les loups juridiques",
    description: "Analysez les titres de propriété et les règlements de copropriété pour débusquer les servitudes cachées ou les incohérences de surfaces Carrez.",
    highlight: "Ne laissez rien au hasard.",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  }];
  return <section className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">CAS D'USAGE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Comment les acheteurs utilisent AURÉA Vault </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trois piliers d'analyse pour sécuriser chaque transaction immobilière.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${useCase.bgColor} flex items-center justify-center mb-4`}>
                  <useCase.icon className={`h-7 w-7 ${useCase.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed mb-4">
                  {useCase.description}
                </CardDescription>
                <p className="text-sm font-semibold text-foreground">
                  {useCase.highlight}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default UseCasesSection;