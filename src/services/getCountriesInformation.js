function getCountries() {
    return fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
}
export { getCountries }