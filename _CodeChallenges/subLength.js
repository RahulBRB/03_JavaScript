/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.
*/

const subLength = (str, char) => {
  let firstIndex = str.indexOf(char);
  if (firstIndex === -1) return 0; // No occurrence found

  let secondIndex = str.indexOf(char, firstIndex + 1);
  if (secondIndex === -1) return 0; // Less than 2 occurrences

  // Check if there's another occurrence after the second one
  let thirdIndex = str.indexOf(char, secondIndex + 1);
  if (thirdIndex !== -1) return 0; // More than 2 occurrences

  return secondIndex - firstIndex + 1;
}
