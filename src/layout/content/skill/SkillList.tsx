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
  }, []);

  return (
    <div className="list_wrapper">
      <div className="title_left_blue_bar ">
        <div className="item_title">Beginner</div>
        <div className="skill_item_wrapper">
          {beginner.map((item: string, index: number) => {
            return (
              <div className="skill_item" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="title_left_blue_bar ">
        <div className="item_title">Intermediate</div>
        <div className="skill_item_wrapper">
          {intermediate.map((item: string, index: number) => {
            return (
              <div className="skill_item" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="title_left_blue_bar ">
        <div className="item_title">Proficient</div>
        <div className="skill_item_wrapper">
          {proficient.map((item: string, index: number) => {
            return (
              <div className="skill_item" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
