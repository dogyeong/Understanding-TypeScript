/* 16
타입스크립트의 코어 타입 중 오브젝트 타입이 있다.
변수명: object로 오브젝트 타입을 정의할 수 있지만, 
이렇게 하면 오브젝트 안에 키-값의 정보를 모르기 때문에 자동완성도 안되고, 
오브젝트의 특정 키 값을 접근하는 것도 에러가 난다.

그래서 자세하게 오브젝트 타입을 정의할 수 있다.
오브젝트 타입은 자바스크립트의 오브젝트와 비슷하게 정의한다.
중괄호 안에 키-타입 쌍을 적는데, 끝에 세미콜론(;)을 붙인다.

하지만 직접 정의하는 것은 좋지 않다고 한다(?)
타입을 정의하지 않고 초기화하고 자동 타입 추론을 이용하면 편리하다

정의된 오브젝트의 키 값을 잘못 호출하면 에러를 발생시킨다
*/
const person: object = {
  name: 'john',
  age: 30,
};

person.name; // Error

const person2: {
  name: string;
  age: number;
} = {
  name: 'jane',
  age: 25,
};

person2.name; // 'jane'

const person3 = {
  name: 'nick',
  age: 26,
};

person3.name; // 'nick'
