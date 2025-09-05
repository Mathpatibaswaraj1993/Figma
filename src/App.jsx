import { useState, useRef } from "react";
import HeroCarousel from "./components/HeroCarousel";
import Content from "./components/ContactSection.jsx";
import Testmonial from "./components/Testmonial.jsx";
import Form from "./components/Form";
import Feature from "./components/Feature";
import CallByAction from "./components/CallByAction";
import ContactSection from "./components/ContactSection.jsx";
import Featured from "./components/Featured.jsx";
import PricingSection from "./components/PricingSection.jsx";
import Showcase from "./components/Showcase.jsx";
import TeamSection from "./components/TeamSection.jsx";
import Footer from "./components/Footer.jsx";
import { Link } from "react-router-dom";

export default function App() {
  const sections = [
    <HeroCarousel />,
    <Content />,
    <Feature />,
    <Form />,
    <Testmonial />,
    <CallByAction />,
    <Showcase />,
    <PricingSection />,
    <TeamSection />,
    <ContactSection />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Handle navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    const width = window.innerWidth;
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % sections.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + sections.length) % sections.length);
  };

  return (
    <>
      {/* ✅ Navbar (Fixed, not sliding) */}
      <header className="fixed top-0 left-0 w-full py-6 px-10 text-white bg-transparent z-50">
        <nav className="flex space-x-10 text-lg font-medium">
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
          <Link to="/world" className="hover:opacity-50">
            🌐
          </Link>
          <Link to="/be" className="hover:opacity-50">
            Bē
          </Link>
        </nav>
      </header>

      {/* ✅ Horizontal Slider */}
      <main className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden snap-x snap-mandatory h-screen w-screen scroll-smooth"
        >
          {sections.map((Section, index) => (
            <section
              key={index}
              className="flex-shrink-0 w-screen h-screen snap-center flex items-center justify-center"
            >
              {Section}
            </section>
          ))}
        </div>

        {/* ◀ ▶ Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
        >
          ▶
        </button>

        {/* 🔘 Dots Navigation */}
        <div className="absolute bottom-6 flex space-x-3">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </main>

      {/* ✅ Footer (Fixed after slider) */}
      <Footer />
    </>
  );
}
