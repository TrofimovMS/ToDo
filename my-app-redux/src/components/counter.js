import React from 'react';
// HOC
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../actions'

const Counter = ({counter, inc, dec, rnd}) => {
    return(
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button 
                // eventListener
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button 
                // eventListener
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button 
                // eventListener
                onClick={rnd}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

// Функция вернёт новый компонент, который оборачивает Counter
export default connect(mapStateToProps, actions)(Counter);