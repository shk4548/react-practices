import React from 'react';

const App = function(){
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징1 : HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case 
            */}
            <input type='text' maxLength='10'/>
            
            {/*
                2. Element는 꼭 닫는다.
                오류) <br>, <hr>, <input type='text'>, <img src=''>
            */}
            <br/>
            <hr/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'/>
            
            {/*
                3. 속성 이름은 DOM API 기반이다. (HTML Tag 기반 x) 
                <div id ='box' class='box'>...</div>
                document.getElementById('box').className = 'box';
            */}
            <div id='box' className='box'>
                box 입니당.
            </div>
        </div>
    );
}

export default App;