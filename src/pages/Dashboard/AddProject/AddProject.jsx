import { useState } from "react";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    liveLink: "",
    githubLink: "",
    tech: [],
  });

  const [techInput, setTechInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && techInput.trim()) {
      e.preventDefault();
      const newTech = techInput.trim();
      if (!formData.tech.includes(newTech)) {
        setFormData((prev) => ({
          ...prev,
          tech: [...prev.tech, newTech],
        }));
      }
      setTechInput("");
    }
  };

  const handleRemoveTech = (index) => {
    setFormData((prev) => ({
      ...prev,
      tech: prev.tech.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Submitted:", formData);
    // TODO: Connect with backend API to save the project
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Add New Project</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-lg rounded-xl p-8 border"
      >
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Project Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-teal-400 outline-none"
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.png"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
          />
        </div>

        {/* Live Link */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Live Link</label>
          <input
            type="url"
            name="liveLink"
            value={formData.liveLink}
            onChange={handleChange}
            placeholder="https://yourproject.live"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
          />
        </div>

        {/* GitHub Link */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">GitHub Link</label>
          <input
            type="url"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            placeholder="https://github.com/yourproject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
          />
        </div>

        {/* Tech Stack (Tag Input) */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Tech Stack</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.tech.map((tag, index) => (
              <span
                key={index}
                className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full flex items-center gap-2 text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(index)}
                  className="text-sm hover:text-red-500 font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyDown={handleTechKeyDown}
            placeholder="Type a tech and press Enter (e.g. Next.js)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md text-sm font-semibold transition duration-200"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
