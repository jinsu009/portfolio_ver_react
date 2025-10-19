import React, { useEffect } from "react";

const renderTags = (tags: string[]) => {
  return tags.map((tag, index) => (
    <span key={index} className="tech-item">
      {tag}
    </span>
  ));
};

const ProjectInfo = (props: { projectList: any; currentProject: number }) => {
  const project = props?.projectList[props?.currentProject];

  if (!project) return null;
  const hypen = "";

  return (
    <div className="project_container">
      <div className="project_header">{project.title}</div>
      <div className="project_body">
        {/* 1. 핵심 정보 카드 섹션: 기간, 기술, 도구 */}
        <div className="card_info_section">
          {/* 기간 정보 */}
          <div className="info_card_item">
            <h4>기간 (Duration)</h4>
            <p>{project.period}</p>
          </div>

          {/* 사용 기술 정보 */}
          <div className="info_card_item">
            <h4>사용 기술 (Tech Stack)</h4>
            {/* <p>{renderTags(project.tech_stack)}</p> */}
          </div>

          {/* 도구 정보 */}
          <div className="info_card_item">
            <h4>도구 (Tools)</h4>
           {/*  <p>{renderTags(project.tools)}</p> */}
          </div>
        </div>

        {/* 2. 상세 정보 섹션: 역할 */}
        <div className="card_detail_section">
          <h3 className="detail_header">주요 역할 (Role)</h3>
          <div className="detail_content">
            {/* 역할이 여러 줄일 경우 배열로 처리하거나, <br/> 태그 등을 사용할 수 있습니다. */}
            <p>{project.role_description}</p>
          </div>
        </div>

        {/* 3. 상세 정보 섹션: 내용/소감 */}
        <div className="card_detail_section">
          <h3 className="detail_header">내용 및 소감 (Summary & Reflection)</h3>
          <div className="detail_content">
            <p>{project.description}</p>
          </div>
        </div>

        {/* 4. 링크 버튼 섹션 (선택 사항) */}
         {/*{project.github_link && (
          <div className="project_links">
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="link_button"
            >
              GitHub 바로가기
            </a>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProjectInfo;
