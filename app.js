"use strict";
/*

## 114. Example: Creating an "Autobind" Decorator

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
```typescript
// 아래와 같이 이벤트를 걸면 this가 바인딩되지 않아서 showMessage가 제대로 동작하지 않는다
// this에는 이벤트가 걸린 DOM객체가 바인딩된다
class Printer {
  message = 'This Works!';

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
document.addEventListener('click', p.showMessage);
```
*/
// 문제를 해결하기 위해 this를 자동으로 바인딩해주는 데코레이터를 만든다
const Autobind = (target, methodName, descriptor) => {
    // 디스크립터의 value는 원래 메소드를 참조한다
    const originalMethod = descriptor.value;
    const adjDescriptor = {
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
    constructor() {
        this.message = 'This Works!';
    }
    // showMessage가 호출될 때 자동으로 this가 바인딩된다.?
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
document.addEventListener('click', p.showMessage);
