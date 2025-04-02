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
              I’m a Senior Software Engineer with over 3 years of experience specializing in backend development, microservices, and scalable system architecture.
              My expertise lies in Java, Spring Boot, Node.js, and distributed systems, where I focus on building high-performance, fault-tolerant applications that scale effortlessly.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
              Starting as a problem-solving enthusiast, I have worked with fast-paced teams to design and implement scalable microservices, optimize databases, and enhance system performance.
              My journey has taken me from monolithic transformations to cloud-native architectures, constantly pushing the limits of scalability and resilience.
              I thrive on tackling complex backend challenges and optimizing systems for efficiency.
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
                <span>B.Tech in Computer Science and Engineering – Noida Institute of Engineering and Technology (2017-2021)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>400+ coding problems solved on LeetCode & other platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>HackWithInfy 2020 – 2nd Runner Up</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;