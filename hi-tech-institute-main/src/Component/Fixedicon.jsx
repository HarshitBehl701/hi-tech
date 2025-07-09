import React from "react";
import { FaWhatsapp, FaCommentDots } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 z-50 flex justify-between w-full px-4 pointer-events-none">
      {/* WhatsApp Button (Left Side) */}
      <a
        href="https://wa.me/919212577577"  // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Chatbox Button (Right Side) */}
      <button
        onClick={() => alert("Chatbox opened!")}  // Replace with your chatbox logic
        className="pointer-events-auto bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Open Chat"
      >
        <FaCommentDots size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;