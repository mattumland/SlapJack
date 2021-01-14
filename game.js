class Game {
  constructor() {
    this.player1 = new Player(player1); //should these be instatiated elsewhere?
    this.player2 = new Player(player2);
    this.allCards = //an array of all the cards
    this.centerPile = []; //center deck
    this.currentTurn = 'player1'; //default to player1 consider adding a method to randomize starting player
  }

  /*

  */


  shuffle(deck) {
    /*
      may need to shuffle decks so including a param
      Double check if this is necessary
    */
  }

  initialDeal() {
    /*
    Separates allCards into 2 arrays (p1Hand p2Hand)
    Pushes p1&2Hand into player1.hands
    */
  }

  addToCenter() {
/*
    newCard = player1.drawCard
    unshift to centerPile to ensure the new card is 'on top'
*/
  }

  updateCenter() {
/*
  return this.centerPile to allow main to update dom
*/
  }

  slap(slapPlayer, otherPlayer) { //CAN I DO THIS WITH ANON function
/*
  !!!!GAME CAN DETERMINE WHICH PLAYER SLAPS BY READING KEYSTROKE
  checks center pile for jack (top 1), doubles (top 2) or sandwich (top 3)
  if slap is legel
  !!!!  push this.centerPile into slapPlayer.hand!!!!!!
  else
  !!!!!  pop? to remove from bottom of slapPlayer.hand
  !!!!!  push into otherPlayer

*/
  }

}

module.exports = Game;
