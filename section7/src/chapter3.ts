//* 제네릭 인터페이스

interface KeyPair<T, V> {
  key: T;
  value: V;
}

//* 제네릭 인터페이스는 제네릭 함수와 다르게 선업시에 타입도 같이 선언해 줘야함
let keyPair: KeyPair<string, number> = { key: "key", value: 1 };

let keyPair2: KeyPair<boolean, string[]> = { key: true, value: ["value"] };

//* 인덱스 시그니처에 사용시 매우 유연한 객체 타입을 만들수 있음

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key1: 1,
  key2: 2,
};

//* V 타입 변수 하나로 매우 다양한 value 타입을 가지는 인덱스 시그니처 타입을 구현 가능함
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key1: "value1",
};

let booleanMap: Map<boolean> = {
  key1: true,
};

//* 제네릭 타입 별칭
//* 같은 구조로 사용 가능

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key1: "value1",
};

let booleanMap2: Map2<boolean> = {
  key1: true,
};

//* 언제 사용해야 하는가?

//* 제네릭 인터페이스 활용 예시
//* -> 유저 관리 프로그램
//* -> 유저 구분 : 학생 유저 / 개발자 유저

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

//* 제네릭 인터페이스를 사용하여 유저 타입을 정의하고 함수에 전달
//* 타입을 이미 알고있기에 타입 가드가 필요 없음
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

//* 컴파일에서 에러를 발생 시켜줌
//* goToSchool(developerUser);

const studentUser: User<Student> = {
  name: "이정환",
  profile: {
    type: "student",
    school: "한국대학교",
  },
};
