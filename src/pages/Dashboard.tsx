import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { Trophy, Users, Copy, Zap, Crown, Star } from "lucide-react";

interface UserData {
  email: string;
  name: string;
  position: number;
  referralCode: string;
  referralCount: number;
}

interface RewardTier {
  name: string;
  requiredReferrals: number;
  targetPosition: number;
  icon: any;
  color: string;
}

const REWARD_TIERS: RewardTier[] = [
  { name: "Pioneer", requiredReferrals: 10, targetPosition: 1000, icon: Crown, color: "text-yellow-500" },
  { name: "Innovator", requiredReferrals: 7, targetPosition: 5000, icon: Trophy, color: "text-orange-500" },
  { name: "Early Adopter", requiredReferrals: 3, targetPosition: 10000, icon: Star, color: "text-blue-500" },
  { name: "Beta Member", requiredReferrals: 0, targetPosition: 15000, icon: Zap, color: "text-purple-500" },
];

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  
  const [userData, setUserData] = useState<UserData | null>(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!code) {
      toast({
        title: "❌ Accès refusé",
        description: "Code de parrainage manquant dans l'URL",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    fetchDashboardData();
  }, [code]);

  const fetchDashboardData = async () => {
    try {
      // 1. Données utilisateur
      const { data: user, error: userError } = await supabase
        .from("waitlist")
        .select("*")
        .eq("referral_code", code)
        .single();

      if (userError || !user) {
        toast({
          title: "❌ Code invalide",
          description: "Ce code de parrainage n'existe pas",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // 2. Compte des parrainages
      const { count: referralCount, error: countError } = await supabase
        .from("referrals")
        .select("*", { count: "exact", head: true })
        .eq("referrer_id", user.id);

      // 3. Total des inscrits
      const { count: totalCount } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      setUserData({
        email: user.email,
        name: user.name,
        position: user.position,
        referralCode: user.referral_code,
        referralCount: referralCount || 0,
      });
      setTotalUsers(totalCount || 0);
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        title: "❌ Erreur",
        description: "Impossible de charger les données",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateFinalPosition = () => {
    if (!userData) return 0;
    const positionGained = userData.referralCount * 1500;
    return Math.max(1, userData.position - positionGained);
  };

  const getNextTier = () => {
    if (!userData) return null;
    return REWARD_TIERS.find(tier => userData.referralCount < tier.requiredReferrals);
  };

  const getUnlockedTiers = () => {
    if (!userData) return [];
    return REWARD_TIERS.filter(tier => userData.referralCount >= tier.requiredReferrals);
  };

  const copyReferralLink = () => {
    const link = `${window.location.origin}/waitlist?ref=${userData?.referralCode}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "✅ Lien copié !",
      description: "Partage-le avec tes amis pour grimper dans la liste",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold">Chargement...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Code invalide</h1>
          <Link to="/waitlist">
            <Button>Retour à l'inscription</Button>
          </Link>
        </div>
      </div>
    );
  }

  const finalPosition = calculateFinalPosition();
  const nextTier = getNextTier();
  const unlockedTiers = getUnlockedTiers();
  const progressToNext = nextTier 
    ? (userData.referralCount / nextTier.requiredReferrals) * 100 
    : 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header avec urgence */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-destructive text-destructive-foreground py-3 px-4 text-center font-bold"
      >
        <Users className="inline-block mr-2 h-5 w-5" />
        Total des Inscrits : {totalUsers.toLocaleString('fr-FR')}+ • Places limitées !
      </motion.div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Titre Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            VOTRE STATUT BÊTA AURA AI
          </h1>
          <p className="text-muted-foreground text-lg">Bienvenue {userData.name}</p>
        </motion.div>

        {/* Position Actuelle - GROS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border-4 border-primary rounded-2xl p-8 mb-6 text-center shadow-2xl"
        >
          <div className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
            Votre Position Actuelle
          </div>
          <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-2">
            #{finalPosition.toLocaleString('fr-FR')}
          </div>
          <div className="text-sm text-muted-foreground">
            Position initiale : #{userData.position.toLocaleString('fr-FR')} 
            {userData.referralCount > 0 && (
              <span className="text-primary font-bold ml-2">
                (-{(userData.referralCount * 1500).toLocaleString('fr-FR')} places gagnées !)
              </span>
            )}
          </div>
        </motion.div>

        {/* Lien de Parrainage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl p-6 mb-6 border"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Votre Lien Unique
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 bg-muted p-3 rounded-lg font-mono text-sm break-all">
              {window.location.origin}/waitlist?ref={userData.referralCode}
            </div>
            <Button onClick={copyReferralLink} size="lg" className="whitespace-nowrap">
              <Copy className="mr-2 h-4 w-4" />
              Copier
            </Button>
          </div>
        </motion.div>

        {/* Progression Gamification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl p-6 mb-6 border"
        >
          <h2 className="text-xl font-bold mb-4">Progression</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Parrainages</span>
              <span className="text-2xl font-bold text-primary">{userData.referralCount}</span>
            </div>
            
            {nextTier && (
              <>
                <Progress value={progressToNext} className="h-4 mb-2" />
                <p className="text-sm text-muted-foreground">
                  Il vous manque seulement <span className="font-bold text-foreground">
                    {nextTier.requiredReferrals - userData.referralCount} parrainages
                  </span> pour garantir votre accès au <span className="font-bold text-primary">
                    Top {nextTier.targetPosition.toLocaleString('fr-FR')}
                  </span> !
                </p>
              </>
            )}
          </div>

          {/* Récompenses */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-3">Récompenses</h3>
            {REWARD_TIERS.map((tier, index) => {
              const isUnlocked = userData.referralCount >= tier.requiredReferrals;
              const Icon = tier.icon;
              
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                    isUnlocked 
                      ? 'bg-primary/10 border-primary' 
                      : 'bg-muted/30 border-muted opacity-50'
                  }`}
                >
                  <Icon className={`h-8 w-8 ${isUnlocked ? tier.color : 'text-muted-foreground'}`} />
                  <div className="flex-1">
                    <div className="font-bold">{tier.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Top {tier.targetPosition.toLocaleString('fr-FR')} • {tier.requiredReferrals} parrainages
                    </div>
                  </div>
                  {isUnlocked && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      DÉBLOQUÉ
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
          <Button onClick={copyReferralLink} size="lg" className="text-lg px-8 py-6">
            <Zap className="mr-2 h-5 w-5" />
            Partager maintenant et grimper !
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
