function randomCorrectAnswer() {
    const randomNumber = Math.random() * 3
    const number = Number(randomNumber.toFixed());

    return number;
}

export { randomCorrectAnswer }