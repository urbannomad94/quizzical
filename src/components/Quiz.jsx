import Question from "./Question";
import { useEffect, useState } from 'react';
import { nanoid } from "nanoid";

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const shuffleArray = arr => arr.sort((a, b) => 0.5 -  Math.random())

    useEffect(() => {
        const fetchQuestions = async () => {
            let res = await fetch('https://opentdb.com/api.php?amount=5')
            let data = await res.json();
            let q = [];
            data.results.forEach(question => {
                q.push({id: nanoid(), question: question.question, answers: shuffleArray([...question.incorrect_answers, question.correct_answer]), correctAnswer: question.correct_answer}
            )})
            setQuestions(q);
        }
        fetchQuestions();
    }, []);

    function checkAnswer() {
        console.log('clicked')
    }

    const questionElements = questions ? questions.map(question => (
            <Question
            key={question.id}
            id={question.id}
            checkAnswer={checkAnswer}
            question={question} />
        )
    ) : [];

    return (
      <div>
        {questionElements}
        <div className="btn-wrapper">
            <button onClick='' className="btn answer-btn">Check Answers</button>
        </div>
      </div>
    )
  }
  