import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Headphones, Zap, Clock } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Telefonkommunikation',
    description: 'Optimieren Sie Ihre telefonische Erreichbarkeit mit KI-Sprachassistenten, die rund um die Uhr verfügbar sind.',
  },
  {
    icon: Zap,
    title: 'Effizienz',
    description: 'Reduzieren Sie Personalkosten und steigern Sie die Effizienz durch automatisierte Anrufannahme und -bearbeitung.',
  },
  {
    icon: Clock,
    title: '24/7 Verfügbarkeit',
    description: 'Bieten Sie Ihren Kunden einen durchgehenden Service – auch außerhalb der Geschäftszeiten.',
  },
  {
    icon: Bot,
    title: 'KI-Integration',
    description: 'Nahtlose Integration in bestehende Systeme und kontinuierliche Verbesserung durch maschinelles Lernen.',
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gray-950" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Warum KI-Sprachassistenz unverzichtbar ist
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            In der digitalen Ära ist eine effiziente Telefonkommunikation entscheidend für Ihren Geschäftserfolg. 
            Unsere KI-Sprachassistenten revolutionieren die Art und Weise, wie Unternehmen mit ihren Kunden 
            telefonisch interagieren – professionell, effizient und rund um die Uhr.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}