import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "90%" },
  { name: "Spring Boot", level: "85%" },
  { name: "Node.js", level: "80%" },
  { name: "Vue.js", level: "75%" },
  { name: "Cassandra", level: "70%" }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Skills</h2>
      <div className="max-w-lg mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <p className="text-gray-900 dark:text-white">{skill.name}</p>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: skill.level }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
