// * 타입 단언(type assertion)
// * 의도하지 않은 타입 추론이 일어날 때 사용

type Person = {
  name: string;
  age: number;
};

// * 타입 단언을 사용하지 않으면 오류 발생
let person = {} as Person;

person.name = '홍길동';
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

// * 추가 프로퍼티 검사가 실행되도 타입 단언을 사용하면 통과가능
let dog = {
  name: '멍멍이',
  color: 'brown',
  breed: '진돗개',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

// * A가 B의 슈퍼타입이기 때문에 타입 단언 가능
let num1 = 10 as never;

// * A가 B의 서브타입이기 때문에 타입 단언 가능
let num2 = 10 as unknown;

// * 서로 겹치지 않는 타입으로는 단언이 불가능함
// * let num3 = 10 as string; // 오류 발생
// * let str = "hello" as number; // 오류 발생

// * 만약 타입 단언을 하고 싶다면 unknown 타입으로 변환 후 단언
// * 절대 좋은 방법이 아님
let num3 = 10 as unknown as string;
let str = 'hello' as unknown as number;

// * const 단언
let num4 = 10 as const;

// * readonly 타입으로 추론됨
let cat = {
  name: '야옹이',
  color: 'yellow',
} as const;

// * 읽기 전용 속성이므로 수정 불가
// * cat.name = '야옹이'; // 오류 발생

// * Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: '홍길동',
};

// * 옵셔널 체이닝의 경우 값이 없을경우 undefiend를 반환 하지만 타입이 number로 선언되어있으므로 오류
// const len: number = post.author?.length;

// * Non Null 단언 (느낌표 ! ) 을 사용, 값이 null이거나 undefined가 아니라는 것을 단언
const len = post.author!.length;

// * 단언은 위험한 문법(만약 진짜 값이 없거나 다를경우 런타임에서 오류가 발생 하므로) 이므로 정말 확실한 상황일때만 사용할 것
