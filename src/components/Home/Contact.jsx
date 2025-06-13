
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Note: In a real application, you would use react-router-dom's Link
// import { Link } from "react-router-dom";

/**
 * A modern, animated, and fully responsive contact section component.
 *
 * This component uses Tailwind CSS for styling and Framer Motion for animations
 * to create an engaging call-to-action for users.
 *
 * Dependencies:
 * - react-icons (for the phone icon)
 * - framer-motion (for animations)
 * - tailwindcss (for styling)
 */
const ContactSection = () => {
  // Animation variants for the container to orchestrate staggered animations for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements to fade in from below
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Animation for the icon container
  const iconVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      },
    },
  };


  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-20 sm:py-24 px-4 font-sans">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Animated Icon */}
        <motion.div
          className="flex justify-center mb-6"
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <div className="bg-teal-500 text-white p-5 rounded-full shadow-lg shadow-teal-500/30">
            <FaPhoneAlt size={32} />
          </div>
        </motion.div>

        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
          variants={itemVariants}
        >
          Ready to build something amazing?
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Let's collaborate and bring your vision to life. Reach out today for a
          complimentary consultation and let's get started.
        </motion.p>

        {/* Animated Button/Link */}
        <motion.div variants={itemVariants}>
          <a // Use <Link to="/contact"> in a React Router project
            href="#contact"
            className="inline-block bg-teal-500 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg shadow-teal-500/40 transform transition-all duration-300 hover:bg-teal-600 hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// The main App component to render our ContactSection
export default function App() {
  return (
    <div className="w-full h-screen bg-gray-900">
       <ContactSection />
    </div>
  )
}
