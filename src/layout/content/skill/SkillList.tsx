import React, { useEffect, useState } from "react";
import "./SkillList.css";
import skillData from "../../../data/skills.json";

const SkillList = () => {
  const [beginner, setBeginner] = useState<string[]>([]);
  const [intermediate, setIntermediate] = useState<string[]>([]);
  const [proficient, setProficient] = useState<string[]>([]);

  useEffect(() => {
    setBeginner(skillData[1]?.Beginner ?? []);
    setIntermediate(skillData[1]?.Intermediate ?? []);
    setProficient(skillData[1]?.Proficient ?? []);

    console.log(beginner);
  }, [beginner]);

  return (
    <div>
      <div className="skill_category">Beginner</div>
      <div className="skill_item_wrapper">
        {beginner.map((item: string, index: number) => {
          return <div className="skill_item">{item}</div>;
        })}
      </div>
    </div>
  );
};

export default SkillList;
