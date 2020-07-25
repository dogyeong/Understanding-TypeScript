/* 22 
타입을 하나만 지정하는 것이 아니라 여러 개 묶은 것을 유니온 타입이라고 한다
*/
function combine(input1: string | number, input2: string | number) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
