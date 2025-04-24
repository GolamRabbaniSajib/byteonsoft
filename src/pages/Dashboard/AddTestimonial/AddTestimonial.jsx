import { useState } from "react";

const AddTestimonial = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    feedback: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://your-api-url.com/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Testimonial submitted successfully!");
        setFormData({ name: "", role: "", feedback: "", image: "" });
      } else {
        alert("Failed to submit testimonial.");
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Add Testimonial
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:outline-none"
            placeholder="Emily Johnson"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Role</label>
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:outline-none"
            placeholder="UX Designer"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:outline-none resize-none"
            placeholder="Write feedback here..."
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:outline-none"
            placeholder="https://i.pravatar.cc/150?img=8"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
};

export default AddTestimonial;
