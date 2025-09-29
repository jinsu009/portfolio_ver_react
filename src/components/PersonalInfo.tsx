import React from "react";

const PersonalInfo = (props: {
  item: string;
  nameInfo?: string[] | undefined;
  other?: string | undefined;
}) => {
  return (
    <div className="item_container">
      <div className="item_header">
        <span className="item_name">{props.item}</span>
      </div>
      <div className="name_content ">
        {props.item.toLowerCase() === "name" ? (
          <>
            <div className="name_ko">{props.nameInfo?.[0]}</div>
            &nbsp;(<div className="name_eng">{props.nameInfo?.[1]}</div>)
          </>
        ) : (
          <>{props.other}</>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
