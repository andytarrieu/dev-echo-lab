import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { Trophy, Users, Copy, Zap, Crown, Star, LogOut, Shield, FileSearch, Lock } from "lucide-react";

import NavbarNew from "@/components/NavbarNew";

interface UserData {
  email: string;
  name: string;
  position: number;
  referralCode: string;
  referralCount: number;
  userType: 'particulier' | 'professionnel';
}

interface RewardTier {
  name: string;
  requiredReferrals: number;
  targetPosition: number;
  icon: any;
  color: string;
  benefit: string;
}

const REWARD_TIERS: RewardTier[] = [
  { name: "Founding Members", requiredReferrals: 34, targetPosition: 50, icon: Crown, color: "text-primary", benefit: "Accès prioritaire + 6 mois offerts" },
  { name: "Pioneer Status", requiredReferrals: 30, targetPosition: 100, icon: Trophy, color: "text-primary/90", benefit: "Accès prioritaire + 3 mois offerts" },
  { name: "Early Adopters", requiredReferrals: 20, targetPosition: 500, icon: Star, color: "text-primary/80", benefit: "Accès prioritaire + 1 mois offert" },
  { name: "Insiders", requiredReferrals: 15, targetPosition: 1000, icon: Zap, color: "text-primary/70", benefit: "Accès prioritaire + fonctionnalités bêta" },
  { name: "Supporters", requiredReferrals: 10, targetPosition: 5000, icon: Users, color: "text-primary/60", benefit: "Accès anticipé" },
  { name: "Members", requiredReferrals: 5, targetPosition: 10000, icon: Star, color: "text-primary/50", benefit: "Accès standard" },
  { name: "Lancement", requiredReferrals: 3, targetPosition: 15000, icon: Zap, color: "text-muted-foreground", benefit: "Accès au lancement" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user?.email) {
        navigate("/login");
        return;
      }
      
      fetchDashboardData(session.user.email);
    };

    checkAuthAndFetchData();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          navigate("/login");
        } else if (session?.user?.email) {
          fetchDashboardData(session.user.email);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchDashboardData = async (userEmail: string) => {
    try {
      const { data: user, error: userError } = await supabase
        .from("waitlist")
        .select("*")
        .eq("email", userEmail)
        .maybeSingle();

      if (userError) {
        console.error("Error fetching user:", userError);
        toast({
          title: "Erreur",
          description: "Impossible de charger vos données",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (!user) {
        toast({
          title: "Profil introuvable",
          description: "Veuillez d'abord vous inscrire à la liste d'attente",
        });
        navigate("/waitlist");
        return;
      }

      const { count: referralCount } = await supabase
        .from("referrals")
        .select("*", { count: "exact", head: true })
        .eq("referrer_id", user.id);

      const { count: totalCount } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      setUserData({
        email: user.email,
        name: user.name,
        position: user.position,
        referralCode: user.referral_code,
        referralCount: referralCount || 0,
        userType: user.user_type || 'particulier',
      });
      setTotalUsers(totalCount || 0);
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les données",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "À bientôt !",
      description: "Vous avez été déconnecté",
    });
    navigate("/login");
  };

  const calculateFinalPosition = () => {
    if (!userData) return 0;
    const positionGained = userData.referralCount * 1500;
    return Math.max(1, userData.position - positionGained);
  };

  const getNextTier = () => {
    if (!userData) return null;
    const finalPosition = calculateFinalPosition();
    return REWARD_TIERS.find(tier => finalPosition > tier.targetPosition);
  };

  const getCurrentTier = () => {
    if (!userData) return null;
    const finalPosition = calculateFinalPosition();
    return REWARD_TIERS.find(tier => finalPosition <= tier.targetPosition) || REWARD_TIERS[REWARD_TIERS.length - 1];
  };

  const copyReferralLink = () => {
    const link = `${window.location.origin}/waitlist?ref=${userData?.referralCode}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Lien copié !",
      description: "Partage-le avec tes contacts pour grimper dans la liste",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-4"
        >
          <Shield className="h-12 w-12 text-primary" />
          <span className="text-lg font-medium text-muted-foreground">Chargement...</span>
        </motion.div>
      </div>
    );
  }

  if (!userData) {
    return null;
  }

  const finalPosition = calculateFinalPosition();
  const nextTier = getNextTier();
  const currentTier = getCurrentTier();
  
  const referralsToNext = nextTier 
    ? Math.ceil((finalPosition - nextTier.targetPosition) / 1500)
    : 0;
  
  const progressToNext = nextTier 
    ? Math.min(((userData.position - finalPosition) / (userData.position - nextTier.targetPosition)) * 100, 100)
    : 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <NavbarNew />
      <div className="container mx-auto px-4 py-8 max-w-4xl pt-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">AURÉA Vault</h2>
              <p className="text-xs text-muted-foreground/70">
                {userData.userType === 'professionnel' ? 'Compte Professionnel' : 'Compte Particulier'}
              </p>
            </div>
          </div>

          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>

        {/* Titre de bienvenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Bienvenue, <span className="text-primary">{userData.name}</span>
          </h1>
          <p className="text-muted-foreground">
            Votre accès prioritaire à l'intelligence immobilière augmentée
          </p>
        </motion.div>

        {/* Position Actuelle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 mb-6 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10">
            <div className="text-muted-foreground text-sm uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
              <Lock className="h-4 w-4" />
              Position dans la liste d'attente
            </div>
            <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
              #{finalPosition.toLocaleString('fr-FR')}
            </div>
            {currentTier && (
              <div className="mb-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  <currentTier.icon className={`h-5 w-5 ${currentTier.color}`} />
                  <span className="font-semibold">{currentTier.name}</span>
                </div>
              </div>
            )}
            <div className="text-sm text-muted-foreground">
              Position initiale : #{userData.position.toLocaleString('fr-FR')} 
              {userData.referralCount > 0 && (
                <span className="text-primary font-medium ml-2">
                  (-{(userData.referralCount * 1500).toLocaleString('fr-FR')} places gagnées)
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Avantages du Vault */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          <div className="bg-card border border-border rounded-xl p-5">
            <FileSearch className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Audit Automatisé</h3>
            <p className="text-sm text-muted-foreground">Analyse de dossiers complexes en 15 minutes</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Détection de Risques</h3>
            <p className="text-sm text-muted-foreground">Alertes sur les anomalies et vices cachés</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Zap className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Arguments de Négo</h3>
            <p className="text-sm text-muted-foreground">Leviers chiffrés pour négocier le prix</p>
          </div>
        </motion.div>

        {/* Code de Parrainage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl p-6 mb-6 border border-border"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Parrainez et gagnez des places
          </h2>
          
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 mb-4 text-center border border-primary/10">
            <p className="text-sm text-muted-foreground mb-2">Votre code unique</p>
            <div className="text-3xl font-bold font-mono tracking-wider text-primary mb-4">
              {userData.referralCode}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => {
                navigator.clipboard.writeText(userData.referralCode);
                toast({
                  title: "Code copié !",
                  description: "Partage ce code avec tes contacts",
                });
              }} variant="secondary" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                Copier le code
              </Button>
              <Button onClick={copyReferralLink} size="sm">
                <Zap className="mr-2 h-4 w-4" />
                Copier le lien complet
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Chaque parrainage vous fait gagner <span className="font-semibold text-primary">1 500 places</span> dans la liste
          </p>
        </motion.div>

        {/* Progression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl p-6 mb-6 border border-border"
        >
          <h2 className="text-lg font-semibold mb-4">Votre progression</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Parrainages réussis</span>
              <span className="text-2xl font-bold text-primary">{userData.referralCount}</span>
            </div>
            
            {nextTier && (
              <>
                <Progress value={progressToNext} className="h-3 mb-3" />
                <p className="text-sm text-muted-foreground">
                  Encore <span className="font-semibold text-foreground">
                    {referralsToNext} parrainage{referralsToNext > 1 ? 's' : ''}
                  </span> pour atteindre <span className="font-semibold text-primary">
                    {nextTier.name}
                  </span>
                </p>
              </>
            )}
            {!nextTier && (
              <p className="text-sm text-primary font-medium">
                Vous avez débloqué tous les paliers disponibles !
              </p>
            )}
          </div>

          {/* Paliers */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-muted-foreground mb-3">Paliers d'accès</h3>
            {REWARD_TIERS.map((tier, index) => {
              const isUnlocked = finalPosition <= tier.targetPosition;
              const isCurrent = currentTier?.name === tier.name;
              const Icon = tier.icon;
              
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    isUnlocked 
                      ? 'bg-primary/5 border-primary/30' 
                      : isCurrent
                        ? 'bg-accent/50 border-border'
                        : 'bg-muted/20 border-transparent opacity-60'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isUnlocked ? tier.color : 'text-muted-foreground'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{tier.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{tier.benefit}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Top {tier.targetPosition.toLocaleString('fr-FR')}
                  </div>
                  {isUnlocked && (
                    <div className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-medium">
                      ✓
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button onClick={copyReferralLink} size="lg" className="px-8">
            <Zap className="mr-2 h-5 w-5" />
            Partager et grimper dans la liste
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            Plus vous parrainez, plus vite vous accéderez à AURÉA Vault
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
