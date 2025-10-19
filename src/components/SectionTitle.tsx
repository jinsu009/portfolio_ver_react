import React from "react";

// 1. Props의 타입을 명확하게 정의합니다.
interface SectionTitleProps {
  title: string;
  fontColor: string; // CSS 색상값은 보통 문자열(string)입니다.
}

// 2. 컴포넌트 함수에 Props 타입(SectionTitleProps)을 적용합니다.
const SectionTitle: React.FC<SectionTitleProps> = ({ title, fontColor }) => {
  return (
    <div className="section_title" style={{ color: fontColor }}>
      {title}
    </div>
  );
};

export default SectionTitle;
