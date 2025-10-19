import React, { useEffect } from "react";

// 경력 고유 속성: 실제 전달되는 career 배열의 요소와 일치해야 합니다.
type CareerItem = {
  company: string;
  tenure: string;
  department: string;
  position: string;
  projects?: any[] | undefined; // projects의 상세 타입도 정의하는 것이 좋습니다.
  이직사유: string;
};

// 자격증 고유 속성: 실제 certifications 배열의 요소와 일치해야 합니다.
type CertificationItem = {
  name: string;
  date: string;
  serial_number: string;
  issuer: string;
};

// AboutInfoProps 정의: type에 따라 information 타입을 분기
type AboutInfoProps =
  | { type: "career"; information: CareerItem }
  | { type: "certifications"; information: CertificationItem[] };

const AboutInfo = (props: AboutInfoProps) => {
  const [sectionTitle, setSectionTitle] = React.useState("");

  useEffect(() => {
    if (props.type === "career") {
      setSectionTitle("Career");
    } else if (props.type === "certifications") {
      setSectionTitle("Certifications");
    }
  }, [props.type]);

  const isCareer = props.type === "career";

  // information을 항상 배열 형태로 정규화합니다.
  const itemsToRender = isCareer
    ? [props.information as CareerItem] // Career 객체를 배열로 감쌈
    : (props.information as CertificationItem[]); // Certifications 배열 그대로 사용

  return (
    <div>
      <div className="about_info ">
        <div className="section_title">{sectionTitle}</div>

        {/* 맵핑: itemsToRender는 항상 배열이므로 안전하게 .map 사용 가능 */}
        {itemsToRender.map((data, idx) => {
          let itemName: string;
          let itemPeriod: string;
          let itemDetail: string;

          // 타입 좁히기(Type Narrowing)를 활용하여 각 속성에 접근
          if (props.type === "career") {
            // data가 CareerItem 타입임을 가정하고 접근
            const careerData = data as CareerItem;
            itemName = careerData.company; // 회사 이름
            itemPeriod = careerData.tenure; // 재직 기간
            itemDetail = `부서/직책: ${careerData.department} / ${careerData.position}`;
          } else {
            // data가 CertificationItem 타입임을 가정하고 접근
            const certData = data as CertificationItem;
            itemName = certData.name; // 자격증 이름
            itemPeriod = certData.date; // 취득 날짜
            itemDetail = `발행처: ${certData.issuer}`;
          }

          return (
            <div
              className={`item_container ${
                isCareer ? "career_item" : "cert_item"
              }`}
              key={idx}
            >
              {/* item_header */}
              <div className="item_header">
                <span className="item_name">{itemName}</span>
                <span className="item_period"> ({itemPeriod})</span>
              </div>

              {/* item_detail */}
              <div className="item_detail">
                <span>{itemDetail}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutInfo;
