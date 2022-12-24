import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";

const App = () => {
  return (
    <div>
      <h1> vansh </h1>
      <Navbar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
