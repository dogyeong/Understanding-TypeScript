"use strict";
/* 59
타입스크립트에서 클래스 사용하기
public, private 키워드를 필드에 사용할 수 있다.
하지만 컴파일하고나서, 런타임 때는 적용되지 않는다.
*/
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
        this.employees = [];
        this.phone = 123;
    }
    Department.prototype.describe = function () {
        console.log('department: ' + this.name);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.describe();
/* 63
클래스 내의 필드 선언을 줄여서 쓸 수 있다
생성자 함수 파라미터에 private, public을 붙이면 파라미터 이름대로 필드가 생성된다
*/
var Department2 = /** @class */ (function () {
    function Department2(employees, phone) {
        this.employees = employees;
        this.phone = phone;
    }
    return Department2;
}());
var d = new Department2(['test'], 1234);
console.log(d.phone);
