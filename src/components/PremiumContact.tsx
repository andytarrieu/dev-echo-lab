import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  Building, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Contactez-nous par email",
    value: "contact@immobilia.fr",
    link: "mailto:contact@immobilia.fr",
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "Appelez notre équipe",
    value: "+33 1 23 45 67 89",
    link: "tel:+33123456789",
  },
  {
    icon: MapPin,
    title: "Bureau",
    description: "Notre siège social",
    value: "Paris, France",
    link: "#location",
  }
];

const companyStats = [
  { label: "Temps de Réponse", value: "< 2h", icon: Clock },
  { label: "Clients Actifs", value: "500+", icon: Globe },
  { label: "Sécurité", value: "SOC 2", icon: Shield },
  { label: "Taux de Succès", value: "99.9%", icon: Zap }
];

export function PremiumContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-secondary/[0.05] to-accent/[0.08]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />
        
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 200, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${25 + (i * 8)}%`,
                transform: `rotate(${30 + i * 20}deg)`
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleY: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-foreground">
              ✨ Restons en Contact
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-foreground">
              Contactez
            </span>
            <br />
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Notre Équipe
            </motion.span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Prêt à transformer votre investissement immobilier avec nos agents IA ? 
            Discutons de vos objectifs et de la façon dont nous pouvons vous aider.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-card backdrop-blur-xl rounded-2xl border border-border group hover:bg-accent/5 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Envoyez-nous un message</h3>
              <p className="text-muted-foreground text-lg">
                Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Votre Nom"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-card border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all ${
                          errors.name ? 'border-destructive' : 'border-border'
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-sm mt-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="Adresse Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-card border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all ${
                          errors.email ? 'border-destructive' : 'border-border'
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive text-sm mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Société (Optionnel)"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                    <textarea
                      placeholder="Parlez-nous de votre projet..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full pl-10 pr-4 py-4 bg-card border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all resize-none ${
                        errors.message ? 'border-destructive' : 'border-border'
                      }`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-destructive text-sm mt-2"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Envoyer le Message
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Message Envoyé !</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Merci de nous avoir contacté. Nous vous répondrons dans les 24 heures.
                  </p>
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-6 py-3 bg-card border border-border rounded-xl text-foreground hover:bg-accent/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Envoyer un Autre Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Autres moyens de contact</h3>
              <p className="text-muted-foreground text-lg">
                Choisissez la méthode qui vous convient le mieux.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="block p-6 bg-card backdrop-blur-xl rounded-2xl border border-border hover:bg-accent/5 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">{method.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                      <p className="text-foreground font-medium">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="p-6 bg-primary/5 backdrop-blur-xl rounded-2xl border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">Garantie de Réponse Rapide</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nous sommes fiers de nos délais de réponse rapides. Toutes les demandes reçoivent généralement 
                une réponse en moins de 2 heures pendant les heures de bureau, et nous planifions un appel 
                dans les 24 heures pour discuter de votre projet en détail.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
