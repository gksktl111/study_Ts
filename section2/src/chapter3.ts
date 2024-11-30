// ** 객체의 구조를 기준으로 타입을 정함
// ** 구조적 타입 시스템
// ** Property-based type system 이라고도 함

let user: {
  // ** 프로퍼티의 타입까지 모두 정의하는 방식 리터럴과 비슷하게 생겨서 객체 리터럴 타입이라고 함
  id?: number; // ** 옵셔널 프로퍼티
  name: string;
} = {
  id: 1,
  name: '박민규',
};

let dog: {
  name: string;
  color: string;
} = {
  name: '멍멍이',
  color: 'white',
};

user = {
  name: '박민규',
};

let config: {
  readonly apiKey: string; // ** readonly 프로퍼티를 추가해 변경 불가능하게 만듦
} = {
  apiKey: 'my-api-key',
};

// config.apiKey = 'my-api-key'; // ** 이러한 코드를 방지
