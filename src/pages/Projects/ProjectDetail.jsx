import { useParams } from "react-router-dom";

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

  if (!project)
    return <div className="text-center py-20">Project not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold text-[#0a1f44]">{project.title}</h1>
      <p className="mt-4 text-gray-700">{project.desc}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-teal-100 text-teal-800 px-3 py-1 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
