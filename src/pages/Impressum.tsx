import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

export function Impressum() {
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
            <h1 className="text-3xl font-bold text-white mb-8">Impressum</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Angaben gemäß § 5 TMG:</h2>
              <p className="text-gray-300">
                Michel Käppler<br />
                Werrastraße 6<br />
                60486 Frankfurt am Main<br />
                Deutschland
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Kontakt:</h2>
              <p className="text-gray-300">
                Telefon: 0157 33275381<br />
                E-Mail: michel.kaeppler@icloud.com<br />
                Website: www.ai-rezeption.de
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Vertreten durch:</h2>
              <p className="text-gray-300">Michel Käppler</p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</h2>
              <p className="text-gray-300">Nicht vorhanden.</p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Haftungsausschluss:</h2>
              
              <h3 className="text-lg font-medium text-white mt-4 mb-2">Haftung für Inhalte</h3>
              <p className="text-gray-300">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder 
                Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist 
                jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-lg font-medium text-white mt-4 mb-2">Haftung für Links</h3>
              <p className="text-gray-300">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für 
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder 
                Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir 
                derartige Links umgehend entfernen.
              </p>

              <h3 className="text-lg font-medium text-white mt-4 mb-2">Urheberrecht</h3>
              <p className="text-gray-300">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der 
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, 
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine 
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}