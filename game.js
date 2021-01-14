class Game {
  constructor() {
    this.player1 = new Player('Player 1'); //should these be instatiated elsewhere?
    this.player2 = new Player('Player 2');
    this.centerPile = []; //center deck
    this.currentTurn = 'player1'; //default to player1 consider adding a method to randomize starting player
    // fullDeck array is in a separate file
  }

  shuffle(deck) {
    /*
      may need to shuffle decks so including a param
      Double check if this is necessary
    */
  }

  initialDeal() {
    /*
    Get called on page load
    Load data into dummy array
    Shuffle dummy array
    Separates allCards into 2 arrays (p1Hand p2Hand)
    Pushes p1&2Hand into player1.hands
    */
  }

  addToCenter() {
/*
    Get called following keystroke event
    newCard = player1.drawCard
    unshift to centerPile to ensure the new card is 'on top
    call updateCenter()
*/
  }

  updateCenter() {
/*
  return this.centerPile to allow main to update dom
*/
  }

  slap() { //CAN I DO THIS WITH parameters/ANON function
/*
  !!!!GAME CAN DETERMINE WHICH PLAYER SLAPS BY READING KEYSTROKE,
  checks center pile for jack (top 1), doubles (top 2) or sandwich (top 3)
  if slap is legel
    push this.centerPile into slapPlayer.hand
    return message to push to h1

  make sure this clears the centerPil
  else
  !!!!!  pop? to remove from bottom of slapPlayer.hand
  !!!!!  push into otherPlayer
    return message to push to h1

  This also needs to see if player.hand === 0, if so a bad slap will call
  updateWinCount for the opposite player
    return message to push to h1
    newGame();

*/
  }

  updateWinCount(player) {
    player.wins++;
    player.wins.saveWinsToStorage();
    newGame();
  }

  newGame() {
    location.reload();
    initialDeal()
  }

}

module.exports = Game;
