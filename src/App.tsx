import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import MobileApps from "./pages/MobileApps";
import UiUxDesign from "./pages/UiUxDesign";
import CloudSolutions from "./pages/CloudSolutions";
import TechConsulting from "./pages/TechConsulting";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-black text-white flex flex-col">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/web-development"
                element={<WebDevelopment />}
              />
              <Route path="/services/mobile-apps" element={<MobileApps />} />
              <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
              <Route
                path="/services/cloud-solutions"
                element={<CloudSolutions />}
              />
              <Route
                path="/services/tech-consulting"
                element={<TechConsulting />}
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
