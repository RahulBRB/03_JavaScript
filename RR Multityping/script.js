const wordsList = ['Developer.', 'Programmer.', 'Student.', 'Coder.', 'Gamer.'];
const span = document.querySelector('h1 span');

function autoType(list, element){

let wordIndex = 0;
let characterIndex = 0;
let skipUpdate = 0;
let reverseType = false;

const intervalId = setInterval(() => {
    if(skipUpdate){
        skipUpdate--;
        return;
    }

    if (!reverseType) {
        skipUpdate = 2;
        element.innerText = element.innerText + list[wordIndex][characterIndex];
        characterIndex++;
    } else {
        element.innerText = element.innerText.slice(0, element.innerText.length - 1);
        characterIndex--;
    }


    if (characterIndex === list[wordIndex].length) {
        skipUpdate = 6;
        reverseType = true;
    }

    if (element.innerText.length === 0 && reverseType) {
        reverseType = false;
        wordIndex++;
    }


    if (wordIndex === list.length - 1) {
        wordIndex = 0;
    }

}, 100);
}

autoType(wordsList, span);
