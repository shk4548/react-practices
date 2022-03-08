import React from 'react';

const App = function(){
    //const App = React.createElement('h1', null, 'Hello World');
    //return App;
    const message = 'Hello World';
    return ( // JSX의 XML 임 HTML이 아님
        <div> 
            <h1>{message}</h1>
        </div>
    );
        // 위랑 같은 코드
   // React.createElement('div', React.createElement('h1', null, 'Hello World'), null);
}

export { App }