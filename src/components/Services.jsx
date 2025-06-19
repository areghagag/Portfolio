import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaReact, FaServer } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const mockResponse = {
          data: [
            {
              id: 1,
              icon: <FaLaptopCode className="text-6xl text-blue-400" />,
              title: "Web Developer",
              description: "Building responsive, functional, and dynamic websites."
            },
            {
              id: 2,
              icon: (
                <FaReact
                  className="text-6xl text-cyan-400"
                  style={{ animation: 'spin 4s linear infinite' }}
                />
              ),
              title: "Frontend Developer",
              description: "Building responsive and interactive user interfaces."
            },
            {
              id: 3,
              icon: <FaServer className="text-6xl text-yellow-400" />,
              title: "Backend Developer",
              description: "Developing robust server-side logic and databases."
            },
            {
              id: 4,
              icon: <HiOutlineCode className="text-6xl text-purple-400" />,
              title: "Full-Stack Developer",
              description: "Combining both frontend and backend development skills."
            }
          ]
        };
        await new Promise(resolve => setTimeout(resolve, 1000));
        setServices(mockResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch services');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div className="text-center py-20 text-white bg-black">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500 bg-black">{error}</div>;

  return (
    <div className="bg-[#0f172a] text-white py-20" id="services">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
