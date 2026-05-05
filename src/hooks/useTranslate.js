import useLocale from "./useLocale";

export default function useTranslate() {
  const locale = useLocale();

  const dict = {
    ko: {
      // 버튼
      "confirm button": "확인",
      "cancel button": "취소",
      "edit button": "수정",
      "delete button": "삭제",
      "create button": "추가하기",
      "load more": "더보기",
      "submit button": "등록하기",

      // 정렬
      "sort by latest": "최신순",
      "sort by calorie": "칼로리순",

      // 모달 제목
      "edit calorie": "칼로리 수정",
      "create calorie title": "칼로리 기록하기",

      // 입력 필드 Placeholder
      "enter the title": "제목을 입력해주세요",
      "enter the content": "내용을 입력해주세요",
      "enter the calorie": "칼로리를 입력해주세요",
      "enter the keyword": "검색어를 입력해주세요",

      // 언어 선택
      language: "한국어",

      // 푸터
      "terms of service": "서비스 이용약관",
      "privacy policy": "개인정보 처리방침",

      // 이미지 Alt 속성
      "search input icon": "검색어 인풋 아이콘",
      "food image": "등록할 이미지",
    },
    en: {
      // 버튼
      "confirm button": "Confirm",
      "cancel button": "Cancel",
      "edit button": "Edit",
      "delete button": "Delete",
      "create button": "Add",
      "load more": "Load More",
      "submit button": "Submit",

      // 정렬
      "sort by latest": "Latest",
      "sort by calorie": "Calorie",

      // 모달 제목
      "edit calorie": "Edit Calorie",
      "create calorie title": "Write Calorie",

      // 입력 필드 Placeholder
      "enter the title": "Enter title",
      "enter the content": "Enter content",
      "enter the calorie": "Enter Calorie",
      "enter the keyword": "Enter Keyword",

      // 언어 선택
      language: "English",

      // 푸터
      "terms of service": "Terms of Service",
      "privacy policy": "Privacy Policy",

      // 이미지 Alt 속성
      "search input icon": "Search Input Icon",
      "food image": "Food Image",
    },
  };

  const translate = (key) => dict[locale][key] || "";
  return translate;
}
