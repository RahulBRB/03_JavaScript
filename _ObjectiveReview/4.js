/*
Use your knowledge of the DOM and event handlers to create an event handler that does the following when the “here” button, with an id of #colorBtn, is clicked:

Changes the background color of the document body.
Displays the randomly generated background color value inside of the paragraph element with an id of #randomColorText.
*/

// Generate a random hexadecimal string
const generateBackgroundColor = () => {
  const hexadecimals = '0123456789ABCDEF';
  let randomHexString = '#';
  for (let i = 0; i < 6; i++) {
    const randomHexChar = hexadecimals[Math.floor(Math.random() * hexadecimals.length)];
    randomHexString += randomHexChar;
  };
  return randomHexString;
};

// Grab the element with ID #colorBtn from the DOM
const colorBtn = document.querySelector('#colorBtn');

// Change the background color and display the color on the page
const changeColor = () => {
    const randomBackgroundColor = generateBackgroundColor();
    document.body.style.backgroundColor = randomBackgroundColor;
    document.querySelector('#randomColorText').innerHTML = randomBackgroundColor;
}

// Event handler
colorBtn.addEventListener('click', changeColor);
