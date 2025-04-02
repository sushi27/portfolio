import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiServer, FiCpu, FiDatabase } from 'react-icons/fi';

const projects = [
  {
    title: "Zap URL – Scalable URL Shortener",
    description: "A high-performance, distributed URL shortener designed to handle high-throughput traffic with efficient caching and load balancing. Built with Spring Boot and Cassandra, it ensures fault tolerance and scalability while maintaining low latency.",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "Redis", "Nginx", "Docker"],
    achievements: [
      "Optimized response time by 50% using Redis caching to minimize database queries.",
      "Implemented rate limiting (10 requests/min per user) to prevent abuse and ensure fair usage.",
      "Scalable to 100K+ requests per second (RPS) with Nginx-based load balancing and auto-scaling.",
      "Ensured high availability by deploying a containerized microservices architecture using Docker.",
    ],
    category: "backend",
    links: {
      github: "https://github.com/sushi27/zap-url",
      demo: ""
    }
  },
  {
    "title": "Personal Portfolio",
    "description": "A sleek, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to showcase my expertise, projects, and technical skills with smooth animations and a dark mode toggle.",
    "technologies": ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    "achievements": [
      "Implemented smooth animations and interactive elements using Framer Motion.",
      "Designed a fully responsive layout with Tailwind CSS for seamless viewing across devices."
    ],
    "category": "frontend",
    "links": {
      "github": "https://github.com/sushi27/portfolio",
      "demo": "https://portfolio-susanto-mandals-projects.vercel.app/"
    }
  } 
];

const ProjectCard = ({ project, index }) => {
  const categoryIcons = {
    backend: <FiServer className="text-purple-400" />,
    data: <FiDatabase className="text-purple-400" />,
    architecture: <FiCpu className="text-purple-400" />,
    frontend: <FiCpu className="text-purple-400" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="p-8 flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-800/30">
            {categoryIcons[project.category]}
          </div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-purple-300 mb-3">KEY ACHIEVEMENTS</h4>
          <ul className="space-y-2 text-gray-300">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-purple-300 mb-3">TECHNOLOGY STACK</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-200 border border-gray-600/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-700/50 bg-gray-800/20 flex justify-end gap-4">
        {project.links.github && (
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-purple-300 hover:text-white hover:bg-purple-900/30 transition-all"
          >
            <FiGithub /> Code
          </a>
        )}
        {project.links.demo && (
          <a 
            href={project.links.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-purple-600/90 hover:bg-purple-500 transition-all"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section 
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl sm:leading-[66px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 mb-4">
            Engineering Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Production-grade systems with measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;