//* 첫번째 사례

//* 매개변수의 타입이 다른경우 제네릭을 여러개 사용함

//* 타입 변수 이름은 자유롭게 지정할 수 있지만 일반적으로 다음과 같은 관례를 따름:
//* T: Type의 약자로 가장 기본적인 타입 변수
//* U, V, W: T 다음으로 사용되는 일반적인 타입 변수들
//* K: Key의 약자로 객체의 키 타입을 나타낼 때 사용
//* V: Value의 약자로 객체의 값 타입을 나타낼 때 사용
//* 보통 실무에서는 2-3개 정도가 일반적이며, 그 이상 필요한 경우는 드물다
//* 너무 많은 제네릭 타입 변수는 코드의 복잡성을 증가시킬 수 있음

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

//* 두번째 사례

//* 배열의 첫번째 요소의 타입으로 타입을 결정하고 싶을때 rest parameter처럼 매개변수를 사용
function retrunFirstValue<T>(data: [T, ...unknown[]]) {
  //* 호출전엔 unknown 타입이지만 호출후에는 타입이 결정됨
  return data[0];
}

let num = retrunFirstValue([0, 1, 2]);

let str = retrunFirstValue([1, "hello", "world"]);

//* 세번째 사례

//* extends 키워드는 우항의 프로퍼티를 좌항에 부여함
//* 타입 변수에 조건을 달아서 제한 가능함
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //* 3
let var2 = getLength("123456789"); //* 9
let var3 = getLength({ length: 10 }); //* 10
//* let var4 = getLength(10); //* length 프로퍼티가 없기때문에 에러
