import { useState, useEffect, memo, forwardRef, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView, useMotionValue, useMotionTemplate } from "framer-motion";
import { Mail, Sparkles, Shield, FileCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/aurea-logo-new.png";

// ==================== Animated Input Component ====================
const AnimatedInput = memo(
  forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    function AnimatedInput({ className, type, ...props }, ref) {
      const radius = 100;
      const [visible, setVisible] = useState(false);
      const mouseX = useMotionValue(0);
      const mouseY = useMotionValue(0);

      function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
      }: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }

      return (
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                hsl(var(--primary) / 0.15),
                transparent 80%
              )
            `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="group/input rounded-lg p-[2px] transition duration-300"
        >
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "shadow-input transition-all duration-300",
              "group-hover/input:shadow-none",
              className
            )}
            ref={ref}
            {...props}
          />
        </motion.div>
      );
    }
  )
);

// ==================== Box Reveal Component ====================
const BoxReveal = memo(function BoxReveal({
  children,
  width = "fit-content",
  boxColor = "hsl(var(--primary))",
  duration = 0.5,
  className,
}: {
  children: React.ReactNode;
  width?: string;
  boxColor?: string;
  duration?: number;
  className?: string;
}) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  );
});

// ==================== Ripple Component ====================
const Ripple = memo(function Ripple({
  mainCircleSize = 180,
  mainCircleOpacity = 0.2,
  numCircles = 8,
}: {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 60;
        const opacity = mainCircleOpacity - i * 0.02;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className="absolute animate-ripple rounded-full border"
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `hsl(var(--primary) / ${borderOpacity / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

// ==================== OrbitingCircles Component ====================
const OrbitingCircles = memo(function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 50,
}: {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
}) {
  return (
    <div
      style={
        {
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        } as React.CSSProperties
      }
      className={cn(
        "absolute flex items-center justify-center rounded-full border bg-background/80 shadow-lg backdrop-blur-sm",
        "animate-orbit",
        { "[animation-direction:reverse]": reverse },
        className
      )}
    >
      {children}
    </div>
  );
});

// ==================== Main Modal Component ====================
interface PreAccessModalProps {
  onAccessGranted: () => void;
}

const PreAccessModal = ({ onAccessGranted }: PreAccessModalProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("L'email est requis");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Veuillez entrer un email valide");
      return;
    }

    setIsLoading(true);

    // Simulate a brief loading state
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Store access in localStorage
    localStorage.setItem("preAccessEmail", email.trim().toLowerCase());
    localStorage.setItem("preAccessGranted", "true");

    setIsLoading(false);
    onAccessGranted();
    
    // Navigate to dashboard
    navigate("/dashboard");
  };

  const features = [
    { icon: Shield, text: "Sécurisez vos transactions" },
    { icon: FileCheck, text: "Analysez vos documents" },
    { icon: Sparkles, text: "IA dédiée à l'immobilier" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden lg:flex-row">
        {/* Left side - Visual */}
        <div className="relative hidden h-full w-1/2 items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 lg:flex">
          <Ripple />
          
          {/* Orbiting icons */}
          <OrbitingCircles radius={120} duration={25} delay={0} className="size-12 p-2">
            <Shield className="size-6 text-primary" />
          </OrbitingCircles>
          <OrbitingCircles radius={120} duration={25} delay={12.5} className="size-12 p-2">
            <FileCheck className="size-6 text-primary" />
          </OrbitingCircles>
          <OrbitingCircles radius={200} duration={30} delay={0} reverse className="size-14 p-3">
            <Sparkles className="size-7 text-primary" />
          </OrbitingCircles>
          <OrbitingCircles radius={200} duration={30} delay={15} reverse className="size-14 p-3">
            <Mail className="size-7 text-primary" />
          </OrbitingCircles>

          {/* Center logo */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.img
              src={logoImage}
              alt="Auréa IA"
              className="h-24 w-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.p
              className="mt-4 text-center text-lg font-medium text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              L'IA qui sécurise vos transactions immobilières
            </motion.p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex h-full w-full flex-col items-center justify-center px-6 lg:w-1/2 lg:px-16">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="mb-8 flex justify-center lg:hidden">
              <motion.img
                src={logoImage}
                alt="Auréa IA"
                className="h-16 w-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <BoxReveal width="100%" duration={0.5}>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Accès Anticipé
              </h1>
            </BoxReveal>

            <BoxReveal width="100%" duration={0.5}>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Inscrivez-vous pour découvrir notre plateforme en avant-première
              </p>
            </BoxReveal>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Adresse email professionnelle
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <AnimatedInput
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12"
                  />
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-destructive"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "group relative flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all duration-300",
                  "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  "disabled:cursor-not-allowed disabled:opacity-70"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <motion.div
                    className="h-5 w-5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Accéder au site
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
                {/* Bottom gradient */}
                <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </motion.button>
            </motion.form>

            {/* Features */}
            <motion.div
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-muted/30 p-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <feature.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer text */}
            <motion.p
              className="mt-8 text-center text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              En vous inscrivant, vous acceptez nos{" "}
              <span className="text-primary underline-offset-2 hover:underline cursor-pointer">
                conditions d'utilisation
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PreAccessModal;
