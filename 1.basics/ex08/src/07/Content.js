import React, { Fragment } from 'react';
import Clock from './Clock';

function content(){
  new Date();
 // hour minuate second 구해서 표현식에 넣기 과제
  return (
    <Fragment>
      <p>{`Dynamic HTML Rendering`}</p>
      <Clock />
    </Fragment>
  )
}

export default content;

// const f = function (){}
// const f;
// () => {}