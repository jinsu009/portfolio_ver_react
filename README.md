# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 주요 기능 
- 반응형 디자인
- React Router를 활용한 페이지 전환
- 동적 슬라이더 UI 구현
- JSON 기반 데이터 관리

  ## 기술 스택
  ### Frontend
    - React : 컴포넌트 기반 UI 개발 및 상태 관리를 위한 핵심 라이브러리
    - TypeScript : 정적 타입 검사를 통한 코드 안정성 확보
    - React Router : SPA 환경에서 페이지 라우팅 및 URL관리
    - CSS/SCSS(Style-Components) : 모듈화된 스타일링 및 테마시스템 구축
 
  ### Tools & Deployment
    - Git/Github : 버전 관리
    - VS Code : 주요 개발환

## 프로젝트 구조 
/src
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── SectionTitle.tsx # 섹션 제목 컴포넌트
│   └── EducationInfo.tsx# 학력 정보 리스트 컴포넌트
├── data/                # JSON 데이터 관리 폴더 (정적 데이터)
│   ├── about_me.json    # 개인 정보 및 학력 정보
│   └── career_project.json # 경력 및 프로젝트 상세 정보
├── layout/              # 페이지 레이아웃 (Home, Main)
│   ├── content/         # 실제 콘텐츠 (AboutMe, SkillList 등)
│   └── Home.tsx         # 메인 페이지 구성
├── pages/               # 최상위 라우팅 페이지
│   ├── Main.tsx         # 라우터 및 헤더 포함 (전체 레이아웃)
│   └── DetailProject.tsx# 프로젝트 상세 페이지
└── App.tsx              # 최상위 컴포넌트
--------


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
