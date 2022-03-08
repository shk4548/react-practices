const babel = require('@babel/core');


const result = babel.transform('const fn = () => 1;')  // const fn = function (){  return 1; } 랑 같은뜻  => 함수
console.log(result);
