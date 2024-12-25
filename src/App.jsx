import './App.css'

import { useState } from 'react'
import { QuestionsOverview } from './components/QuestionsOverview/questionsOverview'
import { Question } from './components/Question/Question'
function App() {
  const [quiz, setQuiz] = useState({
    name: 'Country Quiz',
    questions: [
      {
        question: '¿Cual es la capital de Colombia?',
        options: [
          'Bogota',
          'Caracas',
          'San Diego',
          'Washington DC'
        ],
        answered: false,
        answer: '',
        correctAnswer: 'Bogota'
      },
      {
        question: '¿Cual es la capital de Brasil?',
        options: [
          'Bogota',
          'Caracas',
          'San Diego',
          'Washington DC'
        ],
        answered: false,
        answer: '',
        correctAnswer: 'Bogota'
      },
      {
        question: '¿Cual es la capital de Colombia?',
        options: [
          'Bogota',
          'Caracas',
          'San Diego',
          'Washington DC'
        ],
        answered: false,
        answer: '',
        correctAnswer: 'Bogota'
      },
      {
        question: '¿Cual es la capital de Colombia?',
        options: [
          'Bogota',
          'Caracas',
          'San Diego',
          'Washington DC'
        ],
        answered: false,
        answer: '',
        correctAnswer: 'Bogota'
      },
      {
        question: '¿Cual es la capital de Colombia?',
        options: [
          'Bogota',
          'Caracas',
          'San Diego',
          'Washington DC'
        ],
        answered: false,
        answer: '',
        correctAnswer: 'Bogota'
      }
    ],
    currentQuestion: 1
  })
  return (
    <main>
      <section className="quiz-container">
        <h3>{quiz.name}</h3>
        <QuestionsOverview quiz={quiz} />
        <Question quiz={quiz} />
      </section>
    </main>
  )
}

export default App
