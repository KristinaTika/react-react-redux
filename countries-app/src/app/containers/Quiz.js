import React, { Component } from 'react';
import { questionService } from '../../services/questionService';
import QuestionItem from '../components/QuestionItem';
import "./Quiz.css";
import Loader from '../partials/Loader';

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            answers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
            finish: false,
            answerCounter: 0,
            required: false,
            categoryButtons: true,
        }

        this.loadQuestions = this.loadQuestions.bind(this);
        this.renderQuestions = this.renderQuestions.bind(this);
        this.handleQuizSubmission = this.handleQuizSubmission.bind(this);
        this.handleClickedAnswer = this.handleClickedAnswer.bind(this);
        this.handleReload = this.handleReload.bind(this);
        this.handleChosenCategory = this.handleChosenCategory.bind(this);
    }

    handleChosenCategory(e) {
        e.preventDefault();
        let { value } = e.target;
        switch (value) {
            case "easy":
                return this.loadQuestions("easy");
            case "medium":
                return this.loadQuestions("medium");
            case "hard":
                return this.loadQuestions("hard");
            default:
                return "";
        }
    }

    loadQuestions(type) {
        return questionService.fetchQuiz(type)
            .then(res => {
                if(res.length === 0) {
                    this.setState({
                        errorMessage: "Error, status code 404",
                        buttons: false,
                        categoryButtons: false
                    });
                } else {
                    this.setState({
                        questions: res,
                        buttons: true,
                        categoryButtons: false
                    });
                }
            })
            .catch((error) => {
                this.setState({
                    errorMessage: "Error, status code 404"
                });
            });
    }

    renderQuestions(questions) {
        const { finish, answers } = this.state;
        return questions.map((q, i) => {
            return <QuestionItem key={i} q={q} finish={finish} handleClickedAnswer={this.handleClickedAnswer} answers={answers} />
        })
    }

    handleClickedAnswer(e, correct, id) {
        let myAnswer = {};
        let { answers } = this.state;

        if (e.target.value === correct) {
            myAnswer = {
                id,
                answer: true,
                clickedResponse: e.target.value
            };

            answers.splice(id, 1, myAnswer);
            this.setState({
                answers,
            });
        }

        if (e.target.value !== correct) {
            myAnswer = {
                id,
                answer: false,
                clickedResponse: e.target.value
            }
            answers.splice(id, 1, myAnswer);
            this.setState({
                answers,
            });
        }
    }

    handleQuizSubmission(e) {
        e.preventDefault();

        const { answers } = this.state;
        let correctCounter = 0;
        let results = answers.map(r => typeof r);

        if (results.includes("string")) {
            return this.setState({
                required: true
            });
        }

        return answers.map((a) => {
            if (a.answer === false) {
                return;
            }
            correctCounter += 1;
            return this.setState({
                finish: true,
                finalScore: correctCounter,
                required: false,
            });
        });
    }

    handleReload() {
        window.location.reload();
    }

    render() {
        const { questions, errorMessage, required, finish, finalScore, buttons, categoryButtons } = this.state;
        return (
            <div id="quiz-container">
                {
                    categoryButtons
                        ?
                        <div>
                            <h3> Please choose the category of questions </h3>
                            <div id="buttons">
                                <button className="btn green" value="easy" onClick={this.handleChosenCategory}>Easy</button>
                                <button className="btn yellow" value="medium" onClick={this.handleChosenCategory}>Medium</button>
                                <button className="btn red" value="hard" onClick={this.handleChosenCategory}>Hard</button>
                            </div>
                        </div>
                        : ""
                }
                <div id="error">
                    {errorMessage && `Something went wrong, couldn't load questions! Try again in a few minutes.`}
                </div>
                <ol id="questions-list">
                    { questions.length === 0 ? <Loader /> : this.renderQuestions(questions)}
                </ol>
                {
                    buttons && <div id="buttons">
                        <button className="btn red" value="Reload questions" onClick={this.handleQuizSubmission} >Submit</button>
                        <button className="btn yellow" value="Submit answers" onClick={this.handleReload}>New Quiz</button>
                    </div>
                }
                <p id="required">{required && "*You must answer all questions"} </p>
                <div className={finish ? "results-div" : ""}>
                    <p>{finish && "Thanks for playing!"} </p>
                    <p>{finish && `Your score: ${finalScore}/20`} </p>
                </div>
            </div>
        );
    }
}

export default Quiz;