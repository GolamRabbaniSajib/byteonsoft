import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import {
  MdPostAdd,
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
      ? "flex items-center gap-3 bg-yellow-500 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
      : "flex items-center gap-3 text-gray-600 hover:bg-yellow-100 hover:text-yellow-600 py-2 px-4 rounded-xl transition-all duration-300";

  return (
    <>
      {/* Mobile Navbar */}
      <div className="bg-white shadow-md text-gray-800 flex justify-between items-center px-4 py-3 md:hidden">
        <Link to="/">
          <img
            src="https://i.ibb.co/4ZXzmq5/logo.png"
            alt="logo"
            className="w-24"
          />
        </Link>
        <button
          onClick={handleToggle}
          className="p-2 rounded-md hover:bg-gray-200 transition"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-20 md:fixed flex flex-col justify-between bg-white shadow-lg w-72 space-y-6 px-4 py-6 absolute inset-y-0 left-0 transform ${
          isActive ? "-translate-x-full" : ""
        } md:translate-x-0 transition duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="hidden md:flex justify-center">
          <Link to="/">
            <img
              src="https://i.ibb.co/4ZXzmq5/logo.png"
              alt="logo"
              className="w-28"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-6">
          <ul className="space-y-3">
            {/* Services */}
            <li className="text-gray-500 font-bold text-sm uppercase tracking-wide">
              Services
            </li>
            <li>
              <NavLink to="/dashboard/add-service" className={linkStyle}>
                <MdHomeRepairService className="text-xl" />
                Add Service
              </NavLink>
            </li>

            {/* Projects */}
            <li className="text-gray-500 font-bold text-sm mt-6 uppercase tracking-wide">
              Content
            </li>
            <li>
              <NavLink to="/dashboard/add-blog-post" className={linkStyle}>
                <FaBlogger className="text-xl" />
                Add Blog Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-testimonial" className={linkStyle}>
                <MdRateReview className="text-xl" />
                Add Testimonial
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-team-member" className={linkStyle}>
                <MdPeopleAlt className="text-xl" />
                Add Team Member
              </NavLink>
            </li>

            {/* Contact */}
            <li className="text-gray-500 font-bold text-sm mt-6 uppercase tracking-wide">
              Contact
            </li>
            <li>
              <NavLink to="/dashboard/contact-inbox" className={linkStyle}>
                <MdContactMail className="text-xl" />
                Contact Inbox
              </NavLink>
            </li>

            {/* Homepage Control */}
            <li className="text-gray-500 font-bold text-sm mt-6 uppercase tracking-wide">
              Homepage
            </li>
            <li>
              <NavLink to="/dashboard/homepage-sections" className={linkStyle}>
                <BsToggleOn className="text-xl" />
                Toggle Sections
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
