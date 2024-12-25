import { useState } from 'react'
function useQuiz() {
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
    function setLevel(level) {
        const newQuiz = {...quiz}
        newQuiz.currentQuestion = level;
        setQuiz(newQuiz)
    }
    return { quiz, setLevel }
}
export { useQuiz }