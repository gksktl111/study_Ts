//* 타입스크립트의 클래스

const employee = {
  name: '박민규',
  position: 'developer',
  work: () => {
    console.log('일을 합니다.');
  },
};

class Employee {
  //* 필드
  name;
  age;
  position;

  //* 생성자
  //* 타입스크립트의 클래스에서는 생성자를 선언할 때 타입을 선언해줘야함(추론이 불가하기 때문)
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //* 메서드
  work() {
    console.log('일을 합니다.');
  }
}

const employeeB = new Employee('박민규', 25, 'developer');
console.log(employeeB);

employeeB.work();

//* 클래스는 타입으로도 사용 가능함
const employeeC: Employee = {
  name: '박민규',
  age: 25,
  position: 'developer',
  work: () => {},
};

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
}

const employeeD = new ExecutiveOfficer('박민규', 25, 'developer', 1);
console.log(employeeD);

employeeD.executiveWork();
