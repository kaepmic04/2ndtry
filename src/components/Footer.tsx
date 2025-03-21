import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
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
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Startseite</a>
              </li>
              <li>
                <a href="/#ai" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="/#process" className="text-gray-400 hover:text-blue-400 transition-colors">Prozess</a>
              </li>
              <li>
                <a href="/#pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Preise</a>
              </li>
              <li>
                <a href="/branchen" className="text-gray-400 hover:text-blue-400 transition-colors">Branchen</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a>
              </li>
              <li>
                <a href="/#calendar" className="text-gray-400 hover:text-blue-400 transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="/impressum" className="text-gray-400 hover:text-blue-400 transition-colors">Impressum</a>
              </li>
              <li>
                <a href="/datenschutz" className="text-gray-400 hover:text-blue-400 transition-colors">Datenschutz</a>
              </li>
              <li>
                <a href="/agb" className="text-gray-400 hover:text-blue-400 transition-colors">AGB</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} AI Rezeption. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
              onClick={() => window.location.href = "/#calendar"}
            >
              <span>Kontakt aufnehmen</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}