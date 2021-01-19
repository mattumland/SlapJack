var popUp = document.querySelector("#popUp");
var p1WinCount = document.querySelector("#p1WinCount");
var p2WinCount = document.querySelector("#p2WinCount");
var p1Zone = document.querySelector("#p1Section");
var p2Zone = document.querySelector("#p2Section");
var p1Card = document.querySelector("#p1Card");
var p2Card = document.querySelector("#p2Card");
var centerPileImg = document.querySelector("#centerPile"); //this is an img
var clearScoresButton = document.querySelector("button");

var game = new Game();

window.addEventListener('load', pageLoad);
window.addEventListener('click', clearScore);
window.addEventListener('keydown', function(e) {
  var aHandIsEmpty = (game.player1.hand.length === 0 || game.player2.hand.length === 0);
  var keyPress = e.code;
  var currentPlayer = game.turnTracker[0];
  var nextPlayer = game.turnTracker[1];

  hide(popUp);

  if (keyPress === "KeyQ" || keyPress === "KeyP") {
    playerDraw(keyPress, currentPlayer, nextPlayer);
  } else if ((keyPress === "KeyF" || keyPress === "KeyJ") && (game.centerPile.length > 0)) {
    playerSlap(keyPress, aHandIsEmpty);
  }

  updateDomState();
});

function playerDraw(keyPress, currentPlayer, nextPlayer) {
  if ((currentPlayer === '1' && keyPress === 'KeyQ') || (currentPlayer === '2' && keyPress === 'KeyP')) {
    game.addToCenterPile(currentPlayer, nextPlayer);
    addCardToCenterPile();
    unhide(centerPileImg);
  } else {
    popUp.innerText = `WAIT YOUR TURN PLAYER ${nextPlayer}!`;
    unhide(popUp);
  }
}

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
    updateWinDisplay()
  }
}

function playerSlap(keyPress, aHandIsEmpty) {
  var slapPlayer;
  var otherPlayer;

  if (keyPress === "KeyF") {
    slapPlayer = game.player1;
    otherPlayer = game.player2;
  } else {
    slapPlayer = game.player2;
    otherPlayer = game.player1;
  }

  if (aHandIsEmpty) {
    var newPopUp = game.comebackSlap(slapPlayer, otherPlayer);
    popUp.innerText = newPopUp;
    unhide(popUp);
  } else {
    var newPopUp = game.slap(slapPlayer, otherPlayer);
    popUp.innerText = newPopUp;
    unhide(popUp);
  }
}

function updateDomState() {
  updateCardDisplay();
  updateCurrentTurnDisplay();
  updateWinDisplay();
}

function updateCardDisplay() {
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

  if (game.centerPile.length > 2){
    centerPileImg.classList.add('card-stack')
  }
}

function updateWinDisplay() {
  var storedWins = getStoredWins();
  updateWinCount(storedWins);
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

function addCardToCenterPile() {
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
  if (game.turnTracker[0] === '1') {
    p1Zone.classList.add("active-player");
    p2Zone.classList.remove("active-player");
  } else if (game.turnTracker[0] === '2') {
    p2Zone.classList.add("active-player");
    p1Zone.classList.remove("active-player");
  }
}

function clearScore() {
  localStorage.clear();
  setLocalStorage();
  updateWinDisplay();
}

function hide(element) {
  element.classList.add('hidden');
}

function unhide(element) {
  element.classList.remove('hidden');
}
