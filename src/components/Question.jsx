import { useState } from "react";

export default function Question({ question, correctAnswer, incorrectAnswers, markChecked }) {
    // const [selectedAnswer, setSelectedAnswer] = useState();

    // const styles = {
    //     backgroundColor: selectedAnswer ? '#59E391' : 'white',
    // };

    const answerArray = [...incorrectAnswers, correctAnswer]
    const answersElement = answerArray.sort((a, b) => 0.5 - Math.random()).map((answer, i) => (
        <>
            <li
            key={i}
            onClick={markChecked}
            className="answer">{answer}</li>
        </>
    ))

    return (
      <div className="question">
        <h2>{question}</h2>
        <ul className="answer-selection">
            {answersElement}
        </ul>
        <hr />
      </div>
    )
  }
  