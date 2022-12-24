import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";

import "./StateCounter.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> Section 1 </h1>
      <Navbar />
      <HeroSection />
      <AppSection />
      <CardSection />
      <Footer />
      <hr />
      <h1> Section 2 </h1>
      <div className="App">
        <header>
          <h2> counter app using state/hooks</h2>
        </header>
        <h2> Current value of the count is:- {count}</h2>
        <button onClick={() => setCount(0)}> Reset Couň̌ter</button>
        <button onClick={() => (count > 10 ? "" : setCount(count + 1))}>
          Increase Couň̌ter
        </button>
        <button onClick={() => (count === 0 ? "" : setCount(count - 1))}>
          {" "}
          Decrease Couň̌ter
        </button>
      </div>
    </div>
  );
};

export default App;
