
import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 15, stiffness: 100 }
    }
  };

  const cardHover = {
    y: -5,
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <section className="bg-gray-50 py-20 sm:py-24 px-4 font-sans">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Guiding Principles
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            The core beliefs that drive our work and define our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Our Mission',
              icon: <FaBullseye className="w-6 h-6" />,
              color: 'blue',
              description:
                'To empower people and businesses by building innovative, scalable, and impactful digital solutions that foster creativity and inspire meaningful progress.'
            },
            {
              title: 'Our Vision',
              icon: <FaEye className="w-6 h-6" />,
              color: 'purple',
              description:
                'To be a globally trusted tech partner known for delivering cutting-edge, user-first experiences that shape the digital future with purpose and integrity.'
            }
          ].map(({ title, icon, color, description }) => (
            <motion.div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              variants={itemVariants}
              whileHover={cardHover}
            >
              <div className="flex items-center gap-5 mb-5">
                <div className={`bg-${color}-100 text-${color}-600 p-4 rounded-full`}>
                  {icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const App = () => (
  <div className="w-full bg-gray-50">
    <MissionVision />
  </div>
);

export default App;
