"use client";

import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll position to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" z-20 p-3 rounded-full bg-blue-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
