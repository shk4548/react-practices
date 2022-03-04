import './assets/scss/App.scss';   // scss 파일 path import

const App = function(){
        // app rendering
    const App = document.createElement('h1');
    App.className = 'Header';
    App.textContent = 'Hello Webpack';

    return App;
}

export { App }