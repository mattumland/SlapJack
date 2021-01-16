// DOM ELEMENTS
var popUp = document.querySelector("#popUp");
var p1WinCount = document.querySelector("#p1WinCount");
var p2WinCount = document.querySelector("#p2WinCount");
var p1Zone = document.querySelector("#p1Section");
var p2Zone = document.querySelector("#p2Section");
var centerPileImg = document.querySelector("#centerPile"); //this is an img
var howToButton = document.querySelector("button");

// GLOBAL VARIABLES
var game = new Game();


// EVENT LISTENERS
window.addEventListener('load', pageLoad);
window.addEventListener('keydown', function(e) {


  if (e.code === "KeyQ") {
  }

  if (e.code === "KeyF" && game.player1.hand === 0) {
    game.comebackSlap(player1, player2);
  } else if (e.code === "KeyF") {
      game.slap(player1, player2);
  }

  if (e.code === "KeyP") {
    // player2 drawCard
    console.log(`P`);
  }

  if (e.code === "KeyJ"&& game.player2.hand === 0) {
    game.comebackSlap(player2, player1);
  } else if (e.code === "KeyJ") {
    game.slap(player2, player1);
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
