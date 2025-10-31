import React, { useEffect, useState } from "react";
import "./SkillList.css";
import skillData from "../../../data/skills.json";
import SkillGroups from "../../../components/SkillGroups";

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
      <SkillGroups title="Beginner" skills={beginner} />
      <SkillGroups title="Intermediate" skills={intermediate} />
      <SkillGroups title="Proficient" skills={proficient} />
    </div>
  );
};

export default SkillList;
