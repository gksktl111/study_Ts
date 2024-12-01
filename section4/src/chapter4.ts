//* 사용자 정의 타입가드

import { access } from 'fs';

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

//* 타입스크립트는 리턴값으로는 확실한 타입추론을 하지 못하기 때문에 리턴에 대해서 타입가드를 사용해야함
function isDog(animal: Animal): animal is Dog {
  //* 함수가 참이면 인수 animal이 Dog 타입이다 라고 보장
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log('강아지는 물어요');
    animal;
  } else if (isCat(animal)) {
    console.log('고양이는 할퀴어요');
    animal;
  }
}
