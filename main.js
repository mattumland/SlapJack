// DOM ELEMENTS
var popUp = document.querySelector("#popUp");
var p1WinCount = document.querySelector("#p1WinCount");
var p2WinCount = document.querySelector("#p2WinCount");
var p1Zone = document.querySelector("#p1Section");
var p2Zone = document.querySelector("#p2Section");
var p1Card = document.querySelector("#p1Card");
var p2Card = document.querySelector("#p2Card");
var centerPileImg = document.querySelector("#centerPile"); //this is an img
var howToButton = document.querySelector("button");

// GLOBAL VARIABLES
var game = new Game();

// EVENT LISTENERS
window.addEventListener('load', pageLoad);
window.addEventListener('keydown', function(e) {
  if (e.code === "KeyQ") {
      popUp.innerText = `WAIT YOUR TURN PLAYER 1!`;
  } else if (e.code === "KeyQ" && game.turnTracker[0] === game.player1.id) {
    game.addToCenterPile(game.player1, game.player2);
    updateCenterDisplay();
    updateCurrentTurnDisplay();
  }
  if (game.player1.hand.length === 0) {
    p1Card.classList.add('hidden');
  }

  if (e.code === "KeyF" && game.player1.hand === 0) {
    game.comebackSlap(game.player1, game.player2);
  } else if (e.code === "KeyF") {
      game.slap(game.player1, game.player2);
  }

  if (e.code === "KeyP" && game.turnTracker[0] === game.player2.id) {
    game.addToCenterPile(game.player2, game.player1);
    if (game.player2.hand.length === 0) {
      p2Card.classList.add('hidden');
    }
    updateCenterDisplay();
    updateCurrentTurnDisplay();
  } else if (e.code === "KeyP") {
    popUp.innerText = `WAIT YOUR TURN PLAYER 2!`;
  }

  if (e.code === "KeyJ"&& game.player2.hand === 0) {
    game.comebackSlap(game.player2, game.player1);
    //check hand length and toggle card back if no longer empty
  } else if (e.code === "KeyJ") {
    game.slap(game.player2, game.player1);
  }

});

function pageLoad() {
  setLocalStorage();
  game.initialDeal();
}

function setLocalStorage() {
  if (localStorage.getItem('storedWinData') === null) {
    winData = {player1: 0, player2: 0};
    var stringifyWins = JSON.stringify('winData');
    localStorage.setItem('storedWinData', stringifyWins)
  } else {
    console.log(`TEST`);
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

function updateCenterDisplay() {
  // add conditional to prevent fail with empty array
  var newTopCard = game.centerPile[0];
  centerPileImg.src= newTopCard;
  // ADD FUNCTION TO UPDATE THE ALT TEXT TO REPRESENT THE CARD FACE
    // Update source image names to be more readable ("Red_4")
    // Read text from data file = altText
    // Use string methods to remove "./assets/" and ".png"
    // centerPileImg.alt = altText
  // ADD FUNCTION TO CREATE A CARD PILE UNDER THE FRONT CARD
}

function updateCurrentTurnDisplay() {

}
