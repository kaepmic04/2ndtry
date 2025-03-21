import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, TrendingUp, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/blog-data';

const iconMap = {
  TrendingUp,
  Layout,
};

export function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleReadMore = (postId: string) => {
    window.location.href = `/blog/${postId}`;
  };

  const handleViewAll = () => {
    window.location.href = '/blog';
  };

  return (
    <section className="py-24 bg-black" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Aktuelle{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Insights
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Erfahren Sie mehr über die neuesten Entwicklungen und Strategien im Bereich KI-Sprachassistenz und virtuelle Rezeptionsdienste.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(0, 2).map((post, index) => {
            const Icon = iconMap[post.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer"
                onClick={() => handleReadMore(post.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="h-6 w-6 text-blue-400" />}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} Lesezeit</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="group/btn text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadMore(post.id);
                    }}
                  >
                    <span className="mr-2">Weiterlesen</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
            onClick={handleViewAll}
          >
            Alle Artikel ansehen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}