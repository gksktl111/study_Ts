// * 대수 타입
// * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// * -> 합집합 타입과 교집합 타입이 존재

// * 1. 합집합 - Union 타입
// * -> 여러개의 타입 중 하나의 타입만 가질 수 있는 타입
let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (string | number | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

// * 타입 별칭으로도 유니온 타입을 만들수 있음
type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
};

let union2: Union1 = {
  name: '',
  language: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// * 집합상으로 존재 불가능한 객체임
// ! let union4: Union1 = {name: '',};

// * 2. 교집합 타입 - Intersection 타입
// * -> & 연산자를 사용해서 교집합 타입을 만들수 있음

// * 아래 타입은 불가능 하므로 never 타입으로 선언됨
let variable: string & number;

// * 주로 객체 타입에 많이 사용

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
