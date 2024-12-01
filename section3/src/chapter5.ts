// * 타입 추론

let a: number = 1;
let b = 1;

// * 타입 추론 규칙
// * 1. 변수 선언 시 타입을 명시하면 해당 타입으로 추론
// * 2. 변수 선언 시 타입을 명시하지 않으면 할당되는 값에 따라 타입이 결정됨

// * 함수의 매개변수의 경우 타입 추론이 안되므로 명시적으로 타입을 선언해야함
// function func(param) {}

// * 변수의 초기값을 기준으로 타입을 추론함

let c = {
  id: 1,
  name: '홍길동',
  profile: {
    nickname: '홍길동',
  },
  url: ['https://www.naver.com'],
};

// * 객체의 구조 분해 할당을 진행해도 타입을 잘 추론함
let { id, name, profile, url } = c;

function func(message: 'hello') {
  return 'hello';
}

// * 암묵적 any 타입
// * 좋지않음
let d;

// * any 타입의 진화
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();

// * 상수로 선언되었기 때문에 리터럴 타입으로 추론됨
const num = 10;
const str = 'hello';

// * 유니온 타입으로 추론됨
let arr = [1, 'hello'];
