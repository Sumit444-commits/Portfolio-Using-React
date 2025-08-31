import { useState, useEffect } from "react";

const Typewriter = ({ texts = [], speed = 150, darkMode = false }) => {
  const [textIndex, setTextIndex] = useState(0);     // Current string index
  const [displayText, setDisplayText] = useState(''); // What's shown on screen
  const [currentChar, setCurrentChar] = useState(0);  // Current character index
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentText = texts[textIndex] || '';

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentChar < currentText.length) {
        // Typing
        setDisplayText(currentText.substring(0, currentChar + 1));
        setCurrentChar(currentChar + 1);
      } else if (isDeleting && currentChar > 0) {
        // Deleting
        setDisplayText(currentText.substring(0, currentChar - 1));
        setCurrentChar(currentChar - 1);
      } else {
        // Pause before switching state
        setIsPaused(true);

        setTimeout(() => {
          setIsPaused(false);

          if (!isDeleting) {
            // Finished typing -> start deleting after pause
            setIsDeleting(true);
          } else {
            // Finished deleting -> move to next text
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }, 1000); // Pause duration at end of typing/deleting
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, isPaused, currentText, speed, texts.length]);

  return (
    <h2 className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      I'm a{' '}
      <span className="text-blue-600 font-semibold inline-block min-w-[200px]">
        {displayText}
        <span className="inline-block w-1 h-6 bg-blue-600 ml-1 animate-pulse"></span>
      </span>
    </h2>
    
  );
};
export default Typewriter