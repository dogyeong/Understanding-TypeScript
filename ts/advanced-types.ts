/* 83
인터섹션 타입을 이용해 “여러 경우에 모두 해당”하는 타입을 표현할 수 있다.
type 또는 interface로 정의한 타입을 사용할 수 있다.
*/
type Programmer = {
  favoriteLanguage: string;
};

type BeerLover = {
  favoriteBeer: string;
};

type CatLover = {
  favoriteCat: string;
};

// & 기호로 인터섹션 타입을 정의할 수 있다.
type BeerLovingProgrammer = Programmer & BeerLover;

// 문자열인 동시에 숫자인 값은 존재하지 않으므로, 위 Infeasible 타입은 실제로는 어떤 값도 가질 수 없다.
type Infeasible = string & number;

// 인터섹션 타입 역시 몇 개든 이어가며 정의할 수 있다.
type Awesome = Programmer & BeerLover & CatLover;

/* 84
타입을 동적으로 체크할 때 typeof를 쓸 수 있지만
객체의 타입을 체크하기 위해서는
in 이나 instanceof 를 사용할 수 있다.
*/

class ExampleClass {
  go() {}
}

const v1 = new ExampleClass();

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
const input = document.getElementById('input-tag')!;

// HEMLElement로 추론되었기 때문에 input 태그의 value 프로퍼티를 사용할 수 없다.
// input.value = 'some text';

// 타입 캐스팅은 2가지 방법이 있다
// '<타입>' 을 앞에 붙이는 방식
const input2 = <HTMLInputElement>document.getElementById('input-tag');

// 또는 'as 타입' 을 뒤에 붙이는 방식
const input3 = document.getElementById('input-tag') as HTMLInputElement;

input2.value = input3.value = 'some text';

// 이렇게도 된다
(input as HTMLInputElement).value = 'some text';

/* 87
객체의 값이 동적으로 정해지는 경우에는 인덱스 프로퍼티(시그니처)를 활용할 수 있다.
인터페이스를 정의할 때, 키 값에 대괄호로 싸고 타입을 지정하면 키의 타입을 지정할 수 있다.
*/
interface ErrorContainer {
  [name: string]: string;
}

const emailError: ErrorContainer = {
  email: 'invalid Email!',
};

const nameError: ErrorContainer = {
  name: 'invalid Name!',
};

// 다른 예시
interface nameAndHeight {
  [name: string]: number;
}

const info: nameAndHeight = {
  홍길동: 180,
  김철수: 172,
  안철수: 170,
};

/*
 타입스크립트에서는 기본적으로 딱 함수를 선언할 때 명시한 만큼의 인자를 받아야만 타입 에러를 피할 수 있다.
 하지만 이렇게 정해진 숫자의 인자만 받을 수 있다면 많은 프로그래밍 요구사항을 해결하기가 어려워 진다.
 그래서 한 함수가 여러 쌍의 매개변수-반환 타입 쌍을 갖는 경우를 다룰 수 있게 하고자
 타입스크립트는 함수 오버로딩(function overloading)을 지원한다.
 타입스크립트의 함수 오버로딩은 다음과 같은 특징을 갖는다.
 - 함수는 하나 이상의 타입 시그니처를 가질 수 있다.
 - 함수는 단 하나의 구현을 가질 수 있다.
*/

// 이 함수들은 각각 문자열, 숫자, 그리고 불리언의 배열을 받아 두 배로 만드는 함수다.
// 이 때, ‘두 배’가 의미하는 건 타입에 따라 다르다.
function doubleString(str: string): string {
  return `${str}${str}`;
}
function doubleNumber(num: number): number {
  return num * 2;
}
function doubleBooleanArray(arr: boolean[]): boolean[] {
  return arr.concat(arr);
}

// 이 세 함수를 함수 오버로딩을 사용해서 하나의 double 이라는 함수로 합쳐보자.
function double(str: string): string;
function double(num: number): number;
function double(arr: boolean[]): boolean[];
function double(arg: string | number | boolean[]) {
  if (typeof arg === 'string') {
    return `${arg}${arg}`;
  } else if (typeof arg === 'number') {
    return arg * 2;
  } else if (Array.isArray(arg)) {
    return arg.concat(arg);
  }
}

const n = double(2); // number
const s = double('hi'); // string

/* 89
외부에서 받아온 객체에 어떤 프로퍼티가 있는지 없는지 확실하지 않을 때에는 옵셔널 체이닝을 사용하면 된다.
앞의 부분이 undefined나 null이면 undefined를 반환하고 아니면 뒷부분을 반환한다.
*/

// 만약 이런 식의 데이터를 서버에서 받아온다고 했을 때,
// job의 데이터가 바뀔수도 있다고 가정하면
const userData = {
  id: 'uid1',
  name: 'Max',
  job: {
    title: 'CEO',
    description: 'my own company',
  },
};

const title1 = userData && userData.job && userData.job.title; // 원래는 이렇게 체크를 하지만
const title2 = userData?.job?.title; // optional chaining 을 사용하면 이렇게 하면 된다!

/* 90
Nullish Coalescing Operator
?? 라는 연산자를 통해 앞의 피연산자가 null 혹은 undefined인지 확인하며, 그 쓰임은 ||와 같다.
|| 와의 차이점은 || 연산자는 falsy value를 확인하기 때문에 '', 0, 등등 false가 되는 값들이 다 체크가 되지만
?? 는 null과 undefined 만 체크한다.
*/

const zero = 0;
const one = 1;

const number = zero || one; // 1
const numberWithNCO = zero ?? one; // 0
