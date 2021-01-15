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
window.addEventListener('load', function(){
  setLocalStorage();
  game.initialDeal();
});



/*
  Page load
      Pull local storage
      Update dom with win count
      Insatiate a new game object
  q keystroke - P1 draw card
  f keystroke - p1 slap center
  p keystroke - p2 draw card
  j keystroke - p2 slap center
*/

// function upateFromStorage


// function startGame
// currentGame = new Game;

function setLocalStorage() { //NOT COMPLETE
  // if (localStorage.getItem('storedWinData') === null) {
  //   // activityData = [];
  //   var stringify = JSON.stringify('WWWWWWWWWWW');
  //   localStorage.setItem('storedWinData', stringify)
  // } else {
  // // what do I if the localstorage isnt empty;
  // }
}
