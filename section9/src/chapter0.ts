//* 조건부 타입

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};
type ObjB = {
  a: number;
  b: number;
};

//* 조건부 타입은 왼쪽 타입이 오른쪽 타입의 서브타입인지 체크함

type B = ObjB extends ObjA ? number : string;

//* 제네릭과 조건부 타입
//* 제네릭과 사용하면 유용

type StringNumberSwitch<T> = T extends Number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

//* 오버로드 시그니처를 활용하면 조건부 타입을 더 정확하게 처리할 수 있음
//* 그냥 사용시 함수 내부에서 타입 단언을 활용해야 하는 문제가 생김 (any 사용)
//* 오버로드 시그니처를 활용하면 이런 문제를 해결할 수 있음 (ts가 자동을 감지해줌)
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces('Hello, world!');
result.toLowerCase();

let result2 = removeSpaces(undefined);
