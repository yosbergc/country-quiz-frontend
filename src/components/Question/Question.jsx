import './question.css'
function Question({ quiz, setAnswer }) {
    return (
        <section className='single-question--container'>
            <h2
            className="question-title"
            >{quiz.questions[quiz.currentQuestion - 1].question}
            </h2>
            <section className="options">
                {
                    quiz.questions[quiz.currentQuestion - 1].options.map(answer => {
                        return <button
                        key={answer}
                        className={quiz.questions[quiz.currentQuestion - 1].answer === answer && 'option-single option-single-active'}
                        onClick={() => setAnswer(quiz.currentQuestion - 1, answer)}
                        >
                          {answer}
                        </button>
                    })
                }
            </section>
        </section>
    )
}
export { Question }