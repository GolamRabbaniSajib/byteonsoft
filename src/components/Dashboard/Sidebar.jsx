import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import {
  MdContactMail,
  MdHomeRepairService,
  MdRateReview,
  MdPeopleAlt,
} from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => setActive(!isActive);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
      : "flex items-center gap-3 text-gray-700 hover:bg-teal-100 hover:text-teal-600 py-2 px-4 rounded-lg transition-all duration-300";

  return (
    <>
      {/* Mobile Navbar */}
      <header className="bg-white shadow-sm text-navy-800 flex justify-between items-center px-4 py-3 md:hidden">
        <Link to="/" aria-label="Home">
          <img
            src="https://i.ibb.co/4ZXzmq5/logo.png"
            alt="Logo"
            className="w-24"
          />
        </Link>
        <button
          onClick={handleToggle}
          className="p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="Toggle sidebar"
        >
          <AiOutlineBars className="h-6 w-6 text-navy-800" />
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`z-30 md:fixed bg-white shadow-xl w-72 h-full flex flex-col justify-between px-4 py-6 absolute inset-y-0 left-0 transform ${
          isActive ? "-translate-x-full" : ""
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        role="navigation"
        aria-label="Sidebar"
      >
        {/* Logo */}
        <div className="hidden md:flex justify-center mb-6">
          <Link to="/" aria-label="Home">
            <img
              src="https://i.ibb.co/4ZXzmq5/logo.png"
              alt="Logo"
              className="w-28"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-6">
          <ul className="space-y-4 text-sm font-medium">
            {/* Services */}
            <li className="text-navy-800 font-bold text-xs uppercase tracking-wider">Services</li>
            <li>
              <NavLink to="/dashboard/add-service" className={linkStyle}>
                <MdHomeRepairService className="text-lg" />
                Add Service
              </NavLink>
            </li>

            {/* Content */}
            <li className="text-navy-800 font-bold text-xs uppercase tracking-wider mt-6">Content</li>
            <li>
              <NavLink to="/dashboard/add-blog" className={linkStyle}>
                <FaBlogger className="text-lg" />
                Add Blog Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-testimonial" className={linkStyle}>
                <MdRateReview className="text-lg" />
                Add Testimonial
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-team-member" className={linkStyle}>
                <MdPeopleAlt className="text-lg" />
                Add Team Member
              </NavLink>
            </li>

            {/* Contact */}
            <li className="text-navy-800 font-bold text-xs uppercase tracking-wider mt-6">Contact</li>
            <li>
              <NavLink to="/dashboard/contact-inbox" className={linkStyle}>
                <MdContactMail className="text-lg" />
                Contact Inbox
              </NavLink>
            </li>

            {/* Homepage Control */}
            <li className="text-navy-800 font-bold text-xs uppercase tracking-wider mt-6">Homepage</li>
            <li>
              <NavLink to="/dashboard/homepage-sections" className={linkStyle}>
                <BsToggleOn className="text-lg" />
                Toggle Sections
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
