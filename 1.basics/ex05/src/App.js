import React from 'react';

const App = function(){
        // app rendering

    //const App = document.createElement('h1');
    //App.textContent = 'Hello World';
    const App = React.createElement('h1', null, 'Hello World');

    return App;
}

export { App }