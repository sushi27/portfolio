import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    image: "https://via.placeholder.com/600x400?text=E-commerce",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with animations and 3D elements using Three.js.",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    image: "https://via.placeholder.com/600x400?text=Portfolio",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks with drag-and-drop functionality.",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    image: "https://via.placeholder.com/600x400?text=Task+App",
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps and forecasts.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    image: "https://via.placeholder.com/600x400?text=Weather",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm text-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium"
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;