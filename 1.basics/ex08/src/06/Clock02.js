import React from 'react'

const Clock02 = () => {

    const date = new Date();

    const hour = date.getHours();
    const minuate = date.getMinutes();
    const second = date.getMinutes();

    let ampm = 'AM'; // 변수로 설정해야 바뀜. let사용 -> 중복사용 x
    if(hour > 11){
        ampm = 'PM';
    }

  return (
    <div>   
        {('0' + (hour > 12 ? hour -12 : hour)).slice(-2)}
        :
        {('0' + minuate).slice(-2)}
        :  
        {('0' + second).slice(-2)}
        {' '}
        {hour > 12 ? 'PM' : 'AM'}
    </div>
  );
}

export default Clock02;