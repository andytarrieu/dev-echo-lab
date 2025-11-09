import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Mail, User, Phone, CheckCircle2, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState(searchParams.get('ref') || "");
  const [isHovered, setIsHovered] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs with zod
    const result = waitlistSchema.safeParse({
      name,
      email,
      phone,
      referralCode
    });

    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Erreur de validation",
        description: firstError.message,
        variant: "destructive"
      });
      return;
    }

    // Use validated data
    const validatedData = result.data;

    // Générer un numéro aléatoire au-dessus de 4000
    const position = Math.floor(Math.random() * 8000) + 4000;

    // Vérifier si le code de parrainage existe
    let referrerId = null;
    if (referralCode) {
      const { data: referrer } = await supabase
        .from('waitlist')
        .select('id')
        .eq('referral_code', referralCode)
        .maybeSingle();
      
      if (referrer) {
        referrerId = referrer.id;
      }
    }

    // Générer un code de parrainage unique
    const generatedReferralCode = Math.random().toString(36).substring(2, 10);
    
    // Enregistrer dans Supabase avec les données validées
    const { error } = await supabase
      .from('waitlist')
      .insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        position,
        referral_code: generatedReferralCode
      });

    if (error) {
      toast({
        title: "Erreur",
        description: error.message.includes('duplicate') || error.message.includes('unique')
          ? "Cet email est déjà inscrit sur la liste d'attente" 
          : "Une erreur est survenue lors de l'inscription",
        variant: "destructive"
      });
      return;
    }

    // Si un code de parrainage a été utilisé, l'enregistrer
    if (referrerId) {
      await supabase
        .from('referrals')
        .insert({
          referrer_id: referrerId,
          referred_email: validatedData.email
        });
    }
    
    // Créer le lien de parrainage unique
    const referralLink = `https://aurea-ai.com/waitlist?ref=${generatedReferralCode}`;
    
    toast({
      title: "🎉 Inscription réussie !",
      description: (
        <div className="space-y-3">
          <p className="font-semibold">Tu es actuellement #{position.toLocaleString('fr-FR')} dans la liste.</p>
          
          <div>
            <p className="text-sm font-medium mb-1">Partage ton lien unique :</p>
            <p className="text-xs bg-background/50 p-2 rounded break-all">{referralLink}</p>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-1">Invite des amis pour avancer :</p>
            <ul className="text-xs space-y-1">
              <li>• +1 ami = +500 places</li>
              <li>• +3 amis = Accès anticipé</li>
              <li>• +5 amis = VIP Early Access</li>
            </ul>
          </div>
          
          <p className="text-xs italic pt-2 border-t border-border">📧 Tu recevras un email de confirmation dans les 24h</p>
        </div>
      ),
      duration: 15000
    });

    // Réinitialiser le formulaire
    setName("");
    setEmail("");
    setPhone("");
    setReferralCode("");
  };
  return <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background to-accent/20 p-4">
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
                  AURÉA IA
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
                  <p className="text-2xl font-bold text-primary">1500+</p>
                  <p className="text-xs text-muted-foreground">Sources</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-xs text-muted-foreground">Agents IA</p>
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
                Rejoignez les investisseurs qui investissent intelligemment grâce à l'IA
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
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                ← Retour à l'accueil
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                Réserver mon accès
              </h1>
              <p className="text-muted-foreground mb-8">
                Soyez parmi les premiers à accéder aux 4 agents IA qui révolutionnent l'investissement immobilier
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone <span className="text-muted-foreground text-xs">(optionnel)</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+33 6 12 34 56 78" className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="referralCode" className="block text-sm font-medium text-foreground mb-2">
                    Code Parrainage <span className="text-muted-foreground text-xs">(optionnel)</span>
                  </label>
                  <div className="relative">
                    <PartyPopper className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="referralCode" type="text" value={referralCode} onChange={e => setReferralCode(e.target.value)} placeholder="Code de parrainage" className="pl-10" />
                  </div>
                </div>
                
                <motion.div whileHover={{
                scale: 1.01
              }} whileTap={{
                scale: 0.98
              }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className="pt-2">
                  <Button type="submit" size="lg" className="w-full relative overflow-hidden group">
                    <span className="flex items-center justify-center">
                      Réserver mon accès
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
    </div>;
};
export default Waitlist;