// import { FaCode } from "react-icons/fa";
// const SkillsCard = ({
//   title,
//   desc,
//   skills = [],
//   color = "blue",
//   darkMode = false,
// }) => {
//   return (
//     <div
//       className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
//         darkMode ? "bg-gray-800" : "bg-white"
//       } border-l-4 border-${color}-500`}
//     >
//       <div className="flex items-center mb-4">
//         <div
//           className={`w-12 h-12 bg-blue-100 dark:bg-${color}-900/30 rounded-full flex items-center justify-center mr-4`}
//         >
//           <FaCode
//             className={`text-${color}-600 dark:text-${color}-400 text-xl`}
//           />
//         </div>
//         <h3 className="text-xl font-semibold">{title}</h3>
//       </div>
//       <p className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//         {desc}
//       </p>
//       <div className="flex flex-wrap gap-2">
//         {skills.map((skill) => (
//           <span
//             key={skill}
//             className={`px-3 py-1 rounded-full text-sm ${
//               darkMode
//                 ? `bg-gray-700 text-${color}-300`
//                 : `bg-blue-100 text-${color}-700`
//             }`}
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillsCard;

const SkillsCard = ({
  title,
  desc,
  skills = [],
  color = "blue",
  darkMode = false,
}) => {
  // Get color classes based on the color name
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: darkMode ? "bg-blue-900/20" : "bg-blue-100",
        text: darkMode ? "text-blue-400" : "text-blue-700",
        border: "border-blue-500",
        iconBg: darkMode ? "bg-blue-900/30" : "bg-blue-100",
        skillBg: darkMode ? "bg-blue-900/20" : "bg-blue-50"
      },
      purple: {
        bg: darkMode ? "bg-purple-900/20" : "bg-purple-100",
        text: darkMode ? "text-purple-400" : "text-purple-700",
        border: "border-purple-500",
        iconBg: darkMode ? "bg-purple-900/30" : "bg-purple-100",
        skillBg: darkMode ? "bg-purple-900/20" : "bg-purple-50"
      },
      green: {
        bg: darkMode ? "bg-green-900/20" : "bg-green-100",
        text: darkMode ? "text-green-400" : "text-green-700",
        border: "border-green-500",
        iconBg: darkMode ? "bg-green-900/30" : "bg-green-100",
        skillBg: darkMode ? "bg-green-900/20" : "bg-green-50"
      },
      red: {
        bg: darkMode ? "bg-red-900/20" : "bg-red-100",
        text: darkMode ? "text-red-400" : "text-red-700",
        border: "border-red-500",
        iconBg: darkMode ? "bg-red-900/30" : "bg-red-100",
        skillBg: darkMode ? "bg-red-900/20" : "bg-red-50"
      },
      yellow: {
        bg: darkMode ? "bg-yellow-900/20" : "bg-yellow-100",
        text: darkMode ? "text-yellow-400" : "text-yellow-700",
        border: "border-yellow-500",
        iconBg: darkMode ? "bg-yellow-900/30" : "bg-yellow-100",
        skillBg: darkMode ? "bg-yellow-900/20" : "bg-yellow-50"
      },
      indigo: {
        bg: darkMode ? "bg-indigo-900/20" : "bg-indigo-100",
        text: darkMode ? "text-indigo-400" : "text-indigo-700",
        border: "border-indigo-500",
        iconBg: darkMode ? "bg-indigo-900/30" : "bg-indigo-100",
        skillBg: darkMode ? "bg-indigo-900/20" : "bg-indigo-50"
      },
      pink: {
        bg: darkMode ? "bg-pink-900/20" : "bg-pink-100",
        text: darkMode ? "text-pink-400" : "text-pink-700",
        border: "border-pink-500",
        iconBg: darkMode ? "bg-pink-900/30" : "bg-pink-100",
        skillBg: darkMode ? "bg-pink-900/20" : "bg-pink-50"
      },
      teal: {
        bg: darkMode ? "bg-teal-900/20" : "bg-teal-100",
        text: darkMode ? "text-teal-400" : "text-teal-700",
        border: "border-teal-500",
        iconBg: darkMode ? "bg-teal-900/30" : "bg-teal-100",
        skillBg: darkMode ? "bg-teal-900/20" : "bg-teal-50"
      }
    };

    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(color);

  return (
    <div
      className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } border-l-4 ${colors.border}`}
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center mr-4`}
        >
          <svg 
            className={`w-6 h-6 ${colors.text}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
          {title}
        </h3>
      </div>
      <p className={`mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        {desc}
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="relative group"
          >
            <div className={`p-3 rounded-lg ${colors.skillBg} transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md`}>
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  // Fallback if icon fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback icon */}
              <div className="hidden w-6 h-6 rounded-full bg-gray-300  items-center justify-center">
                <span className="text-xs font-bold text-gray-700">{skill.name.charAt(0)}</span>
              </div>
            </div>
            {/* Tooltip on hover */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap shadow-lg ${darkMode ? "bg-gray-700 text-white" : "bg-gray-800 text-white"}`}>
                {skill.name}
              </div>
              {/* Tooltip arrow */}
              <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;