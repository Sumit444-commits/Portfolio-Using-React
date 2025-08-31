import React from "react";
import { FaTimes } from "react-icons/fa";

const CertificateModal = ({ certificate, onClose, darkMode }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 bg-gray-600/80 bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className={`rounded-lg max-w-4xl max-h-full overflow-auto ${darkMode ? "bg-gray-800" : "bg-white"}`} onClick={(e) => e.stopPropagation()}>
        <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
          <h3 className={`text-xl font-bold ${darkMode?"text-white":"text-gray-700"}`}>{certificate.title}</h3>
          <button 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={onClose}
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="p-4">
          <img 
            src={certificate.image} 
            alt={certificate.title}
            className="w-full h-auto rounded-lg"
          />
          <div className={`mt-4 text-center ${darkMode?"text-white":"text-gray-600"}`}>
            <p>Issued by: {certificate.issuer}</p>
            <p>Date: {certificate.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;