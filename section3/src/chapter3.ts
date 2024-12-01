// * 객체 타입간의 호환성
// * -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?

// * 객체 타입 또한 슈퍼,서브타입 관계를 가짐

// * 슈퍼타입
// * 조건이 더 적은 타입이 슈퍼타입이 됨
type Animal = {
  name: string;
  color: string;
};

// * 서브타입
type Dog = {
  name: string;
  color: string;
  breed: string; // * 추가 프로퍼티
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '진도',
  color: 'black',
  breed: '진돗개',
};

animal = dog; // * 업캐스팅 가능
// * dog = animal; // * 다운캐스팅 오류

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
  name: '파이썬',
  price: 10000,
  skill: 'python',
};

book = programmingBook; // * 업캐스팅 가능
// * programmingBook = book; // * 다운캐스팅 오류

// * 초과 프로퍼티 검사
// * 변수를 초기화 할때 초과 프로퍼티가 있으면 오류

let book2: Book = {
  name: '파이썬',
  price: 10000,
  // *   skill: 'python',
};

let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: '파이썬',
  price: 10000,

  // * 함수의 인수로 객체를 전달할때도 초과 프로퍼티 검사가 동작함
  // * skill: 'python',
});

func(programmingBook);
