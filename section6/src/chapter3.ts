//* 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

//* Character클래스를 CharacterInterface 인터페이스를 구현한다는 뜻
//* 설계도를 구현한다고 생각
class Character implements CharacterInterface {
  //* 인터페이스로 구현한 클래스의 필드는 무조건 퍼블릭을 선언됨
  //* 만약 필요하다면 인터페이스에 정의하지 말고 따로 정의해줘야함
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move() {
    console.log(`${this.name} 이동 속도: ${this.moveSpeed}`);
  }
}
