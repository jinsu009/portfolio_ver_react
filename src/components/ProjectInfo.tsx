import React, { useEffect } from "react";

const ProjectInfo = (props: { projectList: any; currentProject: number }) => {
  return props?.projectList && props?.projectList.length > 0 ? (
    <div className="project_container" key={props.currentProject}>
      <div className="project_header">
        {props.projectList[props.currentProject]?.project_name}
      </div>
      <div className="project_body">
        <table className="project_list_table">
          <tr>
            <th>기간</th>
            <td>{props.projectList[props.currentProject]?.period}</td>
          </tr>
          <tr>
            <th>사용기술</th>
            <td>
              {props.projectList[props.currentProject]?.stack?.map(
                (data: any, idx: number) => (
                  <span
                    key={idx}
                    //className="tech-item"
                  >
                    {data}
                    {idx <
                      props.projectList[props.currentProject].stack.length -
                        1 && ", "}
                  </span>
                )
              )}
            </td>
          </tr>
          <tr>
            <th>도구</th>
            <td>
              {props.projectList[props.currentProject]?.tools?.map(
                (data: any, idx: number) => (
                  <span
                    key={idx}
                    //className="tool-item"
                  >
                    {data}
                    {idx <
                      props.projectList[props.currentProject].tools.length -
                        1 && ", "}
                  </span>
                )
              )}
            </td>
          </tr>
          <tr>
            <th>역할</th>
            <td>
              {typeof props.projectList[props.currentProject]?.position ===
                "object" &&
              props.projectList[props.currentProject]?.position.length > 1
                ? props.projectList[props.currentProject]?.position?.map(
                    (data: any, idx: number) => <div key={idx}>{data}</div>
                  )
                : props.projectList[props.currentProject]?.position}
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              {props.projectList[props.currentProject]?.work_history?.map(
                (data: any, idx: number) => (
                  <div key={idx}>{data}</div>
                )
              )}
            </td>
          </tr>
          <tr>
            <th>소감</th>
            <td>{props.projectList[props.currentProject]?.result}</td>
          </tr>
        </table>
      </div>
    </div>
  ) : null;

  /*  <div className="project_container" key={props.currentProject}>
      <div className="project_header">
       
      </div>
      <div className="porject_body">
        Project {props.currentProject + 1} body
      </div>
    </div> */
};

export default ProjectInfo;
