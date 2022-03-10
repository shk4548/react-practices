import React from 'react'

const Clock = () => {

    const date = new Date();

    const hour = date.getHours();
    const minuate = date.getMinutes();
    const second = date.getMinutes();

    const html = 
    "<span>" +
      ('0' + (hour > 12 ? hour -12 : hour)).slice(-2) +
      ":" + 
      ('0' + minuate).slice(-2) +
      ":" + 
      ('0' + second).slice(-2) +
      " " +
      (hour > 12 ? 'PM' : 'AM') +
    "</span>"

  return (
    // HTML 태그를 동적으로 생성하여 JSX element 의 특정 속성 (dangerouslySetInnerHTML)
    // 으로 랜더링 하는 작업은 금지하고 있지만,
    // XSS (Cross-Site Scripting) 보호기능을 끄고 사용할 수 있다.
    
    <div dangerouslySetInnerHTML={{__html: html}}/>  // 객체로 넣어줌
  );
}

export default Clock;