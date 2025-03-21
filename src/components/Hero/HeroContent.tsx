import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroContent() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Code2 className="h-6 w-6 text-white mr-2" />
        <span className="text-white font-medium">Webentwicklung auf höchstem Niveau</span>
      </motion.div>

      <motion.h1 
        variants={itemVariants}
        className="text-4xl sm:text-6xl font-bold text-white mb-6"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Digitale Präsenz neu definiert
        </motion.span>
        <br />
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          mit modernen Weblösungen
        </motion.span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Wir entwickeln beeindruckende, leistungsstarke Websites, die Ergebnisse liefern.
        Lassen Sie uns Ihre Vision mit modernster Technologie zum Leben erwecken.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 inline-flex items-center relative group overflow-hidden transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            <span className="relative z-10">Kontakt aufnehmen</span>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="absolute inset-0 ring-2 ring-black/5 group-hover:ring-black/10 rounded-md transition-all duration-300" />
          </Button>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300"
            onClick={() => scrollToSection('about')}
          >
            Mehr erfahren
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}