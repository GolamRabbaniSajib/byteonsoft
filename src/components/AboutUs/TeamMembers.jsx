import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

// --- Team Data ---
const teamData = [
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    bio: 'Alice is a passionate developer with a decade of experience in building scalable web applications.',
    image: 'https://placehold.co/200x200/dbeafe/1e3a8a?text=AJ',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Bob Williams',
    role: 'Project Manager',
    bio: 'With a keen eye for detail, Bob ensures projects are delivered on time and exceed expectations.',
    image: 'https://placehold.co/200x200/dbeafe/1e3a8a?text=BW',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Charlie Brown',
    role: 'UI/UX Designer',
    bio: 'Charlie crafts intuitive and beautiful user experiences that delight and engage users.',
    image: 'https://placehold.co/200x200/dbeafe/1e3a8a?text=CB',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Diana Miller',
    role: 'Backend Specialist',
    bio: 'Diana architects robust and secure server-side solutions that power our applications.',
    image: 'https://placehold.co/200x200/dbeafe/1e3a8a?text=DM',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
];

const TeamMembers = () => {
  const fallbackImage = 'https://placehold.co/200x200/e2e8f0/64748b?text=??';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 15, stiffness: 100 },
    },
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Experts
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            The talented individuals who power our innovation and drive our success.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamData.map((member) => (
            <motion.div
              key={member.name}
              className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 text-center p-6 group transition-all duration-300 hover:shadow-xl hover:border-blue-500"
              variants={itemVariants}
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm mb-4 h-16">{member.bio}</p>

              <div className="flex justify-center items-center space-x-4 pt-4 border-t border-gray-200">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-blue-700 transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-gray-800 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ES6 arrow function for main app
const App = () => (
  <div className="w-full bg-white">
    <TeamMembers />
  </div>
);

export default App;
