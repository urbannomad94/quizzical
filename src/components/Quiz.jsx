import Question from "./Question";
import { useEffect, useState } from 'react';
import { nanoid } from "nanoid";

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(false);

    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

    useEffect(() => {
        const fetchQuestions = async () => {
            let res = await fetch('https://opentdb.com/api.php?amount=5')
            let data = await res.json();
            let q = [];
            data.results.forEach(question => {
                q.push({id: nanoid(), question: question.question, answers: shuffleArray([...question.incorrect_answers, question.correct_answer]), correctAnswer: question.correct_answer, selected: null, checked: false}
            )})
            setQuestions(q);
        }
        fetchQuestions();
    }, [count]);

    function handleCheck() {
        let selected = true;
        questions.forEach(question => {
            if (question.selected === null) {
                selected = false;
                return;
            }
        })
        if (!selected) {
            return
        }
        setQuestions(prevQuestions => prevQuestions.map(question => {
            return {...question, checked:true}
        }))
        setChecked(true);
        let correct = 0;
        questions.forEach(question => {
            if (question.correctAnswer === question.selected) {
                correct += 1;
            }
        })
        setCorrectAnswers(correct);
    }

    function handleClickAnswer(id, answer) {
        setQuestions(prevQuestions => prevQuestions.map(question => {
            return question.id === id ? {...question, selected: answer} : question;
        }))
    }

    function handlePlayAgain() {
        setCount(prevCount => prevCount + 1);
        setChecked(false);
    }

    const questionElements = questions ? questions.map(question => (
            <Question
            key={question.id}
            id={question.id}
            handleClickAnswer={handleClickAnswer}
            question={question} />
        )
    ) : [];

    return (
      <div>
        {questionElements}
        <div className="btn-wrapper">
            {checked && <span className="score">You scored: {correctAnswers}/5 correct answers</span>}
            <button onClick={checked ? handlePlayAgain : handleCheck} className="btn check-btn">{checked ? 'Play Again' : 'Check Answers'}</button>
        </div>
      </div>
    )
  }
  