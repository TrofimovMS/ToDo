import React from 'react';
import AnswerList from './AnswerList/AnswerList';
import './ActiveQuiz.css';

const ActiveQuiz = props => (
    <div className="ActiveQuiz">
        <p className="question">
            <span>
            <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} of {props.quizLength}</small>
        </p>

        <AnswerList
            state = {props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz;