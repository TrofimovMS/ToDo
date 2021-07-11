import React from 'react';
import './AnswerItem.css';

const AnswerItem = props => {

    const cls = ['answerItem']

    if(props.state){
        cls.push([props.state])
    }

    return (
        <li 
            className={cls.join(' ')}
            onClick={()=>props.onAnswerClick(props.answers.id)}>
            {props.answers.text}
        </li>
    )
}

export default AnswerItem;