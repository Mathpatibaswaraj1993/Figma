import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Startup 3",
    heading: "Forget About Code",
    text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    button: "Create an Account",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Startup 3",
    heading: "Build Faster",
    text: "Quickly launch modern websites with responsive, pixel-perfect design.",
    button: "Get Started",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Startup 3",
    heading: "Design with Freedom",
    text: "No coding. Just creativity. Focus on what matters most.",
    button: "Join Now",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* ✅ Navbar */}
      <header className="absolute top-0 left-0 w-full py-6 px-10 flex justify-center md:justify-end space-x-10 text-white z-50 font-medium">
        <Link to="/" className="hover:opacity-50">
          Home
        </Link>
        <Link to="/features" className="hover:opacity-50">
          Features
        </Link>
        <Link to="/pricing" className="hover:opacity-50">
          Pricing
        </Link>
        <Link to="/blog" className="hover:opacity-50">
          Blog
        </Link>
        <Link to="/be" className="hover:opacity-50">
          Bē
        </Link>
      </header>

      {/* ✅ Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-white text-lg mb-2">{slide.title}</p>
            <h1 className="text-5xl font-bold text-white mb-4">
              {slide.heading}
            </h1>
            <p className="text-gray-200 max-w-2xl mb-6">{slide.text}</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
      >
        <ChevronRight size={28} />
      </button>

      {/* ✅ Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
