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

/* 17
중첩된 오브젝트 또한 타입이 중첩되어서 정의된다.
*/
const product = {
  id: '12a',
  tags: ['mobile', 'desktop'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};

/* 18
타입스크립트의 타입 중 배열은, 한 가지 타입의 배열이나 여러 타입의 배열을 모두 지원한다.
명시적으로 정의할 때는 타입[] 으로 정의한다
*/
let arr: string[] = ['a', 'b'];

/* 
타입을 명시하지 않으면 타입이 자동으로 추론된다.
*/
let arr2 = ['aa', 'bb']; // string[]
let arr3 = ['aa', 22]; // (string | number)[]

/*
반복문을 돌리면 인자의 타입도 자동으로 정해진다
*/
for (const i of arr2) {
  // i 는 자동으로 string 타입이 된다
  console.log(i.toUpperCase()); // i는 string 타입이기 때문에 toUpperCase 메소드를 사용할 수 있다
  // i.map() // 배열의 메소드인 map 메소드는 사용할 수 없음
}

/* 19
타입스크립트에는 튜플이라는 자바스크립트에 없는 타입이 있다.
튜플 타입 변수는 정확히 명시된 개수 만큼의 원소만을 가질 수 있다. 
만약 타입 정의보다 더 많은, 혹은 더 적은 원소를 갖는 배열을 할당한다면 에러를 낸다.
정의할 때 [] 안에 원하는 타입을 원하는 수만큼 정의한다.
*/
const nameAndHeight: [string, number] = ['james', 180];

/* 19
다만 튜플 타입의 값을 Array 프로토타입의 메소드를 통해 조작하는 것은 금지되지 않는다는 점에 유의해야 한다. 
예를 들어 아래와 같은 코드는 에러를 내지 않는다.
*/
const validNameAndHeight: [string, number] = ['안희종', 176];
validNameAndHeight.push(42); // no error

/* 20
enum 타입이 있다.
enum 타입으로 number에 사람이 읽기 쉬운 라벨을 붙일 수 있다.
아래와 같이 특정 값을 상수로 지정해서 사용하는 경우에 활용할 수 있다. 
*/
const ADMIN = 0;
const AUTHOR = 1;
const READ_ONLY = 2;

const role = ADMIN;

/* 20
위의 경우를 enum을 적용하면 아래와 같이 쓸 수 있다
*/
enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

const role2 = Role.AUTHOR;

/* 20
enum에 값을 지정하지 않으면 0,1,2.. 로 증가하는 숫자로 초기화된다.
숫자 또는 문자열의 값으로 지정할 수 있다.
*/
enum Count {
  MIN = 10,
  MAX = 200,
  MESSAGE = 'Count',
}
