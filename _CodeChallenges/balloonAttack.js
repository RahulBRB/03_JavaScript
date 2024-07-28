class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
    }
  }
  
  function balloonAttack(player1, player2) {
    player1.balloonCount -= player2.hitsPerMinute * 10;
    player2.balloonCount -= player1.hitsPerMinute * 10;
  
    
    if (player1.balloonCount > player2.balloonCount) {
      return player1.name;
    } else if (player2.balloonCount > player1.balloonCount) {
      return player2.name;
    } else {
      return 'Tie';
    }
  }
  
  const p1 = new Player('p1', 5);
  const p2 = new Player('p2', 2);
  
  console.log(balloonAttack(p1, p2)); 
  
  p1.status(); 
  p2.status(); 
  