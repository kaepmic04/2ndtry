import { motion } from 'framer-motion';
import { ArrowRight, Mic, Brain, Clock2 as Clock24, Users, DollarSign, Sparkles, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 64; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const benefits = [
    {
      icon: Clock24,
      title: '24/7 Erreichbarkeit',
      description: 'Nie wieder verpasste Anrufe - Ihr KI-Assistent ist rund um die Uhr für Ihre Kunden da.'
    },
    {
      icon: Brain,
      title: 'Intelligente Wissensbasis',
      description: 'Beantwortet Kundenanfragen basierend auf Ihrer Wissensdatenbank präzise und zuverlässig.'
    },
    {
      icon: Users,
      title: 'Parallele Anrufe',
      description: 'Handhabt mehrere Anrufe gleichzeitig - keine Wartezeiten für Ihre Kunden.'
    },
    {
      icon: DollarSign,
      title: 'Kosteneffizient',
      description: 'Bis zu 80% günstiger als menschliche Mitarbeiter, nie krank und immer motiviert.'
    },
    {
      icon: Sparkles,
      title: 'CRM Integration',
      description: 'Automatische Aktualisierung Ihres CRM-Systems für lückenloses Kundenmanagement.'
    },
    {
      icon: Shield,
      title: 'Datenschutz & Sicherheit',
      description: 'DSGVO-konforme Datenverarbeitung mit Verschlüsselung für eine vertrauensvolle Kommunikation.'
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
          >
            <Mic className="h-6 w-6 text-white mr-2" />
            <span className="text-white font-medium">KI-Sprachassistenz für Ihr Unternehmen</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
          >
            Virtuelle Rezeption
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              mit KI-Sprachassistenz
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Optimieren Sie Ihren Kundenservice mit intelligenten Voice-AI-Lösungen.
            Wussten Sie, dass kleine Unternehmen im Schnitt jeden vierten Anruf verpassen? 
            85% dieser Kunden rufen nie wieder an.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <benefit.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 inline-flex items-center relative group overflow-hidden transition-all duration-300"
              onClick={() => handleScroll('calendar')}
            >
              <span className="relative z-10">Beratungsgespräch vereinbaren</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300"
              onClick={() => handleScroll('about')}
            >
              Mehr erfahren
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}