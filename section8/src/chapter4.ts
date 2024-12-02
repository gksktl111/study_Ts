//* 템플릿 리터럴 타입

type Color = 'red' | 'orange' | 'yellow';
type Animal = 'dog' | 'cat' | 'chicken';

//* 템플릿 리터럴 타입을 사용하면 문자열 리터럴 타입을 조합할수 있음
type ColoredAnimal = `${Color}-${Animal}`;
