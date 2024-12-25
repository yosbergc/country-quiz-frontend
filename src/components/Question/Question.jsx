import './question.css'
function Question({ quiz }) {
    return (
        <section className='single-question--container'>
            <h2 className="question-title">{quiz.questions[quiz.currentQuestion - 1].question}</h2>
            <section className="options">
                {
                    quiz.questions[quiz.currentQuestion - 1].options.map(answer => {
                        return <button key={answer} className={`option-single`}>{answer}</button>
                    })
                }
            </section>
        </section>
    )
}
export { Question }