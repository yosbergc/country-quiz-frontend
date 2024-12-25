import './questionsoverview.css'
function QuestionsOverview({ quiz, setLevel }) {
    return (
        <section className='questions-overview-container'>
        {quiz.questions.map((question, index) => {
            return <div
            key={index}
            className={quiz.currentQuestion > index ? 
                'singleCurrentQuestion activeQuestion' : 'singleCurrentQuestion'}
            onClick={() => setLevel(index + 1)}
            >
                {index + 1}
            </div>
        })}
        </section>
    )
}

export { QuestionsOverview }