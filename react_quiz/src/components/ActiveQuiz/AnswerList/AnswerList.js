import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import './AnswerList.css';

const AnswerList = props =>(
    <ul className="answersList">
        {props.answers.map((answers, index)=>{
            return(
                <AnswerItem
                    key={index}
                    answers={answers}
                    onAnswerClick = {props.onAnswerClick}
                    state={props.state ? props.state[answers.id] : null}
                />
            )
        })}
    </ul>
)

export default AnswerList;