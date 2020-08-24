"use strict";
/*
## 104. Decorators

`@`이라는 character로 사용하는 문법을 Decorator(데코레이터)라고 합니다.

데코레이터는 함수 라고 할 수 있습니다. 데코레이터는 말 그대로 코드 조각을 장식해주는 역할을 하며 타입스크립트에서는 그 기능을 함수로 구현할 수 있습니다.

Decorator는 클래스 선언, 메서드, 접근 제어자, 속성 또는 매개 변수에 첨부 할 수 있는 특별한 종류의 선언입니다.

데코레이터는 @expression 형식을 사용하는데, expression은 데코레이팅 된 선언에 대한 정보와 함께 존재하며 이는 런타임에 호출됩니다.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
## 105. A First Class Decorator

클래스 선언에 사용되는 클래스 데코레이터는 기존의 클래스 정의를 확장하는 용도로 사용할 수 있습니다.

클래스 데코레이터 함수의 인자로는 클래스(생성자 함수)가 전달됩니다.

클래스 데코레이터 함수에서는 새로운 클래스(생성자 함수)만을 반환할 수 있고, 함수 외의 값들은 무시됩니다.
*/
function Logger(constructor) {
    console.log('logging...');
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('creating person...');
    }
};
Person = __decorate([
    Logger
], Person);
const max = new Person();
