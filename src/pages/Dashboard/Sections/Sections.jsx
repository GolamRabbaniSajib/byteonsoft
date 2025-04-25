import { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const initialSections = [
  { id: 1, name: "Hero Section", enabled: true },
  { id: 2, name: "Services Section", enabled: true },
  { id: 3, name: "Projects Section", enabled: true },
  { id: 4, name: "Testimonials Section", enabled: true },
  { id: 5, name: "Team Section", enabled: true },
  { id: 6, name: "Blog Section", enabled: true },
  { id: 7, name: "Contact Section", enabled: true },
];

const Sections = () => {
  const [sections, setSections] = useState(initialSections);

  const toggleSection = (id) => {
    const updated = sections.map((sec) =>
      sec.id === id ? { ...sec, enabled: !sec.enabled } : sec
    );
    setSections(updated);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">
        Homepage Section Visibility
      </h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex items-center justify-between bg-white px-6 py-4 rounded shadow hover:shadow-md transition"
          >
            <span className="text-lg font-medium text-gray-700">{section.name}</span>
            <button
              onClick={() => toggleSection(section.id)}
              className={`flex items-center gap-2 text-lg font-semibold transition ${
                section.enabled ? "text-teal-600" : "text-gray-400"
              }`}
            >
              {section.enabled ? (
                <>
                  <FaToggleOn className="text-2xl" />
                  Enabled
                </>
              ) : (
                <>
                  <FaToggleOff className="text-2xl" />
                  Disabled
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
