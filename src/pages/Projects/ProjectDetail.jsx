import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const ProjectDetail = () => {
  const projects = [
    {
      id: 1,
      title: "Neurolingva",
      image: "/images/neurolingva.png",
      desc: "AI-powered language learning app using spaced repetition and speech feedback.",
      tech: ["React", "Tailwind", "MongoDB", "Node.js"],
    },
    {
      id: 2,
      title: "Parcel Management",
      image: "/images/parcel.png",
      desc: "Real-time logistics dashboard for tracking deliveries and user management.",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
    },
    {
      id: 3,
      title: "Moodify",
      image: "/images/moodify.png",
      desc: "Mood-based content recommendation platform with modern UI and animations.",
      tech: ["Next.js", "Tailwind", "Supabase"],
    },
    {
      id: 4,
      title: "Interactive Quiz Platform",
      image: "/images/quiz.png",
      desc: "Gamified quiz experience with instant feedback and IndexedDB history.",
      tech: ["React", "Tailwind", "IndexedDB"],
    },
    {
      id: 5,
      title: "Task Manager App",
      image: "/images/task.png",
      desc: "Drag-and-drop task manager with Google auth and real-time syncing.",
      tech: ["Vite", "Firebase", "MongoDB", "Tailwind"],
    },
    {
      id: 6,
      title: "ByteonSoft Portfolio",
      image: "/images/byteonsoft.png",
      desc: "Dynamic company portfolio site with admin dashboard and services listing.",
      tech: ["React", "Django", "PostgreSQL"],
    },
  ];

  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Project Details`; // Dynamically setting the page title for SEO
    }
  }, [project]);

  if (!project) {
    return (
      <div className="text-center py-20">
        <p>Project not found. <Link to="/" className="text-teal-600">Go back to the homepage</Link>.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <img
        src={project.image}
        alt={`${project.title} project screenshot`}
        className="w-full rounded-xl mb-6 transform transition-all duration-500 hover:scale-105"
        loading="lazy" // Adds lazy loading for performance optimization
      />
      <h1 className="text-3xl md:text-4xl font-bold text-[#0a1f44] tracking-wide">{project.title}</h1>
      <p className="mt-4 text-gray-700">{project.desc}</p>
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
      <div className="mt-8 text-center">
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
