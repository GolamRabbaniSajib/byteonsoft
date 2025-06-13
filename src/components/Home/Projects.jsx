import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Projects = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: projects = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/recent-projects");
      return res.data;
    },
    onError: () => toast.error("Failed to load projects"),
  });

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-20">
        Error: {error.message}
      </div>
    );
  }

  return (
    <section className="bg-white pt-24 pb-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <header>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] animate-fade-in-up">
            Recent Projects
          </h2>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#0a1f44]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {project.description.substring(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-600 text-white text-sm rounded-md hover:bg-teal-700 transition"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                  <Link
                    to={`/projects/${project._id}`}
                    className="px-4 py-2 border border-teal-600 text-teal-700 text-sm rounded-md hover:bg-teal-50 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
