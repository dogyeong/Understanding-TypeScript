"use strict";
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
/* 35
.tsconfig 에 inlude, exclude 옵션을 추가할 수 있다.
inlclude는 생략하면 폴더 내의 모든 타입스크립트 파일이 대상이 되는 듯 하다.
include, exclude 옵션이 존재할 경우 include - exclude에 포함되는 파일들이 컴파일된다.
*/
// "exclude": ["ts", "node_modules"],
// "include": ["./*.ts"]
