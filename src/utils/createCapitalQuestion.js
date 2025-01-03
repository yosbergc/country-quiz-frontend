import { randomCorrectAnswer } from './randomCorrectAnswer'
function createCapitalQuestion(country, countriesOptions) {
    const correctAnswerIndex = randomCorrectAnswer()
    const options = Array(4).fill(null)
    options[correctAnswerIndex] = country.capital[0];

    const finalOptions = options.map((country, index) => {
        if (country === null) {
            return countriesOptions[index]
        } else {
            return country;
        }
    })
    return {
        question: `What is the capital of ${country.name.common}?`,
        correctAnswer: country.capital[0],
        answered: false,
        answer: '',
        options: finalOptions
    }
}

export { createCapitalQuestion }