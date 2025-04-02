import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Susanto Mandal | Full Stack Developer',
      '/about': 'About | Susanto Mandal',
      '/projects': 'Projects | Susanto Mandal',
      '/skills': 'Skills | Susanto Mandal',
      '/contact': 'Contact | Susanto Mandal'
    };

    document.title = pageTitles[location.pathname] || 'Susanto Mandal | Portfolio';
  }, [location]);

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;