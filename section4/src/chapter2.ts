//* 함수 타입의 호환성
//* 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
//* 1. 반환갑의 타입이 호환되는가
//* 2. 매개변수의 타입이 호환되는가

//* 기준1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

//* 판단 방법은 우항을 좌항으로 취급하겠다 (여기서 업,다운 캐스팅을 판단)
a = b; //* number 리터럴 타입을 (우항 b를)  nubmer 타입으로 취급하겠다 (좌항 a로), 호환됨 (업 캐스팅)
// b = a; //* number 타입을 (우항 a를) number 리터럴 타입으로 취급하겠다 (좌항 b로), 호환 안됨 (다운 캐스팅)

//* 기준 2. 매개변수가 호환되는가

//* 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//* c = d; //* 반환값으로 호환성을 판단할때와는 다르게 반대로 업캐스팅일때 호환이 안됨
d = c; //* 위에서 업캐스팅이 안되므로 다운캐스팅이 되어 호환됨

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//* animalFunc = dogFunc; //* 호환 안됨

//* 만약 해당식이 허용이 되는경우 아래와 같이 존재하지 않는 프로퍼티를 참조하려는 런타임 에러가 생길수 있음

// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);
// };

dogFunc = animalFunc; //* 호환 됨

//* 기본적으로 Dog 타입은 Animal 타입의 프로퍼티를 모두 갖고있기 때문에 오류 X
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

//* 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; //* 호환 됨
//*func2 = func1; //* 호환 안됨, 할당 하려는쪽(우항)의 매개변수가 더적을때만 호환됨, 또한 최소한의 타입도 같아야함
