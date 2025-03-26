import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Zap, Shield, Star, Check } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  icon: any;
  color: string;
  features: PlanFeature[];
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "Free",
    icon: Shield,
    color: "cyan",
    features: [
      { text: "Basic Commands", included: true },
      { text: "Server Statistics", included: true },
      { text: "Welcome Messages", included: true },
      { text: "Auto Moderation", included: false },
      { text: "Custom Commands", included: false },
      { text: "Priority Support", included: false },
    ]
  },
  {
    name: "Pro",
    price: "$9.99/mo",
    icon: Star,
    color: "purple",
    features: [
      { text: "Basic Commands", included: true },
      { text: "Server Statistics", included: true },
      { text: "Welcome Messages", included: true },
      { text: "Auto Moderation", included: true },
      { text: "Custom Commands", included: true },
      { text: "Priority Support", included: false },
    ]
  },
  {
    name: "Enterprise",
    price: "$29.99/mo",
    icon: Crown,
    color: "yellow",
    features: [
      { text: "Basic Commands", included: true },
      { text: "Server Statistics", included: true },
      { text: "Welcome Messages", included: true },
      { text: "Auto Moderation", included: true },
      { text: "Custom Commands", included: true },
      { text: "Priority Support", included: true },
    ]
  }
];

const PlanCard = ({ plan }: { plan: Plan }) => {
  const Icon = plan.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass p-8 rounded-2xl relative overflow-hidden"
    >
      <div className={`absolute -right-8 -top-8 w-32 h-32 bg-${plan.color}-500 rounded-full opacity-10`}></div>
      <Icon className={`text-${plan.color}-400 mb-6`} size={48} />
      <h3 className="text-2xl font-bold mb-2 neon-text">{plan.name}</h3>
      <p className="text-4xl font-bold mb-6 text-white">{plan.price}</p>
      
      <div className="space-y-4">
        {plan.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            {feature.included ? (
              <Check className="text-green-400" size={20} />
            ) : (
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              </div>
            )}
            <span className={feature.included ? "text-gray-200" : "text-gray-500"}>
              {feature.text}
            </span>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = "https://discord.gg/bars"}
        className={`mt-8 w-full py-4 bg-${plan.color}-500 text-white rounded-lg neon-border`}
      >
        Buy Now
      </motion.button>
    </motion.div>
  );
};

const Premium = () => {
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
            <h2 className="text-4xl font-bold mb-4 neon-text">Upgrade Your Server</h2>
            <p className="text-xl text-gray-300">Choose the perfect plan for your community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Premium;
