// * Unknown 타입
// * 모든 타입의 슈퍼 타입

function unknownExam() {
  // * 업캐스팅 가능
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // * 다운 캐스팅이라 오류
  // * let num: number = unknownVar;
  // * let str: string = unknownVar;
  // * let bool: boolean = unknownVar;
}

// * Never 타입
// * 모든 타입의 서브 타입 -> 공집합

function neverExam() {
  function neverFunc(): never {
    while (true) {} // * 반환이 공집합(아무것도 없다)
  }

  // * 업캐스팅이라 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // * 반대로는 당연히 오류 (다운 캐스팅)
  // * let neverVar: never = 1;
  // * let neverVar: never = 'hello';
  // * let neverVar: never = true;
}

// * void 타입

function voidExam() {
  function voidFunc(): void {
    console.log('void');
  }

  // * 업캐스팅 가능
  let voidVar: void = undefined;
}

// * any 타입

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  // * 다운캐스팅 이지만 any 타입이라 가능
  // * any 타입은  never를 제외한 모든 타입에 업, 다운 캐스팅 가능
  anyVar = unknownVar;

  // * 업캐스팅 가능
  undefinedVar = anyVar;

  // * never 타입은 순수한 공집합이기 때문에 불가능
  // * neverVar = anyVar;
}
