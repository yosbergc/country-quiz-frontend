function randomCountryNumber(countryNumbers) {
    return Number((Math.random() * countryNumbers).toFixed())
}
export { randomCountryNumber }