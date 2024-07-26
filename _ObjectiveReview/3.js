/*
A palindrome is a word or sentence that is spelled the same way both forward and backward. Below we’ve provided you with a function that will check if the string provided is a palindrome, but our code is broken.

Using the error messages in the console and your knowledge of debugging, locate and resolve the errors in our code so that it executes properly.
*/

function checkPalindrome(str) {
  let reversedStr = '';
  
  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  if (str.toLowerCase().split(" ").join("") === reversedStr.toLowerCase().split(" ").join("")) {
    return `The word or sentence, "${str}", is a palindrome!`;
  } else {
    return `The word or sentence, "${str}", is not a palindrome.`;
  }
}

console.log(checkPalindrome('may a moody baby doom a yam'));
