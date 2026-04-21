import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Wallet, MessageCircle, Briefcase, Globe, LogIn, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mr-2">
                <Wallet className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white">FinServe</span>
            </div>
            <p className="text-textMuted text-sm mb-6">
              Empowering your financial future with smart, secure, and modern business solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-textMuted hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-textMuted hover:text-white transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#" className="text-textMuted hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/wallet" className="text-textMuted hover:text-primary transition-colors">Wallet</Link></li>
              <li><Link to="/transactions" className="text-textMuted hover:text-primary transition-colors">Transactions</Link></li>
              <li><Link to="/services" className="text-textMuted hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-textMuted hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="text-textMuted hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-textMuted hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-textMuted hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/faq" className="text-textMuted hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Authentication Status / CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Account</h3>
            {isAuthenticated ? (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out Securely</span>
              </motion.button>
            ) : (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate('/login')}
                className="flex items-center space-x-2 text-primary hover:text-blue-400 transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>Sign In to Dashboard</span>
              </motion.button>
            )}
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-textMuted">
          <p>&copy; {new Date().getFullYear()} FinServe Business. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
