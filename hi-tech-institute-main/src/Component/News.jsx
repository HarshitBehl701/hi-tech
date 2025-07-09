import React, { useState } from 'react';

const NewLayoutSection = () => {
  const [activeTab, setActiveTab] = useState('updates');
  const [email, setEmail] = useState('');

  const latestPosts = [
    {
      title: "Soldering Iron Usage Guide",
      excerpt: "सोल्डरिंग आयरन का उपयोग कैसे करें - complete guide for beginners",
      category: "Laptop Repair",
      date: "May 15, 2023"
    },
    {
      title: "Mobile Overheating Solutions",
      excerpt: "मोबाइल की High Temperature समस्या का समाधान - step by step troubleshooting",
      category: "Mobile Repair",
      date: "April 28, 2023"
    },
    {
      title: "Charging Circuit Repair",
      excerpt: "How to Solve Charging Circuit Problem - detailed technical manual",
      category: "Advanced Repair",
      date: "April 10, 2023"
    }
  ];

  const studentReviews = [
    {
      name: "Rahul Verma",
      review: "The hands-on training at Hi-Tech changed my career completely. Best institute in Delhi!",
      rating: 5
    },
    {
      name: "Priya Singh",
      review: "Got placed before even completing my course. Faculty is extremely knowledgeable.",
      rating: 5
    },
    {
      name: "Amit Patel",
      review: "Affordable fees with quality education. Learned real-world repair skills.",
      rating: 4
    }
  ];

  return (
    <div className="bg-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-black"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('updates')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'updates' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
          >
            Updates & Resources
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'reviews' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'}`}
          >
            Student Reviews
          </button>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Updates Form */}
          <div className="lg:col-span-2">
            {activeTab === 'updates' ? (
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">Stay Updated with Hi-Tech</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      Get Course Updates
                    </h4>
                    <p className="text-gray-600 mb-4">Subscribe to receive latest course information, batch timings, and special offers.</p>
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Book Demo Session
                    </h4>
                    <p className="text-gray-600 mb-4">Experience our teaching methodology with a free demo class.</p>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
                      Schedule Your Demo
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 border-b pb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Latest Technical Posts
                  </h4>
                  
                  <div className="space-y-6">
                    {latestPosts.map((post, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-2">{post.category}</span>
                            <h5 className="font-bold text-lg mb-1">{post.title}</h5>
                            <p className="text-gray-600 text-sm">{post.excerpt}</p>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{post.date}</span>
                        </div>
                        <button className="mt-3 text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                          Read more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">What Our Students Say</h3>
                
                <div className="space-y-6">
                  {studentReviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-4">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h5 className="font-bold">{review.name}</h5>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i}
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">"{review.review}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Quick Links */}
          <div className="space-y-6">
            <div className="bg-red-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Why Choose Hi-Tech?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>18+ Years of Training Excellence</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>80% Practical Hands-on Training</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Job Placement Assistance</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>10+ Branches Across India</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-white text-red-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors">
                View All Courses
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Download Brochure</h4>
              <p className="text-gray-600 mb-4">Get complete details about our courses, fees structure, and placement records.</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Now (PDF)
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Admission Helpline</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-600">info@hitechinstitute.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Main Campus</p>
                    <p className="text-gray-600">123 Tech Park, Delhi - 110092</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLayoutSection;