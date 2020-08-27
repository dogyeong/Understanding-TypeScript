"use strict";
/*

112. Returning (and changing) a Class in a Class Decorator

클래스 데코레이터는 클래스(생성자 함수)를 반환할 수 있고, 함수가 아닌 반환값은 무시된다.

파라미터로 전달받은 생성자 함수를 상속하는 클래스를 반환해서 클래스의 기능을 확장할 수 있다.

그리고 반환하는 클래스 내부의 로직은 클래스의 인스턴스가 생성될 때마다 호출된다.

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    // 생성자를 상속하는 익명 클래스를 반환하는 데코레이터
    function WithTemplate(template) {
        console.log('TEMPLATE FACTORY');
        // name: string 멤버변수를 가지는 익명 클래스를 상속
        return function (originalConstructor) {
            return class extends originalConstructor {
                constructor(...args) {
                    super();
                    console.log('Rendering Template...');
                    console.log(template);
                    console.log(this.name);
                }
            };
        };
    }
    let Person = class Person {
        constructor() {
            this.name = 'Max';
        }
    };
    Person = __decorate([
        WithTemplate('return class')
    ], Person);
    // 인스턴스를 만들면 데코레이터의 반환값이 호출된다.
    new Person();
}
