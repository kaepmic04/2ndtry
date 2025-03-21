import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function AboutMeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-black" id="about-me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group max-w-sm mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] sm:aspect-square w-full max-w-[320px] sm:max-w-[400px] mx-auto">
                <img
                  src="/Henri.jpg"
                  alt="Michel Käppler"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Über AI Rezeption
            </h2>
            <p className="text-gray-300 text-lg">
              Mein Name ist Michel, und ich bin Experte für KI-gestützte Sprachassistenz. In Frankfurt am Main entwickle ich innovative Voice-AI-Lösungen, die Unternehmen dabei unterstützen, ihre Telefonkommunikation zu revolutionieren.
            </p>
            <p className="text-gray-300 text-lg">
              Der Schwerpunkt meiner Arbeit liegt auf der Entwicklung intelligenter virtueller Rezeptionisten, die Anrufe entgegennehmen, Kundenanfragen beantworten und Termine vereinbaren – rund um die Uhr und in natürlicher Sprachqualität.
            </p>
            <p className="text-gray-300 text-lg">
              Mein Ansatz ist lösungsorientiert: Ich analysiere die spezifischen Anforderungen Ihres Unternehmens und entwickle maßgeschneiderte Voice-AI-Systeme, die nahtlos in Ihre bestehenden Prozesse integriert werden können.
            </p>
            <p className="text-gray-300 text-lg">
              Lassen Sie uns gemeinsam Ihre Telefonkommunikation optimieren – effizient, kundenorientiert und zukunftssicher mit modernster KI-Technologie!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}