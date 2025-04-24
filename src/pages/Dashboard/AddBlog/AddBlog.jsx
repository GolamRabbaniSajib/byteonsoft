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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-medium block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="font-medium block mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="font-medium block mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="font-medium block mb-1">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows="2"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="font-medium block mb-1">Full Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="6"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
