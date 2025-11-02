import React, { useEffect, useState } from "react";
import "./DetailProject.css";
import { useParams } from "react-router-dom";
import career_info from "../../../data/career_project.json";
import { ProjectArrayProps } from "../../../components/types";

/**
 * 사용자가 home에서 선택한 프로젝트의 code값을 받아서 출력시킨다.
 * @returns
 */
const DetailProject = () => {
  // useParams를 이용해 URL의 :id 값을 추출 > Main.tsx 에 정의한 이름과 일치
  const { id } = useParams();
  const [projectData, setProjectData] = useState<ProjectArrayProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setLoading(true);

      // JSON 파일에서 해당 ID를 가진 프로젝트를 찾는 비동기 로직
      career_info.projects.find((data) => {
        if (data.project_code === id) {
          console.log(data);
          setProjectData(data);
        }
      });

      setLoading(false);
    }
  }, [projectData]);

  if (!projectData) {
    return (
      <div className="detail_project_container">
        해당 프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="detail_project_container">
      <div className="detail_container_row">
        <div className="detail_container_title detail_container_col">
          프로젝트 명
        </div>
        <div className="detail_container_content detail_container_col">
          {projectData.project_name}
        </div>
      </div>
      <div className="detail_container_row">
        <div className="detail_container_title detail_container_col">
          진행기간
        </div>
        <div className="detail_container_content detail_container_col">
          {projectData.start_date} ~ {projectData.end_date} (
          {projectData.period})
        </div>
      </div>
      <div className="detail_container_row">
        <div className="detail_container_title detail_container_col">
          기술 스택
        </div>
        <div className="detail_container_content detail_container_col">
          <div className="skill_tag_container">
            <ul>
              {projectData.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="detail_container_row">
        <div className="detail_container_title detail_container_col">
          프로젝트 담당
        </div>
        <div className="detail_container_content detail_container_col">
          {projectData.position}
        </div>
      </div>
      <div className="detail_container_row">
        <div className="detail_container_title detail_container_col">
          프로젝트 내용
        </div>
        <div className="detail_container_content detail_container_col">
          {projectData.content}
        </div>
      </div>
      <div className="detail_container_row">
        <div className="detail_container_title detail_container_col">
          프로젝트 결과
        </div>
        <div className="detail_container_content detail_container_col">
          {projectData.result}
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
