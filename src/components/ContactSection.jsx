import React from "react";

export default function ContactSection() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage: "url('/Contact.jpg')",
      }} // replace with your own bg image
    >
      <div className="bg-orange/50 w-full max-w-6xl rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 p-10 text-white">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Keep in Touch</h2>
          <p className="mb-6 text-gray-300">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-2">📞 +1 555 505 5050</p>
            <p className="flex items-center gap-2">📧 info@designmodo.com</p>
            <p className="flex items-center gap-2">
              📍 San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
              230909
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8">
          <form className="space-y-5">
            {/* Name + Budget */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Budget</label>
                <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400">
                  <option>$500</option>
                  <option>$1000</option>
                  <option>$2000</option>
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Input Field
              </label>
              <input
                type="email"
                placeholder="name@mail.com"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>

            {/* Checkbox + Button */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="accent-teal-500" />
                <span>Send me a copy</span>
              </label>
              <button
                type="submit"
                className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
