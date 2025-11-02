import React from "react";
import { EducationItem } from "./types";

const EducationInfo = (props: { info: EducationItem[] }) => {
  if (!props.info || props.info.length === 0) {
    return <div>학력 정보가 없습니다</div>;
  }
  return (
    <>
      {props.info.map((edu, index) => (
        <div key={index} className="edu_item" style={{ marginBottom: "15px" }}>
          <div
            className="item_content"
            style={{ fontWeight: "bold", fontSize: "1.1em" }}
          >
            {edu.school} ({edu.degree ? edu.degree : edu.status})
          </div>
          <div
            className="item_content"
            style={{ fontSize: "0.95em", color: "#555" }}
          >
            {edu.major && <span>{edu.major} | </span>}
            {edu.period}
          </div>
          <div
            className="item_content"
            style={{ fontSize: "0.9em", color: "#777" }}
          >
            {edu.status}
            {edu.location && <span> ({edu.location})</span>}
          </div>
          {index < props.info.length - 1 && (
            <div
              style={{ borderBottom: "1px dotted #ccc", marginTop: "10px" }}
            ></div>
          )}
        </div>
      ))}
    </>
  );
};

export default EducationInfo;
