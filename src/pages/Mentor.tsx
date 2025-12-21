import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Building2, TrendingUp, Shield, Calculator, Sparkles, Command, ArrowLeft, Loader, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import victorAvatar from '@/assets/agent-5.webp';

// Hook pour auto-resize textarea
function useAutoResizeTextarea({ minHeight, maxHeight }: { minHeight: number; maxHeight: number }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback((reset?: boolean) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    if (reset) {
      textarea.style.height = `${minHeight}px`;
      return;
    }

    textarea.style.height = `${minHeight}px`;
    const newHeight = Math.max(
      minHeight,
      Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY)
    );
    textarea.style.height = `${newHeight}px`;
  }, [minHeight, maxHeight]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) textarea.style.height = `${minHeight}px`;
  }, [minHeight]);

  return { textareaRef, adjustHeight };
}

// Composant Textarea personnalisé
const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { containerClassName?: string; showRing?: boolean }>(
  ({ className = '', containerClassName = '', showRing = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={`relative ${containerClassName}`}>
        <textarea
          className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-all duration-200 ease-in-out placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${showRing ? 'focus-visible:outline-none focus-visible:ring-0' : ''} ${className}`}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {showRing && isFocused && (
          <motion.span
            className="absolute inset-0 rounded-md pointer-events-none ring-2 ring-offset-0 ring-violet-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    );
  }
);

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface CommandSuggestion {
  icon: React.ReactNode;
  label: string;
  description: string;
  prefix: string;
  prompt: string;
}

// Composant principal Victor Chatbot
export default function Mentor() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 60, maxHeight: 200 });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const commandPaletteRef = useRef<HTMLDivElement>(null);

  // Suggestions de commandes pour Victor
  const commandSuggestions: CommandSuggestion[] = [
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "Stratégie Investissement",
      description: "Définir ma feuille de route",
      prefix: "/strategie",
      prompt: "Je veux créer une stratégie d'investissement immobilier personnalisée"
    },
    {
      icon: <Calculator className="w-4 h-4" />,
      label: "Analyser Rentabilité",
      description: "Calculer le cash-flow",
      prefix: "/rentabilite",
      prompt: "Comment calculer la rentabilité d'un bien immobilier ?"
    },
    {
      icon: <Building2 className="w-4 h-4" />,
      label: "Régime Fiscal",
      description: "LMNP, SCI, Réel vs Micro",
      prefix: "/fiscal",
      prompt: "Quel régime fiscal choisir pour mon investissement locatif ?"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      label: "Vérifier Bien",
      description: "Analyser les risques",
      prefix: "/risques",
      prompt: "Comment vérifier qu'un bien immobilier n'a pas de vices cachés ?"
    },
  ];

  // Questions suggérées
  const suggestedQuestions = [
    "Comment démarrer mon premier investissement ?",
    "LMNP ou SCI : lequel choisir ?",
    "Comment générer 500€/mois de cash-flow ?",
    "Quels sont les pièges à éviter ?"
  ];

  // Réponses de Victor (simulation)
  const getVictorResponse = async (userMessage: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const lowerMsg = userMessage.toLowerCase();

    if (lowerMsg.includes('démarrer') || lowerMsg.includes('commencer') || lowerMsg.includes('premier')) {
      return "Excellent ! Pour démarrer votre premier investissement, je vous recommande cette approche en 3 étapes :\n\n**1. Définir votre profil**\n- Quel est votre apport disponible ?\n- Quelle est votre capacité d'emprunt ?\n- Quel objectif : revenu passif ou plus-value ?\n\n**2. Choisir votre stratégie**\n- Location courte durée (Airbnb) : +30% de rendement mais +gestion\n- Location longue durée : stabilité et simplicité\n- Colocation : maximiser le rendement\n\n**3. Utiliser les bons agents**\n- **NOAH** pour identifier les zones à fort potentiel\n- **EMMA** pour négocier le meilleur prix\n- **LÉON** pour éviter les vices cachés\n\nParlons de votre situation : quel est votre apport disponible ? 🎯";
    }

    if (lowerMsg.includes('lmnp') || lowerMsg.includes('sci') || lowerMsg.includes('fiscal')) {
      return "Excellente question ! Voici comment choisir entre LMNP et SCI :\n\n**LMNP (Loueur Meublé Non Professionnel)**\n✅ Idéal si : Revenus < 23 000€/an\n✅ Avantage : Amortissement du bien (économie fiscale massive)\n✅ Rendement optimisé pour location courte durée\n\n**SCI (Société Civile Immobilière)**\n✅ Idéal si : Plusieurs associés ou transmission patrimoniale\n✅ Avantage : Flexibilité de gestion\n⚠️ Inconvénient : Fiscalité moins avantageuse que LMNP\n\n**Mon conseil** : 90% des investisseurs solo devraient choisir LMNP au régime réel.\n\nVoulez-vous que je vous mette en contact avec **LUCIE**, notre agent d'optimisation fiscale, pour une simulation personnalisée ? 📊";
    }

    if (lowerMsg.includes('500') || lowerMsg.includes('cash') || lowerMsg.includes('rentab')) {
      return "Générer 500€/mois de cash-flow net ? C'est tout à fait réalisable ! Voici la formule :\n\n**Objectif : 500€/mois = 6 000€/an**\n\n**Stratégie recommandée :**\n- Bien de 150 000€ en province\n- Loyer : 1 200€/mois (rendement brut 9.6%)\n- Charges + Crédit : -700€/mois\n- **Cash-flow avant impôts : +500€/mois** ✅\n\n**Zones cibles (selon NOAH) :**\n- Lyon : Quartier Guillotière\n- Toulouse : Saint-Cyprien\n- Bordeaux : Bastide\n\n**Les 3 clés du succès :**\n1. Négocier 10-15% sous le prix (Emma vous aide)\n2. Meublé en colocation (optimise le loyer)\n3. Régime LMNP réel (Lucie optimise la fiscalité)\n\nVoulez-vous que je vous aide à analyser une annonce précise ? 🔍";
    }

    if (lowerMsg.includes('risque') || lowerMsg.includes('piège') || lowerMsg.includes('erreur')) {
      return "Très bonne question ! Voici les 5 pièges mortels (et comment les éviter) :\n\n**1. Surpayer le bien** ❌\n→ Solution : Utilisez EMMA pour connaître le prix réel du marché\n\n**2. Ignorer les charges de copropriété** ❌\n→ Solution : LÉON analyse les PV d'AG et détecte les travaux votés\n\n**3. Oublier la fiscalité** ❌\n→ Solution : LUCIE simule votre cash-flow NET après impôts\n\n**4. Acheter dans une zone en déclin** ❌\n→ Solution : NOAH identifie les quartiers en développement\n\n**5. Sous-estimer les travaux** ❌\n→ Solution : Toujours prévoir +20% de marge sur devis\n\n**L'erreur n°1 des débutants ?** Se lancer sans analyser les chiffres.\n\nAvec AURÉA, vous avez la certitude mathématique que votre projet est viable avant de signer. 🛡️\n\nUne annonce vous intéresse ? Je peux l'analyser en 60 secondes !";
    }

    return `Merci pour votre question sur "${userMessage}".\n\nJe suis Victor, votre stratège personnel en investissement immobilier. Je maîtrise 100% des aspects :\n- 💰 Fiscalité (LMNP, SCI, optimisation)\n- 🏦 Financement bancaire\n- 📊 Analyse de rentabilité\n- 🔧 Travaux et rénovation\n- 📋 Réglementations (DPE, lois)\n\nPour vous donner la meilleure réponse, j'aurais besoin de quelques informations :\n\n1. Quel est votre objectif principal ?\n   - Revenu passif mensuel\n   - Constitution de patrimoine\n   - Plus-value à la revente\n\n2. Quelle est votre situation ?\n   - Premier investissement ou déjà investisseur ?\n   - Apport disponible ?\n\nEn attendant, voici mes agents spécialisés qui peuvent vous aider :\n- **NOAH** : Anticipe les tendances 2026\n- **EMMA** : Négocie le meilleur prix\n- **LÉON** : Détecte les risques cachés\n- **LUCIE** : Optimise votre fiscalité\n\nQue souhaitez-vous explorer en priorité ? 🎯`;
  };

  // Gestion des messages
  const handleSendMessage = async () => {
    if (!value.trim()) return;

    const userMessage = value.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setValue('');
    adjustHeight(true);
    setIsTyping(true);
    const response = await getVictorResponse(userMessage);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  // Gestion des commandes
  useEffect(() => {
    if (value.startsWith('/') && !value.includes(' ')) {
      setShowCommandPalette(true);
      const matchIndex = commandSuggestions.findIndex(cmd => cmd.prefix.startsWith(value));
      setActiveSuggestion(matchIndex >= 0 ? matchIndex : -1);
    } else {
      setShowCommandPalette(false);
    }
  }, [value]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showCommandPalette) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSuggestion(prev => prev < commandSuggestions.length - 1 ? prev + 1 : 0);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSuggestion(prev => prev > 0 ? prev - 1 : commandSuggestions.length - 1);
      } else if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        if (activeSuggestion >= 0) {
          const cmd = commandSuggestions[activeSuggestion];
          setValue(cmd.prompt);
          setShowCommandPalette(false);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setShowCommandPalette(false);
      }
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const selectCommand = (index: number) => {
    const cmd = commandSuggestions[index];
    setValue(cmd.prompt);
    setShowCommandPalette(false);
    setTimeout(() => textareaRef.current?.focus(), 0);
  };

  const selectQuestion = (question: string) => {
    setValue(question);
    setTimeout(() => textareaRef.current?.focus(), 0);
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950 text-white relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full mix-blend-normal filter blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-normal filter blur-[128px] animate-pulse" style={{ animationDelay: '700ms' }} />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-500/10 rounded-full mix-blend-normal filter blur-[96px] animate-pulse" style={{ animationDelay: '1000ms' }} />
      </div>

      {/* Header avec logo Victor */}
      <motion.div
        className="relative z-10 p-6 border-b border-white/5 backdrop-blur-xl bg-white/[0.02]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white/70" />
          </button>
          <img 
            src={victorAvatar} 
            alt="Victor" 
            className="w-12 h-12 rounded-full object-cover object-top shadow-lg shadow-violet-500/20 ring-2 ring-violet-500/30"
          />
          <div>
            <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Agent Victor
            </h1>
            <p className="text-sm text-white/40">Stratège Immobilier AURÉA</p>
          </div>
          <div className="ml-auto flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20">● En ligne</span>
          </div>
        </div>
      </motion.div>

      {/* Zone de messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8 py-8"
            >
              {/* Hero Section */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-sm text-violet-300">Gratuit • Illimité • Expert</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-violet-300">
                  Votre conseiller en patrimoine.<br />Sans les 250€/heure.
                </h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto">
                  Fiscalité complexe, stratégies bancaires, montages en SCI... 
                  Ce que les formations vendent 2 000€, Victor vous le donne en 30 secondes.
                </p>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                <motion.div 
                  className="p-5 rounded-xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-2xl mb-2">💎</div>
                  <h3 className="font-semibold text-white mb-1">Expertise élite, accessible</h3>
                  <p className="text-sm text-white/40">Avocat fiscaliste, CGP, expert bancaire... tout en un, sans rendez-vous.</p>
                </motion.div>
                
                <motion.div 
                  className="p-5 rounded-xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-white mb-1">Stratégie sur-mesure</h3>
                  <p className="text-sm text-white/40">Pas de théorie générique. Des réponses adaptées à VOTRE situation précise.</p>
                </motion.div>
                
                <motion.div 
                  className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-white mb-1">De lidée à loffre en 10x moins de temps</h3>
                  <p className="text-sm text-white/40">40h de formation condensées en conversations de 30 secondes.</p>
                </motion.div>
                
                <motion.div 
                  className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-2xl mb-2">🛡️</div>
                  <h3 className="font-semibold text-white mb-1">Confiance totale</h3>
                  <p className="text-sm text-white/40">Posez toutes vos questions "bêtes" sans jugement. Victor construit votre assurance.</p>
                </motion.div>
              </div>

              {/* Suggested Questions */}
              <div className="space-y-4 pt-4">
                <p className="text-sm text-white/30 uppercase tracking-wider">Commencez par une question</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {suggestedQuestions.map((q, i) => (
                    <motion.button
                      key={i}
                      onClick={() => selectQuestion(q)}
                      className="p-4 text-left bg-white/[0.02] hover:bg-white/[0.05] rounded-xl border border-white/5 hover:border-violet-500/30 transition-all group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Sparkles className="w-4 h-4 text-violet-400 mb-2 group-hover:text-violet-300" />
                      <p className="text-sm text-white/70 group-hover:text-white/90">{q}</p>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <img 
                      src={victorAvatar} 
                      alt="Victor" 
                      className="w-8 h-8 rounded-full object-cover object-top flex-shrink-0 shadow-lg shadow-violet-500/20"
                    />
                  )}
                  <div className={`max-w-2xl p-4 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-violet-600/20 border border-violet-500/30 text-white'
                      : 'bg-white/[0.02] border border-white/5 text-white/90'
                  }`}>
                    <div className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>

      {/* Indicateur de frappe */}
      <AnimatePresence>
        {isTyping && (
          <motion.div
            className="relative z-10 max-w-4xl mx-auto px-6 pb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/5 w-fit">
              <img 
                src={victorAvatar} 
                alt="Victor" 
                className="w-6 h-6 rounded-full object-cover object-top"
              />
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span>Victor réfléchit</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 bg-violet-400 rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zone d'input */}
      <div className="relative z-10 p-6 border-t border-white/5 backdrop-blur-xl bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative bg-white/[0.02] rounded-2xl border border-white/5 shadow-2xl"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
          >
            {/* Palette de commandes */}
            <AnimatePresence>
              {showCommandPalette && (
                <motion.div
                  ref={commandPaletteRef}
                  className="absolute left-4 right-4 bottom-full mb-2 backdrop-blur-xl bg-black/90 rounded-lg z-50 shadow-lg border border-white/10 overflow-hidden"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                >
                  <div className="py-1">
                    {commandSuggestions.map((suggestion, index) => (
                      <motion.div
                        key={suggestion.prefix}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                          activeSuggestion === index ? 'bg-violet-500/20 text-white' : 'text-white/70 hover:bg-white/5'
                        }`}
                        onClick={() => selectCommand(index)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                          {suggestion.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{suggestion.label}</div>
                          <div className="text-xs text-white/40">{suggestion.description}</div>
                        </div>
                        <div className="text-xs text-white/30 font-mono">{suggestion.prefix}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="p-4">
              <Textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  adjustHeight();
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Posez votre question à Victor..."
                containerClassName="w-full"
                className="w-full px-4 py-3 resize-none bg-transparent border-none text-white/90 text-sm focus:outline-none placeholder:text-white/20 min-h-[60px]"
                showRing={false}
              />
            </div>

            <div className="p-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowCommandPalette(!showCommandPalette)}
                  className={`p-2 rounded-lg transition-colors ${
                    showCommandPalette ? 'bg-violet-500/20 text-violet-400' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <Command className="w-4 h-4" />
                </button>
                <span className="text-xs text-white/30">Tapez / pour les commandes</span>
              </div>

              <motion.button
                onClick={handleSendMessage}
                disabled={!value.trim() || isTyping}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  value.trim() && !isTyping
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20'
                    : 'bg-white/5 text-white/30 cursor-not-allowed'
                }`}
              >
                {isTyping ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span>Envoyer</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Info équipe AURÉA */}
          <motion.div
            className="mt-4 text-center text-xs text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Propulsé par <span className="text-violet-400 font-medium">AURÉA</span> • Victor + 4 agents spécialisés à votre service
          </motion.div>
        </div>
      </div>

      {/* Effet de curseur */}
      {inputFocused && (
        <motion.div
          className="fixed w-[40rem] h-[40rem] rounded-full pointer-events-none z-0 opacity-[0.015] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 blur-[96px]"
          animate={{
            x: mousePosition.x - 320,
            y: mousePosition.y - 320,
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 150,
            mass: 0.5,
          }}
        />
      )}
    </div>
  );
}
