import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

export function Datenschutz() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Button
            variant="ghost"
            className="text-white hover:text-blue-400 mb-8"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
            <h1 className="text-3xl font-bold text-white mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Einleitung</h2>
              <p className="text-gray-300">
                Wir freuen uns über Ihr Interesse an unserer Website und unseren Dienstleistungen. Der Schutz Ihrer persönlichen Daten ist uns besonders wichtig. Nachfolgend informieren wir Sie darüber, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie in Bezug auf Ihre Daten haben.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. Verantwortlicher</h2>
              <p className="text-gray-300">
                Michel Käppler<br />
                michel.kaeppler@icloud.com<br />
                Mobil: 015733275381
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">3. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p className="text-gray-300">
                Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies erforderlich ist und im Einklang mit den gesetzlichen Bestimmungen steht. Die Erhebung erfolgt insbesondere in folgenden Fällen:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Bei der Nutzung unserer Website (z. B. durch Cookies und Tracking-Tools)</li>
                <li>Bei der Kontaktaufnahme per E-Mail oder Kontaktformular</li>
                <li>Bei der Registrierung für unsere Dienstleistungen</li>
                <li>Bei der Nutzung unserer GoHighLevel-Services</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">4. Zweck der Verarbeitung</h2>
              <p className="text-gray-300">
                Wir verwenden Ihre Daten zu folgenden Zwecken:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Zur Bereitstellung und Verbesserung unserer Dienstleistungen</li>
                <li>Zur Beantwortung Ihrer Anfragen</li>
                <li>Zur Erfassung von Nutzungsstatistiken</li>
                <li>Zur Erfüllung rechtlicher Verpflichtungen</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">5. Rechtsgrundlage der Verarbeitung</h2>
              <p className="text-gray-300">
                Die Verarbeitung Ihrer Daten erfolgt auf Basis folgender Rechtsgrundlagen:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">6. Speicherung und Löschung der Daten</h2>
              <p className="text-gray-300">
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">7. Weitergabe von Daten an Dritte</h2>
              <p className="text-gray-300">
                Wir geben Ihre personenbezogenen Daten nur an Dritte weiter, wenn:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Sie ausdrücklich eingewilligt haben,</li>
                <li>dies zur Vertragsdurchführung erforderlich ist,</li>
                <li>eine gesetzliche Verpflichtung besteht oder</li>
                <li>dies zur Wahrung unserer berechtigten Interessen erforderlich ist.</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">8. Verwendung von Cookies</h2>
              <p className="text-gray-300">
                Unsere Website verwendet Cookies. Diese können technisch notwendige oder optionale Cookies sein (z. B. zur Analyse oder Marketingzwecken). Sie können Ihre Cookie-Einstellungen jederzeit anpassen.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">9. Ihre Rechte als betroffene Person</h2>
              <p className="text-gray-300">
                Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-gray-300">
                Zudem haben Sie das Recht, eine Beschwerde bei einer Datenschutzbehörde einzureichen.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">10. Kontakt für Datenschutzanfragen</h2>
              <p className="text-gray-300">
                Falls Sie Fragen zum Datenschutz haben oder Ihre Rechte geltend machen möchten, kontaktieren Sie uns bitte unter:
              </p>
              <p className="text-gray-300">
                Michel Käppler<br />
                Frankfurt, Werrastraße 6<br />
                Michel.kaeppler@icloud.com
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">11. Änderungen der Datenschutzerklärung</h2>
              <p className="text-gray-300">
                Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um rechtlichen Anforderungen zu entsprechen oder Änderungen unserer Dienstleistungen zu berücksichtigen. Bitte prüfen Sie daher regelmäßig diese Erklärung.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}