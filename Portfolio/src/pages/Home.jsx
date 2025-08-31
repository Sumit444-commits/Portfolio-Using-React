import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DynamicBackground from "../components/utils/DynamicBackground";
import CertificateModal from "../components/Modal/CertificateModal";
import { useStore } from "../Context/AppContext";
import AboutSection from "../components/Home/AboutSection";
import SkillsSection from "../components/Home/SkillsSection";
import HeroSection from "../components/Home/HeroSection";
import ProjectSection from "../components/Home/ProjectSection";
import CertificationSection from "../components/Home/CertificationSection";
import ContactSection from "../components/Home/ContactSection";

function Home() {
  const { darkMode, setDarkMode } = useStore();

  const [activeSection, setActiveSection] = useState("home");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    certifications: useRef(null),
    contact: useRef(null),
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleViewCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };
  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "dark bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Dynamic Background */}
      <DynamicBackground darkMode={darkMode} />

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="flex-grow relative z-10">
        {/* Hero Section */}

        <HeroSection darkMode={darkMode} sectionRefs={sectionRefs} />

        {/* About Section */}
        <AboutSection darkMode={darkMode} sectionRefs={sectionRefs} />

        {/* Skills Section */}
        <SkillsSection darkMode={darkMode} sectionRefs={sectionRefs} />

        {/* Projects Section */}
        <ProjectSection darkMode={darkMode} sectionRefs={sectionRefs} />

        {/* Certifications Section */}
        <CertificationSection
          darkMode={darkMode}
          sectionRefs={sectionRefs}
          handleViewCertificate={handleViewCertificate}
        />

        {/* Contact Section */}
        <ContactSection darkMode={darkMode} sectionRefs={sectionRefs} />
      </main>

      <Footer darkMode={darkMode} />

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={handleCloseModal}
        darkMode={darkMode}
      />

      {/* Custom CSS for animations */}
      <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
            33% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
            66% { transform: translateY(-10px) translateX(-10px) rotate(-2deg); }
          }
          .animate-float { 
            animation: float 8s ease-in-out infinite; 
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          .animate-twinkle {
            animation: twinkle 4s ease-in-out infinite;
          }
          
          /* Smooth scrolling for the entire page */
          html {
            scroll-behavior: smooth;
          }
          
          /* Section transition animations */
          section {
            transition: transform 0.3s ease-in-out;
          }
          
          /* Consistent spacing utility classes */
          .section-padding {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          @media (min-width: 768px) {
            .section-padding {
              padding-top: 8rem;
              padding-bottom: 8rem;
            }
          }
        `}</style>
    </div>
  );
}

export default Home;
