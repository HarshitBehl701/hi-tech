import React from 'react';

const PlacementSection = () => {
  const companies = [
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg' },
    { name: 'Oppo', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/OPPO_LOGO_2019.svg' },
    { name: 'Vivo', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Vivo_Logo_2023.svg' },
    { name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_(2021-).svg' },
    { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
    { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
    { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Lenovo_updated_logo.svg' },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Red Accent */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-20 h-1 bg-red-600"></div>
          <h2 className="text-4xl font-bold text-black mb-4">
            <span className="text-red-600">Placement</span> Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our students get placed at top companies across India
          </p>
        </div>

        {/* Stats in Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">10,000+</p>
            <p className="text-black font-medium">Students Trained</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">2004</p>
            <p className="text-black font-medium">Established Since</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">100%</p>
            <p className="text-black font-medium">Practical Training</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
            <p className="text-5xl font-bold text-red-600 mb-2">24/7</p>
            <p className="text-black font-medium">Placement Support</p>
          </div>
        </div>

        {/* Company Grid with Hover Effect */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-12 text-black">
            Our <span className="text-red-600">Recruiting</span> Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center justify-center h-32 transition-all duration-300 hover:shadow-lg hover:border-red-500"
              >
                <div className="h-16 w-full flex items-center justify-center mb-2">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-black text-sm font-medium mt-auto">{company.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Placement Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Placement Opportunities</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-black rounded-full p-1 mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white">Authorized Service Centers</span>
              </li>
              <li className="flex items-start">
                <div className="bg-black rounded-full p-1 mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white">Multi-Brand Repair Shops</span>
              </li>
              <li className="flex items-start">
                <div className="bg-black rounded-full p-1 mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white">E-commerce Service Partners</span>
              </li>
              <li className="flex items-start">
                <div className="bg-black rounded-full p-1 mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white">Entrepreneurship Support</span>
              </li>
            </ul>
          </div>

          <div className="bg-black p-8 rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">Start Your Career Today</h3>
            <p className="text-gray-300 mb-6">
              Join our network of successful technicians placed in top companies across India.
            </p>
            <div className="flex flex-col space-y-4">
              <a 
                href="tel:9212577577" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                9212 577 577
              </a>
              <button className="border border-white text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Request Callback
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 max-w-4xl mx-auto">
          <blockquote className="text-xl text-black mb-4 font-medium italic">
            "Hitech Institute provides industry-ready technicians with excellent practical skills. Their training program is comprehensive and up-to-date with current technologies."
          </blockquote>
          <p className="text-red-600 font-semibold">
            - Service Head, Apple Authorized Service Provider
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;