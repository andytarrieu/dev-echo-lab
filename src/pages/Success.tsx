import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Success = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [position, setPosition] = useState<number | null>(null);
  const [referralCode, setReferralCode] = useState<string>("");
  const { toast } = useToast();

  const hasProcessedRef = useRef(false);

  useEffect(() => {
    const upsertWaitlist = async (email: string, name: string) => {
      try {
        setUserName(name);
        setUserEmail(email);

        const { data: existingUser } = await supabase
          .from('waitlist')
          .select('position, referral_code')
          .eq('email', email)
          .maybeSingle();

        if (existingUser) {
          setPosition(existingUser.position);
          setReferralCode(existingUser.referral_code);
          return;
        }

        const newPosition = Math.floor(Math.random() * 8000) + 4000;
        const newReferralCode = Math.random().toString(36).substring(2, 10);

        const { error } = await supabase
          .from('waitlist')
          .insert({
            name,
            email,
            position: newPosition,
            referral_code: newReferralCode
          });

        if (error) {
          console.error("Erreur lors de l'insertion dans la waitlist:", error);
          toast({
            title: "Erreur",
            description: "Impossible d'enregistrer vos données. Veuillez réessayer.",
            variant: "destructive"
          });
          return;
        }

        setPosition(newPosition);
        setReferralCode(newReferralCode);
      } catch (e) {
        console.error(e);
      }
    };

    const handleSession = (session: any) => {
      if (hasProcessedRef.current) return;
      const user = session?.user;
      if (user?.email) {
        hasProcessedRef.current = true;
        const name = user.user_metadata?.full_name || user.user_metadata?.name || "";
        upsertWaitlist(user.email, name);
      }
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSession(session);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle2 className="w-20 h-20 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          Bienvenue, {userName || "Early Adopter"} ! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Merci d'avoir rejoint AURÉA IA
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8"
        >
          <p className="text-foreground mb-4">
            Votre inscription a été confirmée avec succès à l'adresse :
          </p>
          <p className="text-lg font-semibold text-primary mb-4">{userEmail}</p>
          
          {position && (
            <div className="mt-4 pt-4 border-t border-primary/20">
              <p className="text-foreground mb-2">
                Vous êtes actuellement <span className="font-bold text-primary">#{position.toLocaleString('fr-FR')}</span> dans la liste d'attente
              </p>
              {referralCode && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Partagez votre lien unique pour avancer :</p>
                  <p className="text-xs bg-background/50 p-2 rounded break-all font-mono">
                    https://aurea-ai.com/waitlist?ref={referralCode}
                  </p>
                  <div className="mt-3 text-xs space-y-1">
                    <p>• +1 ami = +500 places</p>
                    <p>• +3 amis = Accès anticipé</p>
                    <p>• +5 amis = VIP Early Access</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4 text-left mb-8"
        >
          <h2 className="text-2xl font-semibold text-foreground">Prochaines étapes :</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-muted-foreground">Vous recevrez un email de confirmation dans les prochaines minutes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-muted-foreground">Accès anticipé aux 4 agents IA dès leur lancement</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-muted-foreground">Tarif préférentiel réservé aux early adopters</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-muted-foreground">Support prioritaire et accompagnement personnalisé</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="group"
          >
            Retour à l'accueil
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Success;
