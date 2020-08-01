/* 59
타입스크립트에서 클래스 사용하기
*/
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

new Department('Accounting');
