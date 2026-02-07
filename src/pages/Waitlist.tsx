import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Mail, User, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import NavbarNew from "@/components/NavbarNew";
import AudienceSelector from "@/components/AudienceSelector";
type UserType = 'particulier' | 'professionnel';

// Validation schema
const waitlistSchema = z.object({
  name: z.string().trim().min(2, 'Le nom doit contenir au moins 2 caractères').max(100, 'Le nom doit contenir moins de 100 caractères').regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom contient des caractères invalides'),
  email: z.string().trim().email('Adresse email invalide').max(255, 'L\'email doit contenir moins de 255 caractères'),
  referralCode: z.string().trim().max(50, 'Code de parrainage trop long').optional().or(z.literal('')),
  userType: z.enum(['particulier', 'professionnel'])
});
type RoutePoint = {
  x: number;
  y: number;
  delay: number;
};
const DotMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });
  const routes: {
    start: RoutePoint;
    end: RoutePoint;
    color: string;
  }[] = [{
    start: {
      x: 100,
      y: 150,
      delay: 0
    },
    end: {
      x: 200,
      y: 80,
      delay: 2
    },
    color: "hsl(var(--primary))"
  }, {
    start: {
      x: 200,
      y: 80,
      delay: 2
    },
    end: {
      x: 260,
      y: 120,
      delay: 4
    },
    color: "hsl(var(--primary))"
  }, {
    start: {
      x: 50,
      y: 50,
      delay: 1
    },
    end: {
      x: 150,
      y: 180,
      delay: 3
    },
    color: "hsl(var(--primary))"
  }, {
    start: {
      x: 280,
      y: 60,
      delay: 0.5
    },
    end: {
      x: 180,
      y: 180,
      delay: 2.5
    },
    color: "hsl(var(--primary))"
  }];
  const generateDots = (width: number, height: number) => {
    const dots = [];
    const gap = 12;
    const dotRadius = 1;
    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        const isInMapShape = x < width * 0.25 && x > width * 0.05 && y < height * 0.4 && y > height * 0.1 || x < width * 0.25 && x > width * 0.15 && y < height * 0.8 && y > height * 0.4 || x < width * 0.45 && x > width * 0.3 && y < height * 0.35 && y > height * 0.15 || x < width * 0.5 && x > width * 0.35 && y < height * 0.65 && y > height * 0.35 || x < width * 0.7 && x > width * 0.45 && y < height * 0.5 && y > height * 0.1 || x < width * 0.8 && x > width * 0.65 && y < height * 0.8 && y > height * 0.6;
        if (isInMapShape && Math.random() > 0.3) {
          dots.push({
            x,
            y,
            radius: dotRadius,
            opacity: Math.random() * 0.5 + 0.2
          });
        }
      }
    }
    return dots;
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resizeObserver = new ResizeObserver(entries => {
      const {
        width,
        height
      } = entries[0].contentRect;
      setDimensions({
        width,
        height
      });
      canvas.width = width;
      canvas.height = height;
    });
    resizeObserver.observe(canvas.parentElement as Element);
    return () => resizeObserver.disconnect();
  }, []);
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dots = generateDots(dimensions.width, dimensions.height);
    let animationFrameId: number;
    let startTime = Date.now();
    function drawDots() {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${dot.opacity})`;
        ctx.fill();
      });
    }
    function drawRoutes() {
      const currentTime = (Date.now() - startTime) / 1000;
      routes.forEach(route => {
        const elapsed = currentTime - route.start.delay;
        if (elapsed <= 0) return;
        const duration = 3;
        const progress = Math.min(elapsed / duration, 1);
        const x = route.start.x + (route.end.x - route.start.x) * progress;
        const y = route.start.y + (route.end.y - route.start.y) * progress;
        ctx.beginPath();
        ctx.moveTo(route.start.x, route.start.y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = route.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(route.start.x, route.start.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = route.color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(var(--primary))";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(var(--primary), 0.4)";
        ctx.fill();
        if (progress === 1) {
          ctx.beginPath();
          ctx.arc(route.end.x, route.end.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = route.color;
          ctx.fill();
        }
      });
    }
    function animate() {
      drawDots();
      drawRoutes();
      const currentTime = (Date.now() - startTime) / 1000;
      if (currentTime > 15) {
        startTime = Date.now();
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions]);
  return <div className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>;
};
const Waitlist = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Initialize userType from URL parameter
  const initialUserType = searchParams.get('type') as UserType | null;
  const [userType, setUserType] = useState<UserType | null>(initialUserType === 'particulier' || initialUserType === 'professionnel' ? initialUserType : null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState(searchParams.get('ref') || "");
  const [isHovered, setIsHovered] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const {
        error
      } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/success`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
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
    console.log('🔥 Form submitted', {
      name,
      email,
      referralCode,
      userType
    });

    // Check if user type is selected
    if (!userType) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner votre profil (Particulier ou Professionnel)",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    try {
      // Validate inputs with zod
      const result = waitlistSchema.safeParse({
        name,
        email,
        referralCode,
        userType
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

      // Use validated data
      const validatedData = result.data;

      // Vérifier si le code de parrainage existe via la fonction sécurisée
      let referrerId: string | null = null;
      if (referralCode) {
        // Generate client fingerprint for rate limiting (SHA-256 hash of browser properties)
        const fingerprintData = `${navigator.userAgent}${navigator.language}${screen.width}x${screen.height}${new Date().getTimezoneOffset()}`;
        const encoder = new TextEncoder();
        const data = encoder.encode(fingerprintData);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const clientFingerprint = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        const {
          data: referralResult
        } = await supabase.rpc('verify_referral_code', {
          code: referralCode,
          client_ip_hash: clientFingerprint
        });
        if (referralResult && referralResult.length > 0 && referralResult[0].is_valid) {
          referrerId = referralResult[0].referrer_id;
        }
      }

      // Enregistrer dans Supabase avec les données validées
      // NOTE: on n'utilise pas .select() ici, sinon PostgREST tente de relire la ligne insérée
      // et échoue pour les utilisateurs anonymes (RLS interdit le SELECT sur waitlist).
      console.log('💾 Inserting into database...');
      const { error } = await supabase.from('waitlist').insert({
        name: validatedData.name,
        email: validatedData.email,
        user_type: validatedData.userType,
        position: 0 // Placeholder - colonne NOT NULL
      } as any);

      if (error) {
        console.error('❌ Database error:', error);
        toast({
          title: "Erreur",
          description: error.message.includes('duplicate') || error.message.includes('unique') ? "Cet email est déjà inscrit sur la liste d'attente" : "Une erreur est survenue lors de l'inscription",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }
      console.log('✅ Successfully inserted into database');

      // Si un code de parrainage a été utilisé, l'enregistrer
      // La validation est faite côté serveur via la policy can_create_referral
      if (referrerId) {
        console.log('🔗 Recording referral...');
        await supabase.from('referrals').insert({
          referrer_id: referrerId,
          referred_email: validatedData.email
        });
      }

      console.log('🎉 Showing success toast');
      toast({
        title: "🎉 Inscription réussie !",
        description: "Bienvenue ! Votre demande a bien été enregistrée.",
        duration: 5000
      });

      // Redirection vers la landing page Vault
      console.log('🔄 Redirecting to vault page...');
      navigate(`/vault`);
      // Réinitialiser le formulaire
      setUserType(null);
      setName("");
      setEmail("");
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
  return <div className="min-h-screen w-full bg-gradient-to-br from-background to-accent/20">
      <div className="flex items-center justify-center p-4 min-h-screen">
        <div className="w-full max-w-6xl">
        <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="w-full overflow-hidden rounded-2xl flex flex-col md:flex-row bg-card shadow-2xl">
          {/* Left side - Map */}
          <div className="hidden md:block w-1/2 h-[600px] relative overflow-hidden border-r border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5">
              <DotMap />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                <motion.div initial={{
                  opacity: 0,
                  y: -20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.6,
                  duration: 0.5
                }} className="mb-6">
                  
                </motion.div>
                <motion.h2 initial={{
                  opacity: 0,
                  y: -20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.7,
                  duration: 0.5
                }} className="text-4xl font-bold mb-4 text-center text-primary">
                  AURÉA Vault
                </motion.h2>
              <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 1,
                  duration: 0.5
                }} className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <p className="text-lg font-bold text-primary">Zéro Hallucination</p>
                  <p className="text-xs text-muted-foreground">Chaque réponse est sourcée et vérifiable dans vos PDF</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <p className="text-lg font-bold text-primary">Souveraineté Totale</p>
                  <p className="text-xs text-muted-foreground">Hébergement HDS/RGPD en France</p>
                </div>
              </motion.div>
              <motion.p initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 1.2,
                  duration: 0.5
                }} className="mt-6 text-base text-center text-muted-foreground max-w-sm leading-relaxed">
                Rejoignez les experts qui ne craignent plus les dossiers de 500 pages.
              </motion.p>
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-card">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }}>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground leading-tight">
                Divisez votre temps d'audit par 10. <span className="text-primary">Maîtrisez n'importe quel dossier en 5 minutes.</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                L'IA qui audite vos PDF, détecte les risques juridiques et synthétise vos PV d'AG. Sécurisez votre devoir de conseil sans l'effort de lecture.
              </p>

              {/* Google Sign In Button */}
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.2
              }} className="mb-6">
                <Button type="button" onClick={handleGoogleSignIn} disabled={isGoogleLoading} size="lg" variant="outline" className="w-full relative group border-2 hover:border-primary/50 hover:bg-primary/5">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Audience Selector */}
                <AudienceSelector selectedType={userType} onSelect={setUserType} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Votre nom et prénom" required className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com" required className="pl-10" />
                  </div>
                </div>

                
                
                
                
                
                
                <motion.div whileHover={{
                  scale: 1.01
                }} whileTap={{
                  scale: 0.98
                }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className="pt-2">
                  <Button type="submit" size="lg" className="w-full relative overflow-hidden group" disabled={isLoading}>
                    <span className="flex items-center justify-center">
                      {isLoading ? "Accès en cours..." : "Accédez à la bêta"}
                      {!isLoading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                    </span>
                  </Button>
                </motion.div>

                <div className="pt-4">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Accès anticipé aux agents IA</span>
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
};
export default Waitlist;