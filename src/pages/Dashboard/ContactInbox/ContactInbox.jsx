import { useState, useEffect, useCallback, memo } from "react";
import { FaEnvelopeOpenText, FaTrashAlt, FaRegClock } from "react-icons/fa";
import { FiInbox, FiLoader } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { format, parseISO } from "date-fns";

// MOCK DATA
const initialMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Urgent: Website Redesign Proposal",
    message:
      "Hi there,\n\nI hope this message finds you well. I was reviewing your portfolio and was incredibly impressed with your work. I'm the marketing lead at InnovateCorp, and we're looking to completely overhaul our company website.\n\nWe're looking for a modern, responsive design with a focus on user experience and lead generation. Could we schedule a brief call next week to discuss this further? Our budget is flexible for the right partner.\n\nBest regards,\nJohn Doe",
    date: "2025-06-17T14:30:00Z",
    read: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Inquiry about Partnership Opportunities",
    message:
      "Hello Team,\n\nMy name is Jane Smith, and I represent Creative Solutions. We specialize in digital marketing and have a strong client base that often requires top-tier web development services. I believe a partnership between our companies could be mutually beneficial.\n\nLet's explore how we can collaborate to deliver even greater value to our clients. I'm available to chat anytime.\n\nSincerely,\nJane Smith",
    date: "2025-06-16T11:00:00Z",
    read: true,
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@example.com",
    subject: "Question about your Mobile App services",
    message:
      "I have a question about your mobile app development process. What technologies do you typically use for cross-platform development? Thanks!",
    date: "2025-06-15T09:15:00Z",
    read: false,
  },
];

// FRAMER MOTION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: -30, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2 } },
};

// Memoized Message List Item for performance
const MessageListItem = memo(({ msg, isSelected, onSelect }) => {
  return (
    <motion.button
      key={msg.id}
      variants={itemVariants}
      exit="exit"
      onClick={() => onSelect(msg)}
      className={`w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 flex items-start gap-3 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded ${
        isSelected ? "bg-teal-50" : ""
      }`}
      aria-selected={isSelected}
      tabIndex={0}
      type="button"
    >
      {!msg.read && <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0" />}
      <div className={`flex-grow ${msg.read ? "pl-5" : ""}`}>
        <div className="flex justify-between items-baseline">
          <p
            className={`font-semibold truncate ${
              !msg.read ? "text-gray-800" : "text-gray-600"
            }`}
          >
            {msg.name}
          </p>
          <time className="text-xs text-gray-400 shrink-0" dateTime={msg.date}>
            {format(parseISO(msg.date), "MMM d")}
          </time>
        </div>
        <p
          className={`text-sm truncate ${
            !msg.read ? "text-gray-600" : "text-gray-500"
          }`}
        >
          {msg.subject}
        </p>
      </div>
    </motion.button>
  );
});

const ContactInbox = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMessages(initialMessages);
      setSelectedMessage(
        initialMessages.find((m) => !m.read) || initialMessages[0] || null
      );
      setLoading(false);
    }, 1200);
  }, []);

  const handleSelectMessage = useCallback(
    (message) => {
      setSelectedMessage(message);
      if (!message.read) {
        setMessages((msgs) =>
          msgs.map((m) => (m.id === message.id ? { ...m, read: true } : m))
        );
      }
    },
    [setSelectedMessage, setMessages]
  );

  const openDeleteModal = useCallback((id) => {
    setMessageToDelete(id);
    setShowDeleteModal(true);
  }, []);

  const handleDelete = useCallback(() => {
    setMessages((msgs) => {
      const filtered = msgs.filter((msg) => msg.id !== messageToDelete);

      if (selectedMessage?.id === messageToDelete) {
        // Find next message to select
        const currentIndex = msgs.findIndex((m) => m.id === messageToDelete);
        const nextMessage =
          msgs[currentIndex - 1] || msgs[currentIndex + 1] || null;
        setSelectedMessage(nextMessage);
      }
      return filtered;
    });

    setShowDeleteModal(false);
    setMessageToDelete(null);
  }, [messageToDelete, selectedMessage, setSelectedMessage]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <FiLoader className="text-4xl text-teal-500 animate-spin" />
        <p className="mt-4 text-gray-600">Loading Inbox...</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen font-sans bg-white text-gray-900">
        {/* Left Pane: Message List */}
        <aside
          className={`w-full md:w-1/3 lg:w-1/4 h-[calc(100vh-4rem)] border-r border-gray-200 flex flex-col ${
            selectedMessage ? "hidden md:flex" : "flex"
          }`}
        >
          <header className="p-4 border-b h-16 flex items-center shrink-0 sticky top-0 bg-white z-10">
            <h1 className="text-xl font-bold flex items-center gap-3">
              <FiInbox className="text-teal-500" /> Inbox
              <span className="text-sm font-medium bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 select-none">
                {messages.length}
              </span>
            </h1>
          </header>

          <motion.div
            className="overflow-y-auto flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <MessageListItem
                    key={msg.id}
                    msg={msg}
                    isSelected={selectedMessage?.id === msg.id}
                    onSelect={handleSelectMessage}
                  />
                ))
              ) : (
                <div className="text-center p-10 text-gray-500 select-none">
                  <FiInbox size={40} className="mx-auto" />
                  <p className="mt-4">Your inbox is empty!</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </aside>

        {/* Right Pane: Message Content */}
        <main
          className={`flex-1 flex flex-col h-[calc(100vh-4rem)] ${
            !selectedMessage ? "hidden md:flex" : "flex"
          }`}
        >
          {selectedMessage ? (
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedMessage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full"
                aria-live="polite"
              >
                <header className="p-4 border-b h-16 flex items-center justify-between shrink-0 sticky top-0 bg-white z-10">
                  <div>
                    <h2 className="font-bold text-lg">{selectedMessage.subject}</h2>
                    <p className="text-sm text-gray-500">
                      From: {selectedMessage.name} &lt;{selectedMessage.email}&gt;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 whitespace-nowrap">
                    <time
                      className="text-sm text-gray-500 flex items-center gap-2"
                      dateTime={selectedMessage.date}
                    >
                      <FaRegClock />
                      <span>{format(parseISO(selectedMessage.date), "PPpp")}</span>
                    </time>
                    <button
                      onClick={() => openDeleteModal(selectedMessage.id)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
                      aria-label="Delete message"
                      type="button"
                    >
                      <FaTrashAlt size={16} />
                    </button>
                  </div>
                </header>
                <section className="p-6 md:p-8 flex-1 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                  {selectedMessage.message}
                </section>
                {/* Mobile back button */}
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="md:hidden bg-teal-600 text-white font-bold py-3 w-full hover:bg-teal-700 transition"
                  type="button"
                >
                  ← Back to Inbox
                </button>
              </motion.article>
            </AnimatePresence>
          ) : (
            <section className="flex flex-col items-center justify-center h-full text-gray-400 bg-gray-50 select-none">
              <FaEnvelopeOpenText size={60} />
              <p className="mt-4 text-lg">Select a message to read</p>
            </section>
          )}
        </main>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-2xl p-8 m-4 max-w-sm w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="delete-modal-title"
              aria-describedby="delete-modal-desc"
            >
              <h3
                id="delete-modal-title"
                className="text-xl font-bold text-gray-800"
              >
                Delete Message
              </h3>
              <p id="delete-modal-desc" className="text-gray-600 mt-2">
                Are you sure you want to permanently delete this message?
              </p>
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-5 py-2 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-5 py-2 rounded-lg font-medium text-white bg-red-600 hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactInbox;
