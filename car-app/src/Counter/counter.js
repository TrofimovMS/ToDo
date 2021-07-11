import React, { Component } from 'react';
import Auxiliary from '../hoc/auxiliary';
import Counter2 from '../Counter 2/counter2';

export default class Counter extends Component{

    state = {
        counter: 0,
    }

    addCounter = () =>{
        // setState - локально изменяет состояние копонента
        // Является "асинхронным" - если где-то может произойти изменение в данном state
        // this.setState({
        //     // counter определяется относительно предыдущего сост.
        //     // Текущее состояние counter + 1
        //     counter: this.state.counter + 1
        // })
        
        // setState для асинхронной работы
        this.setState((prevState)=>{
            return{
                counter:prevState.counter + 1
            }
        })
    }
    render(){
        return(
            <Auxiliary>
                <h2>Counter {this.state.counter}</h2>
                <Counter2/>
                <button onClick={this.addCounter}>+</button>
                <button onClick={
                    ()=>this.setState((prevState) => {
                        return {counter: prevState.counter -1}
                    })
                }>-</button>
            </Auxiliary>
        )

        // Фрагменты, можно осуществить работы без корневого эл.
        // Путем присвоения ключей
        // return[
        //     <h2 key={1}>Counter {this.state.counter}</h2>,
        //     <button key={2} onClick={this.addCounter}>+</button>,
        //     <button key={3} onClick={
        //         ()=>this.setState({
        //         counter: this.state.counter -1})
        //     }>-</button>
        // ]
    }
}