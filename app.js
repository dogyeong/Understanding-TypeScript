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
