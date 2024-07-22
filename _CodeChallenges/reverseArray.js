const reverseArray = (arr) => {
    let ans = [];
    let n = arr.length; // Get the length of the array.
    for (let i = arr.length - 1; i >= 0; i--) { // Loop through the array backward.
      ans.push(arr[i]);
    }
    return ans;
  }
  
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
