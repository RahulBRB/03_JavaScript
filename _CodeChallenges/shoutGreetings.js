//Arrow Function:
const shoutGreetings = (arr) => {
  return arr.map(word => {
    return word.toUpperCase() + '!';
  });
};

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

//Function Declaration:
function shoutGreetings2(arr) {
  let shoutArray = [];
  for (let i = 0; i < arr.length; i++) {
    shoutArray.push(arr[i].toUpperCase() + '!');
  }
  return shoutArray;
}

console.log(shoutGreetings2(greetings)); // Output: ['HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!']
