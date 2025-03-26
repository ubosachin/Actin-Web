import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Sparkles, Crown, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const NavLink = ({ to, icon: Icon, label }) => (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link
        to={to}
        className={`flex items-center space-x-1 transition-colors ${
          location.pathname === to ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
        }`}
      >
        <Icon size={20} />
        <span>{label}</span>
      </Link>
    </motion.div>
  );

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative space-x-16">
          {/* Left Links (Further from Logo) */}
          <div className="flex space-x-10">
            <NavLink to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
            <NavLink to="/features" icon={Sparkles} label="Features" />
          </div>

          {/* Logo in Center */}
          <Link to="/">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center floating">
              <img src="https://raw.githubusercontent.com/ubosachin/Gfx---Vfx/refs/heads/main/Actin-removebg-preview.png" alt="Actin Logo" className="h-20" />
            </motion.div>
          </Link>

          {/* Right Links (Further from Logo) */}
          <div className="flex space-x-10">
            <NavLink to="/premium" icon={Crown} label="Premium" />
            <NavLink to="/contact" icon={MessageCircle} label="Contact" />
          </div>
        </div>
      </div>
      {/* Add to Discord Button in Top Right */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://discord.com/api/oauth2/authorize?client_id=1349968248636051521&permissions=8&scope=bot%20applications.commands"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-lg pulse neon-border"
      >
        Add to Discord
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
