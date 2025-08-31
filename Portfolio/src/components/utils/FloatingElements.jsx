import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

const FloatingElements = ({ darkMode }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating elements that appear in both modes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              darkMode ? "bg-blue-400/40" : "bg-blue-600/30"
            }`}
          />
        </div>
      ))}

      {/* Special floating elements with icons */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`icon-${i}`}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${Math.random() * 8 + 12}s`,
          }}
        >
          <div
            className={`
            p-2 rounded-full text-sm
            ${
              darkMode
                ? "bg-blue-900/30 text-blue-300"
                : "bg-blue-100/50 text-blue-600"
            }
          `}
          >
            {i % 3 === 0 && <FaCode />}
            {i % 3 === 1 && <FaRocket />}
            {i % 3 === 2 && <FaLightbulb />}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FloatingElements