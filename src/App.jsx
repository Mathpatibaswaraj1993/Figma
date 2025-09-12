import HeroCarousel from "./components/HeroCarousel";
import Features from "./components/Feature";
import PricingSection from "./components/PricingSection";
import Blog from "./components/Showcase";
import Team from "./components/TeamSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Form from "./components/Form";
import Testmonial from "./components/Testmonial";
import CallByAction from "./components/CallByAction";
import Showcase from "./components/Showcase";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Sections */}
      <main className="flex-1">
        <HeroCarousel />
        <Content />
        <Features />
        <Form />
        <Testmonial />
        <CallByAction />
        <Showcase />
        <Team />
        <Contact />
        <PricingSection />
      </main>

      {/* ✅ Fixed Footer */}
      <footer className="w-full bg-gray-900 text-white py-4 text-center">
        <Footer />
      </footer>
    </div>
  );
}
