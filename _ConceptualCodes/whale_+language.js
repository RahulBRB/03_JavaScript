let input = 'Hello bro, my name is JOHN'
let vowels = ['a','e','i','o','u']
let resultArray = []

for(let i=0;i<input.length;i++){
  // console.log(input[i]);
  for(let j=0;j<vowels.length;j++){
    if(input[i]===vowels[j]){
      if(input[i]==='e'){
      resultArray.push('ee');
      }else if(input[i]==='u'){
        resultArray.push('uu');
      }else{
        resultArray.push(input[i]);
      }
    }
  }
}

let resultString = resultArray.join('');
console.log(`English Input: ${input}`)
console.log(`Whale language: ${resultString.toUpperCase()}`)
