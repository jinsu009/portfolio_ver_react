import React, { useState, useRef } from "react";
import "./ProjectList.css";
import next from "../../../assests/icons/next.svg";
import before from "../../../assests/icons/before.svg";
import ProjectContent from "../../../components/ProjectContent";
import projectData from "../../../data/career_project.json";

const ProjectList = () => {
  const TOTAL_PROJECT = projectData.projects.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlide = (direction: "next" | "prev") => {
    console.log(" click " + direction);
    let newIndex = currentSlide;
    if (direction === "next") {
      newIndex =
        currentSlide < TOTAL_PROJECT - 1 ? currentSlide + 1 : currentSlide;
    } else {
      newIndex = currentSlide > 0 ? currentSlide - 1 : currentSlide;
    }
    setCurrentSlide(newIndex);

    if (sliderRef.current) {
      // 각 프로젝트의 너비는 100%dlamfh 인덱스 * -100 만큼 이동
      const translateXValue = newIndex * -90;
      sliderRef.current.style.transform = `translateX(${translateXValue}%)`;
    }
  };
  return (
    <div className="project_wrpper">
      <img
        src={before}
        alt="next"
        className="arrow before-arrow"
        onClick={() => moveSlide("prev")}
      />
      <div className="project_slider_container">
        <div className="project_slider" ref={sliderRef}>
          <ProjectContent />
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
