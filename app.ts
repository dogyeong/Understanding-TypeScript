/* 22 
타입을 하나만 지정하는 것이 아니라 여러 개 묶은 것을 유니온 타입이라고 한다
(|) 로 구분해서 지정하고, 유니온 타입을 쓰면 타입체킹이 불확실해지기 때문에 런타임에서 타입 체크를 해야 하는 경우도 있다.
아래와 같이 인자로 여러 가지 타입의 값을 받고 싶을 때 사용할 수 있다.
*/
function combine(input1: string | number, input2: string | number) {
  let result: number | string;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

/* 23
리터럴 타입 이라는 것도 존재하는데, 리터럴 타입은 타입에 특정한 값(상수)가 정의되는 것이다.
예를 들어 const로 선언한 변수는 선언하면서 초기화한 값이 그 변수의 타입이 된다.
이런 경우를 리터럴 타입이라고 한다.
*/
const n = 2.4; // n은 타입으로 2.4를 가지는 리터럴 타입이다.

// 리터럴 타입은 유니온과 같이 쓰면 효과적이다.
function log(message: 'Hi' | 'Hello') {
  console.log(message);
}

log('Hi'); // 'Hi' 또는 'Hello'만 인자로 넘겨줄 수 있다.

// 리터럴 타입의 개수가 많아지면 enum을 활용해보자
enum Msg {
  hi = 'HI~',
  hello = 'HELLO~',
  wow = 'WOW~',
}

function log2(message: Msg) {
  console.log(message);
}

log2(Msg.hi);
log2(Msg.wow);
