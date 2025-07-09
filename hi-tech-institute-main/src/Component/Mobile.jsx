import { useState } from 'react';
import { HiChevronDown, HiChevronUp, HiOutlineClock, HiOutlineUserGroup } from 'react-icons/hi';

const ContentCards = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const cards = [
    {
      id: 1,
      title: "Mobile Repairing",
      description: "Comprehensive training covering smartphone hardware and software repair techniques including screen replacement, battery issues, water damage treatment, and motherboard troubleshooting for all major brands.",
      shortDescription: "Professional smartphone repair techniques...",
      image: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "8 weeks",
      students: "120+"
    },
    {
      id: 2,
      title: "Laptop Hardware",
      description: "Complete training on laptop disassembly, component identification, hardware troubleshooting, chip-level repair, motherboard diagnostics, and soldering techniques for computer repair businesses.",
      shortDescription: "Complete laptop hardware training...",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "10 weeks",
      students: "85+"
    },
    {
      id: 3,
      title: "Data Recovery",
      description: "Advanced techniques to recover data from damaged hard drives, SSDs, and mobile devices including logical recovery, physical recovery, and flash memory recovery methods with certification.",
      shortDescription: "Professional data recovery methods...",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "6 weeks",
      students: "65+"
    },
    {
      id: 4,
      title: "Network Troubleshooting",
      description: "Comprehensive networking course covering LAN/WAN setup, wireless configuration, security protocols, and troubleshooting methodologies with hands-on labs using real networking equipment.",
      shortDescription: "Network setup and troubleshooting...",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "12 weeks",
      students: "150+"
    },
    {
      id: 5,
      title: "Micro-Soldering",
      description: "Master micro-soldering techniques for component-level repair including BGA reballing, chip replacement, and board-level diagnostics essential for advanced electronics repair work.",
      shortDescription: "Master micro-soldering techniques...",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "4 weeks",
      students: "45+"
    },
    {
      id: 6,
      title: "IoT Repair",
      description: "Specialized training for repairing smart home devices, wearables, and IoT equipment covering common failure points, diagnostic procedures, and component replacement techniques.",
      shortDescription: "Smart home device repair...",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      duration: "5 weeks",
      students: "55+"
    }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-500 bg-red-500/10 rounded-full mb-4">
            TECHNICAL COURSES
          </span>
          <h2 className="text-3xl font-bold text-white mb-3">
            <span className="text-red-500">Professional</span> Training Programs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Intensive courses taught by industry experts
          </p>
        </div>

        {/* 3 Cards per Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>

                {/* Enhanced Read More/Less */}
                <div className="mb-4">
                  {expandedCards[card.id] ? (
                    <>
                      <p className="text-gray-400 text-sm mb-1">
                        {card.description}
                      </p>
                      <button 
                        onClick={() => toggleCard(card.id)}
                        className="text-red-500 hover:text-red-400 text-sm font-medium"
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-400 text-sm mb-1">
                        {card.shortDescription}
                      </p>
                      <button 
                        onClick={() => toggleCard(card.id)}
                        className="text-red-500 hover:text-red-400 text-sm font-medium"
                      >
                        Read More
                      </button>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4 text-xs">
                  <div className="flex items-center text-gray-400">
                    <HiOutlineClock className="mr-1 text-red-500" size={14} />
                    {card.duration}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <HiOutlineUserGroup className="mr-1 text-red-500" size={14} />
                    {card.students}
                  </div>
                </div>

                <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-2 border border-red-500 text-red-500 text-sm font-medium rounded hover:bg-red-500 hover:text-white transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentCards;