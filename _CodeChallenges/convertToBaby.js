
const convertToBaby=(arr)=>{
  let ans = [];
  for(let i=0;i<arr.length;i++){
    ans.push(`baby ${arr[i]}`);
  }
  return ans;
}


const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

