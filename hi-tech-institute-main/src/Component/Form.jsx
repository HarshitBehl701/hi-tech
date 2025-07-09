import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: ""
  });

  const faqs = [
    {
      question: "What makes Hi-Tech different from other institutes?",
      answer: "With 18 years of experience, we offer 80% practical training on real machines, certified instructors, and 100% job assistance - a complete package you won't find elsewhere."
    },
    {
      question: "Do I need any prior technical knowledge to join?",
      answer: "No, our courses are designed for complete beginners. We start with fundamentals and progress to advanced techniques."
    },
    {
      question: "What certification will I receive after completion?",
      answer: "You'll receive a globally recognized certification that's valid for laptop repair jobs worldwide, along with our placement assistance."
    },
    {
      question: "Can I pay the course fee in installments?",
      answer: "Yes, we offer flexible payment options including monthly installments with zero interest."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FAQ Form submitted:", formData);
    // Add your form submission logic here
    setFormData({
      name: "",
      email: "",
      phone: "",
      question: ""
    });
  };

  return (
    <div className="bg-gray-50 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-black"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
            <span className="text-red-600 relative">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform -rotate-1"></span>
            </span> & Enquiries
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get answers to common questions or ask us anything directly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-bold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-red-600 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-5 pb-4 ${activeIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-black mb-6">
              Still have questions? Ask us directly
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="faq-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="faq-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="faq-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="faq-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="faq-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="faq-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="faq-question" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Question*
                </label>
                <textarea
                  id="faq-question"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Submit Question
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;