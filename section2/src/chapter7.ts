// ** void
// ** void -> 공허 -> 아무것도 없다
// **void -> 아무것도 없을을 의미하는 타입

function func1(): string {
  return 'hello';
}

// ** void 타입은 아무것도 반환하지 않는(return 문이 없는) 함수에 사용
function func2(): void {
  console.log('hello');
}

// ** never
// ** never -> 존재하지 않는
// ** 불가능한 타입, 모순된 타입

// ** void와는 약간 느낌이 다름 never는 함수가 정상적으로 끝나지 않아 반환이 아예 불가능한 경우에 사용함
function func3(): never {
  while (true) {}
}

function func4(): never {
  // ** 실행시 프로그램이 바로 중지되기 때문에 타입을 never가 적합함
  throw new Error('error');
}
