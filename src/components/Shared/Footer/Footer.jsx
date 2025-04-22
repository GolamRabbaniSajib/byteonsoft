import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand + Description */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-2">ByteonSoft</h2>
          <p className="text-gray-300">
            Crafting powerful digital solutions. From idea to implementation, we
            bring your vision to life.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-teal-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-teal-300">
            Follow Us
          </h3>
          <div className="flex gap-4 text-gray-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 mt-10 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ByteonSoft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
