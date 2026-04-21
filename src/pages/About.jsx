import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Target, Eye, Award, Briefcase, MessageCircle, Mail } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Eleanor Vance',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 20+ years driving financial tech innovation across global markets.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400'
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Financial Officer',
      bio: 'Expert in corporate treasury and strategic acquisitions, formerly at Goldman Sachs.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of Security',
      bio: 'Cybersecurity veteran ensuring military-grade protection for all client assets.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400'
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Redefining Financial Business</h1>
            <p className="text-textMuted text-lg mb-6 leading-relaxed">
              Founded in 2015, FinServe was born from a simple idea: financial operations for global businesses shouldn't be archaic. We've built a platform that marries enterprise-grade security with the sleek, instant experience of modern consumer apps.
            </p>
            <p className="text-textMuted text-lg leading-relaxed mb-8">
              Today, we manage over $10B in assets and facilitate millions of secure transactions daily for over 10,000 businesses worldwide.
            </p>
            <div className="flex gap-4">
              <div className="glass p-4 rounded-xl text-center">
                <h4 className="text-3xl font-bold text-primary mb-1">10B+</h4>
                <p className="text-sm text-textMuted">Assets Managed</p>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <h4 className="text-3xl font-bold text-secondary mb-1">10k+</h4>
                <p className="text-sm text-textMuted">Business Clients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass p-8 rounded-2xl flex flex-col items-start hover:border-primary/50 transition-colors">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-textMuted">To empower businesses with borderless, instant, and radically transparent financial tools.</p>
            </div>
            <div className="glass p-8 rounded-2xl flex flex-col items-start hover:border-secondary/50 transition-colors sm:mt-12">
              <Eye className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-textMuted">A global economy where capital moves freely and securely at the speed of thought.</p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Leadership</h2>
          <p className="text-textMuted text-lg">The experts driving our platform forward.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6 relative">
                {/* Hover overlay bio */}
                <div className="absolute inset-0 bg-surface/95 backdrop-blur-sm p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <p className="text-white italic mb-4">"{member.bio}"</p>
                  <div className="flex gap-4 mt-auto">
                    <a href="#" className="text-textMuted hover:text-white"><Briefcase className="w-5 h-5" /></a>
                    <a href="#" className="text-textMuted hover:text-white"><MessageCircle className="w-5 h-5" /></a>
                    <a href="#" className="text-textMuted hover:text-white"><Mail className="w-5 h-5" /></a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};

export default About;
