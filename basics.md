## 12. Typescript Types vs Javascript Types

런타임이 아니라 개발할 때 타입스크립트가 타입 체킹을 해준다.

이 말은, 타입스크립트를 자바스크립트로 컴파일 할 때 타입을 검사해서 에러를 발생시킨다는 것이다.

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);

console.log(result);
```

<br>

## 13.Important: Type Casing

타입스크립트의 모든 타입은 소문자로 적는다 : number, string 등등..

<br>

## 14. Working with Numbers, Strings & Booleans

타입스크립트의 코어 타입 중 기본 타입은 string, number, boolean 이다.

```typescript
function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}
```

변수를 선언할 때 변수명 옆에 콜론(:)과 함께 타입을 정의한다.

타입을 따로 정의하지 않으면 any 타입으로 정의된다.

하지만 변수를 선언하면서 값을 초기화하면, 그 값의 타입으로 정의된다.

```typescript
let number3: number; // number
let number4; // any
let number5 = 120; //number
```

정의된 타입과 다른 타입으로 값을 할당하면 에러가 발생한다

```typescript
// number5 = '12' // Error
```
