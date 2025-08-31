import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900/80 text-white' : 'bg-gray-100/80 text-gray-800'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Sumit's Portfolio</h3>
            <p className={`max-w-md ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              A passionate developer creating innovative web solutions and digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="www.linkedin.com/in/sumit-sharma-a0b2c7"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-800/70 hover:bg-blue-600' : 'bg-white/70 hover:bg-blue-600'} backdrop-blur-sm shadow-md`}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} className={darkMode ? 'text-white' : 'text-gray-800'} />
              </a>
              <a
                href="https://github.com/Sumit444-commits"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-800/70 hover:bg-gray-700' : 'bg-white/70 hover:bg-gray-300'} backdrop-blur-sm shadow-md`}
                aria-label="GitHub"
              >
                <FaGithub size={16} className={darkMode ? 'text-white' : 'text-gray-800'} />
              </a>
              <a
                href="https://www.instagram.com/codes.software/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${darkMode ? 'bg-gray-800/70 hover:bg-pink-600' : 'bg-white/70 hover:bg-pink-500'} backdrop-blur-sm shadow-md`}
                aria-label="Instagram"
              >
                <FaInstagram size={16} className={darkMode ? 'text-white' : 'text-gray-800'} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className={`hover:text-blue-600 transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Home</a>
              </li>
              <li>
                <a href="#skills" className={`hover:text-blue-600 transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Skills</a>
              </li>
              <li>
                <a href="#projects" className={`hover:text-blue-600 transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Projects</a>
              </li>
              <li>
                <a href="#certifications" className={`hover:text-blue-600 transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Certifications</a>
              </li>
              <li>
                <a href="#contact" className={`hover:text-blue-600 transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FaEnvelope className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
                <a href="mailto:sharma.sumit.6574@gmail.com" className={`hover:text-blue-600 transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  sharma.sumit.6574@gmail.com
                </a>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Available for freelance work and new opportunities.
              </p>
            </div>
            <a
              href="resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mt-4 shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-center items-center ${darkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
          <p className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Made with <FaHeart className="text-red-500 mx-1" /> by Sumit Sharma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;