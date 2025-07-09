import React, { useState } from "react";

const WhyJoinHiTech = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: ""
    });
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-black"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header with dramatic typography */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            WHY CHOOSE <span className="text-red-600 relative">
              HI-TECH
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform -rotate-1"></span>
            </span>?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join the institute that's been shaping top-tier laptop repair professionals for 18 years
          </p>
        </div>

        {/* Feature cards with floating effect */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "💼",
              title: "Career Launchpad",
              content: "18 years of excellence with 100% job assistance - your success guaranteed",
              highlight: "100% job assistance"
            },
            {
              icon: "🛠️",
              title: "Hands-On Mastery",
              content: "80% practical training on real machines - learn by doing, not just theory",
              highlight: "80% practical training"
            },
            {
              icon: "👨‍🏫",
              title: "Industry Gurus",
              content: "Learn from certified experts who've trained thousands of professionals",
              highlight: "certified experts"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-gray-700">
                {feature.content.replace(feature.highlight, "")}
                <span className="font-black text-red-600"> {feature.highlight}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Batch timings - premium layout */}
        <div className="relative bg-black rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-black opacity-80"></div>
          <div className="relative z-10 p-12">
            <h3 className="text-3xl font-bold text-white mb-2">Flexible Learning Options</h3>
            <p className="text-red-200 mb-8">Choose the schedule that fits your life</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Regular Classes", desc: "Mon-Fri, 9AM-5PM" },
                { title: "Weekend Classes", desc: "Sat-Sun, 10AM-4PM" },
                { title: "Fast Track", desc: "Intensive daily training" },
                { title: "15 Days Course", desc: "Compact skill builder" },
                { title: "30 Days Course", desc: "Comprehensive training" },
                { title: "45 Days Mastery", desc: "Complete professional program" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-10 hover:bg-opacity-20 transition-all"
                >
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-red-200 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white border-opacity-20">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-red-100 px-6 py-3 rounded-full">
            <span className="text-red-600 font-bold">TRUSTED BY 10,000+ STUDENTS SINCE 2005</span>
          </div>
        </div>
      </div>

      {/* Modal Enquiry Form - Optimized for mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-2 relative">
            {/* Modal header */}
            <div className="bg-gradient-to-r from-red-600 to-black p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Enrollment Form</h3>
                  <p className="text-red-200 text-sm">Join our program today</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-gray-200 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal body */}
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course*</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="15 Days Course">15 Days Course</option>
                  <option value="30 Days Course">30 Days Course</option>
                  <option value="45 Days Mastery">45 Days Mastery</option>
                  <option value="Weekend Classes">Weekend Classes</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-all text-sm"
              >
                Submit Enquiry
              </button>
            </form>

            {/* Modal footer */}
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
              <p className="text-xs text-gray-600 text-center">
                We'll contact you within 24 hours
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyJoinHiTech;