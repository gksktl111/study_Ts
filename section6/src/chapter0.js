//* 클래스

let studentA = {
  name: '박민규',
  grade: 'A+',
  age: 25,
  study() {
    console.log('공부를 합니다.');
  },

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

class Student {
  //* 필드 (클래스가 만들어낼 인스턴스의 프로퍼티)
  name;
  grade;
  age;

  //* 생성자 (클래스가 호출되면 실제로 객체를 생성하는 역할을 하는 메서드)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //* 메서드
  study() {
    console.log('공부를 합니다.');
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

//* 실제로는 클래스의 생성자를 호출하는 것
//* 만들어진 객체를 인스턴스라고 부름
let studentB = new Student('홍길동', 'B+', 25);
console.log(studentB);

studentB.study();
studentB.introduce();

//* 클래스를 상속받아 확장 가능함
class StudentDeveloper extends Student {
  //* 필드
  favoriteSkill;

  //* 생성자

  constructor(name, grade, age, favoriteSkill) {
    //* 부모 클래스의 생성자를 super 키워드로 호출
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  //* 메서드
  programming() {
    console.log(`${this.favoriteSkill}를 사용해서 프로그래밍을 합니다.`);
  }
}

const studentDeveloper = new StudentDeveloper(
  '홍길동',
  'B+',
  25,
  '자바스크립트'
);
console.log(studentDeveloper);

studentDeveloper.programming();
