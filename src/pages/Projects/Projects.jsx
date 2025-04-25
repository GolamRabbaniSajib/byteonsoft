import { Link } from "react-router-dom";

const Projects = () => {
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
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#0a1f44]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {project.description}
                </p>
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
                    to={`/projects/${project.id}`}
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
