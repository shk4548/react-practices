ex08: JSX Tutorials

01. 특징1: HTML 과 차이점
02. 특징2: Single Root Node 
03. 함수 컴포넌트 만들기
04. Pure react(React API)로 컴포넌트 작성하기 // 잘 다루지 않음
05. 클래스 컴포넌트 만들기 // 잘 다루지 않음
06. 특징3: JSX 표현식 표기법 ({js expression})과 문제점, 공백
07. Dynamic HTML Rendering
08. Comment

count + 1
f()

if(){

}
1. 설치
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    $ npm i react react-dom


2. 설정 
    babel.config.json
    webpack.config.js

3. npm 스크립팅
    "scripts": {
    "start": "npx webpack serve --progress --mode development --env",
    "build": "npx webpack"
  }

4. 실행
    $ npm run debug src={01|02|03|04|...}