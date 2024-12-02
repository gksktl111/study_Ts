//* 분산적인 조건부 타입

//* [T] extends [Number] 이렇게 대괄호를 달아주면 분산적이지 않은 조건부 타입으로 변환됨
//* 예를 들어 <number | string> extends Number ? string : number; 처럼 유니온 타입이 한번에 들어가서 계산됨
//* 이때 number | string은 Number의 서브타입이 아니므로 number가 반환됨
type StringNumberSwitch<T> = T extends Number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

//* 조건부 타입에 유니온 타입을 전달하면 분산적인 조건부 타입으로 변함
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<number | string | boolean>;
//* 1단계
//* StringNumberSwitch<number> |
//* StringNumberSwitch<string> |
//* StringNumberSwitch<boolean>

//* 2단계
//* string |
//* number |
//* number

//* 결과
//* string | number

//* 실용적인 예제
//* 특정 타입을 제외한 나머지 타입을 반환하는 예제

//* 타입변수 T가 U의 서브타입이면 never를 반환하고 아니면 T를 반환
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

//* 1단계
//* Exclude<number, string> |
//* Exclude<string, string> |
//* Exclude<boolean, string>

//* 2단계
//* number |
//* never |
//* boolean

//* 결과 (never는 공집합이므로 애초에 합집합에서 제외됨)
//* number | boolean

//* Exclude와 정확히 반대로 동작
//* 특정 타입만 추출하는 예제
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

//* 1단계
//* Extract<number, string> |
//* Extract<string, string> |
//* Extract<boolean, string>

//* 2단계
//* never |
//* string |
//* never

//* 결과 (never는 공집합이므로 애초에 합집합에서 제외됨)
//* string
