import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/blog-data';
import ReactMarkdown from 'react-markdown';
import { Navbar } from '@/components/Navbar';

export function BlogPost() {
  const postId = window.location.pathname.split('/blog/')[1];
  const post = blogPosts.find(p => p.id === postId);

  // Function to get related posts
  const getRelatedPosts = () => {
    return blogPosts
      .filter(p => p.id !== postId)
      .slice(0, 2);
  };

  const relatedPosts = getRelatedPosts();

  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Artikel nicht gefunden</h1>
            <p className="text-gray-300 mb-8">Der gesuchte Artikel existiert nicht oder wurde entfernt.</p>
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              onClick={() => window.location.href = '/blog'}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Blog-Übersicht
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Function to get tag info based on post ID
  const getTagInfo = () => {
    switch(post.id) {
      case 'ki-chatbots-voice-assistants':
        return { name: 'KI-Sprachassistenz', bgColor: 'bg-blue-500/20', textColor: 'text-blue-300' };
      case 'ai-rezeptionist-zukunft-terminbuchung':
        return { name: 'Terminplanung', bgColor: 'bg-green-500/20', textColor: 'text-green-300' };
      case 'ki-rezeptionist-immobilienmakler':
        return { name: 'Umsatzsteigerung', bgColor: 'bg-purple-500/20', textColor: 'text-purple-300' };
      case 'ki-rezeptionisten-heilpraktiker':
        return { name: 'Integration', bgColor: 'bg-pink-500/20', textColor: 'text-pink-300' };
      default:
        return { name: 'Allgemein', bgColor: 'bg-gray-500/20', textColor: 'text-gray-300' };
    }
  };

  const tagInfo = getTagInfo();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Button
            variant="ghost"
            className="text-white hover:text-blue-400 mb-8"
            onClick={() => window.location.href = '/blog'}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Blog-Übersicht
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-xs ${tagInfo.bgColor} ${tagInfo.textColor} px-3 py-1 rounded-full flex items-center`}>
                <Tag className="h-3 w-3 mr-1" />
                {tagInfo.name}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime} Lesezeit</span>
              </div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-300">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-white">{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 my-4 text-gray-300 italic">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Teilen Sie diesen Artikel</h3>
                <div className="flex space-x-3">
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10 bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Author Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AI</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AI Rezeption</h3>
                  <p className="text-gray-400">KI-Sprachassistenz Experten</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Wir sind Experten für KI-gestützte Sprachassistenz und helfen Unternehmen, ihre Telefonkommunikation zu revolutionieren.
              </p>
              <Button 
                variant="outline" 
                className="w-full bg-transparent text-white border-white/20 hover:bg-white/10"
                onClick={() => window.location.href = '/#calendar'}
              >
                Beratungsgespräch vereinbaren
              </Button>
            </div>
            
            {/* Related Posts */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Verwandte Artikel</h3>
              <div className="space-y-4">
                {relatedPosts.map(relatedPost => (
                  <div 
                    key={relatedPost.id}
                    className="group cursor-pointer"
                    onClick={() => window.location.href = `/blog/${relatedPost.id}`}
                  >
                    <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime} Lesezeit</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}