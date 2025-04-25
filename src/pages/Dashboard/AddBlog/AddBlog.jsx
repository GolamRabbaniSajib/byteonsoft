import { useState } from "react";

const AddBlog = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    date: today,
    author: "ByteonSoft Team",
    excerpt: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-api-url.com/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Blog post added successfully!");
        setFormData({
          title: "",
          image: "",
          date: today,
          author: "ByteonSoft Team",
          excerpt: "",
          content: "",
        });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting blog post:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-navy-800 mb-8 border-b pb-3">📝 Add Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-2 text-sm font-medium text-navy-800">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            placeholder="Enter blog title"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-2 text-sm font-medium text-navy-800">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            placeholder="Paste image link"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block mb-2 text-sm font-medium text-navy-800">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block mb-2 text-sm font-medium text-navy-800">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows="2"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none focus:ring-2 focus:ring-teal-500 focus:outline-none"
            placeholder="Short summary of the blog..."
          />
        </div>

        {/* Full Content */}
        <div>
          <label className="block mb-2 text-sm font-medium text-navy-800">Full Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="8"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            placeholder="Write your blog post here..."
          />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-200"
        >
          🚀 Publish Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
