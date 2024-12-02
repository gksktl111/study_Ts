//* infer는 조건부 타입 내에서 타입 추론을 할 때 사용하는 키워드입니다.
//* extends 절 내부에서만 사용할 수 있으며, 추론된 타입을 담을 타입 변수 (주로 R이라는 이름을 사용) 를 선언합니다.

type FuncA = () => string;
type FuncB = () => number;

//* ReturnType<T>는 제네릭 타입 T가 함수 타입일 경우,
//* infer R을 통해 함수의 반환 타입을 R이라는 타입 변수에 캡처합니다.
//* 조건이 참이면 추론된 타입 R을 반환하고, 거짓이면 never를 반환합니다.
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; //* string 타입이 됨
type B = ReturnType<FuncB>; //* number 타입이 됨

//* 함수 타입이 아니므로 never 타입이 됨
type C = ReturnType<number>; //* never 타입이 됨

// 예제

// 1. T는 Promise 타입이어야 한다
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다
// 3. 조건이 참이면 프로미스 타입의 결과값 타입 R을 반환하고, 거짓이면 never를 반환합니다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string

type PromiseC = PromiseUnpack<Promise<boolean>>;
// boolean
