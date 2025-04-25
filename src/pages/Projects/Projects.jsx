import { Link } from "react-router-dom";

const Projects = () => {
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

  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <header>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] animate-fade-in-up">
            Recent Projects
          </h2>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
            >
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#0a1f44]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block mt-4 text-teal-600 font-medium hover:underline"
                  aria-label={`View more details about ${project.title} project`}
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
