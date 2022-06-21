import React from "react";
import "./About.css";
import image_small_square from "./Images/image_small_square.png";
import { useNavigate } from "react-router-dom";


function About() {
  let navigate = useNavigate();
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="image-wrap">
        <img src={image_small_square} alt="Anita" />
        </div>
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>As a web developer</p>
          <p>with a graphic design degree,</p>
          <p>I bring a wealth of skills to build </p>
          <p>your perfect website</p>
          <button className="button" onClick={() => {navigate("/Contact");}} >Enquire here</button>
        </div>
      </div>
    </div>
  );
}

export default About;
