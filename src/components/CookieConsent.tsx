import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';

const COOKIE_CONSENT_KEY = 'cookie-consent-accepted';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = Cookies.get(COOKIE_CONSENT_KEY);
    
    // If no consent yet, show the banner after a short delay
    if (!hasConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    // Set cookie with 1 year expiry and path to root to make it available across all pages
    Cookies.set(COOKIE_CONSENT_KEY, 'true', { 
      expires: 365,
      path: '/',
      sameSite: 'strict'
    });
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    // Set cookie with 1 year expiry, but only for necessary cookies
    Cookies.set(COOKIE_CONSENT_KEY, 'necessary', { 
      expires: 365,
      path: '/',
      sameSite: 'strict'
    });
    setIsVisible(false);
  };

  const dismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-xl p-6 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Cookie className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Cookie-Einstellungen</h3>
                </div>
                <button 
                  onClick={dismiss}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Schließen"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300 mb-4">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                  Einige Cookies sind technisch notwendig, während andere uns helfen, Ihre Erfahrung zu verbessern 
                  und anonyme Nutzungsstatistiken zu sammeln.
                </p>
                <p className="text-gray-300">
                  Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-blue-400 hover:underline">Datenschutzerklärung</a>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-gray-700 hover:bg-gray-800 w-full sm:w-auto"
                  onClick={acceptNecessary}
                >
                  Nur notwendige Cookies
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                  onClick={acceptAll}
                >
                  Alle Cookies akzeptieren
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}