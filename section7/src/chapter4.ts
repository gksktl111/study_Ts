//* 제네릭 클래스

class List<T> {
  constructor(private list: T[]) {}

  //* 메서드
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);

numberList.print();
numberList.push(4);
numberList.print();
numberList.pop();
numberList.print();

const stringList = new List(["hi", "hello"]);
stringList.print();
stringList.push("world");
stringList.print();
