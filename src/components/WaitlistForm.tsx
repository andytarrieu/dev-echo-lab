import React, { useState } from "react";
import { ArrowRight, Mail, User, Phone, CheckCircle2, PartyPopper, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Validation schema
const waitlistSchema = z.object({
  name: z.string()
    .trim()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom doit contenir moins de 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom contient des caractères invalides'),
  email: z.string()
    .trim()
    .email('Adresse email invalide')
    .max(255, 'L\'email doit contenir moins de 255 caractères'),
  password: z.string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .max(72, 'Le mot de passe doit contenir moins de 72 caractères'),
  phone: z.string()
    .trim()
    .regex(/^(\+33|0)[0-9\s.-]{9,}$/, 'Numéro de téléphone invalide (format français attendu)')
    .max(20, 'Numéro de téléphone trop long')
    .optional()
    .or(z.literal('')),
  referralCode: z.string()
    .trim()
    .max(50, 'Code de parrainage trop long')
    .optional()
    .or(z.literal(''))
});

const WaitlistForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState(searchParams.get('ref') || "");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/success`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de se connecter avec Google. Veuillez réessayer.",
          variant: "destructive"
        });
        setIsGoogleLoading(false);
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la connexion.",
        variant: "destructive"
      });
      setIsGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('🔥 Form submitted', { name, email, phone, referralCode });

    try {
      const result = waitlistSchema.safeParse({
        name,
        email,
        password,
        phone,
        referralCode
      });

      if (!result.success) {
        const firstError = result.error.errors[0];
        console.log('❌ Validation error:', firstError);
        toast({
          title: "Erreur de validation",
          description: firstError.message,
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      console.log('✅ Validation passed');

      const validatedData = result.data;
      
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            name: validatedData.name,
          }
        }
      });

      if (authError) {
        console.error('❌ Auth error:', authError);
        if (authError.message.includes('already registered')) {
          toast({
            title: "Erreur",
            description: "Cet email est déjà inscrit. Connectez-vous à la place.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Erreur",
            description: authError.message,
            variant: "destructive"
          });
        }
        setIsLoading(false);
        return;
      }

      console.log('✅ Auth account created');

      let referrerId: string | null = null;
      if (referralCode) {
        const { data: referralResult } = await supabase
          .rpc('verify_referral_code', { code: referralCode, client_ip_hash: '' });
        
        if (referralResult && referralResult.length > 0 && referralResult[0].is_valid) {
          referrerId = referralResult[0].referrer_id;
        }
      }

      console.log('💾 Inserting into database...');
      const { data: insertedData, error } = await supabase
        .from('waitlist')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          user_id: authData.user?.id || null,
          position: 0
        } as any)
        .select('position, referral_code')
        .single();

      if (error) {
        console.error('❌ Database error:', error);
        toast({
          title: "Erreur",
          description: error.message.includes('duplicate') || error.message.includes('unique')
            ? "Cet email est déjà inscrit sur la liste d'attente" 
            : "Une erreur est survenue lors de l'inscription",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      console.log('✅ Successfully inserted into database');
      const assignedPosition = insertedData?.position || 15000;

      if (referrerId) {
        console.log('🔗 Recording referral...');
        await supabase
          .from('referrals')
          .insert({
            referrer_id: referrerId,
            referred_email: validatedData.email
          });
      }
      
      console.log('🎉 Showing success toast');
      toast({
        title: "🎉 Compte créé avec succès !",
        description: `Bienvenue ! Tu es #${assignedPosition.toLocaleString('fr-FR')} dans la liste.`,
        duration: 5000
      });

      console.log('🔄 Redirecting to dashboard...');
      navigate(`/dashboard`);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setReferralCode("");
    } catch (error) {
      console.error('💥 Unexpected error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur inattendue est survenue",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl border shadow-lg p-8 md:p-10">
      {/* Google Sign In Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <Button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
          size="lg"
          variant="outline"
          className="w-full relative group border-2 hover:border-primary/50 hover:bg-primary/5"
        >
          <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {isGoogleLoading ? "Connexion en cours..." : "Continuer avec Google"}
        </Button>
      </motion.div>

      {/* Separator */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">Ou avec votre email</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nom complet <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              id="name" 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="Votre nom et prénom" 
              required 
              className="pl-10" 
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="votre@email.com" 
              required 
              className="pl-10" 
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
            Mot de passe <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Minimum 8 caractères" 
              required 
              className="pl-10 pr-10" 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Téléphone <span className="text-muted-foreground text-xs">(optionnel)</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              id="phone" 
              type="tel" 
              value={phone} 
              onChange={e => setPhone(e.target.value)} 
              placeholder="+33 6 12 34 56 78" 
              className="pl-10" 
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="referralCode" className="block text-sm font-medium text-foreground mb-2">
            Code Parrainage <span className="text-muted-foreground text-xs">(optionnel)</span>
          </label>
          <div className="relative">
            <PartyPopper className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              id="referralCode" 
              type="text" 
              value={referralCode} 
              onChange={e => setReferralCode(e.target.value)} 
              placeholder="Code de parrainage" 
              className="pl-10" 
            />
          </div>
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.01 }} 
          whileTap={{ scale: 0.98 }} 
          className="pt-2"
        >
          <Button 
            type="submit" 
            size="lg" 
            className="w-full relative overflow-hidden group gap-2" 
            disabled={isLoading}
          >
            {isLoading ? "Création du compte..." : "Créer mon compte"}
            {!isLoading && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
          </Button>
        </motion.div>

        <div className="pt-4">
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Accès anticipé au Vault</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Tarif préférentiel early-adopter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Support prioritaire</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
