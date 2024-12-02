/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
// 1.
// Exclude<string | boolean>
// Exclude<boolean, boolean>

// 2.
// string |
// never

// 결과
// string

type A = Exclude<string | boolean, boolean>;
// string

/**
 * Extract<T, U>
 * -> 추출하다
 * -> T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;
// 1.
// Extract<string | boolean, boolean>
// Extract<boolean, boolean>

// 2.
// never | boolean

// 결과
// boolean

/**
 * ReturnType<T>
 * -> 반환하다
 * -> T 함수의 반환 타입을 추출하는 타입
 */

// (...args: any) => any 어느 함수 타입이 들어와도 OK
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return 'hello';
}

function funcB() {
  return 1;
}

type a = ReturnType<typeof funcA>;
// string

type b = ReturnType<typeof funcB>;
// number
