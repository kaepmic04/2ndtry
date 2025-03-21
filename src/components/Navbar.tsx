import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the homepage
    if (window.location.pathname !== '/') {
      // If not on homepage, navigate to homepage first and then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If already on homepage, just scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateTo = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => navigateTo('/')}
            style={{ cursor: 'pointer' }}
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3 opacity-75" />
              <div className="absolute inset-0 bg-black rounded-lg flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold text-xl">A</span>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-white">AI Rezeption</span>
              <span className="text-xs text-gray-400 -mt-1">Voice Assistant Solutions</span>
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => navigateTo('/')}
              >
                Start
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => scrollToSection('ai')}
              >
                Services
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => scrollToSection('process')}
              >
                Prozess
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => scrollToSection('pricing')}
              >
                Preise
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-gray-300 flex items-center"
                  >
                    Branchen <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-800 text-white">
                  <DropdownMenuItem 
                    className="hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigateTo('/branchen')}
                  >
                    Übersicht
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigateTo('/branchen/handwerker')}
                  >
                    Handwerker
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="hover:bg-gray-800 cursor-pointer"
                    onClick={() => navigateTo('/branchen/heilpraktiker')}
                  >
                    Heilpraktiker
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => navigateTo('/blog')}
              >
                Blog
              </Button>
              <Button 
                variant="default" 
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => scrollToSection('calendar')}
              >
                Kontakt
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => navigateTo('/')}
            >
              Start
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => scrollToSection('ai')}
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => scrollToSection('process')}
            >
              Prozess
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => scrollToSection('pricing')}
            >
              Preise
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => navigateTo('/branchen')}
            >
              Branchen
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300 pl-8"
              onClick={() => navigateTo('/branchen/handwerker')}
            >
              - Handwerker
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300 pl-8"
              onClick={() => navigateTo('/branchen/heilpraktiker')}
            >
              - Heilpraktiker
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => navigateTo('/blog')}
            >
              Blog
            </Button>
            <Button 
              variant="default" 
              className="w-full bg-white text-black hover:bg-gray-200"
              onClick={() => scrollToSection('calendar')}
            >
              Kontakt
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}