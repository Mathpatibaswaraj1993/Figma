import { useState, useRef, useEffect } from "react";
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

  // Robust scroll — uses each slide's element rather than window.innerWidth
  const goToSlide = (index) => {
    const container = sliderRef.current;
    if (!container) return;
    const slide = container.children[index];
    if (slide) {
      slide.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    } else {
      // fallback
      container.scrollTo({
        left: container.clientWidth * index,
        behavior: "smooth",
      });
    }
    // optimistic update (IntersectionObserver will also keep it correct)
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const next = (currentIndex + 1) % sections.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentIndex - 1 + sections.length) % sections.length;
    goToSlide(prev);
  };

  // Keep currentIndex in sync when user scrolls manually (or via buttons)
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const slides = Array.from(container.children);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = slides.indexOf(entry.target);
            if (idx !== -1) setCurrentIndex(idx);
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // consider a slide active when 60% visible
      }
    );

    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sections.length]);

  // optional: left/right keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <>
      {/* Navbar (Fixed) */}
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

      {/* Horizontal Slider */}
      <main className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <div
          ref={sliderRef}
          // overflow-x-auto works well; inline style for touch-action
          className="flex overflow-x-auto snap-x snap-mandatory h-screen w-screen scroll-smooth no-scrollbar"
          style={{ touchAction: "pan-x" }}
        >
          {sections.map((Section, index) => (
            <section
              key={index}
              // snap-start ensures left-aligned snapping (predictable)
              className="flex-shrink-0 w-screen h-screen snap-start flex items-center justify-center"
            >
              {Section}
            </section>
          ))}
        </div>

        {/* Prev / Next */}
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

        {/* Dots */}
        <div className="absolute bottom-6 flex space-x-3">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
