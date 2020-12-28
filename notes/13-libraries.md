## 161. Using JavaScript (!) Libraries with TypeScript

타입스크립트로 개발하면서 자바스크립트 라이브러리를 사용해야 할 경우가 있다.

하지만 `import _ from 'lodash';` 처럼 라이브러리의 모듈을 불러오면 에러가 발생하게 된다. 라이브러리의 소스 코드는 js로 작성되었기 때문에 타입스크립트가 해석할 수 없기 때문이다.

이를 해결하기 위해서는 라이브러리의 타입을 추가하면 된다.

보통 `라이브러리 이름 types` 로 검색하면 보통 npm에 있다.

`npm i -D @types/lodash` 와 같이 타입을 설치하면 에러가 발생하지 않는다.

<br>

## 162. Using "declare" as a "Last Resort"

만약 라이브러리의 타입을 선언한 d.ts 파일이 없으면 어떻게 할까?

`declare`로 해당 라이브러리를 있다고 선언해줄 수 있다.

`declare const myLibrary: any;`

<br>

## 163. No Types Needed: class-transformer

class-transformer는 일반 리터럴 오브젝트에서 클래스 오브젝트로 변환할 수 있는 라이브러리다.

```typescript
import { Product } from './Product';

const products = [
  { title: 'A Book', price: 9.99 },
  { title: 'B Book', price: 10.99 },
];

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});
```

위와 같이 일반 오브젝트의 배열이 있고, 이 값들을 클래스의 인스턴스로 변환하고 싶을 때 `map`을 사용해서 반복적으로 변환할 수 있다.

패키지 매니저에서 class-transformer, reflect-metadata를 설치하고, class-transformer의 `plainToClass` 메소드를 활용해 plain object를 class object로 쉽게 변환할 수 있다.

```
npm install class-transformer
npm install refelct-metadata
```

```typescript
import { Product } from './Product';

const products = [
  { title: 'A Book', price: 9.99 },
  { title: 'B Book', price: 10.99 },
];

const loadedProducts = plainToClass(Product, products);
```

<br>

## 164. TypeScript-embracing: class-validator

class-validator 라이브러리를 사용하면 타입스크립트 환경에서 데코레이터 및 비 데코레이터 기반 데이터 유효성 검사를 수행할 수 있다.

```typescript
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class Product {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}
```

```typescript
import { Product } from './Product';
import { validate } from 'class-validator';

const newProd = new Product('', -5.99);

validate(newProd).then((errors) => {
  if (errors.length > 0) {
    // VALIDATION ERRORS
  }
});
```

위와 같이 클래스에서는 데코레이터를 달아두면, 클래스의 객체를 만들고 난 다음 class-validator의 validate 메소드로 유효성검사를 할 수 있다.

validate 메소드는 에러 정보가 담긴 배열을 resolve하며, 유효성검사를 통과했을 경우에는 빈 배열을 resolve한다.
