import React from "react";
import ProfileData from "../../../components/ProfileData";
import aboutInfo from "../../../data/about_me.json";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about_container">
      <ProfileData
        title="Name"
        contentData={aboutInfo.name}
        engName={aboutInfo.eng_name}
      />
      <ProfileData title="Birth" contentData={aboutInfo.birth} />
      <ProfileData title="Address" contentData={aboutInfo.add} />
      <ProfileData title="Mail" contentData={aboutInfo.email} />
      <ProfileData title="Phone" contentData={aboutInfo.phone} />
      <ProfileData title="Git" contentData={aboutInfo.github} />
    </div>
  );
};

export default AboutMe;
