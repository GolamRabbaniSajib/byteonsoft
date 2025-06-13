import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineDesktopComputer, HiOutlineDatabase } from 'react-icons/hi';


// Data array for services, now using react-icons
const servicesData = [
  {
    id: 'web',
    icon: <HiOutlineCode className="w-full h-full text-teal-500" />,
    title: "Web Development",
    description: "We specialize in creating dynamic, responsive websites that are user-friendly and highly functional, from e-commerce platforms to content management systems.",
  },
  {
    id: 'mobile',
    icon: <HiOutlineDeviceMobile className="w-full h-full text-teal-500" />,
    title: "Mobile Development",
    description: "Our mobile app services for iOS and Android deliver intuitive and engaging apps that provide a seamless user experience on any platform.",
  },
  {
    id: 'desktop',
    icon: <HiOutlineDesktopComputer className="w-full h-full text-teal-500" />,
    title: "Desktop Applications",
    description: "We build high-performance desktop applications that integrate seamlessly with your business, offering reliability and powerful functionality.",
  },
  {
    id: 'database',
    icon: <HiOutlineDatabase className="w-full h-full text-teal-500" />,
    title: "Database Solutions",
    description: "We provide robust database solutions that ensure data integrity, scalability, and security. We design, optimize, and maintain your databases.",
  },
];

// Animation variants for the content reveal
const contentVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.3, ease: [0.5, 0, 0.75, 0] } }
};


const Services = () => {
  const [selectedTab, setSelectedTab] = useState(servicesData[0]);

  return (
    <section className="bg-slate-50 text-slate-800 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Our Core Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We craft digital solutions tailored to your needs. Select a service below to see how we can help you achieve your goals.
            </p>
        </motion.div>

        {/* Interactive Tabs Layout */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Left Column: Service Selector (Tab List) */}
            <motion.div 
                role="tablist"
                aria-orientation="vertical"
                className="flex flex-col space-y-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {servicesData.map((item) => (
                    <button
                        key={item.id}
                        role="tab"
                        aria-selected={selectedTab.id === item.id}
                        aria-controls="services-content-panel"
                        className={`relative text-left w-full p-5 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 ${
                            selectedTab.id === item.id 
                                ? 'bg-white shadow-lg' 
                                : 'hover:bg-slate-200/60'
                        }`}
                        onClick={() => setSelectedTab(item)}
                    >
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        {selectedTab.id === item.id && (
                            <motion.div 
                                className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500 rounded-b-lg" 
                                layoutId="underline"
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </motion.div>

            {/* Right Column: Service Content Display (Tab Panel) */}
            <div 
                id="services-content-panel"
                role="tabpanel"
                className="md:col-span-2 p-8 bg-white rounded-xl shadow-xl relative overflow-hidden min-h-[320px]"
            >
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab.id}
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full h-full flex flex-col md:flex-row items-center gap-6 md:gap-8"
                    >
                       <div className="w-24 h-24 md:w-40 md:h-40 flex-shrink-0 text-slate-300">
                            {selectedTab.icon}
                       </div>
                       <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">{selectedTab.title}</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">{selectedTab.description}</p>
                       </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
