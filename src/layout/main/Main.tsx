import React from "react";
import "./Main.css";
import SectionTitle from "../../components/SectionTitle";
import SectionContent from "../../components/SectionContent";

const Main = () => {
  return (
    <div className="main_container">
      <h2>Main container</h2>
      <div className="about_me_container">
        <SectionTitle title="About Me" />
        <SectionContent type={"aboutme"} />
      </div>
      {/* about_me_container end */}
      <div className="skill_container">
        <SectionTitle title="Skill" />
        <SectionContent type={"skill"} />
      </div>
      {/* skill_container end */}
      <div className="career_container">
        <h2>Career Container</h2>
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
