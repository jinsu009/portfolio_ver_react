import React from "react";
import { ProjectArrayProps } from "../../../components/types";
import readMore from "../../../assests/icons/read_more_sq.svg";
import { useNavigate } from "react-router-dom";
import "./ProjectContent.css";

const ProjectContent = ({ data }: { data: ProjectArrayProps }) => {
  const navigate = useNavigate();

  const moveProjectPage = () => {
    const projectID = data.project_code;
    // 상세 페이지로 이동하는 로직 구현
    console.log(`Move to detail page of project: ${data.project_name}`);
    navigate(`/project/projectdetail/${projectID}`);
  };

  // 배열 데이터를 쉼표 없이 태그 형태로 출력하는 헬퍼 함수
  const renderTags = (items: string[]) => (
    <div className="tag_content">
      {items.map((item, index) => (
        <span key={index} className="project_tag">
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="project_container_wrapper">
      <div className="project_col">
        <div className="project_row">
          <p className="row_title">프로젝트명</p>
          <div className="project_name_wrapper">
            <p className="row_content">{data.project_name}</p>
            <img
              src={readMore}
              alt="더보기"
              className="read_more_icon"
              onClick={moveProjectPage}
            />
          </div>
        </div>

        {/* 2. 진행 기간 */}
        {/* <div className="project_row">
          <p className="row_title">기간</p>
          <p className="row_content">
            {data.start_date} ~ {data.end_date} ({data.period})
          </p>
        </div> */}

        {/* 3. 기술 스택 (배열을 태그로 출력) */}
        <div className="project_row">
          <p className="row_title">기술 스택</p>
          {/* row_content 대신 tag_content 클래스를 직접 사용 */}
          {renderTags(data.stack)}
        </div>

        {/* 4. 프로젝트 담당 (배열을 태그로 출력) */}
        <div className="project_row">
          <p className="row_title">담당</p>
          {/* row_content 대신 tag_content 클래스를 직접 사용 */}
          {renderTags(data.position)}
        </div>
      </div>
    </div>
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
