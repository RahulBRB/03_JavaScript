class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  
  movieTime() {
    const remainingData = 
    this.data - (this.users * 5);
    
    return remainingData >= 10;
  }
}

const library = new Network(50, 9);
console.log(library.movieTime()); 

const campus = new Network(60, 8);
console.log(campus.movieTime()); 
