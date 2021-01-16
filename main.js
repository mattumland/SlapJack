// DOM ELEMENTS
var popUp = document.querySelector("#popUp");
var p1WinCount = document.querySelector("#p1WinCount");
var p2WinCount = document.querySelector("#p2WinCount");
var p1Zone = document.querySelector("#p1Section");
var p2Zone = document.querySelector("#p2Section");
var centerPile = document.querySelector("#centerPile"); //this is an img
var howToButton = document.querySelector("button");

// GLOBAL VARIABLES
var game = new Game;

// EVENT LISTENERS
window.addEventListener('load', onLoad);



/*
  q keystroke - P1 draw card
  f keystroke - p1 slap center
  p keystroke - p2 draw card
  j keystroke - p2 slap center
*/

function onLoad() {
  setLocalStorage();
  game.initialDeal();
}

function setLocalStorage() { //NOT COMPLETE
  if (localStorage.getItem('storedWinData') === null) {
    winData = {'player1': 0, 'player2': 0};
    var stringifyWins = JSON.stringify('winData');
    localStorage.setItem('storedWinData', stringifyWins)
  } else {
  var storedWins = getStoredWins();
  updateWinCount(storedWins);
  }
}

function getStoredWins() {
  var storedWins = localStorage.getItem('storedWinData');
  return JSON.parse(storedWins);
}

function updateWinCount(wins) {
  p1WinCount.innerText = `${wins.player1} WINS`;
  p2WinCount.innerText = `${wins.player2} WINS`;
}

// function updateCenter
// call game.addToCenterPile()
// pull game.centerPile[0] inject into src
// build little card bottoms under it for every couple of cards to invoke the stack
