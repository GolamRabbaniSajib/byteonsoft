import { useState, useMemo, useCallback } from "react";
import toast from "react-hot-toast";
import {
  FaCode, FaDesktop, FaMobileAlt, FaServer, FaDatabase, FaCloud,
  FaPaintBrush, FaLock, FaSearch, FaBullhorn, FaClipboardCheck, FaGlobe,
  FaLaptopCode, FaPen, FaRobot, FaUsersCog, FaCube, FaMicrochip,
  FaVrCardboard, FaFingerprint, FaUserShield,
} from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const serviceIcons = [
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

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const AddServices = () => {
  const axiosSecure = useAxiosSecure();
  const [serviceData, setServiceData] = useState({
    title: "",
    icon: "Web Development",
    description: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setServiceData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setServiceData({ title: "", icon: "Web Development", description: "" });
    setSearchTerm("");
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const res = await axiosSecure.post("/services", serviceData);
        if (res.data?.insertedId || res.status < 300) {
          toast.success("✅ Service added successfully!");
          resetForm();
        } else {
          throw new Error("Failed to add service.");
        }
      } catch (error) {
        console.error("❌ Failed to submit service:", error);
        toast.error(error.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    },
    [axiosSecure, serviceData, resetForm]
  );

  const filteredIcons = useMemo(
    () =>
      serviceIcons.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
      aria-label="Add a New Service Form"
    >
      <div className="bg-white rounded-3xl shadow-xl shadow-gray-300/40 p-6 md:p-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Add a New Service
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base md:text-lg">
            Expand your offerings by adding a new service to your portfolio.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          <motion.div variants={itemVariants}>
            <label
              htmlFor="title"
              className="block mb-3 text-sm font-semibold text-gray-700"
            >
              Service Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={serviceData.title}
              onChange={handleChange}
              placeholder="e.g., Advanced AI Solutions"
              className="w-full border border-gray-300 px-5 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-teal-400 focus:border-teal-600 transition"
              required
              aria-required="true"
              aria-describedby="title-desc"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="iconSearch"
              className="block mb-3 text-sm font-semibold text-gray-700"
            >
              Select an Icon
            </label>
            <input
              id="iconSearch"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for an icon..."
              className="w-full border border-gray-300 px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-teal-400 focus:border-teal-600 transition mb-6"
              aria-label="Search icons"
              autoComplete="off"
            />
            <LayoutGroup>
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                role="list"
                aria-live="polite"
                aria-relevant="additions removals"
              >
                <AnimatePresence>
                  {filteredIcons.map((item) => {
                    const selected = serviceData.icon === item.name;
                    return (
                      <motion.button
                        key={item.name}
                        type="button"
                        layout
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          setServiceData((prev) => ({ ...prev, icon: item.name }))
                        }
                        className={`relative border rounded-2xl flex flex-col items-center justify-center p-5 h-32 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-400 cursor-pointer
                          ${
                            selected
                              ? "bg-teal-100 border-teal-600 shadow-md"
                              : "border-gray-300 hover:border-teal-500"
                          }
                        `}
                        aria-pressed={selected}
                        aria-label={`Select icon ${item.name}`}
                        role="listitem"
                      >
                        <div className="text-5xl text-teal-600 mb-3 select-none pointer-events-none">
                          {item.icon}
                        </div>
                        <span className="text-center text-sm font-medium text-gray-800 select-none pointer-events-none">
                          {item.name}
                        </span>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
            {filteredIcons.length === 0 && (
              <p className="text-center text-gray-500 mt-6 select-none">
                No icons found for "<span className="font-semibold">{searchTerm}</span>"
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="description"
              className="block mb-3 text-sm font-semibold text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={serviceData.description}
              onChange={handleChange}
              placeholder="Enter a brief and compelling description of the service..."
              rows={6}
              className="w-full border border-gray-300 px-5 py-3 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-3 focus:ring-teal-400 focus:border-teal-600 transition"
              required
              aria-required="true"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-xl transition shadow-lg hover:shadow-teal-500/50 focus:outline-none focus:ring-4 focus:ring-teal-500 disabled:bg-teal-400 disabled:cursor-not-allowed"
              aria-live="polite"
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin" aria-hidden="true" />
                  <span>Adding Service...</span>
                </>
              ) : (
                "Add Service"
              )}
            </button>
          </motion.div>
        </form>
      </div>
    </motion.section>
  );
};

export default AddServices;
