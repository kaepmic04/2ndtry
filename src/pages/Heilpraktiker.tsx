import { motion } from 'framer-motion';
import { ArrowLeft, Stethoscope, Clock, TrendingUp, DollarSign, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

const benefits = [
  {
    icon: Clock,
    title: 'Zeitersparnis',
    description: 'Reduzieren Sie den Zeitaufwand für Telefonate und Terminplanung um bis zu 80%. Konzentrieren Sie sich auf Ihre Patienten, während die KI Anrufe entgegennimmt.'
  },
  {
    icon: TrendingUp,
    title: 'Umsatzsteigerung',
    description: 'Steigern Sie Ihren Umsatz durch verbesserte Erreichbarkeit. Kein verpasster Anruf bedeutet kein verpasster Patient - auch außerhalb der Sprechzeiten.'
  },
  {
    icon: DollarSign,
    title: 'Kostenreduktion',
    description: 'Sparen Sie die Kosten für eine Vollzeit-Rezeptionskraft. Unsere KI-Lösung ist deutlich günstiger und arbeitet rund um die Uhr ohne Überstunden oder Urlaub.'
  },
  {
    icon: Calendar,
    title: 'Optimierte Terminplanung',
    description: 'Automatisierte Terminplanung und -erinnerungen reduzieren No-Shows um bis zu 70% und sorgen für eine optimale Auslastung Ihrer Praxis.'
  },
  {
    icon: Users,
    title: 'Verbesserte Patientenzufriedenheit',
    description: 'Bieten Sie Ihren Patienten einen erstklassigen Service durch sofortige Anrufannahme ohne Wartezeiten und professionelle Gesprächsführung.'
  }
];

const testimonials = [
  {
    quote: "Die KI-Sprachassistenz hat meine Praxis revolutioniert. Ich spare täglich mehrere Stunden, die ich nun für meine Patienten nutzen kann. Die Investition hat sich bereits nach wenigen Monaten amortisiert.",
    author: "Maria K., Heilpraktikerin für Osteopathie"
  },
  {
    quote: "Seit wir die KI-Rezeption nutzen, haben wir 30% mehr Neupatienten und deutlich weniger Terminausfälle. Die Patienten schätzen die sofortige Erreichbarkeit und die professionelle Terminplanung.",
    author: "Thomas M., Heilpraktiker für Naturheilkunde"
  }
];

export function Heilpraktiker() {
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
            <div className="inline-flex items-center justify-center p-2 bg-green-500/10 rounded-full mb-4">
              <Stethoscope className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">Branchenlösung für Heilpraktiker</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              KI-Sprachassistenz für{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                Heilpraktiker
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimieren Sie Ihre Praxiskommunikation, sparen Sie Zeit und Kosten und steigern Sie Ihren Umsatz 
              mit einer maßgeschneiderten KI-Sprachassistenz für Ihre Heilpraktikerpraxis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Die Herausforderungen für Heilpraktiker</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-red-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Verpasste Anrufe = Verpasste Patienten</h3>
                      <p className="text-gray-400">Während Sie Patienten behandeln, gehen wertvolle Anrufe und potenzielle Neupatienten verloren.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-red-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Zeitaufwändige Terminkoordination</h3>
                      <p className="text-gray-400">Die manuelle Terminplanung und -verwaltung kostet wertvolle Zeit, die Sie für Ihre Patienten nutzen könnten.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-red-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Hohe Personalkosten</h3>
                      <p className="text-gray-400">Eine Vollzeit-Rezeptionskraft ist für viele Heilpraktikerpraxen zu teuer, aber ohne sie gehen Patienten verloren.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-red-400 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Terminausfälle und No-Shows</h3>
                      <p className="text-gray-400">Patienten, die Termine vergessen oder nicht absagen, verursachen Leerlauf und Umsatzeinbußen.</p>
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
                      <p className="text-gray-400">Unsere KI nimmt Anrufe rund um die Uhr entgegen - auch am Wochenende, an Feiertagen und außerhalb der Sprechzeiten.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Automatische Terminplanung</h3>
                      <p className="text-gray-400">Die KI plant Termine direkt in Ihren Kalender ein und berücksichtigt dabei Ihre Verfügbarkeit und Sprechzeiten.</p>
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
                      <p className="text-gray-400">Unsere KI ist speziell für Heilpraktiker trainiert und versteht die spezifischen Anforderungen und Fachbegriffe.</p>
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
                Vorteile für Ihre Heilpraktikerpraxis
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Unsere KI-Sprachassistenz bietet zahlreiche Vorteile, die Ihre Praxis effizienter, 
                profitabler und patientenorientierter machen.
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
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-green-400" />
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
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Was unsere Kunden sagen
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Erfahren Sie, wie andere Heilpraktiker von unserer KI-Sprachassistenz profitieren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800"
                >
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-green-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  <p className="text-green-400 font-medium">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-gray-800 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Bereit, Ihre Heilpraktikerpraxis zu optimieren?
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Vereinbaren Sie ein unverbindliches Beratungsgespräch und erfahren Sie, wie unsere 
              KI-Sprachassistenz speziell für Ihre Heilpraktikerpraxis angepasst werden kann.
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