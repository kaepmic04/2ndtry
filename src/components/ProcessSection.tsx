import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Headphones, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Analyse & Konzeption',
    description: 'Wir analysieren Ihre Telefonkommunikation und entwickeln ein maßgeschneidertes Konzept für Ihre virtuelle KI-Rezeption, das perfekt auf Ihre Branche und Anforderungen zugeschnitten ist.',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Headphones,
    title: 'Implementierung & Training',
    description: 'Wir implementieren Ihren KI-Sprachassistenten und trainieren ihn mit branchenspezifischem Wissen und Ihren individuellen Anforderungen für optimale Gesprächsführung.',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Rocket,
    title: 'Aktivierung & Optimierung',
    description: 'Nach erfolgreicher Implementierung geht Ihre virtuelle Rezeption online. Wir überwachen die Performance und optimieren kontinuierlich für bestmögliche Ergebnisse.',
    color: 'from-pink-500/20 to-pink-600/20'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gray-950" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 px-4">
            <span className="inline-block">Ihr Weg zur optimalen</span>{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              KI-Sprachassistenz
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Wir begleiten Sie durch den gesamten Implementierungsprozess - 
            von der ersten Analyse bis zur erfolgreichen Aktivierung Ihrer virtuellen Rezeption.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 transform -translate-y-1/2 hidden lg:block">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Number - Adjusted positioning and sizing */}
                <div className="absolute top-0 left-0 w-full flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    className="w-8 h-8 -mt-4 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-sm font-bold text-white z-10"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className={`bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full relative group`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-6"
                    >
                      <step.icon className="h-6 w-6 text-blue-400" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>

                {/* Arrow for larger screens */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}