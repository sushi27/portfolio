import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-800 transition-all">
      <motion.h1
        className="text-5xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Susanto
      </motion.h1>
      <motion.p
        className="text-xl text-gray-700 dark:text-gray-300 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Developer | Full Stack Engineer
      </motion.p>
    </section>
  );
};

export default Hero;
