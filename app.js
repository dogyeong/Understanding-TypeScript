"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* 64
readonly 키워드를 사용하면 한번 초기화한 후, 값을 변경할 수 없게 된다.
private 필드에는 해봤자 소용없다(접근이 안되니)
위와 마찬가지로 런타임떄는 효과가 없다
 */
var Department3 = /** @class */ (function () {
    function Department3(name) {
        this.name = name;
    }
    return Department3;
}());
/* 65
클래스를 상속받아서 만들때는 새로 만드는 클래스 이름 옆에 'extend 부모 클래스 이름'을 쓰면 된다.
그리고 constructor 함수 안에서 super()로 부모 클래스의 생성자 함수를 호출해야 한다.
*/
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(name, admins) {
        if (admins === void 0) { admins = []; }
        var _this = _super.call(this, name) || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var it_dept = new ITDepartment('it');
/* 66
클래스를 상속받아서 부모 클래스의 메소드를 오버라이딩할 수 있다.
간단하게 메소드를 재정의하면 된다.
그리고 부모 클래스의 private 필드는 접근할 수 없지만 protected 필드는 상속한 클래스에서 접근 가능하다.
*/
var Marketing = /** @class */ (function (_super) {
    __extends(Marketing, _super);
    function Marketing(name) {
        return _super.call(this, name) || this;
    }
    Marketing.prototype.describe = function () {
        console.log('marketing: ' + this.name);
    };
    return Marketing;
}(Department));
var m = new Marketing('mkt');
m.describe();
