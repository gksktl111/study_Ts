//* 인터페이스 확장

interface Animal {
  name: string;
  age: number;
}

//* 타입 상속이 가능
interface Dog extends Animal {
  //* 자식 타입에서 동일한 프로퍼티 타입을 재정의 가능
  //* 단, 재정의 하는 타입은 부모 타입의 서브타입 이어야함
  //* name: number; //* 에러
  //*   name: ' hello'; 가능
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

//* 다중 확장 가능
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '멍멍이',
  age: 1,
  isBark: true,
  isScratch: true,
};
