import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const ProjectDetail = () => {
  const projects = [
    {
      id: 1,
      title: "Neurolingva",
      description:
        "A neuroscience-powered language learning app using spaced repetition, interactive quizzes, and pronunciation feedback.",
      image: "https://i.ibb.co/ZVR6WPF/neurolingva.png",
      liveLink: "https://neurolingva.vercel.app",
      githubLink: "https://github.com/neurolingva/app",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Google Cloud"],
    },
    {
      id: 2,
      title: "Parcel Pulse",
      description:
        "A parcel management system for tracking deliveries and managing shipments with a user-friendly dashboard.",
      image: "https://i.ibb.co/DgY1DwS/parcel-pulse.png",
      liveLink: "https://parcelpulse.netlify.app",
      githubLink: "https://github.com/sajibdev/parcel-pulse",
      tech: ["Express.js", "MongoDB", "React.js", "Firebase", "JWT"],
    },
    {
      id: 3,
      title: "Moodify",
      description:
        "A mood-based recommendation platform that suggests content based on your emotions using sentiment analysis.",
      image: "https://i.ibb.co/M7tvF3X/moodify.png",
      liveLink: "https://moodify.me",
      githubLink: "https://github.com/sajibdev/moodify",
      tech: ["Next.js", "Tailwind", "Supabase", "OpenAI API"],
    },
    {
      id: 4,
      title: "TaskFlow",
      description:
        "A real-time task management tool with drag-and-drop functionality, Firebase authentication, and dark mode support.",
      image: "https://i.ibb.co/jrwCzFz/taskflow.png",
      liveLink: "https://taskflow.app",
      githubLink: "https://github.com/sajibdev/taskflow",
      tech: ["Vite.js", "React", "Firebase", "Tailwind CSS", "MongoDB"],
    },
    {
      id: 5,
      title: "ByteonSoft Portfolio",
      description:
        "A full-featured dynamic portfolio website for ByteonSoft, complete with admin dashboard and content management.",
      image: "https://i.ibb.co/YWjBk1x/byteonsoft.png",
      liveLink: "https://byteonsoft.com",
      githubLink: "https://github.com/sajibdev/byteonsoft-portfolio",
      tech: ["React", "Tailwind CSS", "Django", "PostgreSQL", "Tawk.to"],
    },
  ];

  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Project Details`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="text-center py-20">
        <p>
          Project not found.{" "}
          <Link to="/" className="text-teal-600">
            Go back to the homepage
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
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
        {project.tech.map((tech, i) => (
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
