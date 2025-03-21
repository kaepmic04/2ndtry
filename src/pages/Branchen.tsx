import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Briefcase, Stethoscope, Wrench, Store, Utensils, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

const industries = [
  {
    id: 'handwerker',
    title: 'Handwerker',
    description: 'Optimieren Sie Ihre Terminplanung und Kundenkommunikation mit KI-Sprachassistenz für Handwerksbetriebe.',
    icon: Wrench,
    color: 'from-blue-500/20 to-blue-600/20',
    link: '/branchen/handwerker'
  },
  {
    id: 'heilpraktiker',
    title: 'Heilpraktiker',
    description: 'Steigern Sie Ihren Umsatz und verbessern Sie die Patientenerfahrung mit KI-Sprachassistenz für Heilpraktiker.',
    icon: Stethoscope,
    color: 'from-green-500/20 to-green-600/20',
    link: '/branchen/heilpraktiker'
  },
  {
    id: 'immobilienmakler',
    title: 'Immobilienmakler',
    description: 'Verbessern Sie Ihre Erreichbarkeit und optimieren Sie Besichtigungstermine mit KI-Sprachassistenz.',
    icon: Store,
    color: 'from-purple-500/20 to-purple-600/20',
    link: '/branchen/immobilienmakler'
  },
  {
    id: 'gastronomie',
    title: 'Gastronomie',
    description: 'Automatisieren Sie Reservierungen und Bestellungen mit KI-Sprachassistenz für Restaurants und Cafés.',
    icon: Utensils,
    color: 'from-red-500/20 to-red-600/20',
    link: '/branchen/gastronomie'
  },
  {
    id: 'autowerkstaetten',
    title: 'Autowerkstätten',
    description: 'Optimieren Sie Ihre Terminplanung und Kundenanfragen mit KI-Sprachassistenz für Autowerkstätten.',
    icon: Car,
    color: 'from-yellow-500/20 to-yellow-600/20',
    link: '/branchen/autowerkstatt'
  },
  {
    id: 'andere',
    title: 'Andere Branchen',
    description: 'Entdecken Sie maßgeschneiderte KI-Sprachassistenz-Lösungen für Ihre spezifische Branche.',
    icon: Briefcase,
    color: 'from-gray-500/20 to-gray-600/20',
    link: '/branchen/andere'
  }
];

export function Branchen() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Button
            variant="ghost"
            className="text-white hover:text-blue-400 mb-8"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Branchenspezifische{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                KI-Lösungen
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entdecken Sie, wie unsere KI-Sprachassistenz speziell für Ihre Branche angepasst werden kann, 
              um Kosten zu senken, Effizienz zu steigern und Ihren Umsatz zu maximieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a 
                  href={industry.link} 
                  className="block h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {industry.description}
                  </p>

                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="mr-2">Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Maßgeschneiderte Lösungen für Ihre Branche
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Jede Branche hat ihre eigenen Herausforderungen und Anforderungen. Unsere KI-Sprachassistenten 
                werden speziell für Ihre Branche trainiert und angepasst, um optimale Ergebnisse zu erzielen.
              </p>
              <Button
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => window.location.href = '/#calendar'}
              >
                Beratungsgespräch vereinbaren
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}