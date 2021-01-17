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

//1 DRAW
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
  // console.log(e.code === "KeyF" && (game.player1.hand === 0 || game.player2.hand === 0));
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
    //check hand length and toggle card back if no longer empty
  } else if (e.code === "KeyJ") {
    var newPopUp = game.slap(game.player2, game.player1);
    popUp.innerText = newPopUp;
    unhide(popUp);
  }


// hide/unhide piles given outcome of key inputs CAN THESE BE IN A FUNCTION?

  if (game.player1.hand.length > 0) {
    unhide(p1Card);
  }

  if (game.player1.hand.length === 0) {
    hide(p1Card);
  }

  if (game.player2.hand.length > 0) {
    unhide(p2Card);
  }

  if (game.player2.hand.length === 0) {
    hide(p2Card);
  }

  if (game.centerPile.length === 0) {
    hide(centerPileImg);
  }

});

function pageLoad() {
  setLocalStorage();
  game.initialDeal();
  // hide(centerPileImg);
}

function setLocalStorage() {
  if (localStorage.getItem('storedWinData') === null) {
    winData = {player1: 0, player2: 0};
    var stringifyWins = JSON.stringify('winData');
    localStorage.setItem('storedWinData', stringifyWins)
  } else {
    // console.log(`TEST`);
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
