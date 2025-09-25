import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { start } from "repl";

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
  const startColor = [91, 173, 255] as [number, number, number];
  const endColor = [10, 80, 80] as [number, number, number];

  const backgroundColor = useScrollGradient(startColor, endColor);
  return (
    <div
      className="home_div"
      style={{
        backgroundColor,
      }}
    >
      Home
    </div>
  );
};
