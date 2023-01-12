import { useState } from "react";
import { nanoid } from "nanoid";

export default function Question({ question, checkAnswer }) {
    // const [selectedAnswer, setSelectedAnswer] = useState();

    // const styles = {
    //     backgroundColor: selectedAnswer ? '#59E391' : 'white',
    // };

    let answers = question.answers;

    const answersElement = answers.map((answer, i) => (
          <li
            key={i}
            onClick={checkAnswer}
            className="answer"
          >
            {answer}
          </li>
    ))

    return (
      <div className="question">
        <h2>{question.question}</h2>
        <ul className="answer-selection">
            {answersElement}
        </ul>
        <hr />
      </div>
    )
  }
  