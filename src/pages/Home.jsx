import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ArrowRight, Shield, Zap, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const services = [
    { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Wealth Management", desc: "Expert strategies to grow and protect your wealth." },
    { icon: <Shield className="w-8 h-8 text-secondary" />, title: "Secure Transactions", desc: "Enterprise-grade security for all your transfers." },
    { icon: <Zap className="w-8 h-8 text-yellow-400" />, title: "Instant Payments", desc: "Lightning-fast domestic and international transfers." }
  ];

  const testimonials = [
    { quote: "FinServe has completely transformed how we manage our corporate treasury. Unparalleled service.", author: "Sarah Jenkins", role: "CFO, TechCorp" },
    { quote: "The security and speed of their platform is exactly what our global business needed.", author: "Marcus Thorne", role: "Director, Global Trade" }
  ];

  return (
    <PageTransition>
      <div className="flex flex-col w-full h-full">
        
        {/* Hero Section */}
        <section className="relative px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[80vh] text-center overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-surface/50 rounded-full px-4 py-1.5 mb-8 border border-white/10 glass">
              <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
              <span className="text-sm text-textMain">Trusted by 10,000+ Businesses</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Financial Business</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-4 text-xl md:text-2xl text-textMuted max-w-2xl mx-auto mb-10">
              Manage your corporate wealth, execute secure transactions, and scale your global operations with our intelligent platform.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/wallet">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  Go to Wallet <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-surface hover:bg-white/10 text-textMain border border-white/10 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass p-8 rounded-2xl transition-all"
                >
                  <div className="mb-4 bg-background p-4 rounded-xl inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-textMuted">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Don't just take our word for it</h2>
              <p className="text-textMuted text-lg">See how businesses are scaling with FinServe.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass p-8 rounded-2xl relative"
                >
                  <Users className="absolute top-8 right-8 text-white/10 w-16 h-16" />
                  <div className="mb-6">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-xl text-textMain italic mb-8 relative z-10">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-textMuted">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Home;
