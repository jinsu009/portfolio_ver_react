import React from "react";
import { SectionTitleProps } from "./types";

// 2. 컴포넌트 함수에 Props 타입(SectionTitleProps)을 적용합니다.
const SectionTitle: React.FC<SectionTitleProps> = ({ title, fontColor }) => {
  return (
    <div className="section_title" style={{ color: fontColor }}>
      {title}
    </div>
  );
};

export default SectionTitle;
