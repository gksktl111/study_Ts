//* 접근 제어자 (access modifier)

//* public : 모든 곳에서 접근 가능
//* private : 클래스 내부에서만 접근 가능
//* protected : 클래스 내부와 상속 받은 자식 클래스에서 접근 가능

class Employee {
  //* 필드

  //* private 접근 제어자를 사용하여 클래스 외부에서의 접근을 차단
  //* private name: string;
  //* protected age: number;
  //* public position: string;

  //* 생성자
  //* 타입스크립트의 클래스에서는 생성자를 선언할 때 타입을 선언해줘야함(추론이 불가하기 때문)

  //* 생성자에 접근 제어자를 사용하면 필드를 자동으로 만들어주므로 따로 필드를 작성하지 않아야 함
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    //* 또한 자동으로 필드를 생성 대입해주기 때문에 아래 this.name 등의 코드도 작성하지 않아야 함
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  //* 메서드
  work() {
    console.log('일을 합니다.');
  }
}

const employeeA = new Employee('박민규', 25, 'developer');

//* 클래스 외부에서는 private 접근 제어자를 사용한 필드에 접근할 수 없음
//* employeeA.name = '김민규';
//* employeeA.age = 30;
employeeA.position = 'engineer';

class ExecutiveOfficer extends Employee {
  //* 필드
  officeNumber: number;

  //* 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  //* 메서드
  executiveWork() {
    console.log('회의를 합니다.');
  }

  func() {
    //* private으로 선언하면 파생 클래스에서 조차 접근 불가능함
    //* this.name;

    //* protected로 선언하면 파생 클래스에서 접근 가능함, 외부에서의 접근은 차단
    this.age;
  }
}
