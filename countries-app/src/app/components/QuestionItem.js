import React from 'react';
import "./QuestionItem.css";
import Answer from './Answer';


const QuestionItem = (props) => {

    const { id, question, correctAnswer, incorrectAnswers } = props.q;
    const { handleClickedAnswer, answers, finish } = props;
    
    let displayWrong = incorrectAnswers.map((a, i) => {
        return <Answer wrong={a} answer={correctAnswer} id={id} key={i} handleClickedAnswer={handleClickedAnswer} finish={props.finish} answers={answers}/>
    });

    return (
        <li className="question-li">
            <p> {question} </p>
            {displayWrong}
            <Answer correct={correctAnswer} id={id} handleClickedAnswer={handleClickedAnswer} finish={finish} answers={answers}/>
        </li>
    )
}

export default QuestionItem;
