import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Services = () => {
  const axiosPublic = useAxiosPublic();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosPublic.get("/all-services");
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [axiosPublic]);

  return (
    <section className="bg-gray-100 pt-24 pb-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] animate-fade-in-up">
          Our Services
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl"
              aria-labelledby={`service-${index}`}
            >
              <header className="mb-4" id={`service-${index}`}>
                <div className="text-4xl flex justify-center items-center text-teal-600 mb-2">
                  {getIconComponent(service.icon)}
                </div>
                <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
                  {service.title}
                </h3>
              </header>
              <p className="text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper to map icon name to actual icon component
import {
  FaCode, FaDesktop, FaMobileAlt, FaServer, FaDatabase, FaCloud,
  FaPaintBrush, FaLock, FaSearch, FaBullhorn, FaClipboardCheck, FaGlobe,
  FaLaptopCode, FaPen, FaRobot, FaUsersCog, FaCube, FaMicrochip,
  FaVrCardboard, FaFingerprint, FaUserShield,
} from "react-icons/fa";

const iconMap = {
  "Web Development": <FaCode />,
  "UI/UX Design": <FaDesktop />,
  "Mobile App Development": <FaMobileAlt />,
  "Backend Development": <FaServer />,
  "Database Management": <FaDatabase />,
  "Cloud Services": <FaCloud />,
  "Graphic Design": <FaPaintBrush />,
  "Security Services": <FaLock />,
  "SEO Services": <FaSearch />,
  "Digital Marketing": <FaBullhorn />,
  "Software Testing": <FaClipboardCheck />,
  "Global Services": <FaGlobe />,
  "E-commerce Development": <FaLaptopCode />,
  "Content Writing": <FaPen />,
  "AI Development": <FaRobot />,
  "Blockchain Development": <FaCube />,
  "Augmented Reality (AR)": <FaMicrochip />,
  "Virtual Reality (VR)": <FaVrCardboard />,
  "Biometric Authentication": <FaFingerprint />,
  "Cybersecurity": <FaUserShield />,
  "Consulting": <FaUsersCog />,
};

const getIconComponent = (name) => {
  return iconMap[name] || <FaCode />;
};

export default Services;
