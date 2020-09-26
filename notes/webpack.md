## 152. What is Webpack & Why do we need it?

ES Module과 같은 수단을 활용해서 모듈화를 했을 때 단점은 여러 파일들을 브라우저에서 불러와야 한다는 점이다.

소스코드가 여러 파일로 나눠져 있으니 브라우저는 필요한 모든 파일들을 각각 HTTP 요청으로 받아와야 한다.

HTTP요청을 할 때마다 약간의 오버헤드가 발생하게 되고, 그렇기 때문에 하나의 큰 파일을 불러올 때보다 더 큰 자원을 소모하게 된다.

그래서 웹팩을 사용해서 이러한 문제점을 해결하고, 몇가지 장점을 더 가져갈 수도 있다.

1. 여러 파일을 하나의 파일로 번들링해서 HTTP요청 오버헤드 감소
2. 코드 최적화 (코드 길이 압축 등)
3. 하나의 커맨드로 모든 기능 한꺼번에 가능 (컴파일, 번들링, 서버구동 등)

<br>

## 153. Installing Webpack & Important Dependencies

webpack을 사용하기 위해 다음과 같은 모듈들을 devDependency로 설치

- webpack
- ts-loader
- typescript
- webpack
- webpack-cli
- webpack-dev-server

<br>

## 154. Adding Entry & Output Configuration

먼저 tsconfig.json에서 설정을 확인한다

- webpack 번들링 결과는 tsconfig의 target 설정대로 따라간다
- 번들링된 코드를 저장할 위치를 outDir에 지정한다

<br>

## 155. Adding TypeScript Support with the ts-loader Package

웹팩을 다음과 같이 설정한다

```javascript
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
};
```

tsconfig.json에서 sourceMap 설정을 한다

```javascript
"sourceMap": true
```
