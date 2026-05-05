# Foodit (음식 관리 시스템)

Foodit은 음식 정보를 등록, 수정, 삭제하고 정렬 및 검색할 수 있는 React 기반의 음식 관리 시스템입니다.

---

## 🚀 주요 기능 (Features)

- **음식 관리 (CRUD)**
  - 음식의 이름, 칼로리, 설명을 등록할 수 있습니다.
  - 기존의 음식 정보를 수정하거나 삭제할 수 있습니다.
- **정렬 기능 (Sorting)**
  - 최신 등록된 순서대로 정렬이 가능합니다.
  - 칼로리가 낮은 순/높은 순으로 정렬할 수 있습니다.
- **검색 기능 (Search)**
  - 음식의 이름 및 설명을 기준으로 실시간 검색을 지원합니다.
- **반응형 UI**
  - 깔끔한 UI 컴포넌트 구조 설계 및 스타일링이 적용되었습니다.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Library**: React, Vite
- **Language**: JavaScript (또는 TypeScript)
- **Styling**: CSS / CSS Modules / Tailwind CSS

---

## 📁 프로젝트 구조 (Folder Structure)

```text
foodit/
├── public/              # 정적 자원 (이미지, 파비콘 등)
├── src/
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   │   ├── Food/        # 음식 CRUD 핵심 컴포넌트 (Form, List, Item)
│   │   ├── FormControls/# 공통 입력 요소 (Input, Textarea)
│   │   ├── Layout/      # 전체 페이지 레이아웃 컴포넌트
│   │   ├── Modal/       # 수정 및 알림용 모달 컴포넌트
│   │   └── Header, Footer, Button
│   ├── contexts/        # 전역 상태 관리 (음식 데이터 및 검색/정렬 상태)[cite: 1]
│   ├── utils/           # 유틸리티 함수 (날짜 포맷팅 등)
│   ├── App.jsx          # 메인 로직 및 라우팅
│   ├── main.jsx         # 애플리케이션 진입점
│   └── mock.json        # 초기 테스트용 목업 데이터
├── index.html           # HTML 템플릿
├── package.json         # 프로젝트 의존성 및 스크립트 설정[cite: 1]
└── README.md            # 프로젝트 문서
```

## 📦 시작 가이드 (Getting Started)

1. 저장소 클론 및 의존성 설치

```
# 저장소 복제
git clone https://github.com/damdadaxx/foodit.git

# 해당 디렉토리로 이동
cd foodit

# 패키지 설치
npm install
```

2. 개발 서버 실행

```
npm run dev
```
