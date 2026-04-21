import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { ArrowLeft, Share2, MessageCircle, Briefcase, Globe, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  const allPosts = [
    {
      id: 1,
      title: 'The Future of Corporate Treasury in 2026',
      excerpt: 'How AI and blockchain are fundamentally restructuring how multinational corporations manage their daily liquidity.',
      content: 'Corporate treasury is undergoing a massive transformation. With the advent of real-time payments and AI-driven cash flow forecasting, treasurers are moving from reactive cash managers to proactive strategic advisors. In this article, we explore the top 5 trends shaping the future of corporate treasury... [Full content would go here, detailing AI analytics, blockchain settlements, and API integration.]',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=400',
      date: 'Apr 16, 2026',
      readTime: '5 min read',
      category: 'Treasury'
    },
    {
      id: 2,
      title: 'Navigating Cross-Border Tax Complexities',
      excerpt: 'Essential strategies for minimizing tax liabilities while expanding your business globally.',
      content: 'Expanding internationally brings immense opportunities but also significant tax hurdles. Understanding transfer pricing, double taxation treaties, and local compliance is paramount... [Full content detailing specific strategies for EU and APAC regions.]',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=400',
      date: 'Apr 12, 2026',
      readTime: '8 min read',
      category: 'Tax Planning'
    },
    {
      id: 3,
      title: 'Maximizing ROI in Volatile Markets',
      excerpt: 'A guide to dynamic asset allocation during economic uncertainty.',
      content: 'Volatility is not the enemy of investment; it is the source of opportunity if managed correctly. By employing dynamic asset allocation and alternative investments, corporate portfolios can thrive... [Full content discussing hedging strategies.]',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800&h=400',
      date: 'Apr 08, 2026',
      readTime: '6 min read',
      category: 'Investments'
    },
    {
      id: 4,
      title: 'Understanding Decentralized Finance (DeFi)',
      excerpt: 'How DeFi protocols are creating new yield opportunities for institutional investors.',
      content: 'DeFi is no longer just for retail crypto enthusiasts. Institutional adoption is growing rapidly as smart contracts offer transparent, high-yield alternatives to traditional fixed income... [Full content exploring stablecoin yields and liquidity pools.]',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800&h=400',
      date: 'Apr 02, 2026',
      readTime: '7 min read',
      category: 'DeFi'
    },
    {
      id: 5,
      title: 'Sustainable Finance: ESG Integration',
      excerpt: 'Why Environmental, Social, and Governance factors are critical for modern corporate valuation.',
      content: 'ESG is more than a buzzword; it is a fundamental shift in capital allocation. Investors demand transparency and sustainability. Here is how to integrate ESG metrics into your financial reporting... [Full content on ESG frameworks.]',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800&h=400',
      date: 'Mar 28, 2026',
      readTime: '4 min read',
      category: 'Sustainability'
    },
    {
      id: 6,
      title: 'Optimizing Working Capital',
      excerpt: 'Practical steps to free up cash trapped in your supply chain.',
      content: 'Efficient working capital management acts as an internal source of funding. By optimizing receivables, payables, and inventory, businesses can unlock significant cash flow... [Full content on supply chain finance.]',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400',
      date: 'Mar 20, 2026',
      readTime: '6 min read',
      category: 'Operations'
    }
  ];

  const handleShare = (platform) => {
    // Mock sharing functionality
    alert(`Sharing to ${platform}...`);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-12 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Insights</h1>
                <p className="text-textMuted text-lg">Expert analysis, market trends, and strategic advice to keep you ahead of the curve.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {allPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass rounded-2xl overflow-hidden cursor-pointer group flex flex-col hover:border-primary/50 transition-colors"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-primary">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-textMuted mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                      <p className="text-textMuted text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <button className="text-primary font-medium text-sm mt-auto inline-flex items-center hover:underline">
                        Read Full Article
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Mock */}
              <div className="flex justify-center mt-12">
                <button className="glass px-6 py-2 rounded-l-xl hover:bg-surface transition-colors border-r border-white/5">Previous</button>
                <button className="bg-primary text-white px-6 py-2 border-r border-white/5">1</button>
                <button className="glass px-6 py-2 hover:bg-surface transition-colors border-r border-white/5">2</button>
                <button className="glass px-6 py-2 rounded-r-xl hover:bg-surface transition-colors">Next</button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-textMuted hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Insights
              </button>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-medium">{selectedPost.category}</span>
                  <span className="text-textMuted">•</span>
                  <span className="text-textMuted">{selectedPost.date}</span>
                  <span className="text-textMuted">•</span>
                  <span className="text-textMuted">{selectedPost.readTime}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{selectedPost.title}</h1>
                
                {/* Social Share */}
                <div className="flex items-center gap-4 py-4 border-y border-white/10 mb-8">
                  <span className="text-textMuted text-sm flex items-center gap-2"><Share2 className="w-4 h-4" /> Share:</span>
                  <button onClick={() => handleShare('Twitter')} className="p-2 rounded-full glass hover:text-[#1DA1F2] transition-colors"><MessageCircle className="w-4 h-4" /></button>
                  <button onClick={() => handleShare('LinkedIn')} className="p-2 rounded-full glass hover:text-[#0077b5] transition-colors"><Briefcase className="w-4 h-4" /></button>
                  <button onClick={() => handleShare('Facebook')} className="p-2 rounded-full glass hover:text-[#4267B2] transition-colors"><Globe className="w-4 h-4" /></button>
                </div>
              </div>

              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-96 object-cover rounded-2xl mb-10 shadow-2xl"
              />

              <div className="prose prose-invert prose-lg max-w-none text-textMain leading-relaxed mb-16">
                <p className="text-xl text-textMuted italic mb-8 border-l-4 border-primary pl-6">
                  {selectedPost.excerpt}
                </p>
                <p>
                  {selectedPost.content}
                </p>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default Blog;
