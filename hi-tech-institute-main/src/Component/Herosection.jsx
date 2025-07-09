import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Import your local images
import englishSlide1 from "../assets/laptoprepair.jpg";
import englishSlide2 from "../assets/laptoprepair.jpg";
import englishSlide3 from "../assets/Mobilrepair.jpg";
import hindiSlide1 from "../assets/Mobilrepair.jpg";
import hindiSlide2 from "../assets/bussiness.png";
import hindiSlide3 from "../assets/bussiness.png";

const slides = [
  // Slide 1
  {
    id: 1,
    bgImage: {
      desktop: englishSlide1,
      mobile: englishSlide1
    },
    lines: [
      { text: "Professional Mobile Repair Course", lang: "en", size: "xl" },
      { text: "चिप-लेवल रिपेयरिंग ट्रेनिंग", lang: "hi", size: "lg" },
      { text: "Get Certified in 60 Days", lang: "en", size: "xl" }
    ]
  },
  // Slide 2
  {
    id: 2,
    bgImage: {
      desktop: englishSlide2,
      mobile: englishSlide2
    },
    lines: [
      { text: "सभी ब्रांड्स की रिपेयरिंग सीखें", lang: "hi", size: "xl" },
      { text: "Hands-on Practical Training", lang: "en", size: "lg" },
      { text: "Free Tool Kit Worth ₹15,000", lang: "en", size: "xl" }
    ]
  },
  // Slide 3
  {
    id: 3,
    bgImage: {
      desktop: englishSlide3,
      mobile: englishSlide3
    },
    lines: [
      { text: "Start Earning ₹25,000+/Month", lang: "en", size: "xl" },
      { text: "ऑनलाइन/ऑफलाइन क्लासेस", lang: "hi", size: "lg" },
      { text: "100% Placement Assistance", lang: "en", size: "xl" }
    ]
  },
  // Slide 4 (Hindi Dominant)
  {
    id: 4,
    bgImage: {
      desktop: hindiSlide1,
      mobile: hindiSlide1
    },
    lines: [
      { text: "2 महीने में सर्टिफाइड टेक्नीशियन बनें", lang: "hi", size: "xl" },
      { text: "Learn Motherboard Repair", lang: "en", size: "lg" },
      { text: "Lifetime Technical Support", lang: "en", size: "xl" }
    ]
  },
  // Slide 5
  {
    id: 5,
    bgImage: {
      desktop: hindiSlide2,
      mobile: hindiSlide3
    },
    lines: [
      { text: "अपना रिपेयर शॉप शुरू करें", lang: "hi", size: "xl" },
      { text: "With Business Guidance", lang: "en", size: "lg" },
      { text: "No Prior Experience Needed", lang: "en", size: "xl" }
    ]
  }
];

export default function MobileRepairingBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play every 4 seconds (changed from 5 to 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Changed to 4000 milliseconds (4 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: isMobile ? '400px' : '611px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Slightly faster transition to match 4s interval
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${isMobile 
              ? slides[currentSlide].bgImage.mobile 
              : slides[currentSlide].bgImage.desktop})` 
          }}
        >
          {/* Text Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <motion.div
              className="w-full max-w-3xl space-y-3 md:space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {slides[currentSlide].lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    y: 40,
                    opacity: 0,
                    filter: "blur(4px)"
                  }}
                  animate={{ 
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{
                    delay: index * 0.15, // Slightly faster stagger
                    duration: 0.6,
                    ease: [0.2, 0.8, 0.4, 1]
                  }}
                  className={`text-center ${
                    line.lang === "hi" ? "font-[Karla]" : "font-[Poppins]"
                  } ${
                    line.size === "xl" 
                      ? "text-2xl md:text-4xl" 
                      : "text-xl md:text-2xl"
                  } font-bold ${
                    index % 2 === 0 
                      ? "text-white" 
                      : "text-red-100"
                  }`}
                  style={{
                    textShadow: `
                      0 2px 4px rgba(0,0,0,0.8),
                      0 0 8px rgba(220,38,38,0.5)
                    `,
                    WebkitTextStroke: index % 2 === 0 ? '1px rgba(220,38,38,0.8)' : '0.5px white'
                  }}
                >
                  {line.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-red-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}