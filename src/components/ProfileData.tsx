import React from "react";

const ProfileData = (props: {
  title: string;
  contentData: string;
  engName?: string;
}) => {
  return (
    <div className="profile_wrapper">
      <div className="item_title">{props.title}</div>
      <div className="item_content">
        {props.contentData}&nbsp;
        {props.engName && "(" + props.engName + ")"}
      </div>
    </div>
  );
};

export default ProfileData;
