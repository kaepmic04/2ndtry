import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL_CONFIG = {
  serviceId: 'service_volu8kv',
  templateId: 'template_3k2fozo',
  publicKey: '3rx-IQPW3FyfG8CUU'
} as const;

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    const templateParams = {
      to_name: 'Michel Käppler',
      from_name: data.name,
      user_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}