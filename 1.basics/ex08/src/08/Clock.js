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
  /*
    comment 01 : 컴포넌트 안이기 때문에 자바스크립트 구문이 가능하다.
  */
      <div
        /*
          comment02: 여기서도 다중행 주석이 가능하다 (비추!)
        */
        className='clock'
        title='시계'>   
          {('0' + (hour > 12 ? hour -12 : hour)).slice(-2)}
          {' : '}

          {/*
            commnt03: 이 주석 추천, 이런방식으로 표현식이 실행되는 불록안에서 주석을 달아야한다.
          */}
          {('0' + minuate).slice(-2)}
          {' : '}

          {/*
            JSX는 HTML이 아니다!!  <!-- --> 주석 사용 불가
          */}
          {('0' + second).slice(-2)}
          {' '}
          
          // comment04: JSX 안에서 이 주석을 사용하면 그대로 화면에 나온다.
          {hour > 12 ? 'PM' : 'AM'}
      </div>
    );
}

export default Clock;