import './App.css'
import { useQuiz } from './hooks/useQuiz'
import { QuestionsOverview } from './components/QuestionsOverview/questionsOverview'
import { Question } from './components/Question/Question'
import { EndQuiz } from './components/EndQuiz/EndQuiz'
import { createQuestions } from './utils/createQuestions'
function App() {
  const { quiz, setLevel, setAnswer, quizCompleted, getCorrectAnswers, resetQuiz } = useQuiz()
  return (
    <main>
        { !quizCompleted && (
          <section className="quiz-container">
            <h3>{quiz.name}</h3>
            <QuestionsOverview quiz={quiz} setLevel={setLevel} />
            <Question quiz={quiz} setAnswer={setAnswer} />
        </section>
    )}
      {
        quizCompleted && (
        <section className='end-quiz-container'>
          <EndQuiz quiz={quiz}
          quizCompleted={quizCompleted}
          getCorrectAnswers={getCorrectAnswers}
          resetQuiz={resetQuiz}
          />
        </section>
        )
      }
    </main>
  )
}

export default App
