import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Startup 1",
    heading: "Forget About Code",
    description:
      "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    button: "Create an Account",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Startup 2",
    heading: "Launch Faster",
    description:
      "Get your product online faster with beautiful pre-designed components and templates.",
    button: "Get Started",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Startup 3",
    heading: "Design Without Limits",
    description:
      "Easily customize layouts to match your vision. Build a unique online presence in minutes.",
    button: "Start Free Trial",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full flex justify-center py-6 z-20">
        <nav className="flex space-x-8 text-white text-lg font-medium">
          <a href="/" className="hover:opacity-70">
            Home
          </a>
          <a href="#features" className="hover:opacity-70">
            Features
          </a>
          <a href="#pricing" className="hover:opacity-70">
            Pricing
          </a>
          <a href="#blog" className="hover:opacity-70">
            Blog
          </a>
          <a href="#be" className="hover:opacity-70">
            Bē
          </a>
        </nav>
      </header>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.heading}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
            <p className="text-lg mb-2">{slide.title}</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slide.heading}
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-6">
              {slide.description}
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white text-lg font-semibold shadow-lg transition">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
