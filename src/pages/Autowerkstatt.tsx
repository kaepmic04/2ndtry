import { motion } from 'framer-motion';
import { ArrowLeft, Car, Clock, TrendingUp, DollarSign, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

const benefits = [
  {
    icon: Clock,
    title: 'Zeitersparnis',
    description: 'Reduzieren Sie den Zeitaufwand für Telefonate und Terminplanung um bis zu 80%. Konzentrieren Sie sich auf Ihre Reparaturen, während die KI Anrufe entgegennimmt.'
  },
  {
    icon: TrendingUp,
    title: 'Umsatzsteigerung',
    description: 'Steigern Sie Ihren Umsatz durch verbesserte Erreichbarkeit. Kein verpasster Anruf bedeutet kein verpasster Auftrag - auch außerhalb der Öffnungszeiten.'
  },
  {
    icon: DollarSign,
    title: 'Kostenreduktion',
    description: 'Sparen Sie die Kosten für eine Vollzeit-Rezeptionskraft. Unsere KI-Lösung ist deutlich günstiger und arbeitet rund um die Uhr.'
  },
  {
    icon: Calendar,
    title: 'Optimierte Terminplanung',
    description: 'Automatisierte Terminplanung und -erinnerungen reduzieren No-Shows und sorgen für eine optimale Auslastung Ihrer Werkstatt.'
  },
  {
    icon: Users,
    title: 'Verbesserte Kundenzufriedenheit',
    description: 'Bieten Sie Ihren Kunden einen erstklassigen Service durch sofortige Anrufannahme und professionelle Terminkoordination.'
  }
];

export function Autowerkstatt() {
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
            <div className="inline-flex items-center justify-center p-2 bg-yellow-500/10 rounded-full mb-4">
              <Car className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Branchenlösung für Autowerkstätten</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              KI-Sprachassistenz für{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                Autowerkstätten
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimieren Sie Ihre Werkstattkommunikation, sparen Sie Zeit und Kosten und steigern Sie Ihren Umsatz 
              mit einer maßgeschneiderten KI-Sprachassistenz für Ihre Autowerkstatt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Die Herausforderungen für Autowerkstätten</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-red-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Verpasste Anrufe = Verpasste Aufträge</h3>
                      <p className="text-gray-400">Während Sie in der Werkstatt arbeiten, gehen wertvolle Kundenanrufe verloren.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-red-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Zeitaufwändige Terminkoordination</h3>
                      <p className="text-gray-400">Die manuelle Terminplanung und -verwaltung kostet wertvolle Zeit, die Sie für Reparaturen nutzen könnten.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-red-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Hohe Personalkosten</h3>
                      <p className="text-gray-400">Eine Vollzeit-Rezeptionskraft ist für viele Werkstätten zu teuer, aber ohne sie gehen Aufträge verloren.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-red-400 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Terminausfälle und No-Shows</h3>
                      <p className="text-gray-400">Kunden, die Termine vergessen oder nicht absagen, verursachen Leerlauf und Umsatzeinbußen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Die Lösung: KI-Sprachassistenz</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">24/7 Erreichbarkeit</h3>
                      <p className="text-gray-400">Unsere KI nimmt Anrufe rund um die Uhr entgegen - auch am Wochenende, an Feiertagen und außerhalb der Öffnungszeiten.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Automatische Terminplanung</h3>
                      <p className="text-gray-400">Die KI plant Termine direkt in Ihren Kalender ein und berücksichtigt dabei Ihre Verfügbarkeit und Arbeitszeiten.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Intelligente Terminerinnerungen</h3>
                      <p className="text-gray-400">Automatische Erinnerungen per SMS oder E-Mail reduzieren No-Shows und sorgen für eine bessere Planbarkeit.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Branchenspezifisches Training</h3>
                      <p className="text-gray-400">Unsere KI ist speziell für Autowerkstätten trainiert und versteht die spezifischen Anforderungen und Fachbegriffe.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Vorteile für Ihre Autowerkstatt
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Unsere KI-Sprachassistenz bietet zahlreiche Vorteile, die Ihre Werkstatt effizienter, 
                profitabler und kundenorientierter machen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-gray-800 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Bereit, Ihre Autowerkstatt zu optimieren?
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie ein unverbindliches Beratungsgespräch und erfahren Sie, wie unsere 
              KI-Sprachassistenz speziell für Ihre Autowerkstatt angepasst werden kann.
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