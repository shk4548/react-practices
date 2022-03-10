import React, { Fragment } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

function content(){
  new Date();
 // hour minuate second 구해서 표현식에 넣기 과제
  return (
    <Fragment>
      <p>{`특징3: JSX 표현식 표기법({js expression})과 문제점`}</p>
      <Clock01 />
      <Clock02 />
    </Fragment>
  )
}

export default content;

// const f = function (){}
// const f;
// () => {}