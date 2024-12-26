import { useState } from 'react'
function useQuiz() {
    const [quiz, setQuiz] = useState({
        name: 'Country Quiz',
        questions: [
          {
            question: '¿Cuál es la capital de Colombia?',
            options: [
              'Bogotá',
              'Caracas',
              'San Diego',
              'Washington DC'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'Bogotá'
          },
          {
            question: '¿Cuál es la capital de Francia?',
            options: [
              'París',
              'Londres',
              'Roma',
              'Berlín'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'París'
          },
          {
            question: '¿Cuál es la capital de Japón?',
            options: [
              'Tokio',
              'Seúl',
              'Pekín',
              'Bangkok'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'Tokio'
          },
          {
            question: '¿Cuál es la capital de Italia?',
            options: [
              'Roma',
              'Madrid',
              'Lisboa',
              'Atenas'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'Roma'
          },
          {
            question: '¿Cuál es la capital de Canadá?',
            options: [
              'Ottawa',
              'Toronto',
              'Vancouver',
              'Montreal'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'Ottawa'
          },
          {
            question: '¿Cuál es la capital de Australia?',
            options: [
              'Canberra',
              'Sídney',
              'Melbourne',
              'Brisbane'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'Canberra'
          },
          {
            question: '¿Cuál es la capital de Brasil?',
            options: [
              'Brasilia',
              'Buenos Aires',
              'Lima',
              'Santiago'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'Brasilia'
          },
          {
            question: '¿Cuál es la capital de México?',
            options: [
              'Ciudad de México',
              'Guadalajara',
              'Monterrey',
              'Tijuana'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'Ciudad de México'
          },
          {
            question: '¿Cuál es la capital de Egipto?',
            options: [
              'El Cairo',
              'Alejandría',
              'Luxor',
              'Giza'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'El Cairo'
          },
          {
            question: '¿Cuál es la capital de Alemania?',
            options: [
              'Berlín',
              'Hamburgo',
              'Múnich',
              'Fráncfort'
            ],
            answered: false,
            answer: '',
            correctAnswer: 'Berlín'
          }
        ],
        currentQuestion: 1
    })
    function setLevel(level) {
        const newQuiz = {...quiz}
        newQuiz.currentQuestion = level;
        setQuiz(newQuiz)
    }
    function setAnswer(currentQuestion, answer) {
      if (quiz.questions[currentQuestion].answer !== '') return;
      const newQuiz = structuredClone(quiz)
      newQuiz.questions[currentQuestion].answer = answer;
      newQuiz.questions[currentQuestion].answered = true;

      setQuiz(newQuiz)
    }
    return { quiz, setLevel, setAnswer }
}
export { useQuiz }