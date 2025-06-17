"use client";
import { useState, useCallback } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUploadCloud,
  FiGithub,
  FiLink,
  FiX,
  FiLoader,
  FiPlusCircle,
} from "react-icons/fi";

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const tagVariants = {
  initial: { opacity: 0, scale: 0.8, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, x: -10 },
};

const AddProject = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    liveLink: "",
    githubLink: "",
    tech: [],
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [techInput, setTechInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
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

  const handleAddTech = useCallback(() => {
    const newTech = techInput.trim();
    if (newTech && !formData.tech.includes(newTech)) {
      setFormData((prev) => ({ ...prev, tech: [...prev.tech, newTech] }));
    }
    setTechInput("");
  }, [techInput, formData.tech]);

  const handleTechKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddTech();
    }
  };

  const handleRemoveTech = useCallback((techToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tech: prev.tech.filter((t) => t !== techToRemove),
    }));
  }, []);

  const resetForm = () => {
    setFormData({ title: "", description: "", liveLink: "", githubLink: "", tech: [] });
    setImageFile(null);
    setImagePreview("");
    setTechInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return toast.error("Please upload a project image.");

    setLoading(true);
    try {
      const imageUrl = imagePreview; // Replace this with real upload in production
      const projectData = { ...formData, image: imageUrl };

      const response = await axiosSecure.post("/projects", projectData);
      if (response.data?.insertedId || response.status < 300) {
        toast.success("🚀 Project added successfully!");
        resetForm();
      } else {
        throw new Error("Could not add the project.");
      }
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error(error.message || "❌ Failed to add project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto p-4 md:p-8"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Add New Project</h1>
        <p className="text-gray-500 mt-2">Showcase your latest work to the world.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title */}
            <motion.div variants={itemVariants}>
              <label htmlFor="title" className="block text-sm font-medium mb-2">Project Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500" />
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
              <textarea id="description" name="description" rows="6" value={formData.description} onChange={handleChange} required className="w-full border-gray-300 rounded-lg shadow-sm resize-none focus:ring-teal-500 focus:border-teal-500" />
            </motion.div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="liveLink" className="flex items-center text-sm font-medium mb-2"><FiLink className="mr-2" />Live Link</label>
                <input type="url" id="liveLink" name="liveLink" value={formData.liveLink} onChange={handleChange} required className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="githubLink" className="flex items-center text-sm font-medium mb-2"><FiGithub className="mr-2" />GitHub Link</label>
                <input type="url" id="githubLink" name="githubLink" value={formData.githubLink} onChange={handleChange} required className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500" />
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Upload */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">Project Image</label>
              <div className="flex justify-center items-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 relative overflow-hidden group">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                ) : (
                  <div className="text-center">
                    <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Click or drag to upload</p>
                  </div>
                )}
                <input id="image" type="file" name="image" accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              </div>
            </motion.div>

            {/* Tech Stack Input */}
            <motion.div variants={itemVariants}>
              <label htmlFor="techInput" className="block text-sm font-medium mb-2">Tech Stack</label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="techInput"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={handleTechKeyDown}
                  placeholder="e.g., React, Node.js"
                  className="flex-grow border-gray-300 rounded-l-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                />
                <button type="button" onClick={handleAddTech} className="bg-teal-500 text-white p-3 rounded-r-lg hover:bg-teal-600 transition-colors">
                  <FiPlusCircle />
                </button>
              </div>
              <AnimatePresence>
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={tagVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      layout
                      className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2"
                    >
                      {tech}
                      <button type="button" onClick={() => handleRemoveTech(tech)} className="text-teal-600 hover:text-teal-900">
                        <FiX size={16} />
                      </button>
                    </motion.span>
                  ))}
                </div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.div variants={itemVariants} className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-700 disabled:bg-teal-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            {loading ? (
              <>
                <FiLoader className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              "Submit Project"
            )}
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AddProject;
