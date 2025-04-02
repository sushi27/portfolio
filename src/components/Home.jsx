import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Hi, I'm <span className="animate-pulse">[Your Name]</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-purple-200">
            Full Stack Developer | Creative Designer
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;