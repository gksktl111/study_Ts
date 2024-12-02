//* keyof 연산자

//*  typeof 연산자는 타입을 정의할때 사용하면 객체의 타입을 추론해서 타입을 반환함
type Person = typeof person;

//* Person 객체의 타입으로 부터 유니온으로 타입을 추출함 (name | age)

//* keyof typeof 변수 이런 형태로도 사용가능
function getProperty(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: '박민규',
  age: 27,
};

getProperty(person, 'name'); //* 박민규
