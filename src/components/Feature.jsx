import React from "react";
import Featured from "./Featured";
import pagesIcon from "../assets/pagesIcon.svg";
import diamondIcon from "../assets/diamond.svg";
import laptopimg from "../assets/laptop.jpg";

const Feature = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-800 bg-cover bg-center"
      style={{ backgroundImage: "url('/feact2.jpg')" }}
    >
      {/* Overlay tint */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between p-8 md:p-16">
        {/* ✅ Left side - Laptop image */}
        <div className="md:w-1/2 flex justify-start mb-8 md:mb-0 md:mr-8">
          <img
            src={laptopimg}
            alt="Laptop mockup"
            className="w-full max-w-md rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* ✅ Right side - Text content */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Create Something New
          </h1>
          <p className="mb-8 max-w-lg text-lg text-gray-200">
            We have created a new product that will help designers, developers,
            and companies create websites for their startups quickly and easily.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Featured
              icon={pagesIcon}
              title="30 NEW FEATURE PAGES"
              description="Startup Framework contains components and complex blocks which can easily."
            />
            <Featured
              icon={diamondIcon}
              title="USEFUL SYMBOL COMPONENTS"
              description="Samples will show you the feeling on how to play around using the components."
            />
          </div>
        </div>

        {/* ✅ Pagination dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="w-2 h-2 rounded-full border border-white my-2"></div>
          <div className="w-2 h-2 rounded-full border border-white my-2 bg-white"></div>
          <div className="w-2 h-2 rounded-full border border-white my-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
