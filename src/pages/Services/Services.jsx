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
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-3xl text-teal-400" />,
    desc: "Custom websites and web apps using MERN, Next.js, and Tailwind.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt className="text-3xl text-teal-400" />,
    desc: "Cross-platform mobile apps using React Native and Flutter.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-3xl text-teal-400" />,
    desc: "User-centric designs with Figma, Adobe XD, and design systems.",
  },
  {
    title: "Cloud Deployment",
    icon: <FaCloud className="text-3xl text-teal-400" />,
    desc: "Deploy on AWS, Vercel, Netlify, or Heroku with CI/CD pipelines.",
  },
  {
    title: "Database Management",
    icon: <FaDatabase className="text-3xl text-teal-400" />,
    desc: "MongoDB, PostgreSQL, Firebase, and scalable data architecture.",
  },
  {
    title: "Frontend Engineering",
    icon: <FaLaptopCode className="text-3xl text-teal-400" />,
    desc: "Pixel-perfect UI development with React, Vue, and animations.",
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-3xl text-teal-400" />,
    desc: "Robust APIs and logic using Node.js, Express, and Django.",
  },
  {
    title: "Cybersecurity",
    icon: <FaLock className="text-3xl text-teal-400" />,
    desc: "Secure systems with JWT, OAuth, encryption, and firewalls.",
  },
  {
    title: "Performance Optimization",
    icon: <FaRocket className="text-3xl text-teal-400" />,
    desc: "Speed up load times with lazy loading, caching, and bundling.",
  },
  {
    title: "SEO & Analytics",
    icon: <FaChartLine className="text-3xl text-teal-400" />,
    desc: "Grow your audience with SEO, Google Analytics, and tracking.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] animate-fade-in-up">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link
              to={service.path}
              key={idx}
              className="bg-[#0a1f44] text-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 animate-fade-in-up"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
