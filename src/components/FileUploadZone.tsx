import { useState, useRef } from "react";
import { Upload, FileText, X, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
}

const FileUploadZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);
    }
  };

  const addFiles = (newFiles: File[]) => {
    const pdfFiles = newFiles.filter(file => file.type === 'application/pdf');
    const uploadedFiles: UploadedFile[] = pdfFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setFiles(prev => [...prev, ...uploadedFiles]);
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowReport(true);
    }, 3000);
  };

  if (showReport) {
    return <AuditReport onReset={() => { setShowReport(false); setFiles([]); }} />;
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Zone de drop */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300",
            isDragging 
              ? "border-primary bg-primary/5 scale-[1.02]" 
              : "border-border hover:border-primary/50 hover:bg-muted/30",
            files.length > 0 && "pb-6"
          )}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
          
          <div className="flex flex-col items-center gap-4">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
              isDragging ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}>
              <Upload className="h-8 w-8" />
            </div>
            
            <div>
              <p className="text-lg font-semibold text-foreground mb-1">
                Glissez vos documents ici
              </p>
              <p className="text-sm text-muted-foreground">
                ou cliquez pour sélectionner vos fichiers PDF
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
              <span className="px-3 py-1 bg-muted rounded-full">PV d'AG</span>
              <span className="px-3 py-1 bg-muted rounded-full">DPE</span>
              <span className="px-3 py-1 bg-muted rounded-full">Diagnostics</span>
              <span className="px-3 py-1 bg-muted rounded-full">Règlement copro</span>
            </div>
          </div>
        </div>

        {/* Liste des fichiers */}
        {files.length > 0 && (
          <div className="mt-6 space-y-3">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(file.id);
                  }}
                  className="p-1 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                handleAnalyze();
              }}
              className="w-full mt-4 gap-2" 
              size="lg"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Analyse en cours...
                </>
              ) : (
                <>
                  Lancer l'audit
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

// Composant du rapport d'audit
const AuditReport = ({ onReset }: { onReset: () => void }) => {
  const [activeTab, setActiveTab] = useState<'technique' | 'energie' | 'copro' | 'surfaces'>('technique');

  const reportData = {
    score: 72,
    technique: {
      title: "Technique",
      icon: "🔧",
      alerts: [
        { level: "error", text: "Installation électrique non conforme (NF C 15-100)", page: 3 },
        { level: "warning", text: "Présence de plomb dans les peintures (seuil dépassé)", page: 7 },
        { level: "info", text: "Diagnostic gaz valide jusqu'au 15/03/2026", page: 12 },
        { level: "success", text: "Absence d'amiante confirmée", page: 5 },
      ]
    },
    energie: {
      title: "Énergétique",
      icon: "⚡",
      alerts: [
        { level: "warning", text: "DPE classé E - Passoire thermique potentielle", page: 1 },
        { level: "info", text: "Consommation estimée : 312 kWh/m²/an", page: 1 },
        { level: "warning", text: "Travaux recommandés : Isolation combles (5 000€)", page: 4 },
        { level: "warning", text: "Travaux recommandés : Remplacement fenêtres (8 500€)", page: 4 },
      ]
    },
    copro: {
      title: "Copropriété",
      icon: "🏢",
      alerts: [
        { level: "error", text: "Procédure judiciaire en cours contre un copropriétaire", page: 15 },
        { level: "warning", text: "Travaux votés : Ravalement façade (Quote-part : 4 200€)", page: 8 },
        { level: "info", text: "Charges courantes : 180€/mois", page: 2 },
        { level: "info", text: "Fonds travaux : 2 340€ provisionnés", page: 9 },
      ]
    },
    surfaces: {
      title: "Surfaces",
      icon: "📐",
      alerts: [
        { level: "error", text: "Écart détecté : Annonce 65m² vs Carrez 61.2m² (-5.8%)", page: null },
        { level: "warning", text: "Surface DPE (63m²) différente de la Loi Carrez", page: 1 },
        { level: "info", text: "Surface habitable déclarée : 61.2m² (Loi Carrez)", page: 11 },
      ]
    }
  };

  const tabs = [
    { key: 'technique', ...reportData.technique },
    { key: 'energie', ...reportData.energie },
    { key: 'copro', ...reportData.copro },
    { key: 'surfaces', ...reportData.surfaces },
  ] as const;

  const currentData = reportData[activeTab];

  const getLevelStyles = (level: string) => {
    switch (level) {
      case 'error': return 'bg-red-50 border-red-200 text-red-800';
      case 'warning': return 'bg-amber-50 border-amber-200 text-amber-800';
      case 'success': return 'bg-green-50 border-green-200 text-green-800';
      default: return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'error': return '🚨';
      case 'warning': return '⚠️';
      case 'success': return '✅';
      default: return 'ℹ️';
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header du rapport */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            ✅ Analyse terminée
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Rapport d'Audit Léon
          </h2>
          <p className="text-muted-foreground">3 documents analysés • 42 points vérifiés</p>
        </div>

        {/* Score global */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">Score de Qualité du Dossier</p>
          <div className="text-5xl font-bold text-primary mb-2">{reportData.score}/100</div>
          <p className="text-sm text-muted-foreground">
            Ce dossier présente des points d'attention à vérifier avant achat
          </p>
        </div>

        {/* Onglets */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              <span>{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Contenu du rapport */}
        <div className="space-y-3">
          {currentData.alerts.map((alert, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 p-4 rounded-lg border",
                getLevelStyles(alert.level)
              )}
            >
              <span className="text-lg">{getLevelIcon(alert.level)}</span>
              <div className="flex-1">
                <p className="text-sm font-medium">{alert.text}</p>
              </div>
              {alert.page && (
                <button className="text-xs font-medium underline hover:no-underline whitespace-nowrap">
                  Voir PDF p.{alert.page}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button variant="outline" onClick={onReset} className="flex-1">
            Nouvelle analyse
          </Button>
          <Button className="flex-1">
            Télécharger le rapport PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FileUploadZone;
