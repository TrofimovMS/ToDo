import React from 'react';

// Функция принимает некоторый компонент и корневой класс
const withClass = (Component, className) =>{
    // Возвращает новую функцию
    return (props) => {
        // Возвращает JSX
        return (
            <div className={className}>
                <Component {...props}/>
            </div>
        )
    }
}

export default withClass;