import React, { Component } from 'react';

// ErrorBoundary является компонентом высшего порядка HOC
export default class ErrorBoundary extends Component{
    state={
        hasError:false
    }

    // Метод обработки ошибок
    componentDidCatch(err, info){
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1 style={{color:'red'}}>Something went wrong</h1>
        }
        
        // вернёт детей, которые оборачивал
        // А именно сам компонент Car 
        return this.props.children
    }
}