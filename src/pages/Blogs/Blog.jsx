import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axiosPublic.get("/all-blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [axiosPublic]);

  return (
    <section className="bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0a1f44] mb-12 tracking-tight">
          Our Latest Blogs
        </h2>

        {loading ? (
          <div><LoadingSpinner></LoadingSpinner></div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-500 ease-in-out overflow-hidden transform hover:-translate-y-1 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-1">{blog.date}</p>
                  <h3 className="text-lg font-semibold text-[#0a1f44] group-hover:text-teal-600 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
                  <Link
                    to={`/blogs/${blog._id}`}
                    className="inline-block mt-4 text-teal-600 font-medium hover:underline transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
