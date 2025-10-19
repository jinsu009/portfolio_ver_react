import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Info } from "../info/Info";
import { Skills } from "../skills/Skills";
import ProjectList from "../projects/ProjectList";

const useScrollGradient = (
  startColor: [number, number, number],
  endColor: [number, number, number]
) => {
  const [currentBgColor, setCurrentBgColor] = useState(
    `rgb(${startColor.join(",")})`
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      //스크롤 기능 영역 계산 (전체 문서 높이 - 뷰포트 높이)
      const maxScroll = docHeight - windowHeight;

      // 스크롤 진행률
      const scrollProgress =
        maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

      // 스크롤 진행률에 따라 각 색상 채널 값 계산
      const newColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * scrollProgress);
      });

      setCurrentBgColor(`rgb(${newColor.join(",")})`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startColor, endColor]);
  return currentBgColor;
};

// 💡 폰트 색상 변화 로직 추가
const useScrollColor = (
  startColor: [number, number, number],
  endColor: [number, number, number]
) => {
  const [currentColor, setCurrentColor] = useState(
    `rgb(${startColor.join(",")})`
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const maxScroll = docHeight - windowHeight;
      const scrollProgress =
        maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

      // 스크롤 진행률에 따라 색상 채널 값 계산
      const newColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * scrollProgress);
      });

      setCurrentColor(`rgb(${newColor.join(",")})`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startColor, endColor]);
  return currentColor;
};

export const Home = () => {
  // 배경 색상: 하늘색(밝음) -> 남색(어두움)
  const bgStartColor = [175, 211, 234] as [number, number, number];
  const bgEndColor = [27, 79, 131] as [number, number, number];
  const backgroundColor = useScrollGradient(bgStartColor, bgEndColor);

  // 💡 폰트 색상: 남색(어두움/진함) -> 흰색(밝음/연함)
  // 배경이 밝을 때 글자는 어둡게, 배경이 어두워질 때 글자는 밝게 설정
  const fontStartColor = [27, 79, 131] as [number, number, number]; // 시작: 진한 남색
  const fontEndColor = [255, 255, 255] as [number, number, number]; // 끝: 흰색
  const fontColor = useScrollColor(fontStartColor, fontEndColor);
  return (
    <div
      className="home_div"
      style={{
        backgroundColor,
      }}
    >
      <div className="intro_wrapper" style={{ color: fontColor }}>
        <p className="intro_comment">
          협업을 통해 기술적 시너지를 창출하는 풀스택 지향 개발자
        </p>
      </div>
      <div className="info_wrapper" style={{ color: fontColor }}>
        <Info fontColor={fontColor}/>
      </div>
      <div className="skills_wrapper" style={{ color: fontColor }}>
        <Skills fontColor={fontColor}/>
      </div>
      {/* project_wrapper는 이미 배경이 어두워진 상태이므로, 흰색으로 고정하거나 fontColor 적용 */}
      <div className="project_wrapper" style={{ color: fontColor }}>
        <ProjectList fontColor={fontColor} />
      </div>
    </div>
  );
};
