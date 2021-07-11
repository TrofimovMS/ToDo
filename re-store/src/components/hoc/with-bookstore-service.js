import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

// Фун-я, которая принимает функцию, которая принимает компонент, которым будем оборачивать
const withBookstoreService = () => (Wrapped) => {
    // В HOC - мы создаем новый компонент, код ниже
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props} 
                        bookstoreService={bookstoreService}/>);
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
}

export default withBookstoreService;