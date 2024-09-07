const userInput = document.querySelector('.input-field');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const guesses = [];
const attempts = document.querySelector('.attempts');

let target = Math.round(Math.random() * 100);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userInputValue = parseInt(userInput.value);
    if (userInputValue < target) {
        result.innerText = "Too low!";
    } else if (userInputValue > target) {
        result.innerText = "Too high!";
    }
    else {
        result.innerText = "You guessed it right!";
    }

    guesses.push(userInputValue);
    attempts.innerText = `Guesses: ${guesses.join(', ')}`;
    form.reset();
})
