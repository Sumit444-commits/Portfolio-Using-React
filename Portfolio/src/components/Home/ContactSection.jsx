// import { useState } from "react";
// import {
//   FaLinkedinIn,
//   FaGithub,
//   FaInstagram,
//   FaEnvelope,
//   FaCheckCircle,
//   FaExclamationTriangle,
// } from "react-icons/fa";
// import { toast, Bounce } from "react-toastify";

// const defaultForm = {
//   name: "",
//   email: "",
//   subject: "",
//   message: "",
// };

// const ContactSection = ({ darkMode, sectionRefs }) => {
//   const [form, setForm] = useState(defaultForm);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

//   const validateForm = () => {
//     const newErrors = {};

//     // Name validation
//     if (!form.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (form.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     // Email validation
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     // Subject validation
//     if (!form.subject.trim()) {
//       newErrors.subject = "Subject is required";
//     } else if (form.subject.trim().length < 5) {
//       newErrors.subject = "Subject must be at least 5 characters";
//     }

//     // Message validation
//     if (!form.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (form.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }

//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       // Scroll to first error
//       const firstErrorField = Object.keys(errors)[0];
//       if (firstErrorField) {
//         document.getElementById(firstErrorField)?.focus();
//       }
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Simulate API call - replace with your actual submission logic
//       const response = await fetch(`${import.meta.env.VITE_API}/contact`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });
//       if (response.ok) {
//         setSubmitStatus("success");
//         toast.success("Success", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//           pauseOnHover: false,
//           progress: undefined,
//           theme: `${darkMode ? "light" : "dark"}`,
//           transition: Bounce,
//         });
//         setForm(defaultForm);
//       } else {
//         setSubmitStatus("error");
//         toast.error("Error", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//           pauseOnHover: false,
//           progress: undefined,
//           theme: `${darkMode ? "light" : "dark"}`,
//           transition: Bounce,
//         });
//       }

//       setTimeout(() => {
//         setSubmitStatus(null);
//       }, 5000);
//     } catch (error) {
//       setSubmitStatus("error");

//       // Clear error message after 5 seconds
//       setTimeout(() => {
//         setSubmitStatus(null);
//       }, 5000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       ref={sectionRefs.contact}
//       className={`min-h-screen py-20 flex items-center transition-colors duration-300 relative ${
//         darkMode ? "bg-gray-800/90" : "bg-white/90"
//       } backdrop-blur-sm`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
//             <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
//               Let's Connect
//             </span>
//             <span
//               className={`absolute -bottom-2 left-1/4 w-1/2 h-1 rounded-full ${
//                 darkMode ? "bg-blue-500" : "bg-blue-600"
//               } animate-pulse`}
//             ></span>
//           </h2>
//           <p
//             className={`text-xl max-w-2xl mx-auto ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Ready to bring your ideas to life? Let's create something amazing
//             together.
//           </p>
//         </div>

//         {/* Status Messages */}
//         {submitStatus === "success" && (
//           <div className="mb-8 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700 flex items-center">
//             <FaCheckCircle className="mr-3 text-green-600" />
//             <span>Message sent successfully! I'll get back to you soon.</span>
//           </div>
//         )}

//         {submitStatus === "error" && (
//           <div className="mb-8 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700 flex items-center">
//             <FaExclamationTriangle className="mr-3 text-red-600" />
//             <span>
//               Something went wrong. Please try again or contact me directly at
//               sharma.sumit.6574@gmail.com
//             </span>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3
//                 className={`text-2xl font-semibold mb-6 ${
//                   darkMode ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 Get in touch
//               </h3>
//               <p
//                 className={`mb-8 ${
//                   darkMode ? "text-gray-300" : "text-gray-600"
//                 }`}
//               >
//                 I'm always interested in new opportunities and exciting
//                 projects. Let's discuss how we can work together to create
//                 something extraordinary.
//               </p>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div
//                   className={`p-3 rounded-full ${
//                     darkMode
//                       ? "bg-blue-900/30 text-blue-400"
//                       : "bg-blue-100 text-blue-600"
//                   }`}
//                 >
//                   <FaEnvelope className="text-lg" />
//                 </div>
//                 <div>
//                   <h4
//                     className={`font-semibold ${
//                       darkMode ? "text-white" : "text-gray-800"
//                     }`}
//                   >
//                     Email
//                   </h4>
//                   <a
//                     href="mailto:sharma.sumit.6574@gmail.com"
//                     className={`hover:text-blue-600 transition-colors ${
//                       darkMode ? "text-gray-300" : "text-gray-600"
//                     }`}
//                   >
//                     sharma.sumit.6574@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div
//                   className={`p-3 rounded-full ${
//                     darkMode
//                       ? "bg-purple-900/30 text-purple-400"
//                       : "bg-purple-100 text-purple-600"
//                   }`}
//                 >
//                   <FaLinkedinIn className="text-lg" />
//                 </div>
//                 <div>
//                   <h4
//                     className={`font-semibold ${
//                       darkMode ? "text-white" : "text-gray-800"
//                     }`}
//                   >
//                     LinkedIn
//                   </h4>
//                   <a
//                     href="https://linkedin.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`hover:text-blue-600 transition-colors ${
//                       darkMode ? "text-gray-300" : "text-gray-600"
//                     }`}
//                   >
//                     Connect with me
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div
//                   className={`p-3 rounded-full ${
//                     darkMode
//                       ? "bg-gray-900/30 text-gray-400"
//                       : "bg-gray-100 text-gray-600"
//                   }`}
//                 >
//                   <FaGithub className="text-lg" />
//                 </div>
//                 <div>
//                   <h4
//                     className={`font-semibold ${
//                       darkMode ? "text-white" : "text-gray-800"
//                     }`}
//                   >
//                     GitHub
//                   </h4>
//                   <a
//                     href="https://github.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`hover:text-blue-600 transition-colors ${
//                       darkMode ? "text-gray-300" : "text-gray-600"
//                     }`}
//                   >
//                     View my projects
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="pt-6">
//               <h4
//                 className={`font-semibold mb-4 ${
//                   darkMode ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 Follow me
//               </h4>
//               <div className="flex space-x-4">
//                 {[
//                   {
//                     icon: FaGithub,
//                     href: "https://github.com",
//                     color: "gray",
//                   },
//                   {
//                     icon: FaLinkedinIn,
//                     href: "https://linkedin.com",
//                     color: "blue",
//                   },
//                   {
//                     icon: FaInstagram,
//                     href: "https://instagram.com",
//                     color: "pink",
//                   },
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
//                       darkMode
//                         ? `bg-gray-800/50 hover:bg-${social.color}-600 text-gray-300`
//                         : `bg-white hover:bg-${social.color}-100 text-gray-700 shadow-md`
//                     } border border-opacity-20 ${
//                       darkMode ? "border-gray-700" : "border-gray-200"
//                     }`}
//                   >
//                     <social.icon size={18} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div
//             className={`p-8 rounded-2xl shadow-xl ${
//               darkMode
//                 ? "bg-gray-900/80 border border-gray-700/30"
//                 : "bg-white border border-gray-200/50"
//             } backdrop-blur-sm`}
//           >
//             <h3
//               className={`text-2xl font-semibold mb-6 ${
//                 darkMode ? "text-white" : "text-gray-800"
//               }`}
//             >
//               Send a message
//             </h3>

//             <form className="space-y-6" onSubmit={handleSubmit} noValidate>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className={`block mb-2 font-medium ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={form.name}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                       darkMode
//                         ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
//                         : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500"
//                     } ${errors.name ? "border-red-500" : ""}`}
//                     placeholder="Your name"
//                   />
//                   {errors.name && (
//                     <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className={`block mb-2 font-medium ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                       darkMode
//                         ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
//                         : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500"
//                     } ${errors.email ? "border-red-500" : ""}`}
//                     placeholder="your.email@example.com"
//                   />
//                   {errors.email && (
//                     <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="subject"
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-300" : "text-gray-700"
//                   }`}
//                 >
//                   Subject *
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   value={form.subject}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                     darkMode
//                       ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
//                       : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500"
//                   } ${errors.subject ? "border-red-500" : ""}`}
//                   placeholder="What's this about?"
//                 />
//                 {errors.subject && (
//                   <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-300" : "text-gray-700"
//                   }`}
//                 >
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   required
//                   value={form.message}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                     darkMode
//                       ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
//                       : "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500"
//                   } ${errors.message ? "border-red-500" : ""}`}
//                   placeholder="Tell me about your project..."
//                 ></textarea>
//                 {errors.message && (
//                   <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 transform shadow-lg flex items-center justify-center space-x-2 ${
//                   isSubmitting
//                     ? "opacity-70 cursor-not-allowed"
//                     : "hover:from-blue-700 hover:to-purple-700 hover:scale-105"
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <FaEnvelope />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import { useState, useCallback, useMemo } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { toast, Bounce } from "react-toastify";

const ContactSection = ({ darkMode, sectionRefs }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Contact information data
  const contactInfo = useMemo(() => [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      content: "sharma.sumit.6574@gmail.com",
      href: "mailto:sharma.sumit.6574@gmail.com",
      bgColor: darkMode ? "bg-blue-900/30" : "bg-blue-100",
      textColor: darkMode ? "text-blue-400" : "text-blue-600",
    },
    {
      id: 2,
      icon: FaLinkedinIn,
      title: "LinkedIn",
      content: "Connect with me",
      href: "www.linkedin.com/in/sumit-sharma-a0b2c7",
      bgColor: darkMode ? "bg-purple-900/30" : "bg-purple-100",
      textColor: darkMode ? "text-purple-400" : "text-purple-600",
    },
    {
      id: 3,
      icon: FaGithub,
      title: "GitHub",
      content: "View my projects",
      href: "https://github.com/Sumit444-commits?tab=repositories",
      bgColor: darkMode ? "bg-gray-900/30" : "bg-gray-100",
      textColor: darkMode ? "text-gray-400" : "text-gray-600",
    },
  ], [darkMode]);

  // Social links data
  const socialLinks = useMemo(() => [
    {
      icon: FaGithub,
      href: "https://github.com/Sumit444-commits",
      label: "GitHub",
      lightClass: "hover:bg-gray-400",
      darkClass: "hover:bg-gray-600",
    },
    {
      icon: FaLinkedinIn,
      href: "www.linkedin.com/in/sumit-sharma-a0b2c7",
      label: "LinkedIn",
      lightClass: "hover:bg-blue-400",
      darkClass: "hover:bg-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/codes.software/",
      label: "Instagram",
      lightClass: "hover:bg-pink-400",
      darkClass: "hover:bg-pink-600",
    },
  ], []);

  // Validation rules
  const validationRules = useMemo(() => ({
    name: {
      required: true,
      minLength: 2,
      message: "Name must be at least 2 characters",
    },
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      message: "Please enter a valid email address",
    },
    subject: {
      required: true,
      minLength: 5,
      message: "Subject must be at least 5 characters",
    },
    message: {
      required: true,
      minLength: 10,
      message: "Message must be at least 10 characters",
    },
  }), []);

  // Form validation
  const validateForm = useCallback(() => {
    const newErrors = {};
    
    Object.keys(validationRules).forEach((field) => {
      const value = form[field].trim();
      const rules = validationRules[field];
      
      if (rules.required && !value) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        return;
      }
      
      if (rules.minLength && value.length < rules.minLength) {
        newErrors[field] = rules.message;
        return;
      }
      
      if (rules.pattern && !rules.pattern.test(value)) {
        newErrors[field] = rules.message;
      }
    });

    setErrors(newErrors);
    return {
      isValid: Object.keys(newErrors).length === 0,
      firstErrorField: Object.keys(newErrors)[0],
    };
  }, [form, validationRules]);

  // Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    setForm(prev => ({ ...prev, [name]: value }));
  }, [errors]);

  // Show toast notification
  const showToast = useCallback((type, message) => {
    const config = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "light" : "dark",
      transition: Bounce,
    };

    type === "success" 
      ? toast.success(message, config) 
      : toast.error(message, config);
  }, [darkMode]);

  // Form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const { isValid, firstErrorField } = validateForm();
    if (!isValid) {
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitStatus("success");
        showToast("success", "Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      showToast("error", "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  }, [form, validateForm, showToast]);

  // Form fields configuration
  const formFields = useMemo(() => [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      required: true,
      gridClass: "md:col-span-1",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
      gridClass: "md:col-span-1",
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What's this about?",
      required: true,
      gridClass: "md:col-span-2",
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell me about your project...",
      required: true,
      gridClass: "md:col-span-2",
      rows: 5,
    },
  ], []);

  return (
    <section
      id="contact"
      ref={sectionRefs.contact}
      className={`min-h-screen py-20 flex items-center transition-colors duration-300 relative ${
        darkMode ? "bg-gray-800/90" : "bg-white/90"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Let's Connect
            </span>
            <span
              className={`absolute -bottom-2 left-1/4 w-1/2 h-1 rounded-full ${
                darkMode ? "bg-blue-500" : "bg-blue-600"
              } animate-pulse`}
            ></span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div
            role="alert"
            aria-live="assertive"
            className="mb-8 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700 flex items-center"
          >
            <FaCheckCircle className="mr-3 text-green-600 flex-shrink-0" aria-hidden="true" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div
            role="alert"
            aria-live="assertive"
            className="mb-8 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700 flex items-center"
          >
            <FaExclamationTriangle className="mr-3 text-red-600 flex-shrink-0" aria-hidden="true" />
            <span>
              Something went wrong. Please try again or contact me directly at
              sharma.sumit.6574@gmail.com
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
                Get in touch
              </h3>
              <p className={`mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can work together to create something extraordinary.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map(({ id, icon: Icon, title, content, href, bgColor, textColor }) => (
                <div key={id} className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${bgColor} ${textColor}`}>
                    <Icon className="text-lg" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      {title}
                    </h4>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : "_self"}
                      rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                      className={`hover:text-blue-600 transition-colors ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className={`font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
                Follow me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label, lightClass, darkClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                      darkMode
                        ? `bg-gray-800/50 text-gray-300 ${darkClass}`
                        : `bg-white text-gray-700 shadow-md ${lightClass}`
                    } border border-opacity-20 ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-2xl shadow-xl ${
              darkMode
                ? "bg-gray-900/80 border border-gray-700/30"
                : "bg-white border border-gray-200/50"
            } backdrop-blur-sm`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Send a message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.filter(field => field.type !== "textarea").map((field) => (
                  <div key={field.id} className={field.gridClass}>
                    <label
                      htmlFor={field.id}
                      className={`block mb-2 font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {field.label} {field.required && "*"}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={form[field.id]}
                      onChange={handleChange}
                      required={field.required}
                      className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                        darkMode
                          ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                          : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors[field.id] ? "border-red-500" : ""
                      }`}
                      placeholder={field.placeholder}
                      aria-invalid={errors[field.id] ? "true" : "false"}
                      aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                    />
                    {errors[field.id] && (
                      <p id={`${field.id}-error`} className="mt-1 text-red-500 text-sm">
                        {errors[field.id]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Message Textarea */}
              {formFields.filter(field => field.type === "textarea").map((field) => (
                <div key={field.id} className={field.gridClass}>
                  <label
                    htmlFor={field.id}
                    className={`block mb-2 font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {field.label} {field.required && "*"}
                  </label>
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={field.rows}
                    value={form[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                      darkMode
                        ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[field.id] ? "border-red-500" : ""
                    }`}
                    placeholder={field.placeholder}
                    aria-invalid={errors[field.id] ? "true" : "false"}
                    aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                  ></textarea>
                  {errors[field.id] && (
                    <p id={`${field.id}-error`} className="mt-1 text-red-500 text-sm">
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 transform shadow-lg flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:from-blue-700 hover:to-purple-700 hover:scale-105"
                }`}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div 
                      className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" 
                      aria-hidden="true"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaEnvelope aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;