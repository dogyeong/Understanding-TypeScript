/* 33
타입스크립트 컴파일 옵션
tsc {filename} --watch (-w) : 파일이 수정될 때마다 자동으로 컴파일한다
*/
console.log('aaaaa');

/* 34 
tsc init : 현재 폴더를 타입스크립트 폴더로 초기화한다.
.tsconfig 파일이 생성되고, tsc 커맨드를 입력하면 폴더 내의 모든 타입스크립트 파일이 컴파일된다.
tsc -w
*/

/* 36
.tsconfig 에 inlude, exclude 옵션을 추가할 수 있다.
inlclude는 생략하면 폴더 내의 모든 타입스크립트 파일이 대상이 되는 듯 하다.
include, exclude 옵션이 존재할 경우 include - exclude에 포함되는 파일들이 컴파일된다.
*/
// "exclude": ["ts", "node_modules"],
// "include": ["./*.ts"]

/* 37, 38
.tsconfig 옵션
target : 컴파일될 자바스크립트의 버전을 지정할 수 있다. es5, es6, es2018 등등..

lib : 사용할 라이브러리를 배열 형태로 정의한다. 만약 lib 항목을 주석처리하고 정의하지 않으면 기본값이 자동으로 정의된다.
- ES5의 기본 값: dom, es5, scripthost
- ES6의 기본 값: dom, dom.iterable, es6, scripthost

직접 정의하려면 아래와 같이 배열 형태로 넣어주면 된다
"lib": [
  "dom",
  "dom.iterable",
  "es6",
  "scripthost"
]
*/

/* 39
allowJs 옵션은 자바스크립트 파일도 컴파일되게 해준다
checkJs 옵션은 자바스크립트 파일 또한 문법 검사를 하고 경고를 발생시킨다
jsx 옵션은 리액트 쓸때 쓰는거
*/

/* 40
sourceMap 옵션은 디버깅할때 유용하게 사용할 수 있다.
true로 설정하고 컴파일하면 .js.map이 추가로 생성되는데, 이 파일은 브라우저가 원본 ts파일을 읽을 수 있게 해준다.
그래서 브라우저의 개발자도구의 source탭에서 보면 타입스크립트파일을 볼 수 있고, 타입스크립트로 디버깅할 수 있다. 
*/

/* 41
outDir : 타입스크립트를 컴파일한 파일들이 저장될 위치를 지정. 예를 들면 "outDir": "./dist"
*/

/* 45
디버깅할 때 sourceMap 옵션을 켜고, Debugger for Chrome 익스텐션을 쓰면 좋다?
*/
