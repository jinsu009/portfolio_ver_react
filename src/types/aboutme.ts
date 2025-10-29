/**
 * 1. 세부 정보 구조 (자격증, 학력)
 */

// 자격증 정보 타입
export interface Certification {
  name: string;
  date: string;
  serial_number: string;
  issuer: string;
}

// 학력 정보 타입
export interface Education {
  school: string;
  major: string;
  degree?: string; // 학위는 고등학교에 없을 수 있으므로 선택적(Optional) 처리
  status: string;
  period: string;
  location?: string; // 위치는 선택적 처리
}

/**
 * 2. 메인 정보 구조
 */
export interface MyInfo {
  name: string;
  eng_name: string;
  birth: string;
  add: string;
  email: string;
  phone: string;
  github: string;
  blog: string;
  introduce: string; // 서술형 소개글

  certifications: Certification[]; // Certification 타입의 배열
  education: Education[]; // Education 타입의 배열

  vision: string; // 개발 비전/목표
}
