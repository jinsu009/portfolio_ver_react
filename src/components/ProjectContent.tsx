import React from "react";
import { ProjectArrayProps } from "./types";
import readMore from "../assests/icons/read_more_sq.svg";
import { useNavigate } from "react-router-dom";

const ProjectContent = ({ data }: { data: ProjectArrayProps }) => {
  const navigate = useNavigate();

  const moveProjectPage = () => {
    const projectID = data.project_code.replace(/\s+/g, "-");
    // 상세 페이지로 이동하는 로직 구현
    console.log(`Move to detail page of project: ${data.project_name}`);
    navigate(`/project/projectdetail/${projectID}`);
  };
  return (
    <>
      <div className="project_col">
        <div className="project_row">
          <p className="row_title">project_name</p>
          <p className="row_content">{data.project_name}</p>
          <img
            src={readMore}
            alt="더보기"
            className="read_more_icon"
            onClick={() => moveProjectPage()}
          />
        </div>
        <div className="project_row">
          <p className="row_title">project_period</p>
          <p className="row_content">
            {data.start_date} ~ {data.end_date}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;

/**

    // 1. props 전체를 받고 (타입 지정)
    const ProjectContent = (props: { data: ProjectArrayProps }) => {
    
    // 2. props 객체에서 data 속성을 꺼내 사용
    const data = props.data; 
    
    // 3. 이후 로직에서 'data' 변수를 사용
    return (
        <p>{data.project_name}</p>
    );
};

 */
