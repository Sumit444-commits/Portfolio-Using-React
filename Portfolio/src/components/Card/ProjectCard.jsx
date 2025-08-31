// // components/ProjectCard.jsx
// import { useState, useRef, useEffect } from 'react';

// export default function ProjectCard({ 
//   image, 
//   title, 
//   description, 
//   technologies = [],
//   viewLink, 
//   codeLink 
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const cardRef = useRef(null);
  
//   // Enhanced tilt effect on mouse move
//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;
    
//     const handleMouseMove = (e) => {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
      
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
      
//       // More pronounced rotation for stronger effect
//       const rotateY = ((x - centerX) / centerX) * 10; // Increased from 4 to 10
//       const rotateX = ((centerY - y) / centerY) * 10; // Increased from 4 to 10
      
//       // Add scale effect and stronger perspective
//       card.style.transform = `
//         perspective(1500px) 
//         rotateX(${rotateX}deg) 
//         rotateY(${rotateY}deg) 
//         scale3d(1.05, 1.05, 1.05)
//       `;
      
//       // Add subtle shadow based on mouse position
//       const shadowX = (rotateY / 2) * -1;
//       const shadowY = (rotateX / 2) * -1;
//       card.style.boxShadow = `
//         ${shadowX}px ${shadowY}px 25px rgba(0, 0, 0, 0.2),
//         ${shadowX * 2}px ${shadowY * 2}px 40px rgba(0, 0, 0, 0.1)
//       `;
//     };
    
//     const handleMouseLeave = () => {
//       card.style.transform = 'perspective(1500px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
//       card.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
//       setIsHovered(false);
//     };
    
//     const handleMouseEnter = () => {
//       setIsHovered(true);
//     };
    
//     if (card) {
//       card.addEventListener('mousemove', handleMouseMove);
//       card.addEventListener('mouseleave', handleMouseLeave);
//       card.addEventListener('mouseenter', handleMouseEnter);
//     }
    
//     return () => {
//       if (card) {
//         card.removeEventListener('mousemove', handleMouseMove);
//         card.removeEventListener('mouseleave', handleMouseLeave);
//         card.removeEventListener('mouseenter', handleMouseEnter);
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={cardRef}
//       className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-all duration-500 shadow-xl"
//       style={{ 
//         transformStyle: 'preserve-3d',
//         transition: 'transform 0.5s ease, box-shadow 0.5s ease'
//       }}
//     >
//       {/* Image container */}
//       <div className="h-60 w-full overflow-hidden relative">
//         <img 
//           src={image} 
//           alt={title} 
//           className={`w-full h-full object-cover transition-transform duration-700 ${
//             isHovered ? 'scale-110' : 'scale-100'
//           }`} 
//         />
        
//         {/* Overlay that appears on hover */}
//         <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 transition-all duration-500 flex flex-col justify-end p-6 ${
//           isHovered ? 'opacity-100' : 'opacity-0'
//         }`}>
//           <p className="text-white text-sm mb-4 line-clamp-3 transform translate-y-4 transition-transform duration-500 delay-100" style={{ 
//             opacity: isHovered ? 1 : 0,
//             transform: isHovered ? 'translateY(0)' : 'translateY(1rem)'
//           }}>
//             {description}
//           </p>
          
//           {/* Technology tags */}
//           <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 transition-transform duration-500 delay-150" style={{ 
//             opacity: isHovered ? 1 : 0,
//             transform: isHovered ? 'translateY(0)' : 'translateY(1rem)'
//           }}>
//             {technologies.slice(0, 4).map((tech, index) => (
//               <span 
//                 key={index} 
//                 className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm border border-white/10"
//               >
//                 {tech}
//               </span>
//             ))}
//             {technologies.length > 4 && (
//               <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm border border-white/10">
//                 +{technologies.length - 4}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Content area with clip-path design */}
//       <div className="relative pt-6 pb-5 px-5">
//         {/* Clip-path design element */}
//         <div className="absolute top-0 left-0 right-0 h-6 clip-title-section bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-700 dark:to-fuchsia-700"></div>
        
//         <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 relative z-10">
//           {title}
//         </h3>
        
//         {/* Buttons that slide up on hover */}
//         <div className={`flex gap-3 transition-all duration-500 ${
//           isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//         }`}>
//           {viewLink && (
//             <a
//               href={viewLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-center text-sm px-4 py-2.5 rounded-lg hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//             >
//               View Live
//             </a>
//           )}
//           {codeLink && (
//             <a
//               href={codeLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 bg-gray-800 dark:bg-gray-700 text-white text-center text-sm px-4 py-2.5 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1 transform hover:-translate-y-0.5"
//             >
//               Code <span className="text-base">💻</span>
//             </a>
//           )}
//         </div>
        
//         {/* Fallback indicator that shows when not hovered */}
//         {!isHovered && (
//           <div className="flex gap-2 mt-3 justify-center">
//             {viewLink && (
//               <span className="w-3 h-3 bg-purple-600 rounded-full animate-pulse"></span>
//             )}
//             {codeLink && (
//               <span className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Custom CSS for clip-path and other effects */}
//       <style jsx>{`
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .clip-title-section {
//           clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
//         }
        
//         /* Enhanced glow effect on hover */
//         .shadow-glow {
//           box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
//         }
//       `}</style>
//     </div>
//   );
// }


// components/ProjectCard.jsx
import { useState, useRef, useEffect } from 'react';

export default function ProjectCard({ 
  image, 
  title, 
  description, 
  technologies = [],
  viewLink, 
  codeLink,
  darkMode = false 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Enhanced tilt effect on mouse move
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation based on mouse position
      const rotateY = ((x - centerX) / centerX) * 8;
      const rotateX = ((centerY - y) / centerY) * 8;
      
      // Add scale effect and perspective
      card.style.transform = `
        perspective(1500px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(1.03, 1.03, 1.03)
      `;
      
      // Add dynamic shadow based on mouse position
      const shadowX = (rotateY / 2) * -1;
      const shadowY = (rotateX / 2) * -1;
      const shadowColor = darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.15)';
      const shadowColorSecondary = darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.1)';
      
      card.style.boxShadow = `
        ${shadowX}px ${shadowY}px 30px ${shadowColor},
        ${shadowX * 2}px ${shadowY * 2}px 50px ${shadowColorSecondary}
      `;
    };
    
    const handleMouseLeave = () => {
      // Smooth return to original position
      card.style.transform = 'perspective(1500px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = darkMode 
        ? '0 15px 35px -5px rgba(255, 255, 255, 0.05), 0 10px 10px -5px rgba(255, 255, 255, 0.02)'
        : '0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
      setIsHovered(false);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mouseenter', handleMouseEnter);
    }
    
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [darkMode]);

  return (
    <div 
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden transition-all duration-500 shadow-xl border ${
        darkMode 
          ? "bg-gray-800 border-gray-700" 
          : "bg-white border-gray-100"
      }`}
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease, border-color 0.3s ease'
      }}
    >
      {/* Image container with gradient overlay */}
      <div className="h-60 w-full overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`} 
        />
        
        {/* Gradient overlay that appears on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-all duration-500 flex flex-col justify-end p-6 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className={`text-sm mb-4 line-clamp-3 transform translate-y-4 transition-transform duration-500 delay-100 ${
            darkMode ? "text-gray-200" : "text-white"
          }`} style={{ 
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(1rem)'
          }}>
            {description}
          </p>
          
          {/* Technology tags */}
          <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 transition-transform duration-500 delay-150" style={{ 
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(1rem)'
          }}>
            {technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 text-xs rounded-full backdrop-blur-sm border font-medium ${
                  darkMode 
                    ? "bg-white/20 text-gray-200 border-white/10" 
                    : "bg-white/30 text-gray-800 border-white/20"
                }`}
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className={`px-3 py-1 text-xs rounded-full backdrop-blur-sm border font-medium ${
                darkMode 
                  ? "bg-white/20 text-gray-200 border-white/10" 
                  : "bg-white/30 text-gray-800 border-white/20"
              }`}>
                +{technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content area with improved design */}
      <div className="relative pt-7 pb-6 px-6">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        <h3 className={`text-xl font-bold mb-3 relative z-10 tracking-tight ${
          darkMode ? "text-white" : "text-gray-800"
        }`}>
          {title}
        </h3>
        
        {/* Buttons with improved styling */}
        <div className={`flex gap-3 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {viewLink && (
            <a
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center text-sm px-4 py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 text-center text-sm px-4 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-medium transform hover:-translate-y-0.5 ${
                darkMode 
                  ? "bg-gray-700 text-white hover:bg-gray-600" 
                  : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Code
            </a>
          )}
        </div>
        
        {/* Subtle indicator dots */}
        {!isHovered && (
          <div className="flex gap-2 mt-4 justify-center">
            {viewLink && (
              <span className={`w-2 h-2 rounded-full animate-pulse ${
                darkMode ? "bg-blue-400" : "bg-blue-500"
              }`}></span>
            )}
            {codeLink && (
              <span className={`w-2 h-2 rounded-full animate-pulse ${
                darkMode ? "bg-gray-400" : "bg-gray-500"
              }`} style={{ animationDelay: '0.5s' }}></span>
            )}
          </div>
        )}
      </div>

      {/* Custom CSS */}
      <style>{`
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`}</style>
    </div>
  );
}