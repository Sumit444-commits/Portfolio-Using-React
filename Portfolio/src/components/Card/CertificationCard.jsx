
import React from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const CertificationCard = ({ cert, darkMode, onViewCertificate }) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 cursor-pointer ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/30 hover:border-blue-500/50"
          : "bg-gradient-to-br from-white to-blue-50 border border-gray-200/50 hover:border-blue-500/50"
      } shadow-lg hover:shadow-xl backdrop-blur-sm`}
      onClick={() => onViewCertificate(cert)}
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:to-purple-600/10 transition-all duration-500 z-0"></div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine"></div>
      </div>
      
      <div className="relative z-10 p-6">
        {/* Certificate image thumbnail */}
        <div className={`flex items-center justify-center h-32 mb-4 rounded-xl overflow-hidden ${
          darkMode ? "bg-gray-700/50" : "bg-blue-100/50"
        } p-2 transition-all duration-300 group-hover:scale-105`}>
          <img 
            className="max-h-full max-w-full object-contain rounded-lg" 
            src={cert.image} 
            alt={cert.title} 
          />
        </div>
        
        {/* Certificate details */}
        <div className="space-y-3">
          <h3 className={`text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}>
            {cert.title}
          </h3>
          
          <div className={`flex items-center text-sm font-medium ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}>
            <FaCertificate className="mr-2" />
            <span>{cert.issuer}</span>
          </div>
          
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Issued: {cert.date}
          </p>
        </div>
        
        {/* View certificate CTA */}
        <div className="mt-6 flex items-center justify-between">
          <span className={`text-sm font-medium group-hover:underline transition-all duration-300 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}>
            View Certificate
          </span>
          <div className={`p-2 rounded-full transition-all duration-300 group-hover:bg-blue-100 group-hover:dark:bg-blue-900/30 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}>
            <FaExternalLinkAlt className="text-sm" />
          </div>
        </div>
      </div>
      
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-16 h-16 transform rotate-45 translate-x-8 -translate-y-8 ${
          darkMode ? "bg-blue-700/30" : "bg-blue-500/30"
        }`}></div>
      </div>
      
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CertificationCard;