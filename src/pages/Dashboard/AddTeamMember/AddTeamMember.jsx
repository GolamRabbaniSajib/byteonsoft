import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiBriefcase, FiUploadCloud, FiLoader, FiUserPlus, FiX } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const previewVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
  visible: { opacity: 1, scale: 1, rotateY: 0, transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.4 } },
};

const AddTeamMember = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({ name: "", role: "", intro: "" });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }, []);

  const handleImageRemove = useCallback(() => {
    setImageFile(null);
    setImagePreview("");
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ name: "", role: "", intro: "" });
    handleImageRemove();
  }, [handleImageRemove]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return toast.error("Please upload a profile image.");

    setLoading(true);
    const toastId = toast.loading("Adding team member...");

    try {
      // Replace with actual image upload logic here
      const permanentImageUrl = imagePreview;

      const memberData = { ...formData, image: permanentImageUrl };
      const response = await axiosSecure.post("/members", memberData);

      if (response.data?.insertedId || response.status < 300) {
        toast.success("Team member added successfully!", { id: toastId });
        resetForm();
      } else {
        throw new Error("Server responded with an error.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error(err.message || "Something went wrong!", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-labelledby="add-team-member-heading"
    >
      <header className="text-center mb-12 max-w-xl mx-auto">
        <h1 id="add-team-member-heading" className="text-4xl md:text-5xl font-bold text-gray-800">
          Add a Team Member
        </h1>
        <p className="text-gray-500 mt-3 text-lg">Build your team by adding a new member profile.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* --- Form --- */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="e.g., Farhan Khan"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Role / Position
            </label>
            <div className="relative">
              <FiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                id="role"
                name="role"
                type="text"
                value={formData.role}
                onChange={handleChange}
                required
                autoComplete="organization-title"
                placeholder="e.g., Lead UI/UX Designer"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>
            <div
              className="flex justify-center items-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 relative overflow-hidden group cursor-pointer hover:border-teal-500 focus-within:border-teal-500 transition"
              aria-label="Upload profile image"
            >
              {!imagePreview && (
                <div className="text-center pointer-events-none">
                  <FiUploadCloud className="mx-auto h-10 w-10 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Click or drag file to upload</p>
                </div>
              )}
              {imagePreview && (
                <img src={imagePreview} alt="Profile preview" className="h-full w-full object-cover" />
              )}
              <input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-required="true"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="intro" className="block text-sm font-medium text-gray-700 mb-2">
              Short Introduction
            </label>
            <textarea
              id="intro"
              name="intro"
              value={formData.intro}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Write a brief intro about the team member..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:max-w-xs flex items-center justify-center gap-3 bg-teal-600 text-white font-semibold py-3.5 px-6 rounded-lg hover:bg-teal-700 disabled:bg-teal-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-teal-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mx-auto"
              aria-live="polite"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={loading ? "loading" : "ready"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3"
                >
                  {loading ? <FiLoader className="animate-spin" /> : <FiUserPlus />}
                  {loading ? "Adding Member..." : "Add Team Member"}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.div>
        </form>

        {/* --- Preview Card --- */}
        <motion.div
          variants={previewVariants}
          className="lg:sticky top-24 bg-white rounded-2xl shadow-xl overflow-hidden p-6 border group max-w-md mx-auto lg:mx-0"
          aria-label="Live preview of the team member"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Live Preview</h3>
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <AnimatePresence mode="wait" initial={false}>
                {imagePreview ? (
                  <motion.img
                    key={imagePreview}
                    src={imagePreview}
                    alt="Profile preview"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <FiUser size={60} aria-hidden="true" />
                  </div>
                )}
              </AnimatePresence>
            </div>

            {imagePreview && (
              <button
                type="button"
                onClick={handleImageRemove}
                className="absolute -top-2 -right-2 p-1.5 bg-white rounded-full text-gray-600 hover:text-red-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
                aria-label="Remove profile image"
              >
                <FiX size={18} />
              </button>
            )}
          </div>

          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800 h-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={formData.name || "Full Name"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formData.name || "Full Name"}
                </motion.span>
              </AnimatePresence>
            </h2>
            <p className="text-teal-600 font-medium mt-1 h-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={formData.role || "Role / Position"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formData.role || "Role / Position"}
                </motion.span>
              </AnimatePresence>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AddTeamMember;
