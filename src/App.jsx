import Start from './components/Start'
import Quiz from './components/Quiz'
import { useState } from 'react';

export default function App() {
  const [quizActive, setQuizActive] = useState(false);

  function startQuiz() {
    setQuizActive(x => !x);
  }

  return (
    <div className='container'>
      {quizActive ? <Quiz /> : <Start startQuiz={startQuiz} />}
    </div>
  )
}
