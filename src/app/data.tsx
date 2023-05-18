interface SortOfWorkout {
  [key: string]: string[];
}

export const sortOfWorkout: SortOfWorkout = {
  가슴: ['플랫 벤치 프레스', '인클라인 벤치 프레스', '덤벨 프레스', '인클라인 덤벨 프레스'],
  어깨: ['밀리터리 프레스', '덤벨 숄더 프레스', '프론트 레이즈', '사이드 레터럴 레이즈'],
  하체: ['스쿼트', '레그 익스텐션', '레그컬', '런지', '힙스러스트'],
  등: ['랫 풀 다운', '시티드 로우', '풀 업'],
  팔: ['바벨 컬', '케이블 푸쉬 다운'],
};

export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  const dayString = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][day];
  const todayString = `${year}년 ${month}월 ${date}일 ${dayString}`;
  return todayString;
};
