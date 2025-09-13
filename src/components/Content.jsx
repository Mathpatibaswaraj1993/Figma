import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/form1.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="uppercase tracking-widest text-sm md:text-base font-medium mb-4">
          Free Sample
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          Powerful Generator and Free <br /> Figma Sources
        </h1>
        <p className="text-sm md:text-lg text-gray-200">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design. All of the components are
          made in the same style, and can easily be integrated into projects,
          allowing you to create hundreds of solutions.
        </p>
      </div>
    </section>
  );
}
