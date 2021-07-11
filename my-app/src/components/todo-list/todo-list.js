import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

// React component
const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) =>{
    // map - позволяет работать с массивом каждого дочернего элемента отдель
    const elements = todos.map((item)=>{

        const {id, ...ItemProps} = item;

        return(
            <li key={id} className="list-group-item">
                {/* Взять каждое значение из атрибута item и передать его 
                TodoListItem
                Использование spread оператора  */}
                <TodoListItem 
                    // ...ItemProps - это массив label 
                    {...ItemProps}
                    onDeleted = {() => onDeleted(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
                    onToggleDone={()=>onToggleDone(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;