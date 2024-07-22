const dogFactory = (name,breed,weight) =>{
  return {
    _name:name,
    _breed:breed,
    _weight:weight,

    get name(){
      return this._name;
    },
    get breed(){
      return this._breed;
    },
    get weight(){
      return this._weight;
    },

    set name(newName){
      this._name = newName;
    },
    set breed(newbreed){
      this._breed = newbreed;
    },
    set weight(newweight){
      this._weight = newweight;
    },

    bark(){
      return `ruff! ruff!`;
    },

    eatTooManyTreats(){
      this._weight+=1;
    }
  }


}
