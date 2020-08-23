## 29. The "unknown" Type

타입스크립트에는 unknown 타입도 있다.

unknown 타입은 아직 정해지지 않았다는 의미로, any 타입과 비슷하게 어떤 타입이든 할당할 수 있지만, 다른 타입의 변수에 할당할 때 에러를 발생시킨다는 점이 다르다.

any를 쓰는 것보다 unknown을 쓰는게 조금 더 타입을 확실하게 결정하는 방법이고 나중에 타입체크를 하면서 사용하면 된다.

```typescript
let unknownVar: unknown;
let anyVar: any;
let stringVar: string;

stringVar = anyVar; // no error
// stringVar = unknown; // error

if (typeof unknownVar === 'string') {
  stringVar = unknownVar; // 타입체크 후에는 가능
}
```

<br>

## 30. The "never" Type

함수가 리턴할 수 있는 타입에는 never 타입도 있다.

void와 다르게, never 타입은 함수가 리턴하지 않는 경우에 리턴 타입으로 사용되며 대표적인 예로 에러를 발생시키는 함수의 경우 never 타입을 리턴한다

```typescript
function createError(message: string): never {
  throw new Error(message);
}
```
