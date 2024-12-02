//* 제네릭 (일반적인, 포괄적인)
//* 제네릭 함수 (모든 타입이에 두루두루 사용가능한 함수)

//* any와의 차이점으론 컴파일 시점에서 타입을 체크하여 타입 안정성을 보장함
//* any는 타입 정보가 완정히 손실되지만 제네릭은 타입 정보를 유지하면서 다양한 타입에 대해
//* 재사용이 가능하다

//* 제네릭 함수
//* T (타입 변수)
//* 제네릭의 타입은 함수가 호출 될때 결정됨

function func<T>(value: T): T {
  return value;
}

let num = func(100);
//* num.toUpperCase();
num.toFixed();

let bool = func(true);

let str = func("Hello");

//* 함수 호출시에 함수에 타입변수를 지정해주면 T에 해당타입으로 타입이 결정되어 호출된다
let arr = func<[number, number, number]>([1, 2, 3]);
