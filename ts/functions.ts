/* 26
함수의 리턴 타입을 지정할 수 있다. 만약 지정하지 않으면 타입은 자동으로 추론된다.
함수에 리턴문이 없으면 void 타입을 리턴하는 것으로 한다.
void는 undefined와 다르다. 리턴문이 없다는 뜻이다.
*/
function add3(n1: number, n2: number): number {
  return n1 + n2;
}

function printNumber(n: number): void {
  console.log(n);
}

/* 27
함수 타입을 지정할 수 있다. Function이라고 하면 모든 함수를 할당할 수 있으며,
화살표 함수 형식으로 파라미터와 리턴값의 타입을 따로 지정할 수도 있다.
*/
let anyFunction: Function;
let addFunction: (a: number, b: number) => number;

/* 28
콜백함수를 쓸 때는 함수 타입을 화살표 함수 형식으로 지정해 주면 된다.
*/
function addAndHandle(n1: number, n2: number, callback: (n: number) => void) {
  const result = n1 + n2;
  callback(result);
}
