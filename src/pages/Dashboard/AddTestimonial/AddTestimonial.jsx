import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiBriefcase, FiMessageSquare, FiUploadCloud, FiLoader, FiCheckCircle } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

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
  hidden: { opacity: 0, scale: 0.85, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.4 } },
};

const AddTestimonial = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({ name: "", role: "", feedback: "" });
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
    setFormData({ name: "", role: "", feedback: "" });
    handleImageRemove();
  }, [handleImageRemove]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return toast.error("Please upload the client's image.");

    setLoading(true);
    const toastId = toast.loading("Submitting testimonial...");

    try {
      // TODO: Replace with actual image upload and get permanent URL
      const permanentImageUrl = imagePreview;

      const reviewData = { ...formData, image: permanentImageUrl };
      const response = await axiosSecure.post("/reviews", reviewData);

      if (response.data?.insertedId || response.status < 300) {
        toast.success("Testimonial added successfully!", { id: toastId });
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
      className="max-w-7xl mx-auto px-4 py-12"
      aria-label="Add Testimonial Section"
    >
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Add a Testimonial</h1>
        <p className="text-gray-500 mt-3 text-lg">Share the great feedback you've received from your clients.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* --- Left Column: Form --- */}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Client's Name */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Client's Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Emily Johnson"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                aria-required="true"
              />
            </div>
          </motion.div>

          {/* Client's Role / Company */}
          <motion.div variants={itemVariants}>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Client's Role / Company
            </label>
            <div className="relative">
              <FiBriefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="role"
                name="role"
                type="text"
                value={formData.role}
                onChange={handleChange}
                required
                placeholder="e.g., CEO, Tech Innovators Inc."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                aria-required="true"
              />
            </div>
          </motion.div>

          {/* Feedback */}
          <motion.div variants={itemVariants}>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
              Feedback / Quote
            </label>
            <div className="relative">
              <FiMessageSquare className="absolute left-3.5 top-4 text-gray-400" aria-hidden="true" />
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Write their feedback here..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                aria-required="true"
              />
            </div>
          </motion.div>

          {/* Client's Image Upload */}
          <motion.div variants={itemVariants}>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Client's Image
            </label>
            <div className="flex justify-center items-center w-full h-40 sm:h-52 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 relative overflow-hidden group cursor-pointer focus-within:ring-2 focus-within:ring-teal-500 transition">
              {!imagePreview ? (
                <div className="text-center pointer-events-none select-none">
                  <FiUploadCloud className="mx-auto h-10 w-10 text-gray-400" aria-hidden="true" />
                  <p className="mt-2 text-sm text-gray-600">Click or drag file to upload</p>
                </div>
              ) : (
                <img src={imagePreview} alt="Client preview" className="h-full w-full object-cover" />
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
              {imagePreview && (
                <button
                  type="button"
                  onClick={handleImageRemove}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-red-100 text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                  aria-label="Remove uploaded image"
                >
                  <FiUser size={18} />
                  <FiX size={18} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-teal-600 text-white font-semibold py-3.5 px-6 rounded-lg hover:bg-teal-700 disabled:bg-teal-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-teal-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              aria-live="polite"
              aria-busy={loading}
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
                  {loading ? <FiLoader className="animate-spin" aria-hidden="true" /> : <FiCheckCircle aria-hidden="true" />}
                  {loading ? "Submitting..." : "Submit Testimonial"}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.div>
        </form>

        {/* --- Right Column: Live Preview Card --- */}
        <motion.div
          variants={previewVariants}
          className="lg:sticky top-24 rounded-2xl shadow-2xl shadow-gray-500/20 overflow-hidden p-8 border bg-white"
          aria-live="polite"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Live Preview</h3>
          <div className="relative text-center">
            <FaQuoteLeft className="text-teal-400 text-5xl opacity-20 absolute top-4 left-4 select-none pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-4 w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
                <AnimatePresence mode="wait" initial={false}>
                  {imagePreview ? (
                    <motion.img
                      key={imagePreview}
                      src={imagePreview}
                      alt="Client preview"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full flex items-center justify-center text-gray-400 select-none pointer-events-none"
                      aria-hidden="true"
                    >
                      <FiUser size={40} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="text-gray-600 italic min-h-[6rem] px-4">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={formData.feedback || "..."}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formData.feedback ? `“${formData.feedback}”` : "Client's feedback will appear here..."}
                  </motion.span>
                </AnimatePresence>
              </p>

              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-800 min-h-[1.75rem]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={formData.name || "..."}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {formData.name || "Client's Name"}
                    </motion.span>
                  </AnimatePresence>
                </h4>
                <p className="text-teal-600 font-medium min-h-[1.5rem]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={formData.role || "..."}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {formData.role || "Client's Role"}
                    </motion.span>
                  </AnimatePresence>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AddTestimonial;
