import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCloud, FiCpu, FiDatabase } from 'react-icons/fi';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl sm:leading-[66px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 mb-4">
            Engineering Philosophy
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Building resilient systems that scale with elegance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiCode className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Technical Approach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I architect distributed systems with an emphasis on fault tolerance and horizontal scalability. 
                My solutions leverage event-driven patterns and strategic caching to handle 10K+ RPS while 
                maintaining sub-50ms latency. Specialized in JVM optimization and database sharding strategies.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiCloud className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Architectural Evolution</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                From monolith decomposition to cloud-native transformations, I've led multiple system 
                modernizations. My current focus is on implementing service meshes with Istio and 
                optimizing Kubernetes deployments for cost-efficient auto-scaling.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiDatabase className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Performance Engineering</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I've reduced query times by 92% through strategic indexing and query optimization. 
                Implemented Redis caching layers that decreased database load by 80% while maintaining 
                strong consistency through write-through patterns.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <FiAward className="text-purple-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">Credentials</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>B.Tech in Computer Science - NIET (2017-2021)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>HackWithInfy 2020 Finalist (Top 50 nationwide)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>400+ algorithmic challenges solved (LeetCode/HackerRank)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;