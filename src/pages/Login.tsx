import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Vérifier si l'email existe dans la waitlist
      const { data: user, error } = await supabase
        .from("waitlist")
        .select("*")
        .eq("email", email.trim().toLowerCase())
        .maybeSingle();

      if (error) throw error;

      if (!user) {
        toast({
          title: "❌ Email non trouvé",
          description: "Cet email n'est pas inscrit. Rejoignez d'abord la liste d'attente.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Stocker l'email en session locale
      localStorage.setItem("userEmail", email.trim().toLowerCase());

      toast({
        title: "✅ Connexion réussie !",
        description: `Bienvenue ${user.name} !`,
      });

      // Rediriger vers le dashboard
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "❌ Erreur",
        description: error.message || "Impossible de se connecter",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
              {loading ? "Connexion..." : "Accéder à mon dashboard"}
            </Button>
          </form>

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
