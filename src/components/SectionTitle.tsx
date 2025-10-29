import React from "react";
import { SectionTitleProps } from "./types";

const SectionTitle: React.FC<SectionTitleProps> = ({ title, fontColor }) => {
  return (
    <div className="section_title" style={{ color: fontColor }}>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
