import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1354462884217880698/wE2RnZlvhcgzhfiRELkvF5F8yjRah6u-jNP1rRhE43Csxoz9Fb3bBfg6vprY6PAnLnLq";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', discord: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const payload = {
      content: `**New Contact Form Submission**\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Discord:** ${formData.discord}\n**Message:** ${formData.message}`
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', discord: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-end min-h-screen bg-gray-950 p-6 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-2xl relative overflow-hidden max-w-lg mx-auto bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-xl border border-cyan-600"
      >
        <div className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-cover opacity-10"></div>
        <h2 className="text-3xl font-bold text-white text-center mb-6">Contact Us</h2>
        <p className="text-gray-400 text-center mb-4">We'd love to hear from you! Fill in your details below.</p>
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label className="block text-cyan-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/50 border border-cyan-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-cyan-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/50 border border-cyan-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-cyan-400 mb-2">Discord Username</label>
            <input
              type="text"
              name="discord"
              value={formData.discord}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/50 border border-cyan-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              placeholder="Your Discord username (e.g. User#1234)"
            />
          </div>
          <div>
            <label className="block text-cyan-400 mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/50 border border-cyan-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full bg-cyan-500 text-white py-4 rounded-lg neon-border flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            <span>{loading ? 'Sending...' : 'Send Message'}</span>
          </motion.button>
        </form>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="mt-4 flex items-center bg-green-500 text-white px-4 py-3 rounded-lg"
          >
            <CheckCircle className="mr-2" /> Message sent successfully!
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="mt-4 flex items-center bg-red-500 text-white px-4 py-3 rounded-lg"
          >
            <XCircle className="mr-2" /> Failed to send message. Try again.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;