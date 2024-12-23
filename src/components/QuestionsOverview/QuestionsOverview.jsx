function questionsOverview({ currentQuestion, maxQuestions }) {
    return (
        maxQuestions.map((_, index) => {
            return <div
            key={index}
            className={currentQuestion === index + 1 ? 'singleCurrentQuestion activeQuestion' : 'singleCurrentQuestion'}
            >
                {index + 1}
            </div>
        })
    )
}

export { questionsOverview }