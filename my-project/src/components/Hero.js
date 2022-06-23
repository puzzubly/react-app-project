import React from "react";
import "./Hero.css";

import { useNavigate } from "react-router-dom";

function Hero() {
  let navigate = useNavigate();
  return (
    <div className="hero">
      <div className="content">
        <p>..time to talk</p>
        <h1 className="heading">Web Development?</h1>
        <p>Let's build a website</p>
        <p>to suit the style</p>
        <p>of your business</p>
        <button
          className="button"
          onClick={() => {
            navigate("/Contact");
          }}
        >
          Free Consultation
        </button>
      </div>
    </div>
  );
}

export default Hero;
