//* 인터페이스
//* 기본적인 기능은 모두 타입 별칭과 동일

//* 차이점 : 인터페이스는 유니온타입이나 인터섹션 타입을 지원하지 않음

//* 헝가리안 표기법으로 I를 붙이는경우도 있음 팀 컨벤션에 따를 것 ex) IPerson
interface Person {
  readonly name: string;
  age?: number;
  //* 만약 메서드 오버로딩을 쓰고싶다면 호출 시그니처를 사용해야함(식별자가 중복되기 때문에)
  //* sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: 'John',
  age: 30,
  sayHi: () => {
    console.log('Hi');
  },
};

//* person.name = 'Jane';
person.sayHi();
person.sayHi(1, 2);
