import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DemoSection } from './components/DemoSection';
import { AboutSection } from './components/AboutSection';
import { AISection } from './components/AISection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { BlogSection } from './components/BlogSection';
import { CalendarSection } from './components/CalendarSection';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { AGB } from './pages/AGB';
import { Branchen } from './pages/Branchen';
import { Handwerker } from './pages/Handwerker';
import { Heilpraktiker } from './pages/Heilpraktiker';
import { Autowerkstatt } from './pages/Autowerkstatt';
import { Gastronomie } from './pages/Gastronomie';
import { AndereBranchen } from './pages/AndereBranchen';
import { Immobilienmakler } from './pages/Immobilienmakler';

function App() {
  const path = window.location.pathname;

  if (path === '/blog') {
    return (
      <>
        <h1 className="sr-only">AI Rezeption Blog - Insights zu KI-Sprachassistenz</h1>
        <Blog />
        <Footer />
      </>
    );
  }

  if (path.startsWith('/blog/')) {
    return (
      <>
        <BlogPost />
        <Footer />
      </>
    );
  }

  if (path === '/impressum') {
    return (
      <>
        <h1 className="sr-only">Impressum - AI Rezeption</h1>
        <Impressum />
        <Footer />
      </>
    );
  }

  if (path === '/datenschutz') {
    return (
      <>
        <h1 className="sr-only">Datenschutzerklärung - AI Rezeption</h1>
        <Datenschutz />
        <Footer />
      </>
    );
  }

  if (path === '/agb') {
    return (
      <>
        <h1 className="sr-only">Allgemeine Geschäftsbedingungen - AI Rezeption</h1>
        <AGB />
        <Footer />
      </>
    );
  }

  if (path === '/branchen') {
    return (
      <>
        <h1 className="sr-only">Branchenlösungen für KI-Sprachassistenz - AI Rezeption</h1>
        <Branchen />
        <Footer />
      </>
    );
  }

  if (path === '/branchen/handwerker') {
    return (
      <>
        <h1 className="sr-only">KI-Sprachassistenz für Handwerker - AI Rezeption</h1>
        <Handwerker />
        <Footer />
      </>
    );
  }

  if (path === '/branchen/heilpraktiker') {
    return (
      <>
        <h1 className="sr-only">KI-Sprachassistenz für Heilpraktiker - AI Rezeption</h1>
        <Heilpraktiker />
        <Footer />
      </>
    );
  }

  if (path === '/branchen/autowerkstatt') {
    return (
      <>
        <h1 className="sr-only">KI-Sprachassistenz für Autowerkstätten - AI Rezeption</h1>
        <Autowerkstatt />
        <Footer />
      </>
    );
  }

  if (path === '/branchen/gastronomie') {
    return (
      <>
        <h1 className="sr-only">KI-Sprachassistenz für Gastronomie - AI Rezeption</h1>
        <Gastronomie />
        <Footer />
      </>
    );
  }

  if (path === '/branchen/immobilienmakler') {
    return (
      <>
        <h1 className="sr-only">KI-Sprachassistenz für Immobilienmakler - AI Rezeption</h1>
        <Immobilienmakler />
        <Footer />
      </>
    );
  }

  if (path === '/branchen/andere') {
    return (
      <>
        <h1 className="sr-only">Weitere Branchenlösungen für KI-Sprachassistenz - AI Rezeption</h1>
        <AndereBranchen />
        <Footer />
      </>
    );
  }

  return (
    <div className="bg-black w-full overflow-x-hidden">
      <h1 className="sr-only">AI Rezeption - KI-Sprachassistenz und virtuelle Rezeptionisten für Ihr Unternehmen</h1>
      <Navbar />
      <Hero />
      <DemoSection />
      <AboutSection />
      <AISection />
      <ProcessSection />
      <PricingSection />
      <BlogSection />
      <CalendarSection />
      <Footer />
    </div>
  );
}

export default App;