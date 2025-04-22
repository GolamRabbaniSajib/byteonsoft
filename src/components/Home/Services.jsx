import { FaCode, FaMobileAlt, FaDesktop, FaDatabase } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-[#0a1f44] mb-6">Our Services</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          We offer a range of services designed to help your business succeed in
          the digital world. From full-stack web development to mobile apps, we
          create solutions that drive growth and improve user experiences.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Development */}
          <div className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <FaCode className="text-4xl text-teal-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
              Web Development
            </h3>
            <p className="text-gray-600">
              We specialize in creating dynamic, responsive websites that are
              both user-friendly and highly functional. Whether it’s an
              e-commerce platform or a content management system, we bring your
              ideas to life.
            </p>
          </div>

          {/* Mobile Development */}
          <div className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <FaMobileAlt className="text-4xl text-teal-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
              Mobile Development
            </h3>
            <p className="text-gray-600">
              Our mobile app development services cater to both iOS and Android.
              We build intuitive and engaging apps that provide seamless user
              experiences, no matter the platform.
            </p>
          </div>

          {/* Desktop Applications */}
          <div className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <FaDesktop className="text-4xl text-teal-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
              Desktop Applications
            </h3>
            <p className="text-gray-600">
              We develop high-performance desktop applications that integrate
              seamlessly with your business operations. Our solutions offer
              reliability and functionality for various industries.
            </p>
          </div>

          {/* Database Solutions */}
          <div className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <FaDatabase className="text-4xl text-teal-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
              Database Solutions
            </h3>
            <p className="text-gray-600">
              We provide robust database management solutions that ensure data
              integrity, scalability, and security. Our team can help design,
              optimize, and maintain your databases for smooth operation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
