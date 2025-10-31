import React from "react";

type SkillGroupsProps = {
  title: string;
  skills: string[] | undefined;
};

const SkillGroups = (props: SkillGroupsProps) => {
  return (
    <div className="title_left_blue_bar">
      <div className="skill_container">
        <div className="item_title skill_title">{props.title}</div>
        <div className="skill_item_wrapper">
          {props.skills?.map((skill, index) => (
            <div className="skill_item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillGroups;
