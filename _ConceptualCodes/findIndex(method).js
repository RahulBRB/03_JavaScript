const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal=>{
  return animal==='elephant';
})

const startsWithS = animals.findIndex(animalS=>{
  return animalS.charAt(0)==='s';
  // return animal[0] === 's' ? true : false;

})
