import React from "react";

const CertificateInfo = (props: { info: any[] }) => {
  if (!props.info || props.info.length === 0) {
    return <div>자격증 정보가 없습니다.</div>;
  }

  return (
    <>
      {props.info.map((cert, index) => (
        <div key={index} className="cert_item" style={{ marginBottom: "15px" }}>
          <div
            className="item_content"
            style={{ fontWeight: "bold", fontSize: "1em" }}
          >
            {cert.name}
          </div>
          <div
            className="item_content"
            style={{ fontSize: "0.95em", color: "#555" }}
          >
            {cert.date} | {cert.issuer}
          </div>
          {cert.serial_number && (
            <div
              className="item_content"
              style={{ fontSize: "0.85em", color: "#999" }}
            >
              (No. {cert.serial_number})
            </div>
          )}
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

export default CertificateInfo;
