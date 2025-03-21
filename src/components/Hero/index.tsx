import { motion } from 'framer-motion';
import { HeroContent } from './HeroContent';
import { BackgroundEffect } from './BackgroundEffect';

export function Hero() {
  return (
    <motion.section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-gradient-slow bg-[length:400%_400%] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundEffect />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <HeroContent />
      </div>
    </motion.section>
  );
}