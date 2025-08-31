
import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  // Check if a nav link is active
  const isActive = (section) => {
    return activeSection === section ? 'text-blue-600 border-b-2 border-blue-600' : '';
  };

  return (
    <header className={`fixed w-full top-0 z-50 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md shadow-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <button onClick={()=>scrollToSection("home")} className={`text-xl sm:text-2xl font-bold hover:text-blue-600 transition-all ease-in-out duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}><span>&lt;</span>Sumit <span>/&gt;</span></button>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          
          <button
            className={`lg:hidden p-2 rounded-md ${darkMode ? 'text-white' : 'text-gray-700'}  hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex gap-6 font-medium">
          <a href="#home" className={`hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isActive('home')}`}>Home</a>
          <a href="#about" className={`hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isActive('about')}`}>About</a>
          <a href="#skills" className={`hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isActive('skills')}`}>Skills</a>
          <a href="#projects" className={`hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isActive('projects')}`}>Projects</a>
          <a href="#certifications" className={`hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isActive('certifications')}`}>Certifications</a>
          <a href="#contact" className={`hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'} ${isActive('contact')}`}>Contact</a>
        </nav>

        {/* Social Icons + Resume Button - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-2">
            <a href="www.linkedin.com/in/sumit-sharma-a0b2c7" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-700 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white'}`}>
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://github.com/Sumit444-commits" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-800 hover:bg-gray-800 hover:text-white'}`}>
              <FaGithub size={16} />
            </a>
            <a href="https://www.instagram.com/codes.software/" target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-700 text-white hover:bg-pink-600' : 'bg-gray-200 text-gray-800 hover:bg-pink-500 hover:text-white'}`}>
              <FaInstagram size={16} />
            </a>
          </div>

          <a
            href="resume.pdf"
            download
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Side Drawer - Fixed background issue */}
        <div className={`fixed top-0 right-0 w-64 h-full transform transition-transform duration-300 ease-in-out z-40 lg:hidden backdrop-blur-md  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className={`backdrop-blur-xl h-screen ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}>
          
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 px-8 py-6 flex-grow">
              <a 
                href="#home" 
                className={`text-lg font-medium py-2 hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-800'} ${isActive('home')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`text-lg font-medium py-2 hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-800'} ${isActive('about')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className={`text-lg font-medium py-2 hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-800'} ${isActive('skills')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className={`text-lg font-medium py-2 hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-800'} ${isActive('projects')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#certifications" 
                className={`text-lg font-medium py-2 hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-800'} ${isActive('certifications')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </a>
              <a 
                href="#contact" 
                className={`text-lg font-medium py-2 hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-800'} ${isActive('contact')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            
            <div className={`p-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex justify-center gap-4 mb-6">
                <a href="www.linkedin.com/in/sumit-sharma-a0b2c7" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-700 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white'}`}>
                  <FaLinkedinIn size={18} />
                </a>
                <a href="https://github.com/Sumit444-commits" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white'}`}>
                  <FaGithub size={18} />
                </a>
                <a href="https://www.instagram.com/codes.software/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-700 text-white hover:bg-pink-600' : 'bg-gray-100 text-gray-800 hover:bg-pink-500 hover:text-white'}`}>
                  <FaInstagram size={18} />
                </a>
              </div>
              
              <a
                href="resume.pdf"
                download
                className="w-full block text-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
          </div>

        </div>

        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Navbar