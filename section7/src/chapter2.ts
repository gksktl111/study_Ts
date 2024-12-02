//* map 메서드

const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);
//* [2,4,6]

//* 배열의 타입을 T로 받으면 배열의 요소(item)은 당연히 T 타입이다
//* 그러나 mapㅇ의 콜백함수의 반환값이 무조건 T일 필요는 없다 그러므로 반환값으로 U를 지정해 반환 타입이 달라질 수 있게한다
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (item) => item * 2);
map(["hi", "hello"], (item) => parseInt(item));

//* forEach 메서드

//* forEach 메서드는 반환값이 없다 그러므로 배열의 T값과 배열의 요소 item의 타입만 T로 정의하면 끝
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const arr2 = [1, 2, 3];
forEach(arr2, (item) => console.log(item.toFixed()));

forEach(["123", "456"], (item) => console.log(item.split("")));
