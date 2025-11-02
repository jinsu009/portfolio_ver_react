import React from "react";
import "./CareerList.css";
import EducationInfo from "../../../components/EducationInfo";
import aboutInfo from "../../../data/about_me.json";
import careerInfo from "../../../data/career_project.json";
import CareerInfo from "../../../components/CareerInfo";
import CertificateInfo from "../../../components/CertificateInfo";

const CareerList = () => {
  const eduInfo = aboutInfo.education;
  const certificateInfo = aboutInfo.certifications;
  return (
    <div className="list_wrapper">
      <div className="title_left_blue_bar ">
        <div className="item_title">Career</div>
        <div className="item_content">
          <CareerInfo info={careerInfo} />
        </div>
      </div>
      <div className="title_left_blue_bar ">
        <div className="item_title">Education</div>
        <div className="item_content">
          <EducationInfo info={eduInfo} />
        </div>
      </div>
      <div className="title_left_blue_bar ">
        <div className="item_title">Certifications</div>
        <div className="item_content">
          <CertificateInfo info={certificateInfo} />
        </div>
      </div>
    </div>
  );
};

export default CareerList;
