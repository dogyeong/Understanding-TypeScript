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
public, private 키워드를 필드, 메소드에 사용할 수 있다.
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
m.describe(); // marketing: mkt
/* 67
getter, setter를 사용할 수 있다
둘 다 get, set 키워드를 앞에 붙이고 메소드처럼 정의하면 되고,
getter는 어떤 로직을 수행한 후에 값을 리턴하는식으로 선언하고, 사용할 때는 메소드처럼 사용한다
setter는 어떤 값을 파라미터로 받아서 필드의 값을 바꾸는 로직을 수행하는 메소드고,
사용할 때는 메소드 호출이 아니라 파라미터에 값을 대입하는 것처럼 사용하면 된다.
*/
var ExampleClass = /** @class */ (function () {
    function ExampleClass(name) {
        if (name === void 0) { name = 'john'; }
        this.name = name;
    }
    Object.defineProperty(ExampleClass.prototype, "lastName", {
        get: function () {
            return this.name;
        },
        set: function (s) {
            this.name = s;
        },
        enumerable: true,
        configurable: true
    });
    return ExampleClass;
}());
var example = new ExampleClass();
example.lastName; // john
example.lastName = 'james';
/* 68
static 키워드로 static 프로퍼티나 메소드를 만들 수 있다.
보통 유틸리티 함수를 만들거나, 글로벌 변수를 저장할 때 사용한다.
클래스 내에서 접근할 떄는 this.프로퍼티가 아니라 클래스명.프로퍼티 로 접근해야 한다
*/
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.add = function (n1, n2) {
        return n1 + n2;
    };
    Utils.greeting = 'hi';
    return Utils;
}());
console.log(Utils.greeting); // hi
console.log(Utils.add(2, 3)); // 5
/* 69
abstract 키워드로 추상 클래스를 만들 수 있다.
추상 클래스는 직접 인스턴스를 만들 수 없고, 상속받을 클래스를 위해 메소드, 멤버변수를 정의할 수 있다.
상속받은 클래스는 추상 메소드를 구현해야 한다
*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return name;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.speak = function () {
        console.log('bow');
    };
    return Dog;
}(Animal));
/* 70

*/
var Manager = /** @class */ (function () {
    function Manager(name) {
        this.name = name;
    }
    Manager.getInstance = function () {
        if (!Manager.instance) {
            this.instance = new Manager('john');
        }
        return this.instance;
    };
    return Manager;
}());
// const manager = new Manager('john'); // Error
var manager = Manager.getInstance();
console.log(manager);
console.log(Manager.getInstance() === Manager.getInstance());
