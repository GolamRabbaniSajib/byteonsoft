import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const ProjectDetail = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const {
    data: project,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/project/${id}`);
      return res.data;
    },
    onError: () => toast.error("Failed to load project details."),
    enabled: !!id, // only fetch if id exists
  });

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Project Details`;
    }
  }, [project]);

  if (isLoading) {
    return <div><LoadingSpinner></LoadingSpinner></div>;
  }

  if (isError || !project?._id) {
    return (
      <div className="text-center py-20 text-red-600">
        <p>
          Project not found.{" "}
          <Link to="/" className="text-teal-600 underline">
            Go back to the homepage
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
      <img
        src={project.image}
        alt={`${project.title} project screenshot`}
        className="w-full rounded-xl mb-6 transform transition-all duration-500 hover:scale-105"
        loading="lazy"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-[#0a1f44] tracking-wide">
        {project.title}
      </h1>
      <p className="mt-4 text-gray-700">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech?.map((tech, i) => (
          <span
            key={i}
            className="bg-teal-100 text-teal-800 px-3 py-1 text-sm rounded-full shadow-md transform transition-all duration-300 hover:bg-teal-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300"
        >
          Live Site
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300"
        >
          GitHub Repo
        </a>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/projects"
          className="inline-block px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all duration-300"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
