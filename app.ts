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
인터페이스는 클래스나 객체에서 세부 구현은 신경쓰지 않고, 
특정 필드나 메소드를 가지게 할 때 사용한다.
*/
interface Greetable {
  greet(): void;
}

class Cat implements Greetable {
  greet() {
    console.log('hi');
  }
}

/* 75
인터페이스에서 readonly 키워드를 사용할 수 있다.
readonly 필드는 한번 값이 할당되면, 바꿀 수 없다.
 */
interface runnable {
  readonly speed: number;
}

let p: runnable = {
  speed: 12,
};

// p.speed = 10; // Error
