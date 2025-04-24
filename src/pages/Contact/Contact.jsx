import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 23.8103, // Example: Dhaka
  lng: 90.4125,
};

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0a1f44] mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6 transition-all duration-300">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-blue-100 border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border bg-blue-100 border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border bg-blue-100 border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-teal-700 transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Map & Social */}
          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={12}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>

            <div className="flex justify-center md:justify-start gap-6 text-teal-600 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-500 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
