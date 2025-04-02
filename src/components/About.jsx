import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience building web applications. 
                I specialize in JavaScript technologies including React, Node.js, and modern frontend frameworks.
                My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Starting as a self-taught developer, I've worked with startups and established companies to build scalable,
                performant applications. I'm constantly learning new technologies and methodologies to stay at the forefront
                of web development. When I'm not coding, you can find me contributing to open-source projects or mentoring
                aspiring developers.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Education & Certifications</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Bachelor's in Computer Science - University of Technology (2018)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Advanced React Certification - Frontend Masters (2020)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Node.js Certified Developer - OpenJS Foundation (2021)</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;