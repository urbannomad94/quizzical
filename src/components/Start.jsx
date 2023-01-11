export default function Start({ startQuiz }) {

  return (
    <div className="start-page">
      <h1>Quizzical</h1>
      <h2>Test your knowledge</h2>
      <button className="btn start-btn" onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}
