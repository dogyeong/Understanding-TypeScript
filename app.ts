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

/* 76
인터페이스끼리 상속할 수 있다.
*/
interface A {
  name: string;
}

interface B extends A {
  age: number;
}

const b: B = {
  name: 'b name',
  age: 12,
};

/* 77
인터페이스로 객체가 아니라 함수의 타입을 지정할 수도 있다.
객체 안에 익명함수 형식으로 작성하면 된다.
*/
interface Fn {
  (a: string): number;
}

let fn: Fn = (s: string) => Number(s);

/* 78
물음표(?)를 프로퍼티 이름 뒤에 붙이면 해당 프로퍼티는 옵션이 된다.
있어도 되고, 없어도 된다. undefined랑 합쳐진 유니온 타입이 되는듯.
옵션 프로퍼티는 인터페이스뿐만 아니라 클래스 내의 프로퍼티나 함수의 파라미터에서도 쓸 수 있다.
*/
function example(option?: object): void {}

interface C {
  name: string;
  age?: number;
}

// No Error
const c: C = {
  name: 'C name',
};

/* 79
타입스크립트의 인터페이스는 자바스크립트로 컴파일되지 않는다.
타입스크립트의 개발과정에서 영향을 미칠 뿐, 자바스크립트의 런타임에서는 영향을 주지 않는다.
*/
