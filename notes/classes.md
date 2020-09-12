## 59. Class

public, private 키워드를 필드, 메소드에 사용할 수 있다.

하지만 컴파일하고나서, 런타임 때는 적용되지 않는다.

```typescript
class Department {
  protected name: string; // protected 키워드는 private과 비슷하지만 상속받은 클래스에서도 접근이 가능하다.
  private employees: string[]; // private 키워드 사용 가능하다
  public phone: number; // public 키워드도 사용 가능하다. 생략하면 기본으로 public이 된다.

  constructor(n: string) {
    this.name = n;
    this.employees = [];
    this.phone = 123;
  }

  describe() {
    console.log('department: ' + this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe();
```

<br>

## 63. Shorthand Initialization

클래스 내의 필드 선언을 줄여서 쓸 수 있다.

생성자 함수 파라미터에 private, public을 붙이면 파라미터 이름대로 필드가 생성된다.

```typescript
class Department2 {
  constructor(private employees: string[], public phone: number) {}
}

const d = new Department2(['test'], 1234);
console.log(d.phone);
```

<br>

# 64. "readonly" properties

readonly 키워드를 사용하면 한번 초기화한 후, 값을 변경할 수 없게 된다.

private 필드에는 해봤자 소용없다(접근이 안되니) 위와 마찬가지로 런타임떄는 효과가 없다

```typescript
class Department3 {
  constructor(public readonly name: string) {}
}
```

<br>

# 65. Inheritance

클래스를 상속받아서 만들때는 새로 만드는 클래스 이름 옆에 'extend 부모 클래스 이름'을 쓰면 된다.

그리고 constructor 함수 안에서 super()로 부모 클래스의 생성자 함수를 호출해야 한다.

```typescript
class ITDepartment extends Department {
  constructor(name: string, public admins: string[] = []) {
    super(name);
  }
}
const it_dept = new ITDepartment('it');
```

<br>

# 66. Overriding Properties & The "protected" Modifier

클래스를 상속받아서 부모 클래스의 메소드를 오버라이딩할 수 있다. 간단하게 메소드를 재정의하면 된다.

그리고 부모 클래스의 private 필드는 접근할 수 없지만 protected 필드는 상속한 클래스에서 접근 가능하다.

```typescript
class Marketing extends Department {
  constructor(name: string) {
    super(name);
  }

  describe() {
    console.log('marketing: ' + this.name);
  }
}
const m = new Marketing('mkt');
m.describe(); // marketing: mkt
```

<br>

# 67. Getters & Setters

getter, setter를 사용할 수 있다.

둘 다 get, set 키워드를 앞에 붙이고 메소드처럼 정의하면 되고, getter는 어떤 로직을 수행한 후에 값을 리턴하는식으로 선언하고, 사용할 때는 메소드처럼 사용한다.

setter는 어떤 값을 파라미터로 받아서 필드의 값을 바꾸는 로직을 수행하는 메소드고, 사용할 때는 메소드 호출이 아니라 파라미터에 값을 대입하는 것처럼 사용하면 된다.

```typescript
class ExampleClass {
  constructor(private name: string = 'john') {}

  get lastName() {
    return this.name;
  }

  set lastName(s: string) {
    this.name = s;
  }
}
const example = new ExampleClass();
example.lastName; // john
example.lastName = 'james';
```

<br>

# 68. Static Methods & Properties

static 키워드로 static 프로퍼티나 메소드를 만들 수 있다.

보통 유틸리티 함수를 만들거나, 글로벌 변수를 저장할 때 사용한다.

클래스 내에서 접근할 떄는 this.프로퍼티가 아니라 클래스명.프로퍼티 로 접근해야 한다

```typescript
class Utils {
  static greeting = 'hi';

  static add(n1: number, n2: number) {
    return n1 + n2;
  }
}
console.log(Utils.greeting); // hi
console.log(Utils.add(2, 3)); // 5
```

<br>

# 69. Abstract Classes

abstract 키워드로 추상 클래스를 만들 수 있다.

추상 클래스는 직접 인스턴스를 만들 수 없고, 상속받을 클래스를 위해 메소드, 멤버변수를 정의할 수 있다.

상속받은 클래스는 추상 메소드를 구현해야 한다.

```typescript
abstract class Animal {
  constructor(public name: string) {}

  getName() {
    return name;
  }
  abstract speak(): void; // 상속받는 클래스에서 구현해야 한다
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak() {
    console.log('bow');
  }
}
```

<br>

# 70. Singletons & Private Constructors

클래스의 인스턴스를 하나만 생성할 수 있는 패턴을 싱글톤 패턴이라고 한다.

싱글톤 패턴을 private constructor를 사용하여 구현할 수 있다.

생성자를 private으로 설정하여 new 키워드로 인스턴스를 생성하지 못하게 하고, static 메소드와 필드를 만들어서 처음 호출할 때만 인스턴스를 만들어서 저장해두고, 그 다음 호출부터는 private 필드에 저장돼있는 객체를 리턴한다.

```typescript
class Manager {
  private static instance: Manager;

  private constructor(public name: string) {}

  static getInstance() {
    if (!Manager.instance) {
      this.instance = new Manager('john');
    }
    return this.instance;
  }
}

// const manager = new Manager('john'); // Error
const manager = Manager.getInstance();
console.log(manager);
console.log(Manager.getInstance() === Manager.getInstance()); // true
```
