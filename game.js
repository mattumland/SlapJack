class Game {
  constructor() {
    this.player1 = new Player('Player 1'); //should these be instatiated elsewhere?
    this.player2 = new Player('Player 2');
    this.centerPile = [];
    this.turnTracker = ['player1','player2']; //default to player1 consider adding a method to randomize starting player
  }

  shuffle(deck) {
      var newDeck = deck.slice(0); //don't change the initial array
      for (var i = 0; i < newDeck.length; i++) {
        var pulledCard = newDeck.splice(this.getRandomElement(newDeck),1);
        newDeck.splice(this.getRandomElement(newDeck),0,pulledCard[0]);
      }
     return newDeck;
    }

  getRandomElement(array) {
    return Math.floor(Math.random() * array.length);
  }

  initialDeal() {
    var shufDeck = this.shuffle(fullDeck); //shuffle starting deck
    this.player1.hand = shufDeck.splice(0,26); //give 1/2 the shuffled deck to p1
    this.player1.hand = shufDeck.splice(0,26); //give other half of shuffled deck to p2
  }

  addToCenterPile() {
    // HOW DOES IT KNOW WHICH PLAYER THIS IS?
    // Error handling to compare the keystroke with currentTurn. If q check currentTurn = player 1 else "wait your turn" If p check for player 2 else..
    playCard = //player.drawCard;
    this.centerPile.unshift(playCard); //add new card to the top of centerPile
    this.changeTurn(); //check for remain cards
    // return this.centerPile[0]; //send Data from centerPile to main so if can update the DOM /probably doesn't need to return anyh
    // updateCenter(); possible function for sending data to main then to dom, doens't seem necessary
  }

  changeTurn() {
    var nextPlayer = this.turnTracker[1]; //nextPlayer = 'player2'
    if (this[nextPlayer].hand.length > 0) {
      var playerChanger = this.turnTracker.shift();
      turnTracker.push(playerChanger); //change order of the array
    }
    // HOW DOES THIS FUNCTION GET PASSED INTO MAIN AND UPDATED ON THE PAGE?
    // Maybe this should fire on keystrokes
  }


  slap(slapPlayer, otherPlayer) {
    //MUST BE A JACK TO GET BACK IN THE GAME 

    if (this.centerPile[0].includes('jack')) { //check for jack
      this.addCenterPileToHand(slapPlayer);
      return `SLAPJACK! ${slapPlayer.id} takes the pile`;
    }

    if (this.centerPile[0] === this.centerPile[1]) { //check for double
      this.addCenterPileToHand(slapPlayer);
      return `DOUBLES! ${slapPlayer.id} takes the pile`;
    }

    if (this.centerPile[0] === this.centerPile[2]) { //check for sandwich
      this.addCenterPileToHand(slapPlayer);
      return `SANDWICH! ${slapPlayer.id} takes the pile`;
    }

    if (slapPlayer.hand.length === 0) { //assume bad slap check for empty to confirm win
      this.updateWinCount(otherPlayer); //update win count for the other player
      return this.newGame(otherPlayer); //start new game, return winner message
    }

    var forfeitCard = slapPlayer.hand.shift();  //assume bad slap without empty hand pass card to other player
    otherPlayer.hand.push(forfeitCard);
    return `BAD SLAP! ${slapPlayer} loses 1 card`;
    // Might need to add a conditional to check if the slapping players hand WAS empty. If is WAS empty, then the slapping player should become the currentPlayer
}

  addCenterPileToHand(player) {
    var newHand = player.hand.concat(this.centerPile); //join both hands in new var
    player.hand = newHand; //reassign hand using new var
    this.shuffle(player.hand);
    this.centerPile = []; //ensure centerPile is empty
  }

  updateWinCount(player) {
    player.wins++;
    player.wins.saveWinsToStorage();
  }

  newGame(winner) {
    // Randomize starting player
    this.centerPile = [];
    this.initialDeal()
    return `${winner} WINS!`;
  }

}
