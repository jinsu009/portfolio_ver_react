import React from "react";
import skill_info from "../../data/skills.json";

export const Skills = () => {
  const [skills, setSkills] = React.useState(skill_info);
  console.log(skill_info);
  React.useEffect(() => {}, []);

  return <div>skills</div>;
};
