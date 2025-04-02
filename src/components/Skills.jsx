import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
  { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
  { name: 'Three.js', level: 75, color: 'from-gray-400 to-gray-600' },
  { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' },
  { name: 'TypeScript', level: 80, color: 'from-blue-400 to-blue-700' },
  { name: 'GraphQL', level: 70, color: 'from-pink-400 to-pink-600' },
  { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-700' },
];

const Skills = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold text-purple-300">{skill.name}</h3>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Additional Expertise</h3>
            <div className="flex flex-wrap gap-4">
              {['UI/UX Design', 'Responsive Design', 'REST APIs', 'Webpack', 'Git', 'Docker', 'AWS', 'CI/CD'].map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-purple-900 bg-opacity-50 rounded-full text-purple-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;