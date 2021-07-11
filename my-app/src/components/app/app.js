// !!!!!__ОСНОВНОЙ ФАЙЛ___!!!
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';
import ItemAddFrom from '../item-add-form';

// App was component
// Класс для изменения внутреннего состояния
export default class App extends Component{

    // Генерация ID последовательно
    maxId = 100;

    state = {
        todoData : [
            this.creatTodoItem('Drink coffe'),
            this.creatTodoItem('Make Awesome App'),
            this.creatTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all'
    };

    creatTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem = (text) =>{
        const newItem = this.creatTodoItem(text);
        this.setState(({todoData}) => {
            // Новый массив, который сосотоит из всех сущ. элементов и нового
            const newArr = [
                ...todoData,
                newItem
            ];

            // Возвращение нового состояния
            return {
                todoData: newArr
            };
        });
    };

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName] : !oldItem[propName]};

        return [
            ...arr.slice(0, idx), 
            newItem,
            ...arr.slice(idx + 1)
        ];
    }    

    onToggleImportant = (id) => {
        this.setState(({todoData})=>{
            return{
                todoData:this.toggleProperty(todoData, id, 'important')
            };
         });
    };

    onToggleDone = (id) => {
     this.setState(({todoData})=>{
        return{
            todoData:this.toggleProperty(todoData, id, 'done')
        };
     });
    };

    deleteItem = (id) =>{
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            // Метод slice не изменяет существующий массив
            // // 2 аргумент начальный индекс и тот, который собираемся удалить
            // const before = todoData.slice(0, idx); 
            // // От этого индекс и до конца
            // const after = todoData.slice(idx + 1);

            // Берём все элементы до и после удаления и конст. новый
            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    search(items, term) {
        if(term.length === 0){
            return items;
        }

        // Поиск с любым регистром
        return items.filter((item)=>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1; 
        });
    };

    filter(items, filter) {
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=>!item.done);
            case 'done':
                return items.filter((item)=>item.done);
            default:
                return items;
        }
    }

    onSearchChange = (term) => {
        this.setState({term});
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    }

    render(){

        const {todoData, term, filter} = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return(
            <div className="todo-app">
                {/* This is React component - using as HTML tag */}
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel 
                        onSearchChange = {this.onSearchChange}/>
                    <ItemStatusFilter 
                        filter = {filter}
                        onFilterChange = {this.onFilterChange}
                    />
                </div>
                <TodoList 
                    todos = {visibleItems}
                    onDeleted ={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddFrom
                    onItemAdded = {this.addItem}
                />
            </div>
            );
        }
    };
    

// React Element - JSX Code -> Babel превращает его в JS код

// Render - принимает только компонент <App/>, а не элемент App
// ReactDOM.render(<App/>, 
//     document.getElementById('root'));
