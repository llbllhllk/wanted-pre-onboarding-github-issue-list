# Github Issue Web

특정 리포지토리(facebook/react)의 이슈 목록을 확인하는 페이지입니다.

🗓️ 진행 기간: 약 2일 (2023.08.29 ~ 2023.08.31)

💡 개발 인원 : 1인 [@강병현](https://github.com/llbllhllk)

※ 본 과제는 [원티드 프리온보딩 인턴십 8월](https://www.wanted.co.kr/events/pre_ob_fe_12)를 바탕으로 진행되었습니다.

<br>

## 🧑🏻‍💻 프로젝트 정보

### 실행 방법

- [배포링크]()

- 링크가 실행되지 않는 경우 아래 명령어를 순차적으로 입력하여 실행해주세요.
  ```jsx
  git clone https://github.com/llbllhllk/wanted-pre-onboarding-github-issue-list.git
  npm install
  npm start
  ```
  - 실행하기 위해서는 Node.js가 설치된 환경이 필요합니다.

### 프로젝트 구조

```jsx
src
 ┣ 📂 api         네트워크 api 호출관련 로직
 ┣ 📂 components  컴포넌트 분리
 ┃ ┣ common
 ┃ ┗ issue
 ┣ 📂 redux       전역 상태
 ┃ ┗ issues
 ┣ 📂 pages       페이지 분리
 ┃ ┣ Detail
 ┃ ┣ Home
 ┃ ┗ NotFound
 ┣ 📂 routes      라우팅
 ┗ 📂 types       타입 정의

```

### 기술 스택 및 사용한 라이브러리

- Create React App (+ typescript)
- react-router-dom : client-side routing용
- redux-toolkig: 전역 상태 관리
- styled-components : 컴포넌트 기반 css 처리
- react-markdown : 마크다운 파싱 및 html 변환

<br>

## 📝 구현 내용

### 주요 기능

- 지정한 조건에 맞는 데이터 요청 및 표시 (코멘트 수 많은 순, 열려있는 이슈 한정)
- 이슈 목록 및 상세 화면 기능 구현
- 에러 화면 구현
- Markdown 형식의 본문의 HTML 변환
- 무한 스크롤 및 데이터 요청 중 로딩 표시
- 특정 이슈 개수마다 정해진 광고 이미지 및 링크 표시

## 1. 무한 스크롤

### ✅ Assignment 1

<br>

## 추가 정보

### 배포

- 해당 프로젝트는 netlify를 통해 배포되었습니다. [배포링크]()
