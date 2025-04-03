import React from 'react';
import { motion } from 'framer-motion';
import { Server, Users, Terminal, Activity, Clock, ShieldCheck, TrendingUp, Settings, Cpu, AlertCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="glass p-6 rounded-xl relative overflow-hidden"
  >
    <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full ${color} opacity-20`}></div>
    <Icon className="text-cyan-400 mb-4" size={32} />
    <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
    <p className="text-3xl font-bold neon-text">{value}</p>
  </motion.div>
);

const ActivityGraph = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass p-6 rounded-xl h-64 relative overflow-hidden"
  >
    <h3 className="text-xl font-semibold mb-4 text-cyan-400">Activity Overview</h3>
    <div className="relative h-48">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-1 bg-cyan-400 rounded-t-lg"
          style={{
            left: `${i * 25}%`,
            height: `${Math.random() * 100}%`,
            opacity: 0.7,
          }}
          animate={{
            height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  </motion.div>
);

const RecentActivity = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass p-6 rounded-xl relative overflow-hidden"
  >
    <h3 className="text-xl font-semibold mb-4 text-cyan-400">Recent Activity</h3>
    <ul className="text-gray-300">
      <li className="mb-2">✅ Server updated successfully</li>
      <li className="mb-2">⚡ User JohnDoe executed a command</li>
      <li className="mb-2">🔒 Security check completed</li>
      <li className="mb-2">🔄 Backup created at 02:15 AM</li>
    </ul>
  </motion.div>
);

const SystemStatus = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass p-6 rounded-xl relative overflow-hidden"
  >
    <h3 className="text-xl font-semibold mb-4 text-cyan-400">System Health</h3>
    <p className="text-gray-300">✅ All systems are operational</p>
  </motion.div>
);

const Alerts = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass p-6 rounded-xl relative overflow-hidden"
  >
    <h3 className="text-xl font-semibold mb-4 text-red-400">Alerts</h3>
    <ul className="text-gray-300">
      <li className="mb-2">⚠️ High CPU Usage detected</li>
      <li className="mb-2">⚠️ Server #12 experiencing slow response</li>
      <li className="mb-2">⚠️ Security patch required</li>
    </ul>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 cyberpunk-grid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 neon-text">Control Center</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              icon={Server} 
              title="Active Servers" 
              value="29" 
              color="bg-cyan-500"
            />
            <StatCard 
              icon={Users} 
              title="Total Users" 
              value="24,300+" 
              color="bg-purple-500"
            />
            <StatCard 
              icon={Terminal} 
              title="Total Commands Executed" 
              value="58,392" 
              color="bg-green-500"
            />
            <StatCard 
              icon={Activity} 
              title="Uptime" 
              value="99.9%" 
              color="bg-yellow-500"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ActivityGraph />
            <RecentActivity />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <StatCard 
              icon={TrendingUp} 
              title="Growth Rate" 
              value="+20.08%" 
              color="bg-blue-500"
            />
            <SystemStatus />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <StatCard 
              icon={Cpu} 
              title="CPU Load" 
              value="10%" 
              color="bg-orange-500"
            />
            <Alerts />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
