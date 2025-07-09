import React from 'react';

const BrochureSection = () => {
  const placedStudents = [
    { name: "Rahul Sharma", company: "TechCare Solutions", photo: "student1.jpg" },
    { name: "Priya Patel", company: "Laptop Hospital", photo: "student2.jpg" },
    { name: "Vikram Singh", company: "MacMedics", photo: "student3.jpg" },
    { name: "Anjali Gupta", company: "ByteFix India", photo: "student4.jpg" }
  ];

  return (
    <div className="relative bg-white py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-black"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <img 
              src="https://www.hitechinstitute.in/images/home-brochure-1.webp" 
              alt="Hi-Tech Institute Vocational Course" 
              className="w-full rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-xl"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-red-400">Enroll In A Vocational Course</span><br />
                With Hi-Tech Institute
              </h2>
              <div className="w-20 h-1 bg-red-500 mb-4"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              This vocational course offers you a wide range of career-making opportunities. 
              Our well-integrated program gives you comprehensive exposure to the laptop 
              repair industry with hands-on training from day one.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Hi-Tech Institute</strong> is a premier training hub focused on providing 
              exceptional career-oriented training and support services for professional 
              knowledge workers in the laptop repairing world.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
              <p className="text-gray-800">
                We combine technical & theoretical classes with well-versed faculty who 
                have more than 10 years experience. With multiple branches across India, 
                quality education is accessible no matter where you're located.
              </p>
            </div>

            {/* Recently Placed Students */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <span className="w-4 h-4 bg-red-600 mr-2"></span>
                Recently Placed Students
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {placedStudents.map((student, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full mb-2 overflow-hidden">
                      {/* Student photo would go here */}
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-medium text-sm">{student.name}</p>
                    <p className="text-xs text-gray-600">{student.company}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureSection;