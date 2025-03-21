import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    title: 'Monatlich',
    price: '250€',
    originalPrice: '350€',
    description: 'Flexibel ohne langfristige Bindung',
    features: [
      'KI-Sprachassistenz rund um die Uhr',
      'Intelligente Anrufannahme',
      'Smarte Terminplanung',
      'Smartes Online-Buchungssystem',
      'Simple Gratis-Website inklusive',
      'Monatlich kündbar',
      '7 Tage Geld-zurück-Garantie',
    ],
    cta: 'Jetzt starten',
    popular: false,
  },
  {
    title: 'Jährlich',
    price: '200€',
    unit: '/Monat',
    originalPrice: '300€',
    description: 'Sparen Sie mit unserem Jahresabo',
    features: [
      'KI-Sprachassistenz rund um die Uhr',
      'Intelligente Anrufannahme',
      'Smarte Terminplanung',
      'Smartes Online-Buchungssystem',
      'Simple Gratis-Website inklusive',
      'Priorisierter Support',
      '7 Tage Geld-zurück-Garantie',
    ],
    cta: 'Jetzt sparen',
    popular: true,
  },
  {
    title: 'Nutzungsbasiert',
    price: '0,20€',
    unit: '/Minute',
    description: 'Zahlen Sie nur, was Sie nutzen',
    features: [
      'KI-Sprachassistenz rund um die Uhr',
      'Intelligente Anrufannahme',
      'Smarte Terminplanung',
      'Smartes Online-Buchungssystem',
      'Simple Gratis-Website inklusive',
      'Keine Grundgebühr',
      'Minutengenaue Abrechnung',
      '7 Tage Geld-zurück-Garantie',
    ],
    cta: 'Jetzt loslegen',
    popular: false,
  }
];

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToCalendar = () => {
    const section = document.getElementById('calendar');
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
    <section className="py-24 bg-black" id="pricing" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Transparente{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Preisgestaltung
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Wählen Sie das passende Paket für Ihre Anforderungen. Sie zahlen erst, wenn alles eingerichtet ist und Ihre KI-Sprachassistenz reibungslos funktioniert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Beliebteste Wahl
                  </span>
                </div>
              )}
              
              <div className={`h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border ${
                plan.popular ? 'border-blue-500/50' : 'border-gray-700'
              } hover:border-blue-500/50 transition-all duration-300 flex flex-col`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.unit && <span className="text-gray-400 ml-1">{plan.unit}</span>}
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through ml-2 text-lg">{plan.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-blue-400" />
                      </div>
                      <p className="ml-3 text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button
                    onClick={scrollToCalendar}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-blue-500/20 p-4 rounded-full">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">7 Tage Geld-zurück-Garantie</h3>
              <p className="text-gray-400">
                Testen Sie unsere KI-Sprachassistenz risikofrei. Wenn Sie nicht vollständig zufrieden sind, 
                erhalten Sie Ihr Geld innerhalb der ersten 7 Tage zurück - ohne Wenn und Aber.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-purple-500/20 p-4 rounded-full">
              <Clock className="h-8 w-8 text-purple-400" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Nutzung</h3>
              <p className="text-gray-400">
                Ob Festpreis oder nutzungsbasierte Abrechnung - Sie entscheiden, welches Modell am besten zu Ihrem 
                Geschäft passt. Wechseln Sie jederzeit zwischen den Tarifen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}