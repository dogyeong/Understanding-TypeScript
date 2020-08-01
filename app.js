"use strict";
/* 59
타입스크립트에서 클래스 사용하기
*/
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
new Department('Accounting');
