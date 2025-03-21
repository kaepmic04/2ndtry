import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneCall, Calendar, MessageSquare, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const aiFeatures = [
  {
    icon: PhoneCall,
    title: 'Intelligente Anrufannahme',
    description: 'Automatisierte Anrufentgegennahme mit natürlicher Sprachverarbeitung und intelligenter Gesprächsführung.',
  },
  {
    icon: Calendar,
    title: 'Smarte Terminplanung',
    description: 'Automatisierte Terminvereinbarung per Telefon - Ihre KI-Rezeption bucht Termine direkt in Ihren Kalender.',
  },
  {
    icon: MessageSquare,
    title: 'Kundenanfragen bearbeiten',
    description: 'Beantwortung häufiger Fragen und Weiterleitung komplexer Anliegen an die zuständigen Mitarbeiter.',
  },
  {
    icon: Building,
    title: 'Branchenspezifische Lösungen',
    description: 'Maßgeschneiderte Voice-AI-Systeme für verschiedene Branchen wie Arztpraxen, Anwaltskanzleien und Dienstleister.',
  },
];

export function AISection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      const navbarHeight = 64;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-black overflow-hidden" id="ai" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        
        {/* Main Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12 mb-16"
          >
            {/* Left Column - Main Text */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-6">
                Voice AI für Ihre{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  virtuelle Rezeption
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Unsere KI-Sprachassistenten revolutionieren die Telefonkommunikation Ihres Unternehmens. 
                Sie nehmen Anrufe entgegen, beantworten Kundenanfragen und vereinbaren Termine – 
                in natürlicher Sprache und mit höchster Präzision. Entlasten Sie Ihr Personal und 
                bieten Sie gleichzeitig einen erstklassigen Service rund um die Uhr.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Unverbindliche Beratung anfragen
              </Button>
            </div>

            {/* Right Column - Interactive Feature Display */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}