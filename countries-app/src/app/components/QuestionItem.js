import React from 'react';
import "./QuestionItem.css";
import Answer from './Answer';


const QuestionItem = (props) => {

    const { id, question, correctAnswer, incorrectAnswers } = props.q;
    
    let displayWrong = incorrectAnswers.map((a, i) => {
        return <Answer wrong={a} answer={correctAnswer} id={id} key={i} handleClickedAnswer={props.handleClickedAnswer} finish={props.finish} answers={props.answers}/>
    });

    return (
        <li className="question-li">
            <p> {question} </p>
            {displayWrong}
            <Answer correct={correctAnswer} id={id} handleClickedAnswer={props.handleClickedAnswer} finish={props.finish} answers={props.answers}/>
        </li>
    )
}

export default QuestionItem;
