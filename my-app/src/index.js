// !!!!!__ОСНОВНОЙ ФАЙЛ___!!!
import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/app/app';

// React Element - JSX Code -> Babel превращает его в JS код

// Render - принимает только компонент <App/>, а не элемент App
ReactDOM.render(<App/>, 
    document.getElementById('root'));