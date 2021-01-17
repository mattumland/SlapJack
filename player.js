class Player {
  constructor(playerNum) {
    this.id = playerNum;
    this.wins = 0;
    this.hand = [];
  }

  drawCard() {
      return this.hand.shift();
  }

  saveWinsToStorage() {
    var dataKey = `player${this.id}`;
    var winData = localStorage.getItem('storedWinData');
    var parseWinData = JSON.parse(winData);
    parseWinData[dataKey]++;
    var stringifyWinData = JSON.stringify(parseWinData);
    localStorage.setItem('storedWinData', stringifyWinData);
  }
}
