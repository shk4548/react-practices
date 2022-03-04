import './assets/scss/App.scss';   // scss 파일 path import
import logo from './assets/images/logo.svg';

const App = function(){
        // app rendering
    const app = document.createElement('div');
    app.className = 'App';
    app.innerHTML = 
        `<header class = 'App-header'>
            <img src = '${logo}' class ='App-logo' alt ='logo'/>
            <p>Hello World</p>
        </header>`;

    return app;
}

export { App }