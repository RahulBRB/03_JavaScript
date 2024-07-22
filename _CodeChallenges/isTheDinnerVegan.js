//Using built-in method
const isTheDinnerVegan = (arr) =>{
  return arr.every(food=>{
    return food.source==='plant';
  })
}

//Function
const isVegan = (food) => {
    if(food.source === 'plant'){
        return true;
    }
    return false; 
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
