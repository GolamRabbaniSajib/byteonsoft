import MissionVision from "../../components/AboutUs/MissionVision";
import TeamMembers from "../../components/AboutUs/TeamMembers";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Raihan Islam",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/150?img=1",
      intro:
        "Visionary leader driving innovation and growth with a passion for tech.",
    },
    {
      name: "Sajib Ahmed",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/150?img=2",
      intro:
        "Full-stack wizard with deep MERN expertise and a flair for elegant UI/UX.",
    },
    {
      name: "Jannat Ferdous",
      role: "Project Manager",
      image: "https://i.pravatar.cc/150?img=3",
      intro:
        "Detail-oriented planner ensuring smooth delivery and clear communication.",
    },
    {
      name: "Farhan Khan",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=4",
      intro:
        "Designs beautiful and intuitive user experiences with modern aesthetics.",
    },
  ];
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
