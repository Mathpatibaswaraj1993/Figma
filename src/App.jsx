import HeroCarousel from "./components/HeroCarousel";
import Features from "./components/Feature";
import PricingSection from "./components/PricingSection";
import Blog from "./components/Showcase";
import Team from "./components/TeamSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Form from "./components/Form";
import Testmonial from "./components/Testimonials";
import CallByAction from "./components/CallByAction";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      {/* Main Sections */}
      <main className="flex-1">
        <HeroCarousel />
        <Content />
        <Features />
        <Form />
        <Testimonials />
        <CallByAction />
        <Showcase />
        <Team />
        <Contact />
        <PricingSection />
        <Footer />

        {/* Footer
        <footer className="w-full text-white py-4 text-center mx-auto">
          <Footer />
        </footer> */}
      </main>
    </div>
  );
}
