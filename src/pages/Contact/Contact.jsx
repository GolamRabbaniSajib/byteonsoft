import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-200 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <Helmet>
        <title>Contact Us | ByteonSoft</title>
        <meta name="description" content="Get in touch with ByteonSoft for any inquiries or support." />
        <meta name="keywords" content="contact, support, ByteonSoft, get in touch" />
      </Helmet>

      <motion.div
        className="max-w-6xl w-full mx-auto"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Contact Us</h1>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: Form */}
            <motion.div className="p-8 sm:p-12" variants={itemVariants}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-slate-700">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-slate-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="How can we help?"
                    className="w-full bg-white/80 border border-gray-300 rounded-lg px-4 py-3 text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right: Info & Map */}
            <motion.div className="bg-blue-50 p-8 sm:p-12 flex flex-col justify-between" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Information</h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 w-5 h-5" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaPhone className="text-blue-600 mt-1 w-5 h-5" />
                    <span>+880 123 456 7890</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-blue-600 mt-1 w-5 h-5" />
                    <span>contact@byteonsoft.com</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden h-48 md:h-64 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38366434313!2d90.27923781347158!3d23.780573255148673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1718309689531!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Dhaka"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default function App() {
  return (
    // Wrap with <HelmetProvider> in real app entry point (like _app.js or index.js)
    <div className="w-full">
      <Contact />
    </div>
  );
}
