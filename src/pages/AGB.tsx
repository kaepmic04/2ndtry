import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

export function AGB() {
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
            <h1 className="text-3xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Geltungsbereich</h2>
              <p className="text-gray-300">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen Michel Käppler, Frankfurt, Werrastraße 6 (nachfolgend "Anbieter") und seinen Kunden (nachfolgend "Kunde") im Rahmen der Nutzung von automatisierten Terminerstellungssystemen und KI-Sprachassistenten geschlossen werden.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. Leistungen des Anbieters</h2>
              <p className="text-gray-300">
                Der Anbieter stellt dem Kunden automatisierte Terminerstellungssysteme sowie KI-basierte Sprachassistenten zur Verfügung, die Termine buchen und Kundenanfragen klären können. Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">3. Vertragsschluss</h2>
              <p className="text-gray-300">
                Ein Vertrag kommt durch die Annahme eines Angebots des Anbieters durch den Kunden zustande. Angebote des Anbieters sind freibleibend und unverbindlich, bis sie durch den Kunden angenommen wurden.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">4. Preise und Zahlungsbedingungen</h2>
              <p className="text-gray-300">
                Die Preise für die angebotenen Dienstleistungen werden individuell vereinbart und im Vertrag oder Angebot festgehalten. Rechnungen sind innerhalb von 14 Tagen ohne Abzug fällig. Der Anbieter behält sich das Recht vor, Dienstleistungen bei Zahlungsverzug auszusetzen.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">5. Vertragslaufzeit und Kündigung</h2>
              <p className="text-gray-300">
                Die Vertragslaufzeit wird individuell vereinbart. Sofern nicht anders geregelt, kann der Vertrag mit einer Frist von 30 Tagen zum Monatsende gekündigt werden. Eine Kündigung muss schriftlich erfolgen.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">6. Mitwirkungspflichten des Kunden</h2>
              <p className="text-gray-300">
                Der Kunde verpflichtet sich, alle notwendigen Informationen rechtzeitig bereitzustellen und notwendige Zugangsdaten oder Genehmigungen zu erteilen, damit der Anbieter die vereinbarten Leistungen erbringen kann.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">7. Haftung und Gewährleistung</h2>
              <p className="text-gray-300">
                Der Anbieter haftet nur für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz verursacht wurden. Für entgangenen Gewinn oder indirekte Schäden wird keine Haftung übernommen. Der Kunde ist selbst verantwortlich für die rechtliche Konformität der durch den Anbieter bereitgestellten Inhalte und Dienstleistungen.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">8. Datenschutz und Vertraulichkeit</h2>
              <p className="text-gray-300">
                Der Anbieter verpflichtet sich, alle im Rahmen der Geschäftsbeziehung erhaltenen Daten vertraulich zu behandeln und gemäß der DSGVO zu schützen. Weitere Informationen sind in der Datenschutzerklärung zu finden.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">9. Urheberrecht und Nutzungsrechte</h2>
              <p className="text-gray-300">
                Der Anbieter behält sich alle Rechte an erstellten Inhalten, Software und Konzepten vor, sofern nicht ausdrücklich anders vereinbart. Eine Weitergabe oder Nutzung über den vertraglich vereinbarten Rahmen hinaus ist nicht gestattet.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">10. Änderungen der AGB</h2>
              <p className="text-gray-300">
                Der Anbieter behält sich das Recht vor, diese AGB jederzeit zu ändern. Änderungen werden dem Kunden rechtzeitig mitgeteilt. Sofern der Kunde nicht innerhalb von 14 Tagen widerspricht, gelten die neuen AGB als akzeptiert.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">11. Schlussbestimmungen</h2>
              <p className="text-gray-300">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Gültigkeit der übrigen Bestimmungen unberührt. Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Frankfurt am Main.
              </p>
              
              <p className="text-gray-400 mt-8 italic">
                Diese AGB sind ein allgemeines Muster und sollten bei rechtlicher Unsicherheit von einem Anwalt geprüft werden.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}