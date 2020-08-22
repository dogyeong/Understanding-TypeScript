/* 94
제네릭은 어떤 함수, 클래스, 자료구조 등에서 사용할 타입을 사용할 때(선언할 때?) 결정하는 기법이다.
타입을 선언할 때 뒤에 <사용할 타입>을 명시하면 된다.
*/

// 배열을 선언할 때 스트링 배열인 것을 선언하는 제네릭 문법
const names: Array<string> = ['Max', 'John']; // Array<string> 은 string[] 와 같은 말이다.

// number 타입을 resolve하는 promise를 선언하는 제네릭 문법
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 2000);
});

// 제네릭을 이용한 사용할 때 한가지 타입을 정할 수 있는 스택 자료구조
class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  push(item: T): void {
    this.stack.push(item);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }
}

/* 95
 */
// 만약 두 객체를 받아서 합친 객체를 반환하는 함수를 정의한 경우,
// 아래와 같이 타입을 object로 정의하면 리턴 타입도 object 타입이 되고,
// 반환한 객체가 어떤 프로퍼티를 가지는지 타입스크립트는 알 수 없게 된다.
function merge(obj1: object, obj2: object) {
  return Object.assign(obj1, obj2);
}
const merged = merge({ name: 'Max' }, { age: 30 });
// merged.age // 에러

// 제네릭을 이용하면 리턴타입이 T & U 가 되고,
// 함수를 사용할 때마다 그때그때 동적으로 리턴 객체의 정보가 바뀐다
function mergeWithGeneric<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}
const merged2 = mergeWithGeneric({ name: 'Max' }, { age: 30 });
merged2.age; // 30
