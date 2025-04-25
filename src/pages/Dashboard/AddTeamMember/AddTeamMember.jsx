import { useState } from "react";

const AddTeamMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    intro: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://your-api-url.com/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Team member added successfully!");
        setFormData({ name: "", role: "", image: "", intro: "" });
      } else {
        alert("Failed to add team member.");
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Team Member</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:outline-none"
            placeholder="Farhan Khan"
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
            placeholder="UI/UX Designer"
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
            placeholder="https://i.pravatar.cc/150?img=4"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Intro</label>
          <textarea
            name="intro"
            value={formData.intro}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-yellow-400 focus:outline-none"
            placeholder="Designs beautiful and intuitive user experiences..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddTeamMember;
