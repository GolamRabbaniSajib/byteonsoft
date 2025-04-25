import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaLock,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-3xl text-teal-400 mx-auto" />,
    desc: "Custom websites and web apps using MERN, Next.js, and Tailwind.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt className="text-3xl text-teal-400 mx-auto" />,
    desc: "Cross-platform mobile apps using React Native and Flutter.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-3xl text-teal-400 mx-auto" />,
    desc: "User-centric designs with Figma, Adobe XD, and design systems.",
  },
  {
    title: "Cloud Deployment",
    icon: <FaCloud className="text-3xl text-teal-400 mx-auto" />,
    desc: "Deploy on AWS, Vercel, Netlify, or Heroku with CI/CD pipelines.",
  },
  {
    title: "Database Management",
    icon: <FaDatabase className="text-3xl text-teal-400 mx-auto" />,
    desc: "MongoDB, PostgreSQL, Firebase, and scalable data architecture.",
  },
  {
    title: "Frontend Engineering",
    icon: <FaLaptopCode className="text-3xl text-teal-400 mx-auto" />,
    desc: "Pixel-perfect UI development with React, Vue, and animations.",
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-3xl text-teal-400 mx-auto" />,
    desc: "Robust APIs and logic using Node.js, Express, and Django.",
  },
  {
    title: "Cybersecurity",
    icon: <FaLock className="text-3xl text-teal-400 mx-auto" />,
    desc: "Secure systems with JWT, OAuth, encryption, and firewalls.",
  },
  {
    title: "Performance Optimization",
    icon: <FaRocket className="text-3xl text-teal-400 mx-auto" />,
    desc: "Speed up load times with lazy loading, caching, and bundling.",
  },
  {
    title: "SEO & Analytics",
    icon: <FaChartLine className="text-3xl text-teal-400 mx-auto" />,
    desc: "Grow your audience with SEO, Google Analytics, and tracking.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] animate-fade-in-up">
          Our Services
        </h2>
        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
