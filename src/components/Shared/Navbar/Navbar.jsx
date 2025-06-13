import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaProjectDiagram,
  FaBlog,
  FaPhoneAlt,
  FaUserCircle,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useAuth();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const navLinks = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "/about", icon: <FaInfoCircle />, text: "About" },
    { to: "/services", icon: <FaServicestack />, text: "Services" },
    { to: "/projects", icon: <FaProjectDiagram />, text: "Projects" },
    { to: "/blog", icon: <FaBlog />, text: "Blog" },
    { to: "/contact", icon: <FaPhoneAlt />, text: "Contact" },
  ];

  const navLinkVariants = {
    hover: {
      scale: 1.1,
      color: "#2dd4bf",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  return (
    //  MODERN BACKGROUND APPLIED HERE
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 text-white backdrop-blur-lg shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="text-3xl font-bold text-teal-400">
              ByteonSoft
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                variants={navLinkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-medium transition-colors duration-300 ${
                      isActive ? "text-teal-400" : "hover:text-teal-300"
                    }`
                  }
                >
                  {link.icon} {link.text}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* User Section */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="focus:outline-none">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-12 h-12 rounded-full border-2 border-teal-400 object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-12 h-12 text-teal-400" />
                  )}
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden"
                    >
                      <Link
                        to="/dashboard"
                        className="block px-4 py-3 text-sm hover:bg-teal-100"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logOut();
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-teal-100"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-lg font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-300"
                >
                  <FaSignInAlt /> Login
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-slate-900/90 backdrop-blur-lg" // Matching modern bg
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-teal-500 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`
                  }
                >
                  {link.icon} {link.text}
                </NavLink>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-700">
                {user ? (
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      {user.photoURL ? (
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={user.photoURL}
                          alt="User"
                        />
                      ) : (
                        <FaUserCircle className="w-10 h-10 text-teal-400" />
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.displayName}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400 mt-1">
                        {user.email}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaSignInAlt /> Login
                  </NavLink>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;