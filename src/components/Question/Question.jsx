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
                        const dynamicClass = `option-single ${quiz.questions[quiz.currentQuestion - 1].answer === answer && 'option-single-active'}`
                        const correctAnswer = quiz.questions[quiz.currentQuestion - 1].answer === quiz.questions[quiz.currentQuestion - 1].correctAnswer && answer === quiz.questions[quiz.currentQuestion - 1].answer;
                        const incorrectAnswer = quiz.questions[quiz.currentQuestion - 1].answer !== quiz.questions[quiz.currentQuestion - 1].correctAnswer && answer === quiz.questions[quiz.currentQuestion - 1].answer;
                        console.log(answer)
                        return <button
                        key={answer}
                        className={dynamicClass}
                        onClick={() => setAnswer(quiz.currentQuestion - 1, answer)}
                        >
                          {answer}
                          {
                            correctAnswer && <img src={Check} alt="Correct Answer" />
                          }
                          {
                            quiz.questions[quiz.currentQuestion - 1].answered && quiz.questions[quiz.currentQuestion - 1].correctAnswer === answer && !correctAnswer && <img src={Check} alt="Correct Answer" />
                          }
                          {
                            incorrectAnswer && <img src={Close} alt='Incorrect answer'/>
                          }
                        </button>
                    })
                }
            </section>
        </section>
    )
}
export { Question }