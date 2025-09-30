import React, { useEffect } from "react";
import "./ProjectList.css";
import project_info from "../../data/my_info.json";
import ProjectInfo from "../../components/ProjectInfo";

const ProjectList = () => {
  // 1. 현재 보여줄 슬라이드의 인덱스를 관리
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [projectList, setProjectList] = React.useState<any[]>([]);
  const [projectCnt, setProjectCnt] = React.useState(0);

  // 4. 한 번에 몇개의 항목을 이동시킬지 결정
  const slidesPerMove = 1;

  // 5. 이전 버튼 핸들러 (무한 루프 적용)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      // 현재 인덱스가 0이면, 마지막 인덱스로 이동 (projectCnt - 1)
      prevIndex === 0 ? projectCnt - 1 : prevIndex - slidesPerMove
    );
  };

  // 6. 다음 버튼 핸들러 (무한 루프 적용)
  const handleNext = () => {
    const maxIndex = projectCnt - slidesPerMove;
    setCurrentIndex((prevIndex) =>
      // 현재 인덱스가 마지막 인덱스이면, 0으로 이동
      prevIndex === maxIndex ? 0 : prevIndex + slidesPerMove
    );
  };

  // 7. 랜더링할 프로젝트 항목 배열 설정
  const projects = Array.from({ length: projectCnt }, (_, index) => index);

  // 현재 선택된 프로젝트 객체
  const currentProject = projects[currentIndex];

  useEffect(() => {
    setProjectList(project_info[0].career.projects);
    setProjectCnt(project_info[0].career.projects.length);
  }, []);

  return (
    <>
      <div className="project_viewport">
        <button className="carousel_buttons prev" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="project_list">
          <ProjectInfo
            projectList={projectList}
            currentProject={currentProject}
          />
        </div>
        <button className="carousel_buttons next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </>
  );
};

export default ProjectList;
