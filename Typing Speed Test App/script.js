const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

// set values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
    const paragraph = [
        "The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet.",
        "A journey of a thousand miles begins with a single step. Perseverance and consistency lead to success.",
        "The curious child asked many questions, each one sparking a new story and a wave of laughter.",
        "In the middle of the forest, the silence was only broken by the rustling of leaves and the chirping of birds.",
        "Technology has advanced rapidly, changing the way we communicate, learn, and work in our daily lives.",
        "She sells seashells by the seashore. This tongue twister can test your pronunciation and speed.",
        "The library was a haven of knowledge, with shelves stacked high with books on every imaginable topic.",
        "The bright sun cast long shadows as the group of friends walked down the quiet street.",
        "Every problem has a solution, and every challenge is an opportunity to learn and grow.",
        "Typing quickly and accurately is a skill that improves with practice and focus over time."
    ];

    const randomIndex = Math.floor(Math.random() * paragraph.length);
    typingText.innerHTML = '';
    for (const char of paragraph[randomIndex]) {
        typingText.innerHTML += `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('current');
    document.addEventListener('keydown', () => input.focus());
    typingText.addEventListener("click", () => input.focus());
}

function initTyping() {
    const chars = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);

    if (timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTime, 1000);
            isTyping = true;
        }

        if (charIndex < chars.length) {
            if (chars[charIndex].innerText === typedChar) {
                chars[charIndex].classList.add('correct');
            } else {
                mistake++;
                chars[charIndex].classList.add('incorrect');
            }

            chars[charIndex].classList.remove('current');
            charIndex++;

            if (charIndex < chars.length) {
                chars[charIndex].classList.add('current');
            }
        }

        mistakes.innerText = mistake;
        cpm.innerText = charIndex - mistake;

        // Check if typing is complete
        if (charIndex === chars.length) {
            clearInterval(timer); // Stop the timer
            input.value = ''; // Clear input
            isTyping = false; // Reset typing state
        }
    } else {
        clearInterval(timer);
        isTyping = false;
        input.value = '';
    }
}


function initTime() {
    if (timeLeft > 0) {
        timeLeft--;
        time.innerText = timeLeft;

        let wpmVal = Math.round(((charIndex - mistake) / 5) / ((maxTime - timeLeft) / 60));
        wpm.innerText = wpmVal > 0 ? wpmVal : 0; 
    } else {
        clearInterval(timer); // Stop the timer when time runs out
        isTyping = false; // Reset typing state
        input.value = ''; // Disable input if needed
    }
}

function reset() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText = timeLeft;
    input.value = '';
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    wpm.innerText = 0;
    cpm.innerText = 0;
    mistakes.innerText = 0;
}

input.addEventListener("input", initTyping);
btn.addEventListener("click", reset);
loadParagraph();
