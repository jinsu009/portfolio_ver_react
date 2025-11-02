import React, { useState, useRef } from "react";
import "./ProjectList.css";
import next from "../../../assests/icons/next.svg";
import before from "../../../assests/icons/before.svg";
import ProjectContent from "./ProjectContent";
import projectData from "../../../data/career_project.json";

const ProjectList = () => {
  const TOTAL_PROJECT_LENG = projectData.projects.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlide = (direction: "next" | "prev") => {
    let newIndex = currentSlide;
    // case 1 : 유한루프
    /*
      if (direction === "next") {
      // 현재 index가 마지막보다 작을 때만 +1
      // 마지막이면 현재 index 유지
      newIndex =
        currentSlide < TOTAL_PROJECT_LENG - 1 ? currentSlide + 1 : currentSlide;
    } else {
      // 현재 index가 0보다 클 때만 -1
      // 0이면 현재 index 유지
      newIndex = currentSlide > 0 ? currentSlide - 1 : currentSlide;
    }
    */

    // case 2 : 무한루프
    if (direction === "next") {
      // 마지막 index(TOTAL - 1)이면 0 으로 아니면 +1
      newIndex = currentSlide === TOTAL_PROJECT_LENG - 1 ? 0 : currentSlide + 1;
    } else {
      // 첫 index라면 마지막으로 아니면 -1
      newIndex = currentSlide === 0 ? TOTAL_PROJECT_LENG - 1 : currentSlide - 1;
    }

    setCurrentSlide(newIndex);

    if (sliderRef.current) {
      // 각 프로젝트의 너비는 100%dlamfh 인덱스 * -100 만큼 이동
      const translateXValue = newIndex * -100;
      // console.log(" translateXValue : " + translateXValue);
      sliderRef.current.style.transform = `translateX(${translateXValue}%)`;
    }
  };
  return (
    <div className="project_wrapper">
      <img
        src={before}
        alt="next"
        className="arrow before-arrow"
        onClick={() => moveSlide("prev")}
      />
      <div className="project_slider_container">
        <div className="project_slider" ref={sliderRef}>
          {projectData.projects.map((project, index) => (
            <ProjectContent key={index} data={project} />
          ))}
        </div>
      </div>
      <img
        src={next}
        alt="next"
        className="arrow next-arrow"
        onClick={() => moveSlide("next")}
      />
    </div>
  );
};

export default ProjectList;
