import { useState } from "react";
import { FaUserAlt, FaRegUser, FaImage, FaComments } from "react-icons/fa"; 
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddTestimonial = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    feedback: "",
    image: "",
  });

  const axiosSecure = useAxiosSecure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Adding team review...");
    try {
      const res = await axiosSecure.post("/reviews", formData);
      if (res.data?.insertedId || res.data?.success) {
        toast.success("Review added successfully!", { id: loadingToast });
        setFormData({ name: "", role: "", image: "", intro: "" });
      } else {
        toast.error("Failed to add Review.", { id: loadingToast });
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong!", { id: loadingToast });
    }
  };

  return (
    <section className="px-4 py-10 md:py-14 lg:py-16 bg-white font-[Poppins]">
      <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white border border-gray-100 shadow-lg rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-800 text-center mb-8">
          Add Testimonial
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex items-center space-x-3">
            <FaUserAlt className="text-teal-500" />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="e.g., Emily Johnson"
            />
          </div>

          {/* Role Field */}
          <div className="flex items-center space-x-3">
            <FaRegUser className="text-teal-500" />
            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="e.g., UX Designer"
            />
          </div>

          {/* Feedback Field */}
          <div className="flex items-center space-x-3">
            <FaComments className="text-teal-500" />
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="Write their feedback here..."
            />
          </div>

          {/* Image URL Field */}
          <div className="flex items-center space-x-3">
            <FaImage className="text-teal-500" />
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="e.g., https://i.pravatar.cc/150?img=8"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit Testimonial
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTestimonial;
