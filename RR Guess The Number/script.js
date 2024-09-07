(function () {
    const userInput = document.querySelector('.input-field');
    const form = document.querySelector('form');
    const result = document.querySelector('.result');
    const submit = document.querySelector('.submit');
    const restart = document.querySelector('.start-game');
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
            restart.disabled = false;
            submit.disabled = true;
        }

        guesses.push(userInputValue);
        attempts.innerText = `Guesses: ${guesses.join(', ')}`;
        form.reset();
    })

    restart.addEventListener('click', () => {
        result.innerText = "";
        guesses.length = 0;
        attempts.innerText = "";

        restart.disabled = true;
        submit.disabled = false;
        target = Math.round(Math.random() * 100);

    })
})();
