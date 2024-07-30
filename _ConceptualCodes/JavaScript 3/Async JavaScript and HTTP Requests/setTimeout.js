console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log("This line of code will log to the console last.");
};

setTimeout(usingSTO, 100);

console.log("This is the last line of code in app.js.");
