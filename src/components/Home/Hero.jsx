
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-[#0a1f44] text-white px-6 py-32 md:py-40 overflow-hidden min-h-screen">
      {/* Glow Effect */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-ping"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="bg-gradient-to-r from-teal-300 to-white bg-clip-text text-transparent">
            Transforming Ideas into Innovation
          </span>
        </h1>

        <p className="text-lg md:text-xl text-teal-200 mb-10 max-w-2xl mx-auto animate-fade-in">
          We build reliable, elegant, and scalable software solutions for startups and enterprises.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-teal-400 text-[#0a1f44] px-8 py-3 rounded-xl font-semibold hover:bg-teal-300 transition-all duration-300 shadow-xl hover:scale-105"
        >
          Let’s Talk <FaArrowRight className="mt-0.5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
