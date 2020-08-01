/* 59
타입스크립트에서 클래스 사용하기
public, private 키워드를 필드에 사용할 수 있다.
하지만 컴파일하고나서, 런타임 때는 적용되지 않는다. 
*/
class Department {
  name: string;
  private employees: string[]; // private 키워드 사용 가능하다
  public phone: number; // public 키워드도 사용 가능하다. 생략하면 기본으로 public이 된다.

  constructor(n: string) {
    this.name = n;
    this.employees = [];
    this.phone = 123;
  }

  describe(this: Department) {
    console.log('department: ' + this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe();
