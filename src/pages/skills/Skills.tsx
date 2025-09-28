import React from "react";
import "./Skills.css";
import SkillGroups from "../../components/SkillGroups";

import skill_info from "../../data/skills.json";

export const Skills = () => {
  const skills = skill_info[1];
  return (
    <div className="skills_info section_group">
      <div className="section_title">Skills</div>
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
