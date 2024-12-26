import './App.css'
import { useQuiz } from './hooks/useQuiz'
import { QuestionsOverview } from './components/QuestionsOverview/questionsOverview'
import { Question } from './components/Question/Question'
function App() {
  const { quiz, setLevel, setAnswer } = useQuiz()
  return (
    <main>
      <section className="quiz-container">
        <h3>{quiz.name}</h3>
        <QuestionsOverview quiz={quiz} setLevel={setLevel} />
        <Question quiz={quiz} setAnswer={setAnswer} />
      </section>
    </main>
  )
}

export default App
