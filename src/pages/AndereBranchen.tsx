import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Building2, Hotel, Stethoscope, GraduationCap, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

const industries = [
  {
    icon: Building2,
    title: 'Immobilienmakler',
    description: 'Optimieren Sie Besichtigungstermine und Kundenanfragen mit KI-Sprachassistenz.',
  },
  {
    icon: Hotel,
    title: 'Hotels & Pensionen',
    description: 'Automatisieren Sie Buchungsanfragen und Gästeservice rund um die Uhr.',
  },
  {
    icon: Stethoscope,
    title: 'Ärzte & Therapeuten',
    description: 'Verbessern Sie Ihre Patientenkommunikation und Terminplanung.',
  },
  {
    icon: GraduationCap,
    title: 'Bildungseinrichtungen',
    description: 'Optimieren Sie die Kommunikation mit Studenten und Interessenten.',
  },
  {
    icon: Scale,
    title: 'Rechtsanwälte',
    description: 'Professionelle Mandantenkommunikation und Terminkoordination.',
  },
  {
    icon: Briefcase,
    title: 'Weitere Branchen',
    description: 'Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen.',
  }
];

export function AndereBranchen() {
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
            onClick={() => window.location.href = '/branchen'}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Branchenübersicht
          </Button>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-gray-500/10 rounded-full mb-4">
              <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-400 font-medium">Branchenlösungen</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              KI-Sprachassistenz für{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-600">
                weitere Branchen
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entdecken Sie, wie unsere KI-Sprachassistenz für verschiedene Branchen angepasst werden kann. 
              Wir entwickeln maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Unsere KI-Sprachassistenz für jede Branche</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Grundfunktionen</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    24/7 Erreichbarkeit
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Intelligente Terminplanung
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Automatische Erinnerungen
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Nahtlose Kalenderintegration
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Branchenspezifische Anpassungen</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Individuelle Gesprächsführung
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Angepasste Terminverwaltung
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Spezifische Fachbegriffe
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Maßgeschneiderte Workflows
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-800 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ihre Branche ist nicht dabei?
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Kein Problem! Wir entwickeln eine maßgeschneiderte KI-Sprachassistenz-Lösung, die perfekt 
              auf die Anforderungen Ihrer Branche zugeschnitten ist. Vereinbaren Sie ein unverbindliches 
              Beratungsgespräch, und wir zeigen Ihnen die Möglichkeiten.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => window.location.href = '/#calendar'}
            >
              Beratungsgespräch vereinbaren
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}