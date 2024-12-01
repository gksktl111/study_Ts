// * 함수 타입 정의

// * 함수를 설명하는 가장 좋은 방법
// * 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// * 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는 이야기

function func(a: number, b: number): number {
  return a + b;
}

// * 화살표 함수의 타입을 정의하는 방법

const add = (a: number, b: number): number => a + b;

// * 함수의 매개변수

// * 선택적 매개변수는 필수 매개변수의 앞에 올 수 없음
function introduce(name = '박민규', tall?: number) {
  console.log(`안녕하세요 ${name} 입니다.`);
  // * 원래는 tall이 undefined일 수 있기 때문에 오류가 나지만 타입 가드를 통해 타입을 좁혀 오류를 해결 가능
  if (typeof tall === 'number') {
    console.log(`키는 ${tall + 10}cm 입니다.`);
  }
}

introduce('채원', 160);

introduce('채원');

//* 튜플로도 만들수 있음
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //* 6
getSum(1, 2, 3, 4, 5); //* 15
