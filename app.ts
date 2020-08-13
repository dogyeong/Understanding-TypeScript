/* 83
인터섹션 타입을 이용해 “여러 경우에 모두 해당”하는 타입을 표현할 수 있다.
type 또는 interface로 정의한 타입을 사용할 수 있다.
*/
type Programmer = {
  favoriteLanguage: string;
};

type BeerLover = {
  favoriteBeer: string;
};

type CatLover = {
  favoriteCat: string;
};

// & 기호로 인터섹션 타입을 정의할 수 있다.
type BeerLovingProgrammer = Programmer & BeerLover;

// 문자열인 동시에 숫자인 값은 존재하지 않으므로, 위 Infeasible 타입은 실제로는 어떤 값도 가질 수 없다.
type Infeasible = string & number;

// 인터섹션 타입 역시 몇 개든 이어가며 정의할 수 있다.
type Awesome = Programmer & BeerLover & CatLover;

/* 84
타입을 동적으로 체크할 때 typeof를 쓸 수 있지만
객체의 타입을 체크하기 위해서는
in 이나 instanceof 를 사용할 수 있다.
*/

class ExampleClass {
  go() {}
}

const v1 = new ExampleClass();

if (v1 instanceof ExampleClass) {
  v1.go();
}

if ('go' in v1) {
  v1.go();
}
