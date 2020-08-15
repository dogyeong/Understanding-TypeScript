"use strict";
/* 84
타입을 동적으로 체크할 때 typeof를 쓸 수 있지만
객체의 타입을 체크하기 위해서는
in 이나 instanceof 를 사용할 수 있다.
*/
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.go = function () { };
    return ExampleClass;
}());
var v1 = new ExampleClass();
if (v1 instanceof ExampleClass) {
    v1.go();
}
if ('go' in v1) {
    v1.go();
}
/*
타입 캐스팅
타입을 임의로 바꿀 수 있다.
DOM을 다룰 때 특히 유용하게 쓸 수 있다.
*/
// input은 id를 이용해서 DOM 객체를 가져왔기 때문에
// 타입스크립트는 input이 어떤 태그인지 알지 못한다.
// 그래서 그냥 HTMLElement 타입으로 추론된다.
var input = document.getElementById('input-tag');
// HEMLElement로 추론되었기 때문에 input 태그의 value 프로퍼티를 사용할 수 없다.
// input.value = 'some text';
// 타입 캐스팅은 2가지 방법이 있다
// '<타입>' 을 앞에 붙이는 방식
var input2 = document.getElementById('input-tag');
// 또는 'as 타입' 을 뒤에 붙이는 방식
var input3 = document.getElementById('input-tag');
input2.value = input3.value = 'some text';
// 이렇게도 된다
input.value = 'some text';
var emailError = {
    email: 'invalid Email!',
};
var nameError = {
    name: 'invalid Name!',
};
var info = {
    // 홍길동: 180,
    // 김철수: 172,
    // 안철수: 170,
    100: 20,
};
