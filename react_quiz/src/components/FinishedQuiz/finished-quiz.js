import React from 'react';
import Button from '../UI/button/button'
import './finished-quiz.css';

const FinishedQuiz = (props) => {
    // Объект превращает массив ключей этого объекта
    const successCount = Object.keys(props.results).reduce((total, key)=>{
        if(props.results[key]==='success'){
            total++
        }
        return total
    }, 0)

    return (
        <div className="finished-quiz">
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            props.results[quizItem.id]
                        ]
                        return(
                            <li
                                key={index}
                            >
                                <strong>{index + 1}</strong>. &nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')}/>
                            </li>
                        )
                    })
                }
            </ul>

            <p>Answers's correct {successCount} of {props.quiz.length}</p>

            <div>
                <Button 
                    onClick={props.onRetry}
                    type="primary">
                    Retry
                </Button>
                <Button 
                    onClick={props.onRetry}
                    type="success">
                    Enter into the test's list
                </Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;