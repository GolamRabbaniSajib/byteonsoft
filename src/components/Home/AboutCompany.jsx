import { motion } from 'framer-motion';
import { IoBulbOutline, IoShieldCheckmarkOutline, IoPeopleOutline } from "react-icons/io5";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const valueCards = [
    {
        icon: <IoBulbOutline className="w-10 h-10 text-teal-500 mb-4" />,
        title: 'Innovation',
        description: 'We thrive on innovation, constantly exploring new ways to deliver the best results. Our team is always up-to-date with the latest trends.'
    },
    {
        icon: <IoShieldCheckmarkOutline className="w-10 h-10 text-teal-500 mb-4" />,
        title: 'Quality',
        description: 'We never compromise on quality. Every project is built with the highest standards, ensuring reliability and performance.'
    },
    {
        icon: <IoPeopleOutline className="w-10 h-10 text-teal-500 mb-4" />,
        title: 'Customer-Centric',
        description: 'Our clients are at the heart of everything we do. We listen to their needs and provide tailored solutions to help them achieve their goals.'
    }
]

const AboutCompany = () => {
  return (
    <motion.section 
        className="bg-slate-50 py-20 md:py-28 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
            About <span className="text-teal-500">ByteonSoft</span>
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We are a dedicated software development company, offering innovative
            solutions for businesses looking to grow in the digital world. From
            web development to app solutions, we provide high-quality services
            with a focus on user experience, design, and functionality.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our mission is to empower our clients by turning their ideas into robust and scalable digital products that stand out in the market.
          </p>
        </motion.div>

        {/* Right Column: Company Values */}
        <div className="grid grid-cols-1 gap-6">
            {valueCards.map((card, index) => (
                 <motion.div 
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    variants={itemVariants}
                 >
                    {card.icon}
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {card.title}
                    </h3>
                    <p className="text-slate-600">
                        {card.description}
                    </p>
                 </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutCompany;
