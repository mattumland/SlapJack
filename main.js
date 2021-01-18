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
  hide(popUp);
  var aHandIsEmpty = (game.player1.hand.length === 0 || game.player2.hand.length === 0);

//var keypress = e.code ('KeyQ')
//var currentPlayer = game.turnTracker[0]

// is keypress a draw
// DRAW (keypress and player)
// else if is it a slap
// SLAP (keypress and player)
// else do nothing

//1 DRAW function
//SLAP function

// function playerDraw (keypress, currentPLayer)
// if Q and player1

  if (e.code === "KeyQ" && game.turnTracker[0] === game.player1.id) {
    game.addToCenterPile(game.player1, game.player2);
    updateCenterDisplay();
    updateCurrentTurnDisplay();
    unhide(centerPileImg);
  } else if (e.code === "KeyQ") {
    popUp.innerText = `WAIT YOUR TURN PLAYER 1!`;
    unhide(popUp);
  }

// 1 SLAP
  if (e.code === "KeyF" && aHandIsEmpty) {
    var newPopUp = game.comebackSlap(game.player1, game.player2);
    popUp.innerText = newPopUp;
    unhide(popUp);
  } else if (e.code === "KeyF") { //NORMAL SLAP
      var newPopUp = game.slap(game.player1, game.player2);
      popUp.innerText = newPopUp;
      unhide(popUp);
  }


// 2 DRAW
  if (e.code === "KeyP" && game.turnTracker[0] === game.player2.id) {
    game.addToCenterPile(game.player2, game.player1);
    updateCenterDisplay();
    updateCurrentTurnDisplay();
    unhide(centerPileImg);
  } else if (e.code === "KeyP") {
    popUp.innerText = `WAIT YOUR TURN PLAYER 2!`;
    unhide(popUp);
  }

//2 SLAP
  if (e.code === "KeyJ" && aHandIsEmpty) {
    var newPopUp = game.comebackSlap(game.player2, game.player1);
    popUp.innerText = newPopUp;
    unhide(popUp);
  } else if (e.code === "KeyJ") {
    var newPopUp = game.slap(game.player2, game.player1);
    popUp.innerText = newPopUp;
    unhide(popUp);
  }


// hide/unhide piles given outcome of key inputs CAN THESE BE IN A FUNCTION?

  if (game.player1.hand.length > 0) {
    unhide(p1Card);
  } else if (game.player1.hand.length === 0) {
    hide(p1Card);
  }

  if (game.player2.hand.length > 0) {
    unhide(p2Card);
  } else if (game.player2.hand.length === 0) {
    hide(p2Card);
  }

  if (game.centerPile.length === 0) {
    hide(centerPileImg);
  }

  var storedWins = getStoredWins();
  updateWinCount(storedWins);

});


 // function slapOrDraw(keypress)

 // function drawCard

// function slapCard

// updateGameState

function pageLoad() {
  setLocalStorage();
  game.initialDeal();
}

function setLocalStorage() {
  if (localStorage.getItem('storedWinData') === null) {
    var winData = {player1: 0, player2: 0};
    var stringifyWins = JSON.stringify(winData);
    localStorage.setItem('storedWinData', stringifyWins)
  } else {
  var storedWins = getStoredWins();
  updateWinCount(storedWins);
  }
}

function getStoredWins() {
  var storedWins = localStorage.getItem('storedWinData');
  var parsedWins = JSON.parse(storedWins)
  return parsedWins;
}

function updateWinCount(wins) {
  p1WinCount.innerText = `${wins.player1} WINS`;
  p2WinCount.innerText = `${wins.player2} WINS`;
}

function updateCenterDisplay() {
  if (game.centerPile.length > 0) {
    var newTopCard = game.centerPile[0];
    centerPileImg.src= newTopCard;
    unhide(centerPileImg);
  }
  // ADD FUNCTION TO UPDATE THE ALT TEXT TO REPRESENT THE CARD FACE
    // Update source image names to be more readable ("Red_4")
    // Read text from data file = altText
    // Use string methods to remove "./assets/" and ".png"
    // centerPileImg.alt = altText
  // ADD FUNCTION TO CREATE A CARD PILE UNDER THE FRONT CARD
}

function updateCurrentTurnDisplay() {

}

function hide(element) {
  element.classList.add('hidden');
}

function unhide(element) {
  element.classList.remove('hidden');
}
