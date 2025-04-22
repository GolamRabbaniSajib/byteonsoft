const AboutCompany = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-[#0a1f44] mb-4">
          About ByteonSoft
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          We are a dedicated software development company, offering innovative
          solutions for businesses looking to grow in the digital world. From
          web development to app solutions, we provide high-quality services
          with a focus on user experience, design, and functionality.
        </p>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-teal-100 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
              Innovation
            </h3>
            <p className="text-gray-600">
              We thrive on innovation, constantly exploring new ways to deliver
              the best results for our clients. Our team is always up-to-date
              with the latest trends.
            </p>
          </div>
          <div className="p-6 bg-teal-100 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
              Quality
            </h3>
            <p className="text-gray-600">
              We never compromise on quality. Every project is built with the
              highest standards, ensuring reliability and performance for our
              clients.
            </p>
          </div>
          <div className="p-6 bg-teal-100 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-[#0a1f44] mb-3">
              Customer-Centric
            </h3>
            <p className="text-gray-600">
              Our clients are at the heart of everything we do. We listen to
              their needs and provide tailored solutions to help them achieve
              their business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
