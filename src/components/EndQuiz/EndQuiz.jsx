import EndQuizImage from '../../assets/congrats.svg'
import { useMemo } from 'react'
import './endquiz.css'
function EndQuiz({ quiz, quizCompleted, getCorrectAnswers }) {
    const correctAnswered = useMemo(() => {
        if (quizCompleted) {
            return getCorrectAnswers(quiz.questions)
        }
    }, [quizCompleted])
    return (
        <section className='endquiz-inner-section'>
            <img src={EndQuizImage} alt="End Quiz Image" />
            <h2>Congrats! You completed the quiz.</h2>
            <p>You answer {correctAnswered}/{quiz.questions.length} correctly</p>

            <button>Play again</button>
        </section>
    )
}
export { EndQuiz }