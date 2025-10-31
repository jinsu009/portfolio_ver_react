import React from "react";
import myPhoto from "../assests/images/19930107.jpg";
import { SectionContentType } from "./types";
import AboutMe from "../layout/content/about/AboutMe";
import SkillList from "../layout/content/skill/SkillList";
import CareerList from "../layout/content/career/CareerList";
import ProjectList from "../layout/content/project/ProjectList";

const SectionContent = (props: SectionContentType) => {
  return (
    <div className="section_content">
      {props.type === "aboutme" && (
        <>
          <AboutMe />
          <img src={myPhoto} alt={"증명사진"} className="my_photo" />
        </>
      )}
      {props.type === "skill" && (
        <>
          <SkillList />
        </>
      )}
      {props.type === "career" && (
        <>
          <CareerList />
        </>
      )}
      {props.type === "project" && (
        <>
          <ProjectList />
        </>
      )}
    </div>
  );
};

export default SectionContent;
