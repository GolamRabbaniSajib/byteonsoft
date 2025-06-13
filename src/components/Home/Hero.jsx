import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Animation variants for the container to orchestrate staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Animation variants for child elements
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxOffset = (strength) => ({
    transform: `translate(${mousePosition.x / -strength}px, ${mousePosition.y / -strength}px)`,
  });

  return (
    <section className="relative bg-[#0a1f44] text-white flex items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)',
          backgroundSize: '100px 100px',
        }}
      ></div>

      {/* Interactive Background Glows */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-teal-500/30 rounded-full blur-3xl"
        style={parallaxOffset(30)}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-15%] right-[-5%] w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        style={parallaxOffset(20)}
      ></motion.div>
       <motion.div
        className="absolute bottom-[25%] left-[20%] w-52 h-52 bg-purple-600/20 rounded-full blur-3xl"
        style={parallaxOffset(40)}
      ></motion.div>


      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Transforming Ideas into Digital Excellence
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          We build reliable, elegant, and scalable software solutions for startups and enterprises that drive growth and user engagement.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-teal-400 text-[#0a1f44] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-teal-400/20 hover:bg-teal-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-400/40"
          >
            Let’s Talk <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
