let bobsFollowers = ['John', 'Mike', 'Sarah', 'Emily'];
let tinasFollowers = ['John', 'Alex', 'Emily'];

let mutualFollowers = [];
for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers); // Output: ['John', 'Emily']
