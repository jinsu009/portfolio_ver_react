import React from "react";

const EducationInfo = (props: { information: any }) => {
  {
    /* --- 학력 정보 섹션: 별도 섹션으로 유지 --- */
  }
  return (
    <div className="about_info">
      <div className="section_title">Education</div>
      {props.information.map((info: any, idx: number) => (
        <div className="item_container edu_item" key={idx}>
          <div className="item_header">
            <span className="item_name">{info.school}</span>
            <span className="item_period"> ({info.period})</span>
          </div>
          <div className="item_detail">
            {info.major && <span className="edu_major">{info.major} | </span>}
            {info.degree && (
              <span className="edu_degree">{info.degree} | </span>
            )}
            <span className="edu_status">{info.status}</span>
            {info.location && (
              <span className="item_location"> ({info.location})</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationInfo;
