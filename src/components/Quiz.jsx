import Question from "./Question";
import { useEffect, useState } from 'react';

export default function Quiz() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            let res = await fetch('https://opentdb.com/api.php?amount=5')
            let data = await res.json();
            setQuestions(data.results);
        }
        fetchQuestions();
    }, []);

    function markChecked() {
        console.log('clicked')
    }

    const questionElements = questions.map((question, i) => (
            <Question
            key={i}
            markChecked={markChecked}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}/>
        )
    )

    return (
      <div>
        {questionElements}
        <div className="btn-wrapper">
            <button onClick='' className="btn answer-btn">Check Answers</button>
        </div>
      </div>
    )
  }
  