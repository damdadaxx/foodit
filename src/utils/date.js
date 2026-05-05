// utils/dateFormatter.js
export const formatDate = (dateString) => {
  const d = new Date(dateString);

  // 날짜 데이터가 올바르지 않을 경우를 대비한 방어 코드
  if (isNaN(d.getTime())) return "날짜 없음";

  const year = d.getFullYear();
  // month는 0부터 시작하므로 +1, padStart로 2자리 유지
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${year}년 ${month}월 ${day}일`;
};
