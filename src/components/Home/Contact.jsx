import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-[#0a1f44] to-[#0f3460] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white text-[#0a1f44] p-4 rounded-full shadow-lg">
            <FaPhoneAlt size={32} />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to start your next project?
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Let's work together to create something great. Contact us today to
          schedule a free consultation.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-teal-500 hover:bg-teal-600 transition-colors text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Contact;
