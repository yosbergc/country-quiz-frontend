import './question.css'
import Check from '../../assets/Check_round_fill.svg'
import Close from '../../assets/Close_round_fill.svg'
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
                        const currentQuestionAnswer = quiz.questions[quiz.currentQuestion - 1].answer;
                        const correctAnswer = quiz.questions[quiz.currentQuestion - 1].correctAnswer;
                        const answeredBoolean = quiz.questions[quiz.currentQuestion - 1].answered;

                        const dynamicClass = `option-single ${ currentQuestionAnswer === answer && 'option-single-active'}`
                        const correctAnswerValidation = currentQuestionAnswer === correctAnswer  && answer === currentQuestionAnswer;
                        const incorrectAnswer = currentQuestionAnswer !== correctAnswer && answer === currentQuestionAnswer;
                        return <button key={answer} className={dynamicClass} onClick={() => setAnswer(quiz.currentQuestion - 1, answer)}>
                          { answer  }
                          { correctAnswerValidation && <img src={Check} alt="Correct Answer" /> }
                          { answeredBoolean && correctAnswer === answer && !correctAnswerValidation && <img src={Check} alt="Correct Answer" /> }
                          { incorrectAnswer && <img src={Close} alt='Incorrect answer'/>  }
                        </button>
                    })
                }
            </section>
        </section>
    )
}
export { Question }