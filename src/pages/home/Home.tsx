import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { start } from "repl";
import { Info } from "../info/Info";
import { Skills } from "../skills/Skills";

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

export const Home = () => {
  const startColor = [175, 211, 234] as [number, number, number];
  const endColor = [27, 79, 131] as [number, number, number];

  const backgroundColor = useScrollGradient(startColor, endColor);
  return (
    <div
      className="home_div"
      style={{
        backgroundColor,
      }}
    >
      <div className="intro_wrapper">
        <p className="intro_comment">
          협업을 통해 기술적 시너지를 창출하는 풀스택 지향 개발자
        </p>
      </div>
      <div className="info_wrapper">
        <Info />
      </div>
      <div className="skills_wrapper">
        <Skills />
      </div>
      <div className="career_wrapper">회사와 프로젝트를 어떻게 적을까.</div>
    </div>
  );
};
