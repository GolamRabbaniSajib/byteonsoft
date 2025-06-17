import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import {
  AiOutlineBars,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
import {
  MdContactMail,
  MdHomeRepairService,
  MdRateReview,
  MdPeopleAlt,
  MdDashboard,
} from 'react-icons/md';
import { FaBlogger } from 'react-icons/fa';
import { BsToggleOn } from 'react-icons/bs';

// Sidebar nav data
const navSections = [
  {
    title: 'Dashboard',
    items: [{ to: '/dashboard', icon: <MdDashboard className="text-xl" />, label: 'Overview' }],
  },
  {
    title: 'Content Management',
    items: [
      { to: '/dashboard/add-service', icon: <MdHomeRepairService className="text-xl" />, label: 'Add Service' },
      { to: '/dashboard/add-project', icon: <MdHomeRepairService className="text-xl" />, label: 'Add Project' },
      { to: '/dashboard/add-blog', icon: <FaBlogger className="text-xl" />, label: 'Add Blog Post' },
      { to: '/dashboard/add-testimonial', icon: <MdRateReview className="text-xl" />, label: 'Add Testimonial' },
      { to: '/dashboard/add-team-member', icon: <MdPeopleAlt className="text-xl" />, label: 'Add Team Member' },
    ],
  },
  {
    title: 'Administration',
    items: [
      { to: '/dashboard/contact-inbox', icon: <MdContactMail className="text-xl" />, label: 'Contact Inbox' },
      { to: '/dashboard/homepage-sections', icon: <BsToggleOn className="text-xl" />, label: 'Toggle Sections' },
    ],
  },
];

// Framer Motion Variants
const sidebarVariants = {
  open: (isMobile) => ({
    x: 0,
    width: isMobile ? 288 : 288,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  }),
  closed: (isMobile) => ({
    x: isMobile ? '-100%' : 0,
    width: isMobile ? 0 : 72,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  }),
};

const navTextVariants = {
  open: { opacity: 1, x: 0, display: 'block', transition: { delay: 0.1 } },
  closed: { opacity: 0, x: -10, transitionEnd: { display: 'none' } },
};

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-teal-600 text-white shadow'
        : 'text-gray-600 hover:bg-teal-50 hover:text-teal-700'
    }`;

  return (
    <>
      {/* Mobile Top Bar */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-white/90 backdrop-blur-md px-4 py-3 z-50 shadow">
          <Link to="/">
            <img src="https://i.ibb.co/4ZXzmq5/logo.png" alt="Logo" className="w-24" />
          </Link>
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
            <AiOutlineBars className="text-xl" />
          </button>
        </div>
      )}

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        key="sidebar"
        custom={isMobile}
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={`fixed z-50 top-0 left-0 h-screen bg-white shadow-lg border-r flex flex-col transition-all ${
          isMobile ? 'pt-16' : 'pt-8'
        }`}
      >
        {/* Logo & Collapse Button */}
        <div className={`flex items-center justify-between ${isOpen ? 'px-4' : 'justify-center'} mb-6`}>
          {isOpen && (
            <Link to="/" className="block">
              <motion.img
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="Logo"
                className="w-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </Link>
          )}
          {!isMobile && (
            <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100">
              {isOpen ? <AiOutlineLeft size={20} /> : <AiOutlineRight size={20} />}
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="px-2 space-y-5 overflow-y-auto pb-6">
          {navSections.map((section, idx) => (
            <div key={idx}>
              {isOpen && (
                <motion.h4
                  variants={navTextVariants}
                  className="text-xs font-bold uppercase text-gray-400 px-3 mb-2 tracking-wide"
                >
                  {section.title}
                </motion.h4>
              )}
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <NavLink
                      to={item.to}
                      className={linkStyle}
                      onClick={isMobile ? toggleSidebar : undefined}
                    >
                      {item.icon}
                      <motion.span variants={navTextVariants}>{item.label}</motion.span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
