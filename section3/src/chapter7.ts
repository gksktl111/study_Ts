/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

// * value => number : toFixed 적용
// * value => string : toUpperCase 적용
// * value => Date : getTime 적용
// * value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
  // * 객체 타입의 보장을 위해 instanceof 타입 가드를 사용
  // * A가 B의 인스턴스(객체)인지 확인
  else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // * in 타입 가드 검사는 null값이 들어올 수 있으므로 && 연산자를 활용하여 값이 무조건 존재할때 동작하게하기
  else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
