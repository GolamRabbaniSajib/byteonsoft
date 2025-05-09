import { useState } from "react";
import { FaEnvelopeOpenText, FaTrashAlt } from "react-icons/fa";

const ContactInbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      subject: "Website Redesign",
      message: "I'd like to discuss a redesign for my company website.",
      date: "April 25, 2025",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Partnership Opportunity",
      message: "Let's explore a potential collaboration.",
      date: "April 24, 2025",
    },
  ]);

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (confirm) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  return (
    <div className="bg-white text-gray-900 font-inter min-h-screen">
      <header className="bg-navy py-6 px-4 text-white">
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          <FaEnvelopeOpenText className="text-teal-500" />
          Inbox Messages
        </h1>
      </header>

      <main className="p-6 md:p-10">
        {messages.length === 0 ? (
          <p className="text-lg text-gray-600">No messages in your inbox.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg mt-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-teal-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    S/N
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {messages.map((msg, index) => (
                  <tr
                    key={msg.id}
                    className="hover:bg-gray-50 transition duration-300 ease-in-out"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{msg.name}</td>
                    <td className="px-6 py-4">{msg.email}</td>
                    <td className="px-6 py-4">{msg.subject}</td>
                    <td className="px-6 py-4">{msg.date}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="text-red-500 hover:text-red-700 transition duration-200"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <footer className="bg-navy text-white text-center py-4 mt-10">
        <p>&copy; 2025 ByteonSoft | All rights reserved</p>
      </footer>
    </div>
  );
};

export default ContactInbox;
