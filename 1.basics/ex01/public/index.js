const App = function(){
    const App = document.createElement('h1');
    App.textContent = 'Hello World';

    return App;
}

const el = App();
document.getElementById('root').appendChild(el); // 랜더링