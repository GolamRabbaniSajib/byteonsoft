import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaProjectDiagram,
  FaBlog,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#0a1f44] text-white shadow-md fixed top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-teal-400">
            <Link to="/">ByteonSoft</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
            >
              <FaInfoCircle /> About
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
            >
              <FaServicestack /> Services
            </Link>
            <Link
              to="/projects"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
            >
              <FaProjectDiagram /> Projects
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
            >
              <FaBlog /> Blog
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
            >
              <FaPhoneAlt /> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden px-4 py-6 space-y-4 bg-[#0a1f44] transition-all duration-300`}
        >
          <Link
            to="/"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
          >
            <FaInfoCircle /> About
          </Link>
          <Link
            to="/services"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
          >
            <FaServicestack /> Services
          </Link>
          <Link
            to="/projects"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
          >
            <FaProjectDiagram /> Projects
          </Link>
          <Link
            to="/blog"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
          >
            <FaBlog /> Blog
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
          >
            <FaPhoneAlt /> Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
