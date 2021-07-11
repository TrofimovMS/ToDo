import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from './react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundry';
import {BookstoreServiceProvider} from './components/bookstore-service-context';
import BookstoreService from './services/bookstore-service';

import store from './store';


const bookstoreService = new BookstoreService();

ReactDOM.render(
    // Оборачиваем в Provider, чтобы обеспечить доступ любого компонента к Store
    <Provider store={store}>
        {/* Обработка ошибок в компонентах ниже */}
        <ErrorBoundary>
            {/* Передаёт сервис через ContextAPI */}
            <BookstoreServiceProvider value={bookstoreService}>
                {/* Router из пакета react-router */}
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));    


