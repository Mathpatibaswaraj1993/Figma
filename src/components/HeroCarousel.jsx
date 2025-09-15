import React from "react";
import { FaGlobe } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-blue-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800/50 to-purple-900/70"></div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-4 left-0 right-0 flex justify-center space-x-6 md:space-x-10 text-white font-medium text-sm md:text-base">
        <a href="#" className="hover:text-purple-300">
          Home
        </a>
        <a href="#" className="hover:text-purple-300">
          Features
        </a>
        <a href="#" className="hover:text-purple-300">
          Pricing
        </a>
        <a href="#" className="hover:text-purple-300">
          Blog
        </a>
        <a href="#" className="hover:text-purple-300">
          Bē
        </a>
        <a href="#" className="hover:text-purple-300">
          🌐
        </a>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 md:px-6">
        <h4 className="text-white text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-3">
          Startup 3
        </h4>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-snug">
          Forget About Code
        </h1>
        <p className="text-gray-200 text-sm md:text-base max-w-md md:max-w-2xl mb-6 md:mb-8">
          Startup Framework gives you complete freedom over your creative
          process — you don’t have to think about any technical aspects. There
          are no limits and absolutely no coding.
        </p>

        {/* Button */}
        <button className="px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold rounded-full shadow-lg transition">
          Create an Account
        </button>

        {/* Dots */}
        <div className="flex space-x-2 mt-6 md:mt-8">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        </div>
      </div>
    </div>
  );
}
