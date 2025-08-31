
import { useRef, useState } from "react";

const TiltImage = ({ src, alt, darkMode, className = "" }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / centerY * 30;
    const tiltY = (centerX - x) / centerX * 30;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      className={`relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl cursor-pointer transform transition-transform duration-500 ${className}`}
      style={{ 
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
      />
      
      {/* Glow effect on hover */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div> */}
      
      {/* Floating elements around the image */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 -right-8 w-16 h-16 bg-yellow-600 rounded-full opacity-20 animate-pulse delay-500"></div>
    </div>
  );
};

export default TiltImage;