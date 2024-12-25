import './questionsoverview.css'
function QuestionsOverview({ quiz }) {
    return (
        <section className='questions-overview-container'>
        {quiz.questions.map((question, index) => {
            return <div
            key={index}
            className={quiz.currentQuestion > index? 'singleCurrentQuestion activeQuestion' : 'singleCurrentQuestion'}
            >
                {index + 1}
            </div>
        })}
        </section>
    )
}

export { QuestionsOverview }