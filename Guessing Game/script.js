const input = document.querySelector('.guess-field');
const guessBtn = document.querySelector('.guess-btn');
let wrong = document.querySelector('.wrong');
let guesses = document.querySelector('.guesses');

let answer = Math.floor(Math.random()*100) +1;
let numGuessed = 0;

guessBtn.addEventListener('click', ()=>{
    guessNumber();
    numGuessed++;
})

// NaN = Not a Number
function guessNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrong.innerHTML = 'Enter a number beween 1 to 100!';
    }
    else if(input.value>answer){
        wrong.innerHTML = 'Too high! Try again!';
    }

    else if(input.value<answer){
        wrong.innerHTML = 'Too low! Try again!';
    }
    else {

           wrong.innerHTML = 'Congratulations! You guessed the right number!';

           guesses.innerHTML = `No. of Guess: ${numGuessed}`;
           guesses.classList.remove('hide')
    }
}