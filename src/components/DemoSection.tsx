import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, Volume2, Calendar } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function DemoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Ensure we start from the beginning if the audio has ended
        if (audioRef.current.ended) {
          audioRef.current.currentTime = 0;
        }
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Audio playback error:", error);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const audioDuration = audioRef.current.duration || 0;
      if (audioDuration > 0) {
        const percentage = (currentTime / audioDuration) * 100;
        setProgress(percentage);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleCanPlayThrough = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const scrollToCalendar = () => {
    const section = document.getElementById('calendar');
    if (section) {
      const navbarHeight = 64;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Load the audio file
      audio.load();
      
      // Add event listeners
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('canplaythrough', handleCanPlayThrough);
      audio.addEventListener('ended', handleAudioEnd);
      audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
      });

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
        audio.removeEventListener('ended', handleAudioEnd);
        audio.removeEventListener('error', (e) => {
          console.error('Audio error:', e);
        });
      };
    }
  }, []);

  return (
    <section className="py-24 bg-black" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Erleben Sie unser{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Terminplanungssystem
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hören Sie, wie unsere KI-Sprachassistenz Termine vereinbart und testen Sie anschließend 
            selbst unser Online-Buchungssystem für ein persönliches Beratungsgespräch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Demo-Gespräch anhören</h3>
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={togglePlay}
                    className="relative bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white" strokeWidth={2.5} />
                    ) : (
                      <Play className="h-8 w-8 text-white ml-1" strokeWidth={2.5} />
                    )}
                  </button>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Volume2 className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="text-white font-medium">Terminvereinbarung per Telefon</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'} / {formatTime(duration)}
                    </div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <audio
                ref={audioRef}
                preload="metadata"
                className="hidden"
                src="/0321.MP3"
              />

              <p className="text-gray-400 text-sm">
                Hören Sie, wie unsere KI-Sprachassistenz natürlich und professionell kommuniziert, 
                Termine koordiniert und Kundenwünsche erfüllt.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Online-Terminbuchung testen</h3>
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <p className="text-gray-400 mb-8">
                Erleben Sie selbst, wie einfach die Online-Terminbuchung funktioniert. 
                Vereinbaren Sie direkt einen Termin für ein kostenloses Beratungsgespräch.
              </p>
              <Button
                onClick={scrollToCalendar}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                size="lg"
              >
                Jetzt Termin buchen
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            * Die gezeigte Demo demonstriert die Funktionsweise unseres KI-Sprachassistenten. 
            Das integrierte Online-Buchungssystem ermöglicht zusätzlich die direkte Terminvereinbarung über Ihre Website.
          </p>
        </motion.div>
      </div>
    </section>
  );
}