import React, { Component } from "react";
import ErrorBoundary from './ErrorBoundary/error-boundary';
import Counter from './Counter/counter';
import Car from './Car';

export const ClickedContext = React.createContext(false);

export default class App extends Component {

  constructor () {
    // super - обращение к элементу выше
    super()
    this.state = {
      clicked: false,
        cars: [
        {name: 'Ford', year:'2021'},
        {name: 'Audi RS7 Sportback', year:'2020'},
        {name: 'BMW M3', year:'2019'},
        {name: 'Lada', year:'2006'}
      ],
      pageTitle: 'React Componets',
      showCars: false
    }
  }

  changeTitleHandler = (newTitle) => {
    // Изменение состояния копонента (setState - получаем при наследование)
     this.setState({
      pageTitle: newTitle
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName (name, index){
    // находим машину по нужному индексу
    const car = this.state.cars[index]
    // Изменяем поле на новое 
    car.name = name
    // Новый массив (клон)
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })
  }

  onDeleteElement(index){
    // Копия нового массива
    const cars = this.state.cars.concat()

    // 1-й параметр index - с которого удаляем
    // 2-й параметр 1\2\3 и т.д - сколько удаляем
    cars.splice(index, 1)
    this.setState({cars})
  }

  componentWillMount(){
    console.log('App componentWillMount');
  }

  componentDidMount(){
    console.log('App componentDidMount');
  }

  render()
  {
    console.log('App Render')
      const {pageTitle, showCars} = this.state;

      // Прохождение по массиву
      let cars = null;
      if(showCars){
        // map проходит по каждому эл.массива (cars) для его вывода
        cars = this.state.cars.map((car, index)=>{
          return(
            // ErrorBoundary - является корневым (HOC - оборачивает компонент) 
            <ErrorBoundary key = {index}>
              <Car
              //При работе со списками нужен ключ (перед. корневому компоненту)
              name={car.name}
              year={car.year}
              // Индекс элемента
              index={index}
              onChangeTitle={()=>this.changeTitleHandler(car.name)}
              onChangeName={(event)=>this.onChangeName(event.target.value, index)}
              onDeleteElement={this.onDeleteElement.bind(this, index)}
              />
            </ErrorBoundary>
          )
        })
      }

      // Шаблон
      return (
        <div style={{textAlign:"center"}}>
        <h1>{pageTitle}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter/>
        </ClickedContext.Provider>

        <hr/>

        <button
        style={{marginTop:'20px'}} 
        onClick={()=>this.toggleCarsHandler()}>
        Toggle Cars </button>

        <button onClick={()=>this.setState({clicked:true})}>Change clicked</button>

        <div style={{
          padding: '10px',
          width: '400px',
          margin: 'auto'
        }}>
          {cars}
        </div>

          {/* Ручная версия вывода данных на экран */}
          {/* <Car 
            name={cars[0].name} 
            year={cars[0].year}
            onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}/>
          <Car 
            name={cars[1].name} 
            year={cars[1].year}
            onChangeTitle={()=>this.changeTitleHandler(cars[1].name)}/>
          <Car 
            name={cars[2].name} 
            year={cars[2].year}
            onChangeTitle={()=>this.changeTitleHandler(cars[2].name)}/> */}
        </div>
    );
  };
}

