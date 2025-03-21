import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ✅ Sicherstellen, dass TypeScript `window.Cal` erkennt
declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: any[]): void;
      ns?: Record<string, (action: string, config?: any) => void>;
      loaded?: boolean;
      q?: any[];
    };
  }
}

export function CalendarSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const loadCalScript = () => {
      if (document.getElementById('cal-script')) return;

      const script = document.createElement('script');
      script.id = 'cal-script';
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      script.onload = () => {
        console.log('Cal.com script loaded');
        initializeCal();
      };
      document.body.appendChild(script);
    };

    const initializeCal = () => {
      if (!window.Cal) {
        console.warn('Cal.com not loaded yet');
        return;
      }

      window.Cal('init', '30min', { origin: 'https://cal.com' });

      if (window.Cal.ns?.['30min']) {
        window.Cal.ns['30min']('inline', {
          elementOrSelector: '#my-cal-inline',
          config: { layout: 'month_view' },
          calLink: 'michel-kappler-lahrgc/30min',
        });

        window.Cal.ns['30min']('ui', {
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      }
    };

    loadCalScript();
  }, []);

  return (
    <section className="py-24 bg-black" id="calendar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Termin{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              vereinbaren
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Wählen Sie einen passenden Termin für unser Gespräch aus.
          </p>
        </motion.div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <div 
            id="my-cal-inline" 
            style={{ width: '100%', minHeight: '600px', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
