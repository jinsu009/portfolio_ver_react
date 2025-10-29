export interface ProjectListProps {
  fontColor: string;
}

export interface SectionTitleProps {
  title: string;
  fontColor?: string; // CSS 색상값은 보통 문자열(string)입니다.
}

// 경력 고유 속성: 실제 전달되는 career 배열의 요소와 일치해야 합니다.
export type CareerItem = {
  company: string;
  tenure: string;
  department: string;
  position: string;
  projects?: any[] | undefined; // projects의 상세 타입도 정의하는 것이 좋습니다.
  이직사유: string;
};

// 자격증 고유 속성: 실제 certifications 배열의 요소와 일치해야 합니다.
export type CertificationItem = {
  name: string;
  date: string;
  serial_number: string;
  issuer: string;
};

// AboutInfoProps 정의: type에 따라 information 타입을 분기
export type AboutInfoProps =
  | { type: "career"; information: CareerItem }
  | { type: "certifications"; information: CertificationItem[] };

export type SectionContentType = {
  type: string;
};
