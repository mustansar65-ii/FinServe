import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Search, Send, FileText, MoreVertical, RefreshCw } from 'lucide-react';

const Transactions = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [transactions] = useState([
    { id: 'TRX-9823', date: '2026-04-16', amount: 5000, recipient: 'Acme Corp', status: 'Completed', type: 'received' },
    { id: 'TRX-9822', date: '2026-04-15', amount: 150, recipient: 'Software Sub', status: 'Completed', type: 'sent' },
    { id: 'TRX-9821', date: '2026-04-14', amount: 2000, recipient: 'John Doe', status: 'Pending', type: 'sent' },
    { id: 'TRX-9820', date: '2026-04-12', amount: 850, recipient: 'Office Supplies', status: 'Completed', type: 'sent' },
    { id: 'TRX-9819', date: '2026-04-10', amount: 12000, recipient: 'Client XYZ', status: 'Completed', type: 'received' },
  ]);

  const filteredTransactions = transactions.filter(t => 
    t.recipient.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Transactions</h1>
            <p className="text-textMuted">Manage transfers and view your history.</p>
          </div>
          <div className="flex bg-surface rounded-xl p-1 border border-white/5">
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'history' ? 'bg-primary text-white shadow-lg' : 'text-textMuted hover:text-white'
              }`}
            >
              History
            </button>
            <button
              onClick={() => setActiveTab('transfer')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'transfer' ? 'bg-primary text-white shadow-lg' : 'text-textMuted hover:text-white'
              }`}
            >
              Transfer Funds
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'history' ? (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textMuted w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by recipient or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-background border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <button className="flex items-center gap-2 text-textMuted hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  <RefreshCw className="w-4 h-4" /> Refresh
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-textMuted">
                      <th className="py-4 font-medium">Transaction ID</th>
                      <th className="py-4 font-medium">Date</th>
                      <th className="py-4 font-medium">Recipient/Sender</th>
                      <th className="py-4 font-medium">Amount</th>
                      <th className="py-4 font-medium">Status</th>
                      <th className="py-4 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {filteredTransactions.map((tx, idx) => (
                        <motion.tr
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          key={tx.id}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                        >
                          <td className="py-4 font-medium">{tx.id}</td>
                          <td className="py-4 text-textMuted">{tx.date}</td>
                          <td className="py-4">{tx.recipient}</td>
                          <td className={`py-4 font-bold ${tx.type === 'received' ? 'text-secondary' : 'text-white'}`}>
                            {tx.type === 'received' ? '+' : '-'}${tx.amount.toLocaleString()}
                          </td>
                          <td className="py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              tx.status === 'Completed' ? 'bg-secondary/20 text-secondary' : 'bg-yellow-500/20 text-yellow-500'
                            }`}>
                              {tx.status}
                            </span>
                          </td>
                          <td className="py-4 text-right">
                            <button className="opacity-0 group-hover:opacity-100 p-2 text-textMuted hover:text-primary transition-all">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="transfer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto glass rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Send className="text-primary w-6 h-6" /> Send Money
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-2">Recipient Account / Email</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter details..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-2">Amount (USD)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-textMuted">$</span>
                    <input
                      type="number"
                      className="w-full bg-background border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-bold text-lg"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-2">Reference Note (Optional)</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="What is this for?"
                  />
                </div>
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
                  >
                    Confirm Transfer <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

// Assuming ArrowRight needs to be imported or we can use Send
import { ArrowRight } from 'lucide-react';

export default Transactions;
