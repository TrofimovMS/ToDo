import React, {Component} from 'react';

import './todo-list-item.css'

// Создание класса применяется для работы с внутренним состоянием
export default class TodoListItem extends Component{

    // Возвращает элемент
    render(){

        // Место, где получаем текущее свойство
        // Деструкторизация
        const {
            label, 
            onDeleted, 
            onToggleImportant, 
            onToggleDone, 
            important, 
            done} = this.props;
 

        let classNames = 'todo-list-item';
        if(done){
            classNames += ' done ';
        }

        if(important){
            classNames += ' important '
        }

        return (
            <span className= {classNames}> 
                <span 
                    className="todo-list-item-label"
                    onClick ={onToggleDone}>
                    {label}
                </span>
    
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick = {onToggleImportant}>
                        <i className="fa fa-exclamation">I</i>    
                </button>
    
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick = {onDeleted}
                        >
                        <i className="fa fa-trash-o">D</i>    
                </button>
            </span>
            );
    }
}

// В функцию передаём значение props - которому соответствует lable
// Изначально important false, так как не у всех объектов есть этот атриб.
