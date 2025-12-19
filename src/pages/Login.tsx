import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail, Sparkles, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const navigate = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          navigate("/dashboard");
        }
        setCheckingAuth(false);
      }
    );

    // Check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/dashboard");
      }
      setCheckingAuth(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const trimmedEmail = email.trim().toLowerCase();

    try {
      // First check if the email exists in the waitlist
      const { data: user, error: checkError } = await supabase
        .from("waitlist")
        .select("email")
        .eq("email", trimmedEmail)
        .maybeSingle();

      if (checkError) {
        console.error("Error checking waitlist:", checkError);
        toast({
          title: "❌ Erreur",
          description: "Impossible de vérifier votre email",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (!user) {
        toast({
          title: "❌ Email non trouvé",
          description: "Cet email n'est pas inscrit. Rejoignez d'abord la liste d'attente.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Send magic link
      const redirectUrl = `${window.location.origin}/dashboard`;
      const { error } = await supabase.auth.signInWithOtp({
        email: trimmedEmail,
        options: {
          emailRedirectTo: redirectUrl,
        },
      });

      if (error) {
        console.error("Magic link error:", error);
        toast({
          title: "❌ Erreur",
          description: error.message || "Impossible d'envoyer le lien de connexion",
          variant: "destructive",
        });
      } else {
        setMagicLinkSent(true);
        toast({
          title: "✅ Lien envoyé !",
          description: "Vérifiez votre boîte mail pour vous connecter",
        });
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "❌ Erreur",
        description: error.message || "Impossible de se connecter",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-md pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-black mb-3 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Connexion au Dashboard
          </h1>
          <p className="text-muted-foreground">
            Entrez votre email pour recevoir un lien de connexion magique
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl p-8 border shadow-lg"
        >
          {magicLinkSent ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Vérifiez votre boîte mail</h2>
              <p className="text-muted-foreground mb-4">
                Nous avons envoyé un lien de connexion à <strong>{email}</strong>
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Cliquez sur le lien dans l'email pour accéder à votre dashboard.
              </p>
              <Button
                variant="outline"
                onClick={() => setMagicLinkSent(false)}
              >
                Renvoyer le lien
              </Button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Recevoir le lien de connexion"
                )}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Pas encore inscrit ?</p>
            <Button
              variant="link"
              className="text-primary"
              onClick={() => navigate("/waitlist")}
            >
              Rejoindre la liste d'attente
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
