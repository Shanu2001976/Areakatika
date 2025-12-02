import React from "react";
import "./Home.css";
import homeimage from "../assets/homeimage.jpg";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <img src={homeimage} alt="Hero Banner" className="hero-image" />
    </section>
  );
}

export default Home;
