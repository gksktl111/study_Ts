// ** enum 타입
// ** 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  // ** 숫자를 할당하지 않아도 자동으로 0부터 할당함
  // ** 만약 특정 숫자를 할당하면 그 숫자부터 차례대로 할당함
  ADMIN = 10,
  USER,
  GUEST,
}

enum Language {
  Korean = 'ko',
  English = 'en',
}

const uset1 = {
  name: '박민규',
  role: Role.ADMIN, // ** 0번은 관리자
  language: Language.Korean, // ** 따로 입력할 경우 헷갈리는 경우가 생김 그런걸 방지 가능함
};

const uset2 = {
  name: '아무개',
  role: Role.USER, // ** 1번은 일반 유저
};

const uset3 = {
  name: 'jon doe',
  role: Role.GUEST, // ** 2번은 게스트
};

console.log(uset1, uset2, uset3);
