import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Wallet as WalletIcon, Plus, ArrowUpRight, ArrowDownRight, CreditCard, ChevronRight } from 'lucide-react';

const Wallet = () => {
  const [balance, setBalance] = useState(12450.75);
  const [isAddingFunds, setIsAddingFunds] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState('');
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'received', amount: 5000, date: '2026-04-16', desc: 'Client Payment' },
    { id: 2, type: 'sent', amount: 150, date: '2026-04-15', desc: 'Software Subscription' },
    { id: 3, type: 'sent', amount: 850, date: '2026-04-12', desc: 'Office Supplies' },
  ]);

  const handleAddFunds = (e) => {
    e.preventDefault();
    const amount = parseFloat(amountToAdd);
    if (!isNaN(amount) && amount > 0) {
      const newTransaction = {
        id: Date.now(),
        type: 'received',
        amount: amount,
        date: new Date().toISOString().split('T')[0],
        desc: 'Added Funds'
      };
      
      setBalance(prev => prev + amount);
      setTransactions([newTransaction, ...transactions]);
      setAmountToAdd('');
      setIsAddingFunds(false);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">My Wallet</h1>
          <p className="text-textMuted">Manage your funds and track your balance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Balance & Add Funds */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <WalletIcon className="w-32 h-32" />
              </div>
              <p className="text-textMuted font-medium mb-2">Total Balance</p>
              <motion.h2 
                key={balance}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold text-white tracking-tight"
              >
                ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </motion.h2>
              
              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAddingFunds(!isAddingFunds)}
                  className="flex-1 bg-primary hover:bg-blue-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Plus className="w-5 h-5" /> Add Funds
                </motion.button>
              </div>
            </motion.div>

            <AnimatePresence>
              {isAddingFunds && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <form onSubmit={handleAddFunds} className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Deposit Details
                    </h3>
                    <div className="mb-4">
                      <label className="block text-sm text-textMuted mb-2">Amount (USD)</label>
                      <input
                        type="number"
                        min="1"
                        step="0.01"
                        value={amountToAdd}
                        onChange={(e) => setAmountToAdd(e.target.value)}
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. 500.00"
                        required
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-secondary hover:bg-emerald-600 text-white py-3 rounded-xl font-medium transition-colors"
                    >
                      Confirm Deposit
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Recent Transactions */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Recent Activity</h3>
                <button className="text-primary hover:text-blue-400 text-sm font-medium flex items-center">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {transactions.map((tx) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${tx.type === 'received' ? 'bg-secondary/20 text-secondary' : 'bg-red-500/20 text-red-500'}`}>
                          {tx.type === 'received' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-semibold text-white group-hover:text-primary transition-colors">{tx.desc}</p>
                          <p className="text-sm text-textMuted">{tx.date}</p>
                        </div>
                      </div>
                      <div className={`font-bold ${tx.type === 'received' ? 'text-secondary' : 'text-white'}`}>
                        {tx.type === 'received' ? '+' : '-'}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Wallet;
