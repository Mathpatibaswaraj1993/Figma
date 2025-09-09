import HeroCarousel from "./components/HeroCarousel";
import Features from "./components/Feature";
import PricingSection from "./components/PricingSection";
import Blog from "./components/Showcase";
import Team from "./components/TeamSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Sections */}
      <main className="flex-1">
        <HeroCarousel />
        <Features />
        <PricingSection />
        <Blog />
        <Team />
        <Contact />
      </main>

      {/* ✅ Fixed Footer */}
      <footer className="w-full bg-gray-900 text-white py-4 text-center">
        <Footer />
      </footer>
    </div>
  );
}
