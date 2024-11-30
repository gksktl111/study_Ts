// ** 객체의 구조를 기준으로 타입을 정함
// ** 구조적 타입 시스템
// ** Property-based type system 이라고도 함
let user = {
    id: 1,
    name: '박민규',
};
let dog = {
    name: '멍멍이',
    color: 'white',
};
user = {
    name: '박민규',
};
let config = {
    apiKey: 'my-api-key',
};
export {};
// config.apiKey = 'my-api-key'; // ** 이러한 코드를 방지
