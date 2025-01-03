import { getCountries } from '../services/getCountries'
import { createCapitalQuestion } from './createCapitalQuestion';
import { randomCountryNumber } from './randomCountry'

async function createQuestions(numberQuestions) {
    try {
        const countries = await getCountries();
        
        const countriesToTest = Array(numberQuestions).fill(0).map(country => randomCountryNumber(countries.length))


        const questions = countriesToTest.map(country => {
            const countriesOptionsIndex = Array(4).fill(0).map(country => randomCountryNumber(countries.length))

            const countriesOptions = countriesOptionsIndex.map(index => {
                return countries[index].capital[0]}
            )
            
            return createCapitalQuestion(countries[country], countriesOptions)
            
        })
        

        return questions;
    } catch (error) {
        console.error(error)
    }
}

export { createQuestions }