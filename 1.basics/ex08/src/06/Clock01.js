import React from 'react'

const Clock01 = () => {

    const date = new Date();

    let hour = date.getHours();
    if(hour < 10) {
        hour = '0'+ hour;
    }
    const minuate = ('0'+ date.getMinutes()).slice(-2);
    const second = ('0'+ date.getMinutes()).slice(-2);

    let ampm = 'AM'; // 변수로 설정해야 바뀜. let사용 -> 중복사용 x
    if(hour > 11){
        ampm = 'PM';
    }

  return (
    <p>{ampm}-{hour}:{minuate}:{second}</p>
  );
}

export default Clock01;