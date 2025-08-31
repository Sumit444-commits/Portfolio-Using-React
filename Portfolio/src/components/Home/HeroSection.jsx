
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,

} from "react-icons/fa";

import TiltImage from "../utils/TiltImage";
import Typewriter from "../utils/TypeWriter";

import FloatingElements from "../utils/FloatingElements";

import { roles } from "../Data/RolesData";

const HeroSection = ({darkMode,sectionRefs}) => {

  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
     <section
          id="home"
          ref={sectionRefs.home}
          className={`min-h-screen pt-20 flex items-center transition-colors duration-300 relative overflow-hidden ${
            darkMode
              ? "bg-gradient-to-br from-gray-900/40 to-gray-800/40"
              : "bg-gradient-to-br from-blue-50/40 to-indigo-100/40"
          }`}
        >
          {/* Floating elements */}
          <FloatingElements darkMode={darkMode} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Heya,
                  <div>
                    {" "}
                    I'm <span className="text-blue-600">Sumit Sharma</span>
                  </div>
                </h1>
                <Typewriter texts={roles} speed={100} darkMode={darkMode} />

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition shadow-md transform hover:scale-105"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`px-6 py-3 rounded-md font-medium transition transform hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    Contact Me
                  </button>
                </div>

                {/* Social links */}
                <div className="flex justify-center md:justify-start gap-4 mt-8">
                  <a
                    href="https://github.com/Sumit444-commits"
                    target="_blank"
                    className={`p-3 rounded-full transition transform hover:scale-110 ${
                      darkMode
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    } shadow-md`}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="www.linkedin.com/in/sumit-sharma-a0b2c7"
                    target="_blank"
                    className={`p-3 rounded-full transition transform hover:scale-110 ${
                      darkMode
                        ? "bg-gray-700 text-white hover:bg-blue-600"
                        : "bg-white text-blue-600 hover:bg-blue-100"
                    }
                   
                    shadow-md`}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/codes.software/"
                    target="_blank"
                    className={`p-3 rounded-full transition transform hover:scale-110 ${
                      darkMode
                        ? "bg-gray-700 text-white hover:bg-pink-600"
                        : "bg-white text-pink-600 hover:bg-pink-100"
                    } shadow-md`}
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                  <div
                    className={`absolute -inset-4 rounded-full ${
                      darkMode
                        ? "bg-blue-500/20 animate-pulse"
                        : "bg-blue-200/50 animate-pulse"
                    }`}
                  ></div>
                  <div
                    className={`absolute -inset-2 rounded-full ${
                      darkMode
                        ? "bg-blue-400/10 animate-pulse delay-1000"
                        : "bg-blue-300/30 animate-pulse delay-1000"
                    }`}
                  ></div>
                  <TiltImage
                    src="/images/heroImage2.jpg"
                    alt="Sumit Sharma"
                    darkMode={darkMode}
                    className="w-full h-full rounded-2xl shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection