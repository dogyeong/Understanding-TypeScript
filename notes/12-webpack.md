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

<br>

## 156. Finishing the Setup & Adding webpack-dev-server

webpcak-dev-server를 적용하기 위해서 webpack.config.js에 publicPath를 지정한다

- path : 어디에 결과가 저장되는지 에 관한 것
- publicPath : 배포 빌드 할 때 Webpack plugins(ulr-loader,file-loader 같은..), CSS나 HTML파일 안에 URL들을 업데이트 해주기 위한 것(prefix개념)

```javascript
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
```

<br>

## 157. Adding a Production Workflow

실제 배포할 떄는 Production 모드를 사용해서 코드를 최적화할 수 있다.

1. production용 설정파일을 하나 만든다. `webpack.config.production.js`과 같은 이름
2. mode는 production으로 설정, sourceMap 설정을 비활성화하고, 약간의 플러그인을 더 추가
3. 번들링하는 스크립트를 다음과 같이 설정 `webpack --config webpack.config.production.js`

```javascript
// webpack.config.production.js

const path = require('path');
const CleanPlugin = require('clean-webpack-plugin'); // 번들링할때 기존 파일들 삭제해주는 플러그인

module.exports = {
  mode: 'production',
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
  devtool: 'none',
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
```
