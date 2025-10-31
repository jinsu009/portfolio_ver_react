import React from "react";
import { ProjectArrayProps } from "./types";

const ProjectContent = ({ data }: { data: ProjectArrayProps }) => {
  return (
    <>
      <div className="project_col">
        <div className="project_row">
          <h2>project_name</h2>
          <p>{data.project_name}</p>
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
