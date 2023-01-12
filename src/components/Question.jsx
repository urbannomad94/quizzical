import { useState } from "react";
import { nanoid } from "nanoid";

export default function Question({ question, handleClickAnswer, id }) {
    let answers = question.answers;
    function handleClick(answer) {
      if (question.checked) {
        return;
      }
      handleClickAnswer(id, answer)
    }

    const answersElement = answers.map(answer => {
      let id = null;
      if (question.checked)  {
        if (question.correctAnswer == answer) {
          id = 'correct'
        } else if (question.selected === answer) {
          id = 'incorrect'
        } else {
          id = 'not-selected'
        }
      }
      return (
        <button
          key={nanoid()}
          id={id}
          onClick={handleClick}
          className={answer === question.selected ? 'answer selected' : 'answer'}
        >
          {answer}
        </button>
      )
    })



    return (
      <div className="question">
        <h2>{question.question}</h2>
        <div className="answer-selection">
            {answersElement}
        </div >
      </div>
    )
  }
  