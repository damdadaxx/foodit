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
├── public/              # 정적 자원 (기본 이미지 등)
├── src/
│   ├── components/      # UI 컴포넌트
│   │   ├── Food/        # 음식 목록/아이템 및 CRUD 폼
│   │   ├── FormControls/# Input, Select 및 새로 추가된 FileInput
│   │   ├── LocaleSelect/# 다국어 선택 컴포넌트
│   │   ├── Layout/      # Header, Footer를 포함한 전체 레이아웃
│   │   └── Modal/       # 피드백용 모달
│   ├── contexts/        # 전역 상태 (Locale)
│   ├── hooks/           # 커스텀 훅 (다국어 및 언어 설정)
│   ├── utils/           # 유틸리티 함수
│   │   ├── axios.js     # API 통신을 위한 Axios 인스턴스 설정
│   │   └── date.js      # 날짜 포맷팅 함수
│   ├── App.jsx          # 페이지네이션 로직 및 메인 상태 관리
│   ├── main.jsx         # 진입점
│   └── index.css        # 전역 및 초기화 스타일
├── package.json         # 의존성 관리 (axios 등)
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
