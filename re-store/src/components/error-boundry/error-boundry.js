import { render } from '@testing-library/react';
import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component{

    state = {
        hasError: false
    };

    // Метод вызовется когда в одном из компонент возникнет ошибка
    componentDidCatch(){
        this.setState({hasError: true})
    }

    render(){
        // Если возникнет ошибка мы отрисуем Spinner
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return this.props.children;
    } 
}