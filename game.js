class Game {
  constructor() {
    this.player1 = new Player('1'); //should these be instatiated elsewhere?
    this.player2 = new Player('2');
    this.centerPile = [];
    this.turnTracker = ['1','2']; //default to player1 consider adding a method to randomize starting player
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
    this.player2.hand = shufDeck.splice(0,26); //give other half of shuffled deck to p2
  }

  addToCenterPile(currentPlayer, otherPlayer) {
    currentPlayer = `player${currentPlayer}`;
    otherPlayer = `player${otherPlayer}`;
    if (this[currentPlayer].hand.length > 0) {
      var playCard = this[currentPlayer].drawCard();
      this.centerPile.unshift(playCard); //add new card to the top of centerPile
    }
    this.changeTurn(); //already has error handling to confirm next player has a hand
    if (this[currentPlayer].hand.length === 0 && this[otherPlayer].hand.length === 0) {
      this.addCenterPileToHand(this[currentPlayer]);
    }
  }

  changeTurn() {
    var nextPlayer = `player${this.turnTracker[1]}`;
    if (this[nextPlayer].hand.length > 0) {
      var turnChanger = this.turnTracker.shift(); //change order of the array
      this.turnTracker.push(turnChanger);
    }
  }

  slap(slapPlayer, otherPlayer) {
    if (this.centerPile[0].includes('jack')) { //check for jack
      this.addCenterPileToHand(slapPlayer);
      return `SLAPJACK! Player ${slapPlayer.id} takes the pile`;
    }

    if (this.centerPile.length === 1){
    } else if (this.dataCleaner(this.centerPile[0]) === this.dataCleaner(this.centerPile[1])) { //check for double
      this.addCenterPileToHand(slapPlayer);
      return `DOUBLES! Player ${slapPlayer.id} takes the pile`;
    }

    if (this.centerPile.length === 1 || this.centerPile.length === 2){
    } else if (this.dataCleaner(this.centerPile[0]) === this.dataCleaner(this.centerPile[2])) { //check for sandwich
      this.addCenterPileToHand(slapPlayer);
      return `SANDWICH! Player ${slapPlayer.id} takes the pile`;
    }

    var forfeitCard = slapPlayer.hand.shift();  //assume bad slap without empty hand pass card to other player
    otherPlayer.hand.push(forfeitCard);
    return `BAD SLAP! Player ${slapPlayer.id} loses a card`;
}

  comebackSlap(slapPlayer, otherPlayer) {
    var isComeback = false;
    if (slapPlayer.hand.length === 0) {
      isComeback = true;
    }

    if (this.centerPile[0].includes('jack') && isComeback === true) {
      this.addCenterPileToHand(slapPlayer);
      this.turnTracker = [slapPlayer.id, otherPlayer.id];
      return `SLAPJACK! Player ${slapPlayer.id} is back in the game`;
    }

    if (this.centerPile[0].includes('jack') && isComeback === false) {
      this.updateWinCount(slapPlayer); // assume bad slap, update win count for the other player
      return this.newGame(slapPlayer); //start new game, return winner message
    }

    if (!this.centerPile[0].includes('jack') && isComeback === false) {
      var forfeitCard = slapPlayer.hand.shift();  //assume bad slap without empty hand pass card to other player
      otherPlayer.hand.push(forfeitCard);
      return `BAD SLAP! Player ${slapPlayer.id} loses a card`;
    }

    if (!this.centerPile[0].includes('jack') && isComeback === true) {
      this.updateWinCount(otherPlayer); // assume bad slap, update win count for the other player
      return this.newGame(otherPlayer); //start new game, return winner message
    }
}

  addCenterPileToHand(player) {
    var newHand = player.hand.concat(this.centerPile); //join both hands in new var
    player.hand = newHand; //reassign hand using new var
    player.hand = this.shuffle(player.hand);
    this.centerPile = []; //ensure centerPile is empty
  }

  updateWinCount(player) {
    player.wins++;
    player.saveWinsToStorage();
  }

  newGame(winningPlayer) {
    this.centerPile = [];
    this.turnTracker = ['1','2'];
    this.initialDeal()
    return `PLAYER ${winningPlayer.id} WINS!`;
  }

  dataCleaner(assetLink) {
    var sliceSpot = assetLink.indexOf('-');
    var cleanLink = assetLink.slice(sliceSpot + 1);
    return cleanLink;
  }

}
