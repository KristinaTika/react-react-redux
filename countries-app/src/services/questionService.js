import axios from "axios";
import { easyQuizEndpoint, mediumQuizEndpoint, hardQuizEndpoint } from "../shared/constants";
import { Question } from "../entities/Question";

class QuestionService {

    fetchQuiz(type) {
        switch (type) {
            case "easy":
                return axios.get(easyQuizEndpoint)
                    .then(res => mapQuestions(res));
            case "medium":
                return axios.get(mediumQuizEndpoint)
                    .then(res => mapQuestions(res));
            case "hard":
                return axios.get(hardQuizEndpoint)
                    .then(res => mapQuestions(res));
            default:
                return;
        }
    }
}

const mapQuestions = (res) => {
    const { results } = res.data;
    return results.map((res, i) => {
        const correctAnswer = res.correct_answer;
        const question = res.question;
        const incorrectAnswers = res.incorrect_answers;

        const myQuestion = new Question(question, correctAnswer, incorrectAnswers, i);
        return myQuestion;
    });
}

export const questionService = new QuestionService();