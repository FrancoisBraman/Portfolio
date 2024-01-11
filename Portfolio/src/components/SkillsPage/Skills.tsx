import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import "./Skills.css";
import reactlogo from "../../assets/react_logo.png"
import React from "react";

const Skills = () => {
  return (
    <div className="skills_container">
      <Header />
      <h1>Langages</h1>
      <div className="languages_container">
        <div className="card">
          <img src={reactlogo} alt="react_logo" />
          <div className="card_title">React</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Skills;