import './assets/css/App.css';

const App = function(){
        // app rendering
    const App = document.createElement('h1');
    App.className = 'Header';
    App.textContent = 'Hello Webpack';

    return App;
}

export { App }