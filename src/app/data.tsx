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

export const uuid = self.crypto.randomUUID();

// 요소 100를 가진 배열 생성
export const chain = Array.from({ length: 110 }, (_, i) => i);

export const images = [
  'https://picsum.photos/200/300?random=1',
  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=3',
  'https://picsum.photos/200/300?random=4',
  'https://picsum.photos/200/300?random=5',
];

export const bodyPartsList = ['가슴', '어깨', '하체', '등', '팔'];

export const data = [
  
  {
    name: 'Page B',
    체중: 80,
    지방량: 28,
    골격근량: 51,
  },
  {
    name: 'Page C',
    체중: 76,
    지방량: 27,
    골격근량: 52,
  },
  {
    name: 'Page D',
    체중: 77,
    지방량: 24,
    골격근량: 55,
  },
  {
    name: 'Page E',
    체중: 77,
    지방량: 20,
    골격근량: 60,
  },
  {
    name: 'Page F',
    체중: 77,
    지방량: 19,
    골격근량: 62,
  },
  {
    name: 'Page G',
    체중: 77,
    지방량: 15,
    골격근량: 70,
  },
];

export const items = [
  { title: 'Item 1', description: 'This is item 1' },
  { title: 'Item 2', description: 'This is item 2' },
  { title: 'Item 3', description: 'This is item 3' },
  { title: 'Item 3', description: 'This is item 3' },
  { title: 'Item 3', description: 'This is item 3' },
  { title: 'Item 3', description: 'This is item 3' },
  { title: 'Item 3', description: 'This is item 3' },
  { title: 'Item 3', description: 'This is item 3' },
  { title: 'Item 3', description: 'This is item 3' },
  // Add as many items as you want
];