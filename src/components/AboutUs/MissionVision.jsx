import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="bg-[#0a1f44] py-20 px-6 md:px-10 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 animate-fade-in-up duration-700">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Mission */}
          <div className="bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 animate-fade-in-left">
            <div className="flex items-center gap-4 mb-4">
              <FaBullseye className="text-teal-400 text-3xl" />
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering people and businesses by building innovative, scalable,
              and impactful digital solutions that foster creativity and inspire
              progress.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 animate-fade-in-right">
            <div className="flex items-center gap-4 mb-4">
              <FaEye className="text-teal-400 text-3xl" />
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To be a globally trusted tech partner known for delivering
              cutting-edge, user-first experiences that shape the digital future
              with purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
