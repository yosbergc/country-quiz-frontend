function getCountries() {
    return fetch('https://restcountries.com/v3.1/all')
    .then(response => {
      if (!response.ok) {
        return new Error('There was an error with the request.')
      }

      return response.json()
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      return new Error(error)
    })
}
export { getCountries }