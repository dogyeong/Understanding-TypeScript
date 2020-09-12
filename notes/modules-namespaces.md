## 141. Writing Module Code - Your Options

모듈방식으로 코드를 작성하는 방법은 크게 2가지가 있다.

1. Namespaces & File Bundling

- 네임스페이스와 번들링을 이용하면 여러 파일로 작성을 하고, 결과는 하나의 파일로 번들링할 수 있다.
- 같은 이름의 네임스페이스 내에 정의된 타입,클래스,변수 등등의 것들은 다른 파일이라도 접근이 가능하다.
- 그리고 슬래시(`/`) 3개로 시작하는 타입스크립트의 특수한 import 구문을 사용하면 다른 파일의 네임스페이스를 import할 수 있다.
- `/// <reference path="..." />`
- 이렇게 reference와 네임스페이스를 사용하면 코드 스플릿을 하여 타입스크립트를 컴파일할 수 있다.
- 하지만 각각의 타입스크립트 파일들이 컴파일 된 자바스크립트 파일들은 브라우저가 정상적으로 모듈 방식으로 인식할 수 없다.
- 그래서 번들링으로 하나의 파일로 만들어주게 된다.
- `tsconfig.json`에서 outFile 항목을 이용해서 컴파일할 때 하나의 파일로 번들링할 수 있다.

2. ES Module

모던한 ES Module 방식을 사용할 수도 있다. 이 방식이 더 좋은 것으로 보인다.
ES Module방식을 사용하면, 여러 파일을 작성하고 브라우저에는 하나의 스크립트 파일만 import 하면 된다.
그러면 브라우저가 알아서 의존성이 있는 파일들을 다운로드한다.

<br>

## 144. A Problem with Namespace Imports

네임스페이스를 이용한 방식의 문제점은 파일을 import하는 점이다.

파일 내의 원하는 부분만 import, export할 수 없다.

그래서 필요한 부분이 있는 모든 파일들을 import해야만 한다.

<br>

## 146. Using ES Modules

import, export 문을 사용하면 ES Module 기능을 사용할 수 있다.

- ES Module은 자바스크립트의 기능이므로 `.js` 파일을 import 해야한다.
- tsconig 파일에서 es2015 이상으로 설정한다.
- 번들링 기능을 사용할 수 없고, 모든 모듈 파일들이 컴파일되므로 tsconfig에서 outDir속성을 이용하는게 좋다.

<br>

## 147. Understanding various Import & Export Syntaxes

하나의 파일에서 여러가지를 import하는 경우 다음과 같이 이름을 지을 수 있다.

```javascript
// 기본적인 import 구문
import { a, b } from 'module.js';

// 여러개를 하나의 모듈 이름으로 묶을 때
import * as ModuleA from 'module.js';

// 묶어서 import한 것들을 사용할 경우
ModuleA.a;
ModuleA.b;
```

`as`를 이용해서 다른 이름으로 import 할 수 있다.

```javascript
// module.js 의 a를 b라는 이름으로 import
import { a as b } from 'module.js';
```

하나만 export하는 경우, default를 붙일 수 있다.

```javascript
// module.js

// default를 export뒤에 붙여서 export한다
export default something = '...';

// app.js

// default로 하나만 export된 것을 import할 때는, 괄호를 안써도 된다
import something from 'module.js';

// 다른 이름을 사용해도 된다
import sth from 'module.js';
```

<br>

## 148. How Does Code In Modules Execute?

하나의 모듈이 여러 파일에서 import 되면, 앱이 실행되면 그 모듈은 여러번 실행될까?

여러번 import 되더라도 모듈의 코드는 처음 import된 부분에서 한번만 실행된다.
