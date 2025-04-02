import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My Portfolio
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {['/', '/about', '/skills', '/projects', '/contact'].map((path, i) => (
            <Link 
              key={i}
              to={path === '/' ? '/' : path}
              className="relative group"
            >
              <span className="text-white group-hover:text-purple-300 transition-colors">
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;