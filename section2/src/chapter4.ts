// ** 타입 별칭 (type alias)
// ** 공통적으로 사용되는 타입들은 타입 별칭으로 만들기

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '박민규',
  nickname: '민규',
  birth: '2000.12.14',
  bio: '안녕하세요',
  location: '경기',
};

let user2: User = {
  id: 1,
  name: '아무무',
  nickname: '찐따',
  birth: '2000.12.14',
  bio: 'ㅠㅠ',
  location: '서울',
};

// ** 인덱스 시그니처
// ** 키와 벨류의 규칙을 토대로 타입을 정의하는 방법
// ** 객체가 규칙이 존재하고 매우 클경우 사용하면 좋음

type CountryCodes = {
  // ** 키는 문자열이고 벨류는 문자열인 객체
  [Key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  // ** 키는 문자열이고 벨류는 숫자인 객체
  [Key: string]: number;
  Korea: number; // ** 이런식으로 필수 프로퍼티를 넣어서 만약 빈객체가 생기는 경우를 방지 가능함 또한 키 벨류의 타입은 인덱스 시그니처의 타입과 일치 또는 호환 해야함
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
