import React from "react";
import { CareerProjectProps } from "./types";

const CareerInfo = (props: { info: CareerProjectProps }) => {
  const career = props.info;

  if (!career || !career.company) {
    return <div>경력 정보가 없습니다.</div>;
  }

  return (
    <>
      {/* 1. 메인 회사 정보 */}
      <div className="career_header" style={{ marginBottom: "20px" }}>
        <div
          className="item_content"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}
        >
          {career.company}
        </div>
        <div
          className="item_content"
          style={{ fontSize: "1em", color: "#555" }}
        >
          {career.department} | {career.position} ({career.start_date} ~{" "}
          {career.end_date}, {career.period})
        </div>
      </div>

      {/* 3. 이직 사유 (선택 사항) */}
      {/* <div className="job_change_reason" style={{ marginTop: "30px" }}>
        <div
          className="item_title"
          style={{
            color: "#000",
            borderBottom: "2px solid #ccc",
            paddingBottom: "5px",
          }}
        >
          이직 사유
        </div>
        <div
          className="item_content"
          style={{ fontSize: "0.95em", marginTop: "10px" }}
        >
          {career.reason_for_job_change}
        </div>
      </div> */}
    </>
  );
};

export default CareerInfo;
