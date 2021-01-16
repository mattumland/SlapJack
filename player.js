class Player {
  constructor(playerNum) {
    this.id = playerNum;
    this.wins = 0;
    this.hand = [];
  }

  drawCard() {
    if (this.hand.length > 0) {
      return this.hand.shift;
    }
    return;

/*
    check length of this.hand to confirm the player has cards
      remove the first CARD of the hand array
      return this CARD

      this is used to create the variable inside addToCenter

    blank return when the HAND is empty
*/
  }

  saveWinsToStorage() {
    /*
    var winData = localStorage.getItem('storedWinData');
    var parseWinData = JSON.parse(winData);
    ADD WINS TO LOCAL STORAGE VARIABLE (WHAT IS THIS?)
    var stringifyWinData = JSON.stringify(parseWinData);
    localStorage.setItem('storedWinData', stringifyWinData);
    */
  }
}
