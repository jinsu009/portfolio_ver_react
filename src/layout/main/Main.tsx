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
        <SectionTitle title="Career & Education" />
        <SectionContent type={"career"} />
      </div>
      {/* career_container end */}
      <div className="preview_project">
        <SectionTitle title="Project Preview" />
        <SectionContent type={"project"} />
      </div>
      {/* preview_project end */}
    </div>
  );
};

export default Main;
