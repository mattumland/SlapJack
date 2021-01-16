class Game {
  constructor() {
    this.player1 = new Player('player1'); //should these be instatiated elsewhere?
    this.player2 = new Player('player2');
    this.centerPile = [];
    this.turnTracker = ['player1','player2']; //default to player1 consider adding a method to randomize starting player
  }

  shuffle(deck) {
      var newDeck = deck.slice(0); //don't change the initial array
      for (var i = 0; i < newDeck.length; i++) {
        var pulledCard = newDeck.splice(getRandomElement(newDeck),1);
        newDeck.splice(getRandomElement(newDeck),0,pulledCard[0]);
      }
     return newDeck
    }

  getRandomElement(array) {
    return Math.floor(Math.random() * array.length);
  }

  initialDeal() {
    var shufDeck = shuffle(fullDeck); //shuffle starting deck
    this.player1.hand = shufDeck.splice(0,26); //give 1/2 the shuffled deck to p1
    this.player1.hand = shufDeck.splice(0,26); //give other half of shuffled deck to p2
  }

  addToCenterPile() {
    // HOW DOES IT KNOW WHICH PLAYER THIS IS?
    // Error handling to compare the keystroke with currentTurn. If q check currentTurn = player 1 else "wait your turn" If p check for player 2 else..
    playCard = //player.drawCard;
    this.centerPile.unshift(playCard); //add new card to the top of centerPile
    changeTurn(); //check for remain cards
    return this.centerPile[0]; //send Data from centerPile to main so if can update the DOM /probably doesn't need to return anything
    // updateCenter(); possible function for sending data to main then to dom, doens't seem necessary
  }

  changeTurn() {
    var nextPlayer = this.turnTracker[1]; //nextPlayer = 'player2'
    if (this[nextPlayer].hand.length > 0) {
      var playerChanger = this.turnTracker.shift();
      turnTracker.push(playerChanger);
    }
    // HOW DOES THIS FUNCTION GET PASSED INTO MAIN AND UPDATED ON THE PAGE?
    // Maybe this should fire on keystrokes
  }


  slap() { //CAN I DO THIS WITHOUT parameters/ANON function

/*
  !!!!GAME CAN DETERMINE WHICH PLAYER SLAPS BY READING KEYSTROKE,
  checks center pile for jack (top 1), doubles (top 2) or sandwich (top 3)
  if slap is legel
    push this.centerPile into slapPlayer.hand
    return message to update h1

  make sure this clears the centerPile
  else
  !!!!!  pop? to remove from bottom of slapPlayer.hand
  !!!!!  push into otherPlayer
    return message to push to h1

  This also needs to see if player.hand === 0, if so a bad slap will call
  updateWinCount for the opposite player
    return message to push to h1
    newGame();
// Might need to add a conditional to check if the slapping players hand WAS empty. If is WAS empty, then th slapping player should become the currentPlayer

*/
  }

  updateWinCount(player) {
    player.wins++;
    player.wins.saveWinsToStorage();
    newGame();
  }

  newGame() {
    // Randomize starting player
    this.centerPile = [];
    initialDeal()
  }

}

module.exports = Game;
