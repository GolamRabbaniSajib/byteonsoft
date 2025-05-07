import { useState } from "react";
import toast from "react-hot-toast";
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
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddServices = () => {
  const axiosSecure = useAxiosSecure();

  const [serviceData, setServiceData] = useState({
    title: "",
    icon: "Web Development",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleIconChange = (iconName) => {
    setServiceData({ ...serviceData, icon: iconName });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosSecure.post("/services", serviceData);
      console.log("Service Submitted:", res.data);
      toast.success(" Service added successfully!");
      setServiceData({ title: "", icon: "Web Development", description: "" });
    } catch (error) {
      console.error("❌ Failed to submit service:", error);
      toast.error("Failed to add service. Please try again.");
    }
  };

  const icons = [
    { name: "Web Development", icon: <FaCode /> },
    { name: "UI/UX Design", icon: <FaDesktop /> },
    { name: "Mobile App Development", icon: <FaMobileAlt /> },
    { name: "Backend Development", icon: <FaServer /> },
    { name: "Database Management", icon: <FaDatabase /> },
    { name: "Cloud Services", icon: <FaCloud /> },
    { name: "Graphic Design", icon: <FaPaintBrush /> },
    { name: "Security Services", icon: <FaLock /> },
    { name: "SEO Services", icon: <FaSearch /> },
    { name: "Digital Marketing", icon: <FaBullhorn /> },
    { name: "Software Testing", icon: <FaClipboardCheck /> },
    { name: "Global Services", icon: <FaGlobe /> },
    { name: "E-commerce Development", icon: <FaLaptopCode /> },
    { name: "Content Writing", icon: <FaPen /> },
    { name: "AI Development", icon: <FaRobot /> },
    { name: "Blockchain Development", icon: <FaCube /> },
    { name: "Augmented Reality (AR)", icon: <FaMicrochip /> },
    { name: "Virtual Reality (VR)", icon: <FaVrCardboard /> },
    { name: "Biometric Authentication", icon: <FaFingerprint /> },
    { name: "Cybersecurity", icon: <FaUserShield /> },
    { name: "Consulting", icon: <FaUsersCog /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 font-[Poppins]">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-navy mb-8">
          Add New Service
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-navy">
              Service Title
            </label>
            <input
              type="text"
              name="title"
              value={serviceData.title}
              onChange={handleChange}
              placeholder="e.g., Web Development"
              className="w-full border border-teal-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-navy">
              Select Icon
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {icons.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleIconChange(item.name)}
                  className={`border rounded-xl flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out ${
                    serviceData.icon === item.name
                      ? "bg-teal-100 border-teal-500"
                      : "bg-gray-100 hover:bg-teal-50"
                  }`}
                >
                  <div className="text-3xl text-teal-500">{item.icon}</div>
                  <span className="text-sm text-navy mt-2 text-center">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-navy">
              Description
            </label>
            <textarea
              name="description"
              value={serviceData.description}
              onChange={handleChange}
              placeholder="Enter a brief description"
              rows="4"
              className="w-full border border-teal-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition shadow-sm"
          >
            Add Service
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddServices;
