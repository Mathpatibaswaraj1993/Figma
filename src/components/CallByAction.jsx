import React from "react";
// import bgImage from "../assets/call1.jpg"; // make sure path & case are correct

export default function CallByAction() {
  return (
    <div>
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        //   style={{ backgroundColor: ({bg-color}) }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0  bg-opacity-40"
          style={{ backgroundImage: "url('/Call2.jpg')" }}
        ></div>

        <div className="relative z-10 text-center text-white  px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Easy to setup. <br /> Easy to maintain
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl mb-6">
            Bootstrap is a widely-used, sleek, intuitive and powerful front-end
            framework for faster and easier web development.
          </p>

          <div className="flex justify-center items-center space-x-4">
            {/* Play Button */}
            <button className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full hover:bg-red-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Get Started Button */}
            <button className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-full hover:bg-teal-500 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
