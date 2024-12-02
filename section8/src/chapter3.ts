//* 맵드 타입
//* 활용도가 매우 높고 실무에서 자주사용됨

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  //* key 맞는 value 타입을 불러옴
  //* 맵드 타입을 사용하면 특정 객체타입을 내가 원하는대로 변환가능
  //* 맵드 타입을 타입 별칭으로만 선언가능
  [key in 'id' | 'name' | 'age']?: User[key];
};

type BooleanUser = {
  //* 이렇게 key 쪽에서 keyof 연산자를 통해 객체 타입의 키값을 가져올수 있음
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  //* readonly 키워드를 사용하면 읽기 전용 객체로 만들수 있음
  readonly [key in keyof User]: User[key];
};

//* 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadOnlyUser {
  //* 기능
  return {
    id: 1,
    name: '박민규',
    age: 27,
  };
}

const user = fetchUser();
//* user.id = 2; //* 이렇게 수정이 불가능함

function updateUser(user: PartialUser) {
  //* ... 수정하는 기능
}

updateUser({
  id: 1,
  name: '박민규',
  age: 25,
});
