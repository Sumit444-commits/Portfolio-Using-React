
import CertificationCard from "../Card/CertificationCard";
import { certifications } from "../Data/CerticateData";

const CertificationSection = ({darkMode,sectionRefs,handleViewCertificate}) => {
  return (
     <section
          id="certifications"
          ref={sectionRefs.certifications}
          className={`min-h-screen py-20 flex items-center transition-colors duration-300 relative ${
            darkMode
              ? "bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              : "bg-gradient-to-br from-blue-50/95 to-white/95"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Animated Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  My Certifications
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
                Professional certifications that validate my expertise and
                commitment to continuous learning.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={index}
                  cert={cert}
                  darkMode={darkMode}
                  onViewCertificate={handleViewCertificate}
                />
              ))}
            </div>
          </div>
        </section>
  )
}

export default CertificationSection
