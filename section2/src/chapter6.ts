// ** any
// ** 특정 변수의 타입을 우리가 확실히 모를때 사용

// ** any 타입은 모든 타입을 호환 가능함 따라서 타입 체크를 하지 않는 것과 마찬가지
// ** 심지어 이 오류는 컴파일시에 발견되지 않고 런타임때 발견되어 심각한 오류를 초래함
// ** 따라서 가능하면 사용하지 않는게 좋음
let anyVar: any = 10;

anyVar = 'hello';
anyVar = true;
anyVar = [];
anyVar = {};

// anyVar.toUpperCase();

let num: number = 10;
// num = anyVar;

// ** unknown
// ** any와 비슷하지만 조금 더 엄격한 타입
// ** 따라서 any와 달리 타입 체크를 해야함

let unknownVar: unknown;

unknownVar = 10;
unknownVar = 'hello';
unknownVar = true;
unknownVar = [];
unknownVar = {};

// ** any와는 다르게 변수에 값으로 할당할 수 없음
// ** num = unknownVar;

// ** 또한 메서드 호출도 불가능함
// ** unknownVar.toUpperCase();

// ** 연산 자체도 불가능함
// ** unknownVar + 10;

// ** 이렇게 타입 체크를 진행하여 타입 정제 또는 타입 좁히기를한 경우에만 사용 가능함
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}
