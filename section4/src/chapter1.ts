//* 함수 타입 표현식 (function type expression)

type Operation = (a: number, b: number) => number;

//* 깔끔하게 타입을 지정 가능

//* 타입 별칭은 우항의 타입을 짧게 쓰기 위하여 사용하는것 이므로 같은 우항을 그대로 넣어도 무방
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

//* 호출 시그니처 (call signature)
//* 함수 타입 표현식과 동일한 기능을 함

type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;
