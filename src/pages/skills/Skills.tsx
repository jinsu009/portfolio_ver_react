import React from "react";
import "./Skills.css";
import SkillGroups from "../../components/SkillGroups";
import SectionTitle from "../../components/SectionTitle";
import { ProjectListProps } from "../../components/types";

import skill_info from "../../data/skills.json";

export const Skills = ({ fontColor } : ProjectListProps)  => {
  const skills = skill_info[1];
  return (
    <div className="about_info">
      <SectionTitle title="Skills" fontColor={fontColor} />

      <div className="proficient">
        <SkillGroups title="Proficient" skills={skills.Proficient} />
      </div>
      <div className="intermediate">
        <SkillGroups title="intermediate" skills={skills.Intermediate} />
      </div>
      <div className="beginner">
        <SkillGroups title="Beginner" skills={skills.Beginner} />
      </div>
    </div>
  );
};
