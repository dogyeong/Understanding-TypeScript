/* 72
인터페이스는 클래스에서 구현부가 빠졌다고 이해하면 편하다. 
객체가 가져야 할 필드와 메소드를 명시한다. 
즉, 어떠한 객체가 이러이러한 프로퍼티 혹은 메소드를 가진다고 선언하는 것이다. 
실질적인 구현은 이를 구현한다고 선언하는 클래스에 맡긴다.
*/
interface Person {
  // 필드
  name: string;
  age: number;

  // 메소드
  greet(phrase: string): void;
}

// 인터페이스에 명시된 필드 메소드를 가져야 한다.
let user: Person = {
  name: 'Max',
  age: 25,
  greet(phrase: string) {
    console.log(phrase);
  },
};

/* 73
클래스에서 인터페이스를 implements 하여 구현하면
해당 인터페이스에서 선언된 필드와 메소드를 가져야 한다.
*/
interface Greetable {
  greet(): void;
}

class Cat implements Greetable {
  greet() {
    console.log('hi');
  }
}
