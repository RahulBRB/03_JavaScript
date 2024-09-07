const input = document.querySelector('#input');

const lower = document.querySelector('.lower-case span');
const upper = document.querySelector('.upper-case span');
const camel = document.querySelector('.camel-case span');
const pascal = document.querySelector('.pascal-case span');
const snake = document.querySelector('.snake-case span');
const kebab = document.querySelector('.kebab-case span');
const trimmed = document.querySelector('.trimmed-case span');

function capitalizeString(str) {
    if(!str){
        return str;
    } 
    else return str[0].toUpperCase() + str.slice(1, str.length);
}

function toCamelCase(str) {
    const lowerCaseString = str.toLowerCase();
    const wordsArray = lowerCaseString.split(' ');
    const finalArray = wordsArray.map((word, index) => {
        if (index === 0) {
            return word;
        } else {
            return capitalizeString(word);
        }
    })

    return finalArray.join('');
}

function toPascalCase(str) {
    const lowerCaseString = str.toLowerCase();
    const wordsArray = lowerCaseString.split(' ');
    const finalArray = wordsArray.map((word) => {
        return capitalizeString(word);
    })

    return finalArray.join('');
}

function toSnakeCase(str) {
    const wordsArray = str.split(' ');
    return wordsArray.join('_');
}

function toKebabCase(str) {
    const wordsArray = str.split(' ');
    return wordsArray.join('-');
}

function toTrimmedCase(str){
    return str.replaceAll(' ', '');
}

function updateScreen(){
    lower.innerText = input.value.toLowerCase();
    upper.innerText = input.value.toUpperCase();
    camel.innerText = toCamelCase(input.value);
    pascal.innerText = toPascalCase(input.value);
    snake.innerText = toSnakeCase(input.value);
    kebab.innerText = toKebabCase(input.value);
    trimmed.innerText = toTrimmedCase(input.value);
}

updateScreen();


input.addEventListener('input', updateScreen);
