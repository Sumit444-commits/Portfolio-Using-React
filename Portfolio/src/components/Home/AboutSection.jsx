
import {
  FaCode,
  FaRocket,
  FaLightbulb,
  FaBrain, // Added for certifications
} from "react-icons/fa";

import TiltImage from "../utils/TiltImage";

const AboutSection = ({darkMode,sectionRefs}) => {
  return (
      <section
          id="about"
          ref={sectionRefs.about}
          className={`min-h-screen py-20 flex items-center transition-colors duration-300 relative ${
            darkMode
              ? "bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              : "bg-gradient-to-br from-blue-50/95 to-white/95"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            {/* Animated Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  About Me
                </span>
                <span
                  className={`absolute -bottom-2 left-1/4 w-1/2 h-1 rounded-full ${
                    darkMode ? "bg-blue-500" : "bg-blue-600"
                  } animate-pulse`}
                ></span>
              </h2>
              <p
                className={`max-w-2xl mx-auto text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Get to know my skills, projects, and what drives me as a
                software engineer.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-50 items-center mb-16">
              {/* Profile Image */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-end relative">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  {/* Background gradient orb */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-600/10 blur-xl animate-pulse"></div>

                  {/* Glow border */}
                  <div
                    className={`absolute -inset-2 rounded-full ${
                      darkMode ? "bg-blue-900/20" : "bg-blue-200/50"
                    } animate-pulse`}
                  ></div>

                  {/* Main image */}
                  <TiltImage
                    src="/images/heroImage.jpg"
                    alt="Sumit Sharma"
                    darkMode={darkMode}
                    className="w-full h-full rounded-2xl shadow-xl"
                  />

                  {/* Floating icons */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <FaCode className="text-white text-sm" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                    <FaBrain className="text-white text-sm" />
                  </div>
                  <div className="absolute top-8 -right-6 w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                    <FaLightbulb className="text-white text-xs" />
                  </div>
                  <div className="absolute bottom-12 -left-6 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1500">
                    <FaRocket className="text-white text-xs" />
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Hello! I'm <span className="text-blue-600">Sumit Sharma</span>
                </h3>
                <div
                  className={`space-y-4 text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <p>
                    I’m a{" "}
                    <span className="font-semibold text-blue-600">
                      Software Engineering student
                    </span>{" "}
                    (currently in 3rd year, CGPA 3.61) with hands-on experience
                    in{" "}
                    <span className="font-semibold text-blue-600">
                      full-stack MERN development
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-blue-600">
                      AI engineering
                    </span>
                    .
                  </p>
                  <p>
                    I’ve built{" "}
                    <span className="font-semibold text-blue-600">
                      real-world projects
                    </span>{" "}
                    as a freelancer, including AI-driven healthcare tools,
                    environmental reporting platforms, and full-stack e-commerce
                    systems.
                  </p>
                  <p>
                    I’m passionate about solving challenging problems through{" "}
                    <span className="font-semibold text-blue-600">
                      software innovation and AI
                    </span>
                    , while constantly learning new technologies and improving
                    my craft.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div
                    className={`p-6 rounded-2xl text-center border-2 border-transparent hover:border-blue-400/30 transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-800/50 backdrop-blur-sm"
                        : "bg-white/80 backdrop-blur-sm shadow-md"
                    } hover:scale-105`}
                  >
                    <div className="text-3xl font-bold text-blue-600">10+</div>
                    <div
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      Projects Delivered
                    </div>
                  </div>
                  <div
                    className={`p-6 rounded-2xl text-center border-2 border-transparent hover:border-blue-400/30 transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-800/50 backdrop-blur-sm"
                        : "bg-white/80 backdrop-blur-sm shadow-md"
                    } hover:scale-105`}
                  >
                    <div className="text-3xl font-bold text-blue-600">
                      Freelance
                    </div>
                    <div
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      Web & AI Engineer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutSection