import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1354462884217880698/wE2RnZlvhcgzhfiRELkvF5F8yjRah6u-jNP1rRhE43Csxoz9Fb3bBfg6vprY6PAnLnLq";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      content: `**New Contact Form Submission**\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Message:** ${formData.message}`
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-2xl relative overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500 rounded-full opacity-10"></div>
      <div className="space-y-6">
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
          <Send size={20} />
          <span>{loading ? 'Sending...' : 'Send Message'}</span>
        </motion.button>
        {success && <p className="text-green-400 text-center">Message sent successfully!</p>}
      </div>
    </motion.form>
  );
};

export default ContactForm;
