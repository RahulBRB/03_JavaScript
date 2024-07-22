/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/

const groceries = (items) => {
  const itemList = items.map(obj => obj.item);
  
  if (itemList.length === 0) return '';
  if (itemList.length === 1) return itemList[0];
  
  // If there are more than 2 items, join all but the last two with commas
  const lastTwo = itemList.slice(-2).join(' and ');
  const rest = itemList.slice(0, -2).join(', ');
  
  return rest ? `${rest}, ${lastTwo}` : lastTwo;
}
