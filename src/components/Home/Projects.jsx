import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Neurolingva",
    description:
      "A neuroscience-backed language learning app using React, Express, and MongoDB.",
    image: "https://via.placeholder.com/400x200?text=Neurolingva",
    link: "/projects/neurolingva",
  },
  {
    id: 2,
    title: "Parcel Management",
    description:
      "A full-stack parcel tracking system built with Node.js and MongoDB.",
    image: "https://via.placeholder.com/400x200?text=Parcel+Management",
    link: "/projects/parcel-management",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "Drag-and-drop task management with real-time updates and Firebase auth.",
    image: "https://via.placeholder.com/400x200?text=Task+Manager",
    link: "/projects/task-manager",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#0a1f44] mb-4">
          Recent Projects
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore some of the recent work we've done with clients and side
          projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#f7f9fc] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
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
                <p className="text-gray-600 mt-2 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-teal-500 hover:underline"
                >
                  View Project <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
