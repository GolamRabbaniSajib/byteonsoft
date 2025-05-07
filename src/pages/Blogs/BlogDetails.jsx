import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch blog data when component mounts
    const fetchBlog = async () => {
      try {
        const response = await axiosPublic.get(`/blog/${id}`);
        setBlog(response.data); // Assuming the API returns blog data in `data`
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blog details.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, axiosPublic]);

  if (loading) {
    return (
      <div>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg animate-fade-in">
        {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg animate-fade-in">
        Blog not found.
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-16 pt-24 animate-fade-in">
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[250px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            loading="lazy" // For performance and SEO
          />
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500 mb-2">
            {blog.date} • by{" "}
            <span className="text-blue-600 font-medium">{blog.author}</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0a1f44] leading-tight mb-6">
            {blog.title}
          </h1>

          <article className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {blog.content}
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
