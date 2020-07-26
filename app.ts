/* 26
함수의 리턴 타입을 지정할 수 있다. 만약 지정하지 않으면 타입은 자동으로 추론된다.
함수에 리턴문이 없으면 void 타입을 리턴하는 것으로 한다.
void는 undefined와 다르다. 리턴문이 없다는 뜻이다.
*/
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function print(n: number): void {
  console.log(n);
}
