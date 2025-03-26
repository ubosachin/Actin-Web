import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Shield, Zap, MessageSquare, Settings, Star, X, ChevronRight } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  details: string[];
  benefits: string[];
  demoVideo?: string;
}

const features: Feature[] = [
  {
    icon: Bot,
    title: "AI-Powered Responses",
    description: "Advanced natural language processing for human-like interactions",
    details: [
      "Context-aware conversations",
      "Multiple language support",
      "Personality customization",
      "Learning capabilities"
    ],
    benefits: [
      "Reduce response time by 75%",
      "Handle multiple conversations simultaneously",
      "24/7 automated support",
      "Continuous learning and improvement"
    ],
    demoVideo: "https://example.com/ai-demo.mp4"
  },
  {
    icon: Shield,
    title: "Advanced Moderation",
    description: "Keep your server safe with intelligent moderation tools",
    details: [
      "Auto-moderation",
      "Custom filter rules",
      "Raid protection",
      "User verification"
    ],
    benefits: [
      "Reduce spam by 95%",
      "Prevent raids automatically",
      "Custom moderation rules",
      "Detailed moderation logs"
    ]
  },
  {
    icon: Zap,
    title: "Custom Commands",
    description: "Create and customize commands for your server",
    details: [
      "Easy command creation",
      "Dynamic responses",
      "Variable support",
      "Command aliases"
    ],
    benefits: [
      "Create commands in seconds",
      "No coding required",
      "Unlimited commands",
      "Advanced customization"
    ]
  },
  {
    icon: MessageSquare,
    title: "Welcome System",
    description: "Customize how new members are greeted in your server",
    details: [
      "Custom welcome messages",
      "Auto-role assignment",
      "Welcome images",
      "DM greetings"
    ],
    benefits: [
      "Increase member retention",
      "Automated onboarding",
      "Personalized greetings",
      "Role management"
    ]
  },
  {
    icon: Settings,
    title: "Server Management",
    description: "Powerful tools to manage your Discord server effectively",
    details: [
      "Role management",
      "Channel controls",
      "Server statistics",
      "Backup systems"
    ],
    benefits: [
      "Save hours of manual work",
      "Automated backups",
      "Detailed analytics",
      "Easy configuration"
    ]
  },
  {
    icon: Star,
    title: "Premium Features",
    description: "Exclusive features for premium server owners",
    details: [
      "Priority support",
      "Extended customization",
      "Advanced analytics",
      "Exclusive commands"
    ],
    benefits: [
      "24/7 priority support",
      "Exclusive features",
      "Advanced customization",
      "Early access to updates"
    ]
  }
];

const FeatureCard = ({ feature, onClick }: { feature: Feature, onClick: () => void }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="glass p-6 rounded-xl cursor-pointer relative overflow-hidden group"
    >
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-500 rounded-full opacity-10 
                    group-hover:opacity-20 transition-opacity"></div>
      <Icon className="text-cyan-400 mb-4" size={32} />
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:neon-text">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
      <motion.div
        className="mt-4 flex items-center text-cyan-400"
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="mr-2">Learn More</span>
        <ChevronRight size={16} />
      </motion.div>
    </motion.div>
  );
};

const FeatureModal = ({ feature, onClose }: { feature: Feature, onClose: () => void }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="glass p-8 rounded-2xl max-w-2xl w-full relative overflow-hidden"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </motion.button>

        <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500 rounded-full opacity-10"></div>
        <Icon className="text-cyan-400 mb-6" size={48} />
        <h3 className="text-3xl font-bold mb-4 neon-text">{feature.title}</h3>
        <p className="text-xl text-gray-300 mb-6">{feature.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Features</h4>
            <div className="space-y-3">
              {feature.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-200">{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Benefits</h4>
            <div className="space-y-3">
              {feature.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {feature.demoVideo && (
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Demo Video</h4>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Demo video placeholder</p>
            </div>
          </div>
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-cyan-500 text-white rounded-lg neon-border w-full"
        >
          Try Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 cyberpunk-grid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.div
              animate={{ 
                rotateZ: [0, 10, -10, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-4"
            >
              <Zap size={48} className="text-cyan-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 neon-text">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to manage your Discord server</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                onClick={() => setSelectedFeature(feature)}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-xl font-bold pulse neon-border"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <FeatureModal
            feature={selectedFeature}
            onClose={() => setSelectedFeature(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Features;