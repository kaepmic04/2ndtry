import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendContactEmail, type ContactFormData } from '@/lib/email-service';

export function Form() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      toast.success('Ihre Nachricht wurde erfolgreich gesendet!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              placeholder="Max Mustermann"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">
              E-Mail *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              placeholder="max@beispiel.de"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-300">
            Betreff
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
            placeholder="Wie können wir Ihnen helfen?"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-300">
            Nachricht *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 min-h-[150px]"
            placeholder="Beschreiben Sie Ihr Projekt..."
            required
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50"
          >
            <span>{isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}</span>
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}