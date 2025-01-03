import { useState, useEffect } from 'react'
import { createQuestions } from '../utils/createQuestions'
function useQuiz() {
    const initialState = {
      name: 'Country Quiz',
      questions: [],
      currentQuestion: 1
    }
    const [quiz, setQuiz] = useState(initialState)
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [loading, setLoading] = useState(true)
    function setLevel(level) {
        const newQuiz = {...quiz}
        newQuiz.currentQuestion = level;
        setQuiz(newQuiz)
    }
    async function getQuestions() {
      const questions = await createQuestions(10);
      const newQuiz = {...quiz}
      newQuiz.questions = questions;
      setQuiz(newQuiz)
      setLoading(false)
    }
    function setAnswer(currentQuestion, answer) {
      if (quiz.questions[currentQuestion].answer !== '') return;
      const newQuiz = structuredClone(quiz)
      newQuiz.questions[currentQuestion].answer = answer;
      newQuiz.questions[currentQuestion].answered = true;

      setQuiz(newQuiz)
    }
    function getCorrectAnswers(questions) {
      return questions.reduce((prev, cur) => {
        if (cur.correctAnswer === cur.answer) {
          return prev + 1;
        } else {
          return prev;
        }
      }, 0) 
    }
    function resetQuiz() {
      setLoading(true)
      setQuiz(initialState)
      setQuizCompleted(false)
      getQuestions()
    }
    useEffect(() => {
      if (quiz.questions.length === 0) return;
      const questions = quiz.questions;

      const isAllQuestionAnswered = questions.every((question) => {
        return question.answered === true;
      });
      
      if (isAllQuestionAnswered) {
        setQuizCompleted(true);
      }

    }, [quiz])

    useEffect(() => {
      getQuestions()
    }, [])
    return { quiz, setLevel, setAnswer, quizCompleted, getCorrectAnswers, resetQuiz, loading }
}
export { useQuiz }