import { ALUMNI_NEWS_INFORMATION_TYPE } from "./../types/people/alumni-news-information";

export const GENERATIONS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
};

export enum OCCUPATIONS {
  DEVELOPER = "개발자",
  ENTREPRENEUR = "창업가",
  PM = "PM",
  CONSULTANT = "컨설턴트",
}

export const ALUMNI_NEWS_INFORMATION: ALUMNI_NEWS_INFORMATION_TYPE[] = [
  {
    gen: GENERATIONS.TWO,
    occupation: OCCUPATIONS.DEVELOPER,
    thumbnailImgSrc: "/images/alumni/cardnews/People_Google.png",
    comment: "경영학과 학부생이 구글 개발자가 되기까지",
    url: "https://www.instagram.com/p/C24sCRSh3vD/?utm_source=ig_web_copy_link",
    name: "강원준",
  },
  {
    gen: GENERATIONS.SEVEN,
    occupation: OCCUPATIONS.ENTREPRENEUR,
    thumbnailImgSrc: "/images/alumni/cardnews/People_Mesher.png",
    comment: "NEXT를 안했으면 내가 창업을 못하지 않았을까",
    url: "https://www.instagram.com/p/C24r5MfhDs4/?utm_source=ig_web_copy_link",
    name: "최주환/박지환",
  },
  {
    gen: GENERATIONS.NINE,
    occupation: OCCUPATIONS.PM,
    thumbnailImgSrc: "/images/alumni/cardnews/People_NC.png",
    comment: "제 커리어는 NEXT를 빼놓고는 설명할 수 없어요",
    url: "https://www.instagram.com/p/C24riffhy1b/?utm_source=ig_web_copy_link",
    name: "전해린",
  },
  {
    gen: GENERATIONS.SIX,
    occupation: OCCUPATIONS.DEVELOPER,
    thumbnailImgSrc: "/images/alumni/cardnews/People_Naver.png",
    comment: "좋은 사람들과 누구보다 치열하게 고민하고 개발하기",
    url: "https://www.instagram.com/p/C24sCRSh3vD/?utm_source=ig_web_copy_link",
    name: "이지현",
  },
  {
    gen: GENERATIONS.SIX,
    occupation: OCCUPATIONS.ENTREPRENEUR,
    thumbnailImgSrc: "/images/alumni/cardnews/People_CM.png",
    comment: "창업을 하면서 기댈 수 있는 동료들을 만난 곳",
    url: "https://www.instagram.com/p/C24r5MfhDs4/?utm_source=ig_web_copy_link",
    name: "유현재",
  },

  {
    gen: GENERATIONS.SIX,
    occupation: OCCUPATIONS.CONSULTANT,
    thumbnailImgSrc: "/images/alumni/cardnews/People_Bain.png",
    comment: "기획부터 구현까지 A to Z를 경험할 수 있는 곳",
    url: "https://www.instagram.com/p/C24riffhy1b/?utm_source=ig_web_copy_link",
    name: "방혜주",
  },
];
