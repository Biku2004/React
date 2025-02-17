// import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "./Footer";


function App1() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App1;
