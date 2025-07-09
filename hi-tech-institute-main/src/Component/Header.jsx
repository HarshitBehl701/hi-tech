import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiChevronDown, HiPhone, HiCalendar, HiX } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const dropdownRefs = useRef([]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      dropdownRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target)) {
          setActiveDropdown(prev => prev === index ? null : prev);
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { 
      name: "About us", 
      href: "#about",
      dropdown: [
        { name: "Our Mission", href: "#mission" },
        { name: "Leadership", href: "#leadership" },
        { name: "Success Stories", href: "#success" }
      ]
    },
    { 
      name: "Courses", 
      href: "#courses",
      dropdown: [
        { name: "Web Development", href: "#web-dev" },
        { name: "Data Science", href: "#data-science" },
        { name: "Cyber Security", href: "#cyber" }
      ]
    },
    { name: "Online Courses", href: "#online" },
    { 
      name: "Support", 
      href: "#support",
      dropdown: [
        { name: "FAQ", href: "#faq" },
        { name: "Help Center", href: "#help" }
      ]
    },
    { 
      name: "Branches", 
      href: "#branches",
      dropdown: [
        { name: "Delhi", href: "#delhi" },
        { name: "Mumbai", href: "#mumbai" }
      ]
    },
    { name: "Career", href: "#career" },
    { name: "Blog", href: "#blog" },
    { name: "Contacts", href: "#contacts" }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/80 shadow-md z-50"
    >
      <div className="container mx-auto px-4">
        {/* Top Contact Bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm  text-white px-4">
          <div className="flex items-center gap-2 ">
            <HiPhone className="animate-bounce font-bold text-xl text-red-600" />
            <span className="text-black">Call Now: 9212 577 577</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-3 px-4">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2"
          >
            <motion.img
              src={logo}
              alt="Hitech Institute Logo"
              className="h-12 w-auto"
              whileHover={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div 
                key={index} 
                className="relative"
                ref={el => dropdownRefs.current[index] = el}
              >
                <div 
                  className="flex items-center group cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <div className={`px-4 py-2 font-medium relative ${
                    activeDropdown === index ? 'text-red-600' : 'text-gray-800'
                  }`}>
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all ${
                      activeDropdown === index ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </div>
                  {link.dropdown && (
                    <HiChevronDown
                      className={`ml-1 transition-transform ${
                        activeDropdown === index ? 'rotate-180 text-red-600' : 'text-gray-500'
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                    >
                      {link.dropdown.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* FREE Demo Button */}
            <motion.button
              onClick={() => setShowDemoModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold shadow-md transition-all"
            >
              FREE Demo
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800 p-2 rounded-lg focus:outline-none"
          >
            {isMenuOpen ? <MdClose size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          {navLinks.map((link, index) => (
            <div key={index} className="border-b border-gray-100">
              <div className="flex flex-col">
                <button
                  onClick={() => !link.dropdown ? setIsMenuOpen(false) : toggleDropdown(index)}
                  className={`px-6 py-3 text-left font-medium flex justify-between items-center ${
                    activeDropdown === index ? 'text-red-600' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <HiChevronDown
                      className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {link.dropdown && activeDropdown === index && (
                  <div className="bg-gray-50 pl-8">
                    {link.dropdown.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 border-t border-gray-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setShowDemoModal(true);
            }}
            className="block w-full text-center bg-red-600 text-white px-6 py-3 font-bold mt-2"
          >
            FREE Demo
          </button>
        </div>
      )}

      {/* FREE Demo Modal */}
      <AnimatePresence>
        {showDemoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowDemoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-red-600 p-4 text-white flex justify-between items-center">
                <h3 className="text-xl font-bold">HOW TO APPLY</h3>
                <button 
                  onClick={() => setShowDemoModal(false)}
                  className="text-white hover:text-red-200"
                >
                  <HiX size={24} />
                </button>
              </div>
              
              <div className="p-6">
                {/* Steps */}
                <div className="space-y-4 mb-6">
                  {[
                    "1. Call or Apply",
                    "2. Receive a call from Career Expert", 
                    "3. Schedule your Demo Session"
                  ].map((step, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        {i+1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r">
                  <p className="text-gray-700 mb-2">
                    If you still have problems, please let us know
                  </p>
                  <a 
                    href="tel:9212577577"
                    className="flex items-center text-red-600 font-bold hover:text-red-800"
                  >
                    <HiPhone className="mr-2" />
                    Call Now - 9212 577 577
                  </a>
                </div>

                {/* Batch Hours */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center text-red-600 font-bold mb-2">
                    <HiCalendar className="mr-2" />
                    <span>BATCHES HOUR</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>Mon-Fri 7:00AM - 7:00PM</p>
                    <p>Sat - 8:00AM-5:00PM</p>
                    <p>Sunday - 8:00AM-5:00PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-3 text-center border-t">
                <p className="text-sm text-gray-500">Thank you!</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}