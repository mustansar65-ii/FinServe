import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = ['All', 'Account Management', 'Payments', 'Security', 'Integration'];

  const faqs = [
    {
      category: 'Account Management',
      question: 'How do I open a corporate account?',
      answer: 'Opening a corporate account requires your business registration documents, proof of address, and ID verification for directors. The process can be initiated entirely online and typically takes 24-48 hours for full approval.'
    },
    {
      category: 'Account Management',
      question: 'Can I have multiple user roles for my team?',
      answer: 'Yes, FinServe supports granular Role-Based Access Control (RBAC). You can assign custom permissions for viewing, initiating, and approving transactions.'
    },
    {
      category: 'Payments',
      question: 'What are the limits on international transfers?',
      answer: 'Standard corporate accounts have a daily transfer limit of $500,000. For higher limits, please contact your dedicated account manager for a limit increase review.'
    },
    {
      category: 'Payments',
      question: 'How long do cross-border payments take?',
      answer: 'Through our partner networks, 80% of our cross-border payments settle instantly or within the same business day. In rare cases involving exotic currencies, it may take up to 2 business days.'
    },
    {
      category: 'Security',
      question: 'Is my corporate data secure?',
      answer: 'We employ bank-grade AES-256 encryption for all data at rest and in transit. We are fully SOC 2 Type II compliant and conduct regular third-party penetration testing.'
    },
    {
      category: 'Integration',
      question: 'Do you offer an API for ERP integration?',
      answer: 'Yes, our robust REST API allows seamless integration with major ERP systems like SAP, Oracle, and NetSuite. Comprehensive documentation is available in the developer portal.'
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-textMuted text-lg">Find answers to common questions about our services and platform.</p>
        </div>

        {/* Search Bar */}
        <motion.div 
          animate={isSearchFocused ? { scale: 1.02 } : { scale: 1 }}
          className="relative mb-12 shadow-2xl"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className={`w-6 h-6 transition-colors ${isSearchFocused ? 'text-primary' : 'text-textMuted'}`} />
          </div>
          <input
            type="text"
            className="w-full bg-surface/80 backdrop-blur-md border border-white/10 rounded-2xl pl-12 pr-4 py-5 text-lg text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null); // Close opened items on category change
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-surface hover:bg-white/10 text-textMuted hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                  >
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors">{faq.question}</span>
                    <span className={`ml-4 text-textMuted transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-textMuted leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-textMuted"
              >
                No FAQs found matching your search criteria.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </PageTransition>
  );
};

export default FAQ;
