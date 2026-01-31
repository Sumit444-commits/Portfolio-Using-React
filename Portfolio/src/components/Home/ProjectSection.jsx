import { useState } from "react";
import ProjectCard from "../Card/ProjectCard";
import { projects } from "../Data/ProjectsData";

const ProjectSection = ({ darkMode, sectionRefs }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  return (
    <section
      id="projects"
      ref={sectionRefs.projects}
      className={`min-h-screen py-20 flex items-center transition-colors duration-300 relative ${
        darkMode ? "bg-gray-900/95" : "bg-gray-50/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              My Projects
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
            Here are some of the projects I've worked on. Each one presented
            unique challenges and learning opportunities.
          </p>
        </div>

        <div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        
        >
          {displayedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} darkMode={darkMode} />
          ))}
        </div>

        {/* Centered Show More / Show Less Button */}
        {projects.length > 6 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                darkMode
                  ? "bg-transparent border text-white hover:bg-blue-700 shadow-blue-500/20"
                  : "bg-transparent border text-white hover:bg-blue-700 shadow-blue-600/30"
              }`}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
