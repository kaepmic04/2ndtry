import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'michel.kaeppler@icloud.com',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+49 157 33275381',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: ['Werrastraße 6', '60486 Frankfurt am Main'],
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-6">Kontaktinformationen</h3>
        <div className="space-y-6">
          {contactItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ x: 5 }}
              className="flex items-start space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                {Array.isArray(item.value) ? (
                  item.value.map((line, i) => <p key={i}>{line}</p>)
                ) : (
                  <p className="break-all">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-4">Schnelle Antwort garantiert</h3>
        <p className="text-gray-400">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück und 
          besprechen Ihre Anforderungen an eine KI-Sprachassistenz im Detail.
        </p>
      </div>
    </div>
  );
}