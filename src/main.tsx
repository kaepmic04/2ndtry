import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
emailjs.init('3rx-IQPW3FyfG8CUU');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster position="top-right" theme="dark" />
  </StrictMode>
);