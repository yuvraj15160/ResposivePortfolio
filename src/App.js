import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Card/Experience/Experience";
import Works from "./Components/Works/Work";
import "./App.css";
import Portfolio from "./Components/Porfolio/Portfolio";
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
