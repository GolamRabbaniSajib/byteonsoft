import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddTeamMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    intro: "",
  });

  const axiosSecure = useAxiosSecure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Adding team member...");
    try {
      const res = await axiosSecure.post("/members", formData);
      if (res.data?.insertedId || res.data?.success) {
        toast.success("Team member added successfully!", { id: loadingToast });
        setFormData({ name: "", role: "", image: "", intro: "" });
      } else {
        toast.error("Failed to add team member.", { id: loadingToast });
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
          Add Team Member
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="e.g., Farhan Khan"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Role</label>
            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="e.g., UI/UX Designer"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Image URL
            </label>
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="e.g., https://i.pravatar.cc/150?img=4"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Intro
            </label>
            <textarea
              name="intro"
              value={formData.intro}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="Write a short intro..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Add Member
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTeamMember;
