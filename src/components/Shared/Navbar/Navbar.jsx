import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaProjectDiagram,
  FaBlog,
  FaPhoneAlt,
  FaUserCircle,
  FaSignInAlt,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useAuth();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
              className="flex items-center gap-2 hover:text-teal-300"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 hover:text-teal-300"
            >
              <FaInfoCircle /> About
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 hover:text-teal-300"
            >
              <FaServicestack /> Services
            </Link>
            <Link
              to="/projects"
              className="flex items-center gap-2 hover:text-teal-300"
            >
              <FaProjectDiagram /> Projects
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-2 hover:text-teal-300"
            >
              <FaBlog /> Blog
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:text-teal-300"
            >
              <FaPhoneAlt /> Contact
            </Link>
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                {/* User Image or Icon */}
                <button onClick={toggleDropdown} className="text-xl">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="w-10 h-10 text-teal-400" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-48 opacity-100 transition-opacity duration-300 ease-in-out">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-teal-200"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logOut}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-teal-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="text-lg text-teal-400 hover:text-teal-300 transition-all flex items-center gap-2"
              >
                <FaSignInAlt className="text-xl" /> Login
              </Link>
            )}
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
          } md:hidden px-4 py-6 space-y-4 bg-[#0a1f44] transition-all`}
        >
          <Link
            to="/"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300"
          >
            <FaInfoCircle /> About
          </Link>
          <Link
            to="/services"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300"
          >
            <FaServicestack /> Services
          </Link>
          <Link
            to="/projects"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300"
          >
            <FaProjectDiagram /> Projects
          </Link>
          <Link
            to="/blog"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300"
          >
            <FaBlog /> Blog
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl flex items-center gap-2 hover:text-teal-300"
          >
            <FaPhoneAlt /> Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
