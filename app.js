"use strict";
/* experimentalDecorators */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
## 104. Decorators

`@`이라는 character로 사용하는 문법을 Decorator(데코레이터)라고 한다.

데코레이터는 함수다. 데코레이터는 말 그대로 코드 조각을 장식해주는 역할을 하며 타입스크립트에서는 그 기능을 함수로 구현할 수 있다.

Decorator는 클래스 선언, 메서드, 접근 제어자, 속성 또는 매개 변수에 첨부 할 수 있는 특별한 종류의 선언이다.

데코레이터는 @expression 형식을 사용하는데, expression은 데코레이팅 된 선언에 대한 정보와 함께 존재하며 이는 런타임에 호출됩니다.

*/
/*
## 105. A First Class Decorator

클래스 선언에 사용되는 클래스 데코레이터는 기존의 클래스 정의를 확장하는 용도로 사용할 수 있습니다.

클래스 데코레이터 함수의 인자로는 클래스(생성자 함수)가 전달됩니다.

클래스 데코레이터 함수에서는 새로운 클래스(생성자 함수)만을 반환할 수 있고, 함수 외의 값들은 무시됩니다.
*/
`` `typescript
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
` `` /*
106. Working with Decorator Factories

데코레이터 함수를 리턴하는 함수를 데코레이터 팩토리라고 한다.

팩토리를 사용하면 원하는 파라미터를 전달해서 내부 함수에서 다양하게 활용할 수 있도록 커스터마이징 할 수 있다.
*/ `` `typescript
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
` `` /*
## 107. Building More Useful Decorators

템플릿을 DOM에 추가하는 데코레이터

이런 데코레이터를 다른 개발자들이 가져다 사용할 수 있다.

*/ `` `typescript
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
` `` /*
## 108. Adding Multiple Decorators

데코레이터를 여러개 연속으로 붙일 수 있다.

붙일 때 데코레이터를 여러 줄 붙이면 된다.

여러개의 데코레이터는 밑에서부터 위의 순서로 실행된다.

만약 데코레이터 팩토리를 사용한다면, 팩토리 자체는 위에서 밑으로 호출된다.

*/ `` `typescript
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
` ``;
/*
## 109. Diving into Property Decorators

클래스의 프로퍼티 선언에 사용되는 프로퍼티 데코레이터는 두 개의 인자를 받는다.

1. static 프로퍼티라면 클래스의 생성자 함수, 인스턴스 프로퍼티라면 클래스의 prototype 객체
2. 프로퍼티 이름

*/
function Log(target, name) {
    console.log(target, name);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
// Product의 prototype과 "title"이 출력된다
