import { useEffect, useState } from "react";
import { FaCode, FaUsers } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const TeamMembers = () => {
  const axiosPublic = useAxiosPublic();
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axiosPublic.get("/all-members");
        setTeamData(res.data);
      } catch (err) {
        console.error("Failed to fetch team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [axiosPublic]);

  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] animate-fade-in-up">
          Meet Our Team
        </h2>

        {loading ? (
          <p className="text-gray-600 text-lg">Loading team members...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#0a1f44] text-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 animate-fade-in-up"
              >
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-teal-400 mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <div className="flex justify-center gap-2 mb-2">
                  {member.role === "Frontend Developer" && (
                    <FaCode className="text-teal-400 text-xl" />
                  )}
                  {member.role === "Project Manager" && (
                    <FaUsers className="text-teal-400 text-xl" />
                  )}
                  <p className="text-teal-300">{member.role}</p>
                </div>
                <p className="text-gray-300 text-sm">{member.intro}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamMembers;
