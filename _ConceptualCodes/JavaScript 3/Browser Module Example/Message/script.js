/* secret-messages
import { toggleHiddenElement, changeToFunkyColor } from '../dom-funtions';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

Importing as default below..
*/

import domFunctions from '../modules/dom-functions.js';           //importing as domFunctions

const { toggleHiddenElement, changeToFunkyColor } = domFunctions; //extracting the values 

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);                                   //Using the extracted function      
  changeToFunkyColor(buttonElement);
});
