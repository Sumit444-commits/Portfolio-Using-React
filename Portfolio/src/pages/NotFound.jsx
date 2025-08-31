import { HashLink as Link } from 'react-router-hash-link';
import { FaHome, FaEnvelope, FaRocket, FaSearch } from "react-icons/fa";

const NotFound = ({ darkMode }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
      darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        
        {/* Animated 404 number */}
        <div className="relative mb-8">
          <div className="text-9xl md:text-[12rem] font-bold opacity-10 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              404
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-float delay-1000"></div>
          <div className="absolute top-1/2 -right-8 w-10 h-10 bg-pink-500 rounded-full opacity-20 animate-float delay-2000"></div>
        </div>

        {/* Main message */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Oops! Page Not Found
        </h1>
        
        <p className={`text-xl mb-8 max-w-2xl mx-auto ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          It looks like you've ventured into unknown territory. The page you're looking for might have been moved, deleted, or never existed.
        </p>

        {/* Search illustration */}
        <div className="mb-12">
          <div className="relative inline-block">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}>
              <FaSearch className={`text-4xl ${
                darkMode ? "text-blue-400" : "text-blue-600"
              } animate-pulse`} />
            </div>
            <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${
              darkMode ? "bg-red-500" : "bg-red-400"
            } animate-bounce`}></div>
          </div>
        </div>

        {/* Suggested actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Here are some helpful links:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Link
              to="/"
              className={`p-6 rounded-2xl flex flex-col items-center transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-blue-50"
              } shadow-md`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                darkMode ? "bg-blue-900/30 text-blue-400" : "bg-blue-100 text-blue-600"
              }`}>
                <FaHome className="text-xl" />
              </div>
              <span className="font-medium">Home</span>
              <span className={`text-sm mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}>Return to homepage</span>
            </Link>

            <Link
              to="/#projects"
              className={`p-6 rounded-2xl flex flex-col items-center transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-blue-50"
              } shadow-md`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                darkMode ? "bg-purple-900/30 text-purple-400" : "bg-purple-100 text-purple-600"
              }`}>
                <FaRocket className="text-xl" />
              </div>
              <span className="font-medium">Projects</span>
              <span className={`text-sm mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}>View my work</span>
            </Link>

            <Link
              to="/#contact"
              className={`p-6 rounded-2xl flex flex-col items-center transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-blue-50"
              } shadow-md`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                darkMode ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-600"
              }`}>
                <FaEnvelope className="text-xl" />
              </div>
              <span className="font-medium">Contact</span>
              <span className={`text-sm mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}>Get in touch</span>
            </Link>
          </div>
        </div>

        {/* Fun message */}
        <div className={`p-6 rounded-2xl mb-8 ${
          darkMode ? "bg-gray-800/50" : "bg-white/50"
        } backdrop-blur-sm border ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}>
          <p className={`italic ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            "Not all those who wander are lost, but you might be."
          </p>
        </div>

        {/* Search form */}
        <div className="max-w-md mx-auto">
          <p className="mb-4">Try searching for what you need:</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className={`flex-1 px-4 py-3 rounded-l-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                  : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500"
              }`}
            />
            <button
              className={`px-6 py-3 rounded-r-lg font-medium transition-colors ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-pink-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
          66% { transform: translateY(-10px) translateX(-10px) rotate(-2deg); }
        }
        .animate-float { 
          animation: float 8s ease-in-out infinite; 
        }
      `}</style>
    </div>
  );
};

export default NotFound;