import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Search, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts } from '@/lib/blog-data';
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags from blog posts
  const tags = ['KI-Sprachassistenz', 'Terminplanung', 'Umsatzsteigerung', 'Integration'];

  useEffect(() => {
    let result = [...blogPosts];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by tag
    if (selectedTag) {
      const tagMappings: Record<string, string[]> = {
        'KI-Sprachassistenz': ['ki-chatbots-voice-assistants'],
        'Terminplanung': ['ai-rezeptionist-zukunft-terminbuchung'],
        'Umsatzsteigerung': ['ki-rezeptionist-immobilienmakler'],
        'Integration': ['ki-rezeptionisten-heilpraktiker']
      };
      
      result = result.filter(post => tagMappings[selectedTag]?.includes(post.id));
    }
    
    setFilteredPosts(result);
  }, [searchTerm, selectedTag]);

  const handleReadMore = (postId: string) => {
    window.location.href = `/blog/${postId}`;
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

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
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Rezeption{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aktuelle Einblicke und Expertenwissen rund um KI-Sprachassistenz, virtuelle Rezeption und moderne Kommunikationslösungen für Ihr Unternehmen.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Suchen Sie nach Artikeln..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTagClick(tag)}
                  className={selectedTag === tag 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-transparent text-gray-300 border-gray-700 hover:bg-gray-800"}
                >
                  <Tag className="h-4 w-4 mr-1" />
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime} Lesezeit</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.id === 'ki-chatbots-voice-assistants' && (
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">KI-Sprachassistenz</span>
                      )}
                      {post.id === 'ai-rezeptionist-zukunft-terminbuchung' && (
                        <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Terminplanung</span>
                      )}
                      {post.id === 'ki-rezeptionist-immobilienmakler' && (
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">Umsatzsteigerung</span>
                      )}
                      {post.id === 'ki-rezeptionisten-heilpraktiker' && (
                        <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">Integration</span>
                      )}
                    </div>
                    
                    <Button
                      variant="ghost"
                      className="group/btn text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                      onClick={() => handleReadMore(post.id)}
                    >
                      <span className="mr-2">Weiterlesen</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-900/50 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Keine Artikel gefunden</h3>
              <p className="text-gray-400 mb-6">Versuchen Sie es mit anderen Suchbegriffen oder entfernen Sie Filter.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag(null);
                }}
                className="bg-transparent text-white border-white/20 hover:bg-white/10"
              >
                Alle Artikel anzeigen
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}