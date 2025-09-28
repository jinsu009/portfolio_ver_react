import React from "react";

type SkillGroupsProps = {
  title: string;
  skills: string[] | undefined;
};

const SkillGroups = (props: SkillGroupsProps) => {
  console.log(props.skills);
  return (
    <div>
      <div className="skill_container">
        <div className="item_title">{props.title}</div>
        <div className="items">
          {props.skills?.map((skill, index) => (
            <div className="item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillGroups;
