import React, {Component} from 'react';
import withClass from '../hoc/withClass';
// Проверяет типы входящих пакетов
import PropTypes from 'prop-types';

import './Car.css';

// Сar наследуется от копонента выше (App)
class Car extends Component{

    constructor(props){
        super(props)

        // Создаём референцию и кладём в переменную
        this.inputRef = React.createRef()
    }

    // Компоненты подгрузились и готовы к работе, обработке
    componentDidMount(){
        // Если индекс = 3, то установи индекс
        if(this.props.index === 3){
            // this.inputRef - обрачиваем референцию и получаем доступ к различным эл
            // current - конкретный, текущий
            this.inputRef.current.focus()
        }
    }
   
    render(){

        console.log('Car Render')

        const inputClasses=['input']

        // Если в 'props.name' есть значение, то зел. иначе крас.
        if(this.props.name !== ''){
            inputClasses.push('green')
        } else
        inputClasses.push('red')

        if(this.props.name.length > 4){
            inputClasses.push('bold')
        }

        return(
            <>
                <h1>Car name: {this.props.name}</h1>
                <h2>Year: <strong>{this.props.year}</strong></h2>
                <input 
                    ref={this.inputRef}
                    type="text"
                    // onChange событие как onClick 
                    onChange={this.props.onChangeName} 
                    // Наличие значения по-умолчанию
                    value={this.props.name}
                    style={{marginRight:"10px"}}
                    className={inputClasses.join(' ')}
                    ></input>
                {/* {props.children} */}
                <button onClick={this.props.onChangeTitle}>Click</button>
                <button onClick={this.props.onDeleteElement}>Delete</button>
            </>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDeleteElement: PropTypes.func,
    onChangeTitle: PropTypes.func,
}

export default withClass(Car, "car")