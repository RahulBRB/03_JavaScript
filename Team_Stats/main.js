const team = {
  _players: [
    { firstName: 'Lucas', lastName: 'Silva', age: 28 },
    { firstName: 'Johny', lastName: 'Johnshon', age: 26 },
    { firstName: 'Oman', lastName: 'Haasan', age: 31 },
  ],
  _games: [
    { opponent: 'Thunder FC', teamPoints: 2, opponentPoints: 1 },
    { opponent: 'Dynamo Uni', teamPoints: 0, opponentPoints: 3 },
    { opponent: 'Galaxy Stars', teamPoints: 1, opponentPoints: 1 },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans', 100, 98);

console.log(team.players);
console.log(team.games);
