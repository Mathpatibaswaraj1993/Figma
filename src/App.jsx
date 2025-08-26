import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Content from "./components/Content";
import Form from "./components/Form";
import CallByAction from "./components/CallByAction";
import PricingSection from "./components/PricingSection";
import Showcase from "./components/Showcase";
import Testmonial from "./components/Testmonial";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import Feature from "./components/Feature";

function App() {
  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="relative h-screen flex flex-col items-center   text-white"
        style={{ backgroundImage: "url('/first.jpg')" }}
      >
        {/* ✅ Navbar */}
        <header className="flex  py-6 text-white fixed-top-0  w-full bg-transparent text-white z-50 relative z-10 ml-200 mt-5">
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

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/70 to-indigo-700/70"></div>

        {/* Content */}
        <div className="relative z-10 px-4 mt-30">
          <p className="text-sm mb-4 ml-60">Startup 3</p>
          <h1 className="text-5xl font-bold mb-6 ml-26">Forget About Code</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Startup Framework gives you complete freedom over your creative
            process — you don’t have to think about any technical aspects. There
            are no limits and absolutely no coding.
          </p>
        </div>
      </div>
      <Content />
      <Feature />
      <Form />
      <Testmonial />
      <CallByAction />
      <Showcase />
      <PricingSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<h1 className="text-center">Home Page</h1>} />
        <Route
          path="/features"
          element={<h1 className="text-center">Features Page</h1>}
        />
        <Route
          path="/pricing"
          element={<h1 className="text-center">Pricing Page</h1>}
        />
        <Route
          path="/blog"
          element={<h1 className="text-center">Blog Page</h1>}
        />
        <Route
          path="/world"
          element={<h1 className="text-center">World Page 🌐</h1>}
        />
        <Route
          path="/be"
          element={<h1 className="text-center">Behance Page Bē</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
