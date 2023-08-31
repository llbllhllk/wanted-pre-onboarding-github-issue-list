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
 ┃ ┣ 📂 common
 ┃ ┃ ┣ 📄 Add.tsx
 ┃ ┃ ┣ 📄 Container.tsx
 ┃ ┃ ┣ 📄 Header.tsx
 ┃ ┃ ┗ 📄 Loading.tsx
 ┣ 📂 redux       전역 상태
 ┃ ┗ 📂 issues
 ┃ ┃ ┣ 📄 IssueDetail.tsx
 ┃ ┃ ┣ 📄 IssueList.tsx
 ┃ ┃ ┗ 📄 IssueListItem.tsx
 ┣ 📂 pages       페이지 분리
 ┃ ┣ 📄 Detail.tsx
 ┃ ┣ 📄 Home.tsx
 ┃ ┗ 📄 NotFound.tsx
 ┣ 📂 routes      라우팅
 ┃ ┗ 📄 Router.tsx
 ┗ 📂 types       타입 정의

```

### 기술 스택 및 사용한 라이브러리

- Create React App (+ typescript)
- react-router-dom : client-side routing용
- redux-toolkit: 전역 상태 관리
- styled-components : 컴포넌트 기반 css 처리
- react-markdown : 마크다운 파싱 및 html 변환

<br>

## 🎉 Preview

| 이슈 목록                                                                                                      | 이슈 상세                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![무한스크롤](https://github.com/notusing11/react-issues/assets/33623123/92523090-5e16-4df2-8d17-5169ccd1ce6e) | ![목록 선택](https://github.com/notusing11/react-issues/assets/33623123/147b046c-b038-47aa-a9a4-b09c561c7dec) |

## 📝 구현 내용

### ✅ Assignment 1

> - 이슈 목록 가져오기 API 활용
> - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
> - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
> - 다섯번째 셀마다 광고 이미지 출력
> - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

<br />

### 이슈 목록 가져오기 API 활용

- axios instance를 정의하고 issue에 필요한 정보만 return하도록 구현 함.
- asyncThunk와 createSlice를 통해 data, loading을 관리 함.

### 이슈 목록 화면

- api호출시 parameter를 통해 open상태와 comments가 많은 순으로 sorting하여 데이터를 받음.
- `(index + 1) % 5 === 0`조건을 통해 `<Ad />`컴포넌트를 렌더링 함.
- loading이 pending 상태일 경우 `<Loading />`컴포넌트를 렌더링 함.

### 무한 스크롤

- eventListener의 scroll이벤트를 이용하여 fetchAllIssues를 호출해 데이터를 추가하도록 구현 함.

<br>

### ✅ Assignment 2

> - 이슈의 상세 내용 표시
> - '이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

<br/>

### 이슈 상세 화면

- react-router-dom의 Link를 통해 특정 IssueNumber를 기반으로 동적라우팅 처리.
- IssueNumber와 일치하는 데이터를 찾고 존재할 경우 기존 `<IssueLIstItem />`컴포넌트에서 추가로 프로필 이미지와 본문을 표기하도록 함.
- 본문은 react-markdown의 ReactMarkdown을 사용 함.

<br />

### ✅ Assignment 3

> - 두페이지는 공통 헤더를 공유합니다.
> - 헤더에는 Organization Name / Repository Name이 표시됩니다

<br />

### 공통 헤더

- store의 organization과 repository를 `<Header />` 컴포넌트의 props로 전달 함.

<br />

## 추가 정보

### 배포

- 해당 프로젝트는 netlify를 통해 배포되었습니다. [배포링크]()
