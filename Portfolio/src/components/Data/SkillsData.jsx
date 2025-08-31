// export const skillsData = {
//   frontend: {
//     title: "Full Stack Development",
//     desc: "Creating responsive and interactive user interfaces with modern frameworks.",
//     color: "blue",
//     skills: [
//       { name: "React", icon: "/icons/react.svg" },
//       { name: "Angular", icon: "/icons/react.svg" },
//       { name: "JavaScript", icon: "/icons/react.svg" },
//       { name: "TypeScript", icon: "/icons/react.svg" },
//       { name: "HTML5", icon: "/icons/react.svg" },
//       { name: "CSS3", icon: "/icons/react.svg" },
//       { name: "Tailwind", icon: "/icons/react.svg" },
//     ]
//   },
//   mobile: {
//     title: "Mobile Development",
//     desc: "Building cross-platform mobile applications with native performance.",
//     color: "purple",
//     skills: [
//       { name: "React Native", icon: "/icons/react.svg" },
//       { name: "Flutter", icon: "/icons/react.svg" },
//       { name: "iOS", icon: "/icons/react.svg" },
//       { name: "Android", icon: "/icons/react.svg" },
//       { name: "PWA", icon: "/icons/react.svg" },
//       { name: "Expo", icon: "/icons/react.svg" },
//     ]
//   },
//   design: {
//     title: "AI Engineering",
//     desc: "Designing intuitive and beautiful user experiences that delight users.",
//     color: "green",
//     skills: [
//       { name: "Python", icon: "/icons/react.svg" },
//       { name: "TensorFlow", icon: "/icons/react.svg" },
//       { name: "scikit-learn", icon: "/icons/react.svg" },
//       { name: "pandas", icon: "/icons/react.svg" },
//       { name: "numpy", icon: "/icons/react.svg" },
//       { name: "Matplotlib", icon: "/icons/react.svg" },
//       { name: "Plotly", icon: "/icons/react.svg" },
//     ]
//   }
// };

// Additional color options

export const skillsData = {
  fullstack: {
    title: "Full Stack Development (MERN)",
    desc: "Building scalable, responsive, and modern web applications with the MERN stack and cutting-edge tools.",
    color: "blue",
    skills: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express.js", icon: "/icons/express.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Vite.js", icon: "/icons/vite.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ]
  },

  ai: {
    title: "AI Engineering",
    desc: "Designing intelligent systems using machine learning and data science tools to solve real-world problems.",
    color: "green",
    skills: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
      { name: "Scikit-learn", icon: "/icons/scikit-learn.svg" },
      { name: "Pandas", icon: "/icons/pandas.svg" },
      { name: "NumPy", icon: "/icons/numpy.svg" },
      { name: "Seaborn", icon: "/icons/seaborn.png" },
      { name: "Matplotlib", icon: "/icons/matplotlib.svg" },
      { name: "Plotly", icon: "/icons/plotly.svg" },
    ]
  },

  tools: {
    title: "Tools & Utilities",
    desc: "Efficient development, design, and deployment using modern tools and platforms.",
    color: "purple",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "MiniConda", icon: "/icons/conda.svg" },
      { name: "Kaggle", icon: "/icons/kaggle.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Canva", icon: "/icons/canva.svg" },
    ]
  },

  others: {
    title: "Additional Skills",
    desc: "Other technologies and languages I’ve worked with in various projects.",
    color: "red",
    skills: [
      { name: "Java", icon: "/icons/java.svg" },
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "SQL", icon: "/icons/sql.svg" },
      { name: "Microsoft Office", icon: "/icons/office.svg" },
       { name: "Video Editing", icon: "/icons/video.png" },
    ]
  },

};


export const colorOptions = {
  blue: {
    bg: "bg-blue-100",
    darkBg: "bg-blue-900/20",
    text: "text-blue-700",
    darkText: "text-blue-400",
    border: "border-blue-500",
    iconBg: "bg-blue-100",
    darkIconBg: "bg-blue-900/30",
    skillBg: "bg-blue-50",
    darkSkillBg: "bg-blue-900/20"
  },
  purple: {
    bg: "bg-purple-100",
    darkBg: "bg-purple-900/20",
    text: "text-purple-700",
    darkText: "text-purple-400",
    border: "border-purple-500",
    iconBg: "bg-purple-100",
    darkIconBg: "bg-purple-900/30",
    skillBg: "bg-purple-50",
    darkSkillBg: "bg-purple-900/20"
  },
  green: {
    bg: "bg-green-100",
    darkBg: "bg-green-900/20",
    text: "text-green-700",
    darkText: "text-green-400",
    border: "border-green-500",
    iconBg: "bg-green-100",
    darkIconBg: "bg-green-900/30",
    skillBg: "bg-green-50",
    darkSkillBg: "bg-green-900/20"
  },
  red: {
    bg: "bg-red-100",
    darkBg: "bg-red-900/20",
    text: "text-red-700",
    darkText: "text-red-400",
    border: "border-red-500",
    iconBg: "bg-red-100",
    darkIconBg: "bg-red-900/30",
    skillBg: "bg-red-50",
    darkSkillBg: "bg-red-900/20"
  },
  yellow: {
    bg: "bg-yellow-100",
    darkBg: "bg-yellow-900/20",
    text: "text-yellow-700",
    darkText: "text-yellow-400",
    border: "border-yellow-500",
    iconBg: "bg-yellow-100",
    darkIconBg: "bg-yellow-900/30",
    skillBg: "bg-yellow-50",
    darkSkillBg: "bg-yellow-900/20"
  },
  indigo: {
    bg: "bg-indigo-100",
    darkBg: "bg-indigo-900/20",
    text: "text-indigo-700",
    darkText: "text-indigo-400",
    border: "border-indigo-500",
    iconBg: "bg-indigo-100",
    darkIconBg: "bg-indigo-900/30",
    skillBg: "bg-indigo-50",
    darkSkillBg: "bg-indigo-900/20"
  },
  pink: {
    bg: "bg-pink-100",
    darkBg: "bg-pink-900/20",
    text: "text-pink-700",
    darkText: "text-pink-400",
    border: "border-pink-500",
    iconBg: "bg-pink-100",
    darkIconBg: "bg-pink-900/30",
    skillBg: "bg-pink-50",
    darkSkillBg: "bg-pink-900/20"
  },
  teal: {
    bg: "bg-teal-100",
    darkBg: "bg-teal-900/20",
    text: "text-teal-700",
    darkText: "text-teal-400",
    border: "border-teal-500",
    iconBg: "bg-teal-100",
    darkIconBg: "bg-teal-900/30",
    skillBg: "bg-teal-50",
    darkSkillBg: "bg-teal-900/20"
  }
};