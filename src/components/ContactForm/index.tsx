import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactInfo } from './ContactInfo';
import { Form } from './Form';

export function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const gradientTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <section className="relative py-24 bg-black" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="overflow-hidden">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4 px-4 sm:px-0"
              variants={headingVariants}
            >
              <span className="inline-block whitespace-nowrap">Bereit für Ihre</span>{' '}
              <motion.span 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 whitespace-nowrap hover:-translate-y-1"
                variants={gradientTextVariants}
                style={{ transition: 'transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
              >
                KI-Sprachassistenz?
              </motion.span>
            </motion.h2>
          </div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 }
              }
            }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, 
            wie unsere KI-Sprachassistenten Ihre Telefonkommunikation revolutionieren können.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 }
              }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.4 }
              }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
}