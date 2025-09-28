import React, { use, useEffect } from "react";
import my_info from "../../data/my_info.json";
import "./Info.css";
import AboutInfo from "../../components/AboutInfo";

const info_data = my_info[0];

export const Info = () => {
  const { certifications, education } = info_data;

  return (
    <>
      <div className="basic_info">
        <div className="section_title">About Me</div>
        <div className="section_content">
          <div className="content">
            <AboutInfo
              item="Name"
              nameInfo={[info_data.name, info_data.eng_name]}
            />
            <AboutInfo item="Birth" other={info_data.birth} />
            <AboutInfo item="Phone" other={info_data.phone} />
            <AboutInfo item="Mail" other={info_data.email} />
            <AboutInfo item="Git" other={info_data.github} />
          </div>
          <div className="image_content"></div>
        </div>
      </div>

      {/* --- Career --- */}
      <div className="career_info section_group">
        <div className="section_title">Career</div>
        {certifications.map((cert, index) => (
          <div className="item_container cert_item" key={index}>
            <div className="item_header">
              <span className="item_name">{cert.name}</span>
              <span className="item_period"> ({cert.date})</span>
            </div>
            <div className="item_detail">
              <span>발행처: {cert.issuer}</span>
            </div>
          </div>
        ))}
      </div>

      {/* --- 학력 정보 섹션: 별도 섹션으로 유지 --- */}
      <div className="education_info section_group">
        <div className="section_title">Education</div>
        {education.map((edu, index) => (
          <div className="item_container edu_item" key={index}>
            <div className="item_header">
              <span className="item_name">{edu.school}</span>
              <span className="item_period"> ({edu.period})</span>
            </div>
            <div className="item_detail">
              {edu.major && <span className="edu_major">{edu.major} | </span>}
              {edu.degree && (
                <span className="edu_degree">{edu.degree} | </span>
              )}
              <span className="edu_status">{edu.status}</span>
              {edu.location && (
                <span className="item_location"> ({edu.location})</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- 자격증 정보 섹션: 별도 섹션으로 유지 --- */}
      <div className="certifications_info section_group">
        <div className="section_title">Certifications</div>
        {certifications.map((cert, index) => (
          <div className="item_container cert_item" key={index}>
            <div className="item_header">
              <span className="item_name">{cert.name}</span>
              <span className="item_period"> ({cert.date})</span>
            </div>
            <div className="item_detail">
              <span>발행처: {cert.issuer}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
