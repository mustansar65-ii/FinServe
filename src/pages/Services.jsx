import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { PieChart, TrendingUp, Calculator, Briefcase, ChevronRight, X, Send } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const services = [
    {
      id: 1,
      title: 'Financial Planning',
      icon: <PieChart className="w-10 h-10 text-primary" />,
      shortDesc: 'Comprehensive strategies tailored to your long-term goals.',
      details: 'We analyze your current financial status, risk tolerance, and future objectives to create a robust, adaptable roadmap for your personal or corporate wealth.'
    },
    {
      id: 2,
      title: 'Investment Advisory',
      icon: <TrendingUp className="w-10 h-10 text-secondary" />,
      shortDesc: 'Data-driven insights to maximize your portfolio returns.',
      details: 'Our expert advisors utilize cutting-edge market analysis to build diversified portfolios designed to weather market volatility and capture growth opportunities.'
    },
    {
      id: 3,
      title: 'Tax Optimization',
      icon: <Calculator className="w-10 h-10 text-yellow-400" />,
      shortDesc: 'Strategic tax planning to protect your assets.',
      details: 'Navigate complex tax landscapes efficiently. We help minimize liabilities and ensure full compliance across multi-jurisdictional operations.'
    },
    {
      id: 4,
      title: 'Corporate Treasury',
      icon: <Briefcase className="w-10 h-10 text-purple-400" />,
      shortDesc: 'Optimize liquidity and manage financial risk.',
      details: 'Streamline cash management, foreign exchange risk, and capital structure to fuel your business expansion and daily operations.'
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      setSelectedService(null);
      setIsFormSubmitted(false);
    }, 2500);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-textMuted text-lg"
          >
            Discover how our bespoke financial solutions can drive your success, secure your assets, and unlock new avenues for growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6 bg-surface/50 inline-block p-4 rounded-2xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-textMuted mb-6">{service.shortDesc}</p>
              
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10">
                <h4 className="text-xl font-bold mb-4 text-white">{service.title} Details</h4>
                <p className="text-textMuted mb-6 leading-relaxed">{service.details}</p>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="mt-auto bg-primary hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-medium w-fit flex items-center gap-2 transition-colors"
                >
                  Request Consultation <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Contact Form */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass rounded-2xl p-8 max-w-lg w-full relative"
              >
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 text-textMuted hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {isFormSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                    <p className="text-textMuted">Our team will contact you shortly regarding {selectedService.title}.</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2">Consult with an Expert</h3>
                    <p className="text-textMuted mb-8">Inquire about our {selectedService.title} services.</p>
                    
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm text-textMuted mb-1">Full Name</label>
                        <input required type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm text-textMuted mb-1">Business Email</label>
                        <input required type="email" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm text-textMuted mb-1">Message</label>
                        <textarea required rows="4" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg mt-4"
                      >
                        Send Inquiry
                      </motion.button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default Services;
