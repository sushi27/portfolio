import { motion } from "framer-motion";

const projects = [
  { title: "Zap URL", desc: "A scalable TinyURL system.", tech: "Spring Boot, Cassandra, Redis" },
  { title: "EdTech Platform", desc: "Online learning management system.", tech: "React, Spring Boot" },
  { title: "E-commerce App", desc: "Online shopping platform.", tech: "Vue, Node.js" }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-80 bg-white dark:bg-gray-700 p-4 shadow-lg rounded-lg border-l-4 border-blue-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.desc}</p>
            <p className="text-sm text-blue-500">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
