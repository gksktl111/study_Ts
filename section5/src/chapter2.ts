//* 인터페이스 선언 합침

//* 타입 별칭에서는 선언 중복으로 에러가 나지만 인터페이스에선 선언 합침이 일어나기 때문에 에러가 나지 않음
//* 그러나 가독성 저하, 의도하지 않은 타임 확장, 충돌 가능성 등의 문제가 있음

interface Person {
  name: string;
}

interface Person {
  //*   name: number; //* 충돌 에러 무조건 같아야함 서브 타입도 X
  age: number;
}

const person: Person = {
  name: 'John',
  age: 30,
};

//* 사용처는 라이브러리의 타입이 부실할때 모듈 보강을위해 사용함
//* 모듈 보강

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,

  //* 보통 라이브러리 타입은 프로퍼티 추가가 불가능함 이럴때 선언 합침을 사용하여 추가적으로 프로퍼티의 추가가 가능해짐
  c: 'hello',
};
