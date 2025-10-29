import React from "react";
import "./Main.css";
import AboutMe from "../content/about/AboutMe";
import myPhoto from "../../assests/images/19930107.jpg";

const Main = () => {
  return (
    <div className="main_container">
      <h2>Main container</h2>
      <div className="about_me_container">
        <div className="section_title">
          <h2>About Me</h2>
        </div>
        <div className="section_content">
          <AboutMe />
          <img src={myPhoto} alt={"증명사진"} className="my_photo" />
        </div>
      </div>
      {/* about_me_container end */}
      <div className="skill_container">
        <h2>Skill Container</h2>
      </div>
      {/* skill_container end */}
      <div className="career_container">
        <h2>career Container</h2>
      </div>
      {/* career_container end */}
      <div className="preview_project">
        <h2>Preview Project</h2>
      </div>
      {/* preview_project end */}
    </div>
  );
};

export default Main;
