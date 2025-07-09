import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiX, HiPhone, HiCalendar, HiBriefcase } from "react-icons/hi";

export default function RepairingSpecialistSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Mobile Repairing Course"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert(`Thank you ${formData.name}! We'll contact you shortly.`);
    setShowForm(false);
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-red-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNkYzI2MjYiPjwvcmVjdD48L3N2Zz4=')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Become a Mobile / Laptop Repairing Specialist
          </h2>
          
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 mb-8 border border-red-100">
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Over <span className="font-bold text-red-600">2.5 Lacs students</span> throughout the world and more than <span className="font-bold text-red-600">1 Lac Jobs</span> are available
            </p>
            
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
              Enroll Today In Our <span className="text-red-600">40 Days Course</span> & Be a Mobile Repairing Engineer Today.
            </p>
            
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all"
            >
              Enroll Now
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <HiBriefcase className="text-3xl text-red-600" />, text: "100% Job Assistance" },
              { icon: <HiCalendar className="text-3xl text-red-600" />, text: "40 Days Intensive Training" },
              { icon: <HiPhone className="text-3xl text-red-600" />, text: "Lifetime Support" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-red-50"
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <p className="mt-3 font-medium text-gray-700">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enquiry Form Popup */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Form Header */}
              <div className="bg-red-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Enquire About Course</h3>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="text-white hover:text-red-200"
                  >
                    <HiX size={24} />
                  </button>
                </div>
              </div>
              
              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      Course Interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="Mobile Repairing Course">Mobile Repairing Course</option>
                      <option value="Laptop Repairing Course">Laptop Repairing Course</option>
                      <option value="Both Courses">Both Courses</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}