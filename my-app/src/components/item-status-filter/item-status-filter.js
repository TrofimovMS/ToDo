import React, {Component} from 'react';
import './item-status-filter.css';

// export default class ItemStatusFilter extends Component
// Создание класса применяется для работы с внутренним состоянием
export default class ItemStatusFilter extends Component{

    buttons = [
        {name: 'all', label: 'all'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    render(){

        // Достаем значение filter из props
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label})=>{

            const isActive = filter === name;
            const actBtnClazz = isActive? 'btn-info' : 'btn-outline-secondary';

            return (
                <button 
                    type="button" 
                    className={`btn ${actBtnClazz}`}
                    key = {name}
                    onClick = {() => onFilterChange(name)}
                    >
                    {label}
                </button>
            );
        });

        return(
            <div className="btn-group">
                   {buttons}
            </div>
        ); 
    }
}
