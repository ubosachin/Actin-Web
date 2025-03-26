import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden cyberpunk-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/20 to-gray-900"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.div
          animate={{ 
            rotateZ: [0, 10, -10, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block mb-8"
        >
          <img 
            src="https://raw.githubusercontent.com/ubosachin/Gfx---Vfx/refs/heads/main/Actin-removebg-preview.png" 
            alt="Actin Logo" 
            className="w-32 h-32 mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-6xl font-bold mb-6 neon-text"
        >
          Welcome to Actin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-cyan-300 mb-8 max-w-2xl mx-auto"
        >
          The next generation Discord bot powered by advanced AI technology.
        </motion.p>

        <motion.div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-xl font-bold pulse neon-border"
            onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=1349968248636051521&permissions=8&scope=bot%20applications.commands', '_blank')}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-cyan-300">
          <div className="flex flex-col items-center text-center">
            <CheckCircle size={50} className="text-green-400 mb-4" />
            <h3 className="text-2xl font-bold">Reliable</h3>
            <p>Experience 24/7 uptime with cutting-edge technology.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users size={50} className="text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold">Community-Driven</h3>
            <p>Built by and for Discord users worldwide.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Settings size={50} className="text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold">Highly Customizable</h3>
            <p>Tailor Actin to fit your server’s needs.</p>
          </div>
        </div>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;