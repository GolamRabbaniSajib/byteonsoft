import MissionVision from "../../components/AboutUs/MissionVision";
import TeamMembers from "../../components/AboutUs/TeamMembers";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-12 pt-24 text-white">
      {/* Mission & Vision */}
      <MissionVision />

      {/* Team Members */}
      <TeamMembers></TeamMembers>
    </div>
  );
};

export default AboutUs;
