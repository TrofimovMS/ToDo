import React, { Component } from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/index';

export default class Quiz extends Component{

    state = {
        results: {}, // {[id]:success error}
        isFinished: false,
        activeQuestion: 0,
        // {[id]:'success''error'}
        answerState: null,
        quiz: [
          {
              question: 'What color the sky?',
              rightAnswerId: 1,
              id: 1,
              answers: [
                {text: 'Blue', id:1},
                {text: 'Gray', id:2},
                {text: 'White', id:3},
                {text: 'Orange', id:4}
              ]
          },
          {
              question: 'What was year established St. Petersburg?',
              rightAnswerId: 3,
              id: 2,
              answers: [
                {text: '1700', id:1},
                {text: '1702', id:2},
                {text: '1703', id:3},
                {text: '1803', id:4}
              ]
          }  
        ]
    }

    onAnswerClickHandler = (answerId) =>{

        // ПРоверка правильности
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key]==='success') {
                return
            }
        } 

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results

        if(question.rightAnswerId === answerId){
            if(!results[question.id]){
                results[question.id] ="success"
            }
            this.setState({
               answerState: {[answerId]: 'success'},
               results 
            })

            const timeout = window.setTimeout(()=>{

                if(this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)
        } else {
            // В рез. записали, что такой id вопроса был отвечен не правильно
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
        
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler= () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            rexults: {}
        })
    }

    render(){
        return(
            <div className="quiz">
                <div className="quizWrapper"> 
                    <h1>Answer all questions</h1>
                    {
                    this.state.isFinished ? <FinishedQuiz
                        results= {this.state.results}
                        quiz={this.state.quiz}
                        onRetry={this.retryHandler}
                    /> :
                        <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}