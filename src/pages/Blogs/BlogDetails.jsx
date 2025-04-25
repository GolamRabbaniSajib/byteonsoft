import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Your Business Needs a Website in 2025",
      image: "/images/blog1.jpg",
      date: "April 20, 2025",
      author: "ByteonSoft Team",
      content: `In today's digital age, having a website is crucial...\n\nA strong online presence increases your brand’s credibility and helps you connect with a broader audience.`,
      excerpt:
        "A website in 2025 isn’t optional – it’s a must-have. Let’s explore why your brand should be online.",
    },
    {
      id: 2,
      title: "Top 5 UI/UX Trends to Watch in 2025",
      image: "/images/blog2.jpg",
      date: "April 18, 2025",
      author: "Sajib",
      content: `From micro-interactions to AI-driven design, UI/UX is rapidly evolving...\n\nIn this post, we break down the hottest trends to help you stay ahead.`,
      excerpt:
        "Want to stand out with modern design? These 5 trends will define the future of user experiences.",
    },
    // Add more blogs as needed
  ];

  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog)
    return (
      <div className="text-center py-20 text-gray-500 text-lg animate-fade-in">
        Blog not found.
      </div>
    );

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
