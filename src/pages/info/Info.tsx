import React from "react";
import my_info from "../../data/my_info.json";
import "./Info.css";
import PersonalInfo from "../../components/PersonalInfo";
import EducationInfo from "../../components/EducationInfo";
import AboutInfo from "../../components/AboutInfo";

const info_data = my_info[0];

export const Info = () => {
  const { career, education, certifications } = info_data;

  return (
    <>
      <div className="basic_info">
        <div className="section_title">About Me</div>
        <div className="section_content">
          <div className="content">
            <PersonalInfo
              item="Name"
              nameInfo={[info_data.name, info_data.eng_name]}
            />
            <PersonalInfo item="Birth" other={info_data.birth} />
            <PersonalInfo item="Phone" other={info_data.phone} />
            <PersonalInfo item="Mail" other={info_data.email} />
            <PersonalInfo item="Git" other={info_data.github} />
          </div>
          <div className="image_content"></div>
        </div>
      </div>

      <AboutInfo type="career" information={career} />
      <EducationInfo information={education} />
      <AboutInfo type="certifications" information={certifications} />
    </>
  );
};
