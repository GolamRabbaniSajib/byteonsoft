import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Your Business Needs a Website in 2025",
      image: "/images/blog1.jpg",
      date: "April 20, 2025",
      author: "ByteonSoft Team",
      content: `In today's digital age, having a website is crucial...`,
      excerpt:
        "A website in 2025 isn’t optional – it’s a must-have. Let’s explore why your brand should be online.",
    },
    {
      id: 2,
      title: "Top 5 UI/UX Trends to Watch in 2025",
      image: "/images/blog2.jpg",
      date: "April 18, 2025",
      author: "Sajib",
      content: `From micro-interactions to AI-driven design...`,
      excerpt:
        "Want to stand out with modern design? These 5 trends will define the future of user experiences.",
    },
    // Add more blog objects as needed
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0a1f44] mb-12 tracking-tight">
          Our Latest Blogs
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-500 ease-in-out overflow-hidden transform hover:-translate-y-1 group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" // For SEO & performance optimization
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-1">{blog.date}</p>
                <h3 className="text-lg font-semibold text-[#0a1f44] group-hover:text-teal-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-block mt-4 text-teal-600 font-medium hover:underline transition-all"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
