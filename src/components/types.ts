export interface ProjectListProps {
  fontColor: string;
}

export interface SectionTitleProps {
  title: string;
  fontColor?: string; // CSS 색상값은 보통 문자열(string)입니다.
}

export interface EducationItem {
  school: string;
  major: string;
  status: string;
  period: string;
  degree?: string;
  location?: string; // location은 필수가 아닐 수 있으므로 ?를 붙입니다.
}

// 자격증 고유 속성: 실제 certifications 배열의 요소와 일치해야 합니다.
export type CertificationItem = {
  name: string;
  date: string;
  serial_number: string;
  issuer: string;
};

export type ProjectArrayProps = {
  project_code: string;
  project_name: string;
  start_date: string;
  end_date: string;
  period: string;
  stack: string[];
  tools: string[];
  position: string[];
  content: string[];
  work_history: string[];
  result: string[];
};

export type CareerProjectProps = {
  company: string;
  start_date: string;
  end_date: string;
  period: string;
  department: string;
  position: string;
  projects: ProjectArrayProps[];
  reason_for_job_change: string;
};

export type SectionContentType = {
  type: string;
};
