import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
    // Оборачиваем в Provider, чтобы обеспечить доступ любого компонента к Store
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));    


