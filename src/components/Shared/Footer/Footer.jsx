import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const socialIconHover = {
    scale: 1.2,
    transition: { type: 'spring', stiffness: 400 }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div className="md:col-span-4" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-2">ByteonSoft</h2>
            <p className="text-slate-400">
              Crafting powerful digital solutions. From idea to implementation, we bring your vision to life.
            </p>
          </motion.div>

          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Menu</h3>
            <ul className="space-y-2">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <a href={path} className="hover:text-purple-400 transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="md:col-span-3" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Join Our Newsletter</h3>
            <p className="text-slate-400 mb-4 text-sm">
              Get the latest updates on projects and articles.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          <motion.div className="md:col-span-3" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors"
                  aria-label={label}
                  whileHover={socialIconHover}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center text-slate-500 mt-12 text-sm border-t border-slate-800 pt-8">
          © {new Date().getFullYear()} ByteonSoft. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

const App = () => (
  <div className="w-full bg-slate-900">
    <Footer />
  </div>
);

export default App;
