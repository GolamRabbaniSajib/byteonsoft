import React, { useState } from "react";
import {
  FaCode,
  FaDesktop,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCloud,
  FaPaintBrush,
  FaLock,
  FaSearch,
  FaBullhorn,
  FaClipboardCheck,
  FaGlobe,
  FaLaptopCode,
  FaPen,
  FaRobot,
  FaUsersCog,
  FaCube,
  FaMicrochip,
  FaVrCardboard,
  FaFingerprint,
  FaUserShield,
} from "react-icons/fa";

const AddServices = () => {
  const [serviceData, setServiceData] = useState({
    title: "",
    icon: "FaCode", // Default icon
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleIconChange = (iconName) => {
    setServiceData({ ...serviceData, icon: iconName });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the data (e.g., POST to backend API)
    console.log("Service Submitted:", serviceData);

    // Reset the form
    setServiceData({
      title: "",
      icon: "FaCode",
      description: "",
    });

    // Optional: Show a success message
    alert("Service added successfully!");
  };

  const icons = [
    {
      name: "Web Development",
      icon: <FaCode className="text-3xl text-teal-400" />,
    },
    {
      name: "UI/UX Design",
      icon: <FaDesktop className="text-3xl text-teal-400" />,
    },
    {
      name: "Mobile App Development",
      icon: <FaMobileAlt className="text-3xl text-teal-400" />,
    },
    {
      name: "Backend Development",
      icon: <FaServer className="text-3xl text-teal-400" />,
    },
    {
      name: "Database Management",
      icon: <FaDatabase className="text-3xl text-teal-400" />,
    },
    {
      name: "Cloud Services",
      icon: <FaCloud className="text-3xl text-teal-400" />,
    },
    {
      name: "Graphic Design",
      icon: <FaPaintBrush className="text-3xl text-teal-400" />,
    },
    {
      name: "Security Services",
      icon: <FaLock className="text-3xl text-teal-400" />,
    },
    {
      name: "SEO Services",
      icon: <FaSearch className="text-3xl text-teal-400" />,
    },
    {
      name: "Digital Marketing",
      icon: <FaBullhorn className="text-3xl text-teal-400" />,
    },
    {
      name: "Software Testing",
      icon: <FaClipboardCheck className="text-3xl text-teal-400" />,
    },
    {
      name: "Global Services",
      icon: <FaGlobe className="text-3xl text-teal-400" />,
    },
    {
      name: "E-commerce Development",
      icon: <FaLaptopCode className="text-3xl text-teal-400" />,
    },
    {
      name: "Content Writing",
      icon: <FaPen className="text-3xl text-teal-400" />,
    },
    {
      name: "AI Development",
      icon: <FaRobot className="text-3xl text-teal-400" />,
    },
    {
      name: "Blockchain Development",
      icon: <FaCube className="text-3xl text-teal-400" />,
    },
    {
      name: "Augmented Reality (AR)",
      icon: <FaMicrochip className="text-3xl text-teal-400" />,
    },
    {
      name: "Virtual Reality (VR)",
      icon: <FaVrCardboard className="text-3xl text-teal-400" />,
    },
    {
      name: "Biometric Authentication",
      icon: <FaFingerprint className="text-3xl text-teal-400" />,
    },
    {
      name: "Cybersecurity",
      icon: <FaUserShield className="text-3xl text-teal-400" />,
    },
    {
      name: "Consulting",
      icon: <FaUsersCog className="text-3xl text-teal-400" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Add New Service
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Service Title
          </label>
          <input
            type="text"
            name="title"
            value={serviceData.title}
            onChange={handleChange}
            placeholder="e.g., Web Development"
            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        {/* Icons */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Select Icon
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {icons.map((iconItem, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleIconChange(iconItem.name)}
                className={`p-4 border rounded-lg flex flex-col items-center justify-center transition duration-300 ease-in-out hover:bg-teal-100 ${
                  serviceData.icon === iconItem.name
                    ? "bg-teal-200"
                    : "bg-gray-100"
                }`}
              >
                {iconItem.icon}
                <p className="text-sm mt-2 text-center">{iconItem.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={serviceData.description}
            onChange={handleChange}
            placeholder="Enter a brief description"
            rows="4"
            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddServices;
