## 104. Decorators

`@`이라는 character로 사용하는 문법을 Decorator(데코레이터)라고 한다.

데코레이터는 함수다. 데코레이터는 말 그대로 코드 조각을 장식해주는 역할을 하며 타입스크립트에서는 그 기능을 함수로 구현할 수 있다.

Decorator는 클래스 선언, 메서드, 접근 제어자, 속성 또는 매개 변수에 첨부 할 수 있는 특별한 종류의 선언이다.

데코레이터는 @expression 형식을 사용하는데, expression은 데코레이팅 된 선언에 대한 정보와 함께 존재하며 이는 런타임에 호출됩니다.

<br>

## 105. A First Class Decorator

클래스 선언에 사용되는 클래스 데코레이터는 기존의 클래스 정의를 확장하는 용도로 사용할 수 있다.

클래스 데코레이터 함수의 인자로는 클래스(생성자 함수)가 전달된다.

클래스 데코레이터 함수에서는 새로운 클래스(생성자 함수)만을 반환할 수 있고, 함수 외의 값들은 무시된다.

```typescript
function Logger(constructor: Function) {
  console.log('logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('creating person...');
  }
}

const max = new Person();

/* 출력 결과
logging...
class Person {
    constructor() {
        this.name = 'Max';
        console.log('creating person...');
    }
}
creating person...
*/
```

<br>

## 106. Working with Decorator Factories

데코레이터 함수를 리턴하는 함수를 데코레이터 팩토리라고 한다.

팩토리를 사용하면 원하는 파라미터를 전달해서 내부 함수에서 다양하게 활용할 수 있도록 커스터마이징 할 수 있다.

```typescript
// 위의 데코레이터에 파라미터를 전달하는 팩토리함수
function LoggerFactory(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// 데코레이터 팩토리를 사용할 때는 함수를 호출해야 한다
@LoggerFactory('LOGGING - ANIMAL')
class Animal {
  constructor() {
    console.log('creating animal...');
  }
}

/* 출력 결과
LOGGING - ANIMAL
app.js:68 class Animal {
    constructor() {
        console.log('creating animal...');
    }
}
*/
```

<br>

## 107. Building More Useful Decorators

템플릿을 DOM에 추가하는 데코레이터

이런 데코레이터를 다른 개발자들이 가져다 사용할 수 있다.

```typescript
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// 원하는 템플릿을 #app 안에 추가할 수 있다.
@WithTemplate('<h1>My Car Object</h1>', 'app')
class Car {
  constructor() {}
}
```

<br>

## 108. Adding Multiple Decorators

데코레이터를 여러개 연속으로 붙일 수 있다.

붙일 때 데코레이터를 여러 줄 붙이면 된다.

여러개의 데코레이터는 밑에서부터 위의 순서로 실행된다.

만약 데코레이터 팩토리를 사용한다면, 팩토리 자체는 위에서 밑으로 호출된다.

```typescript
function factory1() {
  console.log('factory 1');
  return (construnctor: any) => console.log('decorator 1');
}

function factory2() {
  console.log('factory 2');
  return (construnctor: any) => console.log('decorator 2');
}

@factory1()
@factory2()
class Test {
  constructor() {}
}

// 실행순서
// factory 1
// factory 2
// decorator 2
// decorator 1
```

<br>

## 109. Diving into Property Decorators

클래스의 프로퍼티 선언에 사용되는 프로퍼티 데코레이터는 두 개의 인자를 받는다.

1. static 프로퍼티라면 클래스의 생성자 함수, 인스턴스 프로퍼티라면 클래스의 prototype 객체
2. 프로퍼티 이름

```typescript
function Log(target: any, name: string) {
  console.log(target, name);
}

class Product {
  @Log
  public title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
}

// Product의 prototype과 "title"이 출력된다
```

<br>

## 110. Accessor & Parameter Decorators

Accessor Decorator(접근자 데코레이터)는 getter, setter 에 적용되는 데코레이터다.

데코레이터 함수에서는 메서드 데코레이터와 동일한 인자를 받는다.

1. static 메서드라면 클래스의 생성자 함수, 인스턴스의 메서드라면 클래스의 prototype 객체
2. 프로퍼티 이름
3. Property Descriptor

접근자 데코레이터도 메서드 데코레이터처럼 인자로 넘어온 Property Descriptor를 변경하거나, 새로운 Property Descriptor를 반환해서 원래 접근자의 기능을 확장할 수 있다.

함수의 파라미터에 사용되는 파라미터 데코레이터는 세 개의 인자를 받고, 반환값은 무시된다. 세 개의 인자는 다음과 같다.

1. static 메서드의 파라미터 데코레이터라면 클래스의 생성자 함수, 인스턴스의 메서드라면 prototype 객체
2. 파라미터 데코레이터가 적용된 메서드의 이름
3. 메서드 파라미터 목록에서의 index

```typescript
function Log(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log2(target: any, name: string, position: number) {
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  public title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  // Accessor Decorator
  @Log
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  // Parameter Decorator
  getPriceWithTax(@Log2 tax: number) {
    return this._price * (1 + tax);
  }
}
// 실행결과
// {
//   constructor: class Product
//   getPriceWithTax: ƒ getPriceWithTax(tax)
//   set price: ƒ price(val)
//   __proto__: Object
// }
// price
// {
//   configurable: true
//   enumerable: false
//   get: undefined
//   set: ƒ price(val)
//   __proto__: Object
// }
// {
//   constructor: class Product
//   getPriceWithTax: ƒ getPriceWithTax(tax)
//   set price: ƒ price(val)
//   __proto__: Object
// }
// getPriceWithTax
// 0
```

<br>

## 111. When Do Decorators Execute?

데코레이터는 대상이 인스턴스화될 때가 아니라 정의될 때 호출된다.

인스턴스화될 때 호출되는 데코레이터를 통해 대상의 기능을 확장할 수 있다.

<br>

## 112. Returning (and changing) a Class in a Class Decorator

클래스 데코레이터는 클래스(생성자 함수)를 반환할 수 있고, 함수가 아닌 반환값은 무시된다.

파라미터로 전달받은 생성자 함수를 상속하는 클래스를 반환해서 클래스의 기능을 확장할 수 있다.

그리고 반환하는 클래스 내부의 로직은 클래스의 인스턴스가 생성될 때마다 호출된다.

```typescript
// 생성자를 상속하는 익명 클래스를 반환하는 데코레이터
function WithTemplate(template: string) {
  console.log('TEMPLATE FACTORY');

  // name: string 멤버변수를 가지는 익명 클래스를 상속하는 함수를 반환
  // 반환하는 함수가 기존의 생성자를 대체한다
  return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        console.log('Rendering Template...');
        console.log(template);
        console.log(this.name);
      }
    };
  };
}

@WithTemplate('return class')
class Person {
  name = 'Max';

  constructor() {}
}

// 인스턴스를 만들면 데코레이터의 반환값이 호출된다.
new Person();
```

<br>

## 113. Other Decorator Return Types

메소드 데코레이터는 프로퍼티 디스크립터(property descriptor)를 수정하거나 프로퍼티 디스크립터 형식의 객체를 반환해서 메소드를 확장할 수 있다.

프로퍼티 데코레이터는 메소드 데코레이터와 비슷하게 프로퍼티 디스크립터 형식의 객체를 반환해서 프로퍼티의 설정을 바꿀 수 있다.

접근자(Accessor) 데코레이터도 메서드 데코레이터처럼 인자로 넘어온 Property Descriptor를 변경하거나, 새로운 Property Descriptor를 반환해서 원래 접근자의 기능을 확장할 수 있다.

파라미터 데코레이터의 반환값은 무시된다.

<br>

## 114. Example: Creating an "Autobind" Decorator

아래와 같이 이벤트를 걸면 this가 바인딩되지 않아서 showMessage가 제대로 동작하지 않는다

this에는 이벤트가 걸린 DOM객체가 바인딩된다

```typescript
class Printer {
  message = 'This Works!';

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
document.addEventListener('click', p.showMessage);
```

문제를 해결하기 위해 this를 자동으로 바인딩해주는 데코레이터를 만들 수 있다

```typescript
const Autobind = (target: any, methodName: string, descriptor: PropertyDescriptor) => {
  // 디스크립터의 value는 원래 메소드를 참조한다
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    // 디스크립터의 get 속성은 해당 속성의 getter를 정의한다.
    // get 내부의 로직이 해당 메소드를 호출할 때 동작한다
    get() {
      const bindFn = originalMethod.bind(this);
      return bindFn;
    },
  };
  return adjDescriptor;
};

class Printer {
  message = 'This Works!';

  // showMessage가 호출될 때 자동으로 this가 바인딩된다.?
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
document.addEventListener('click', p.showMessage);
```

<br>

## 115, 116, 117. Validation with Decorators

입력값을 검증하는 데코레이터를 만들어보자

```typescript
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const c1 = new Course('js', 1200);
const c2 = new Course('', 100);
const c3 = new Course('ts', 0);

console.log(validate(c1)); // true
console.log(validate(c2)); // false
console.log(validate(c3)); // false
```
