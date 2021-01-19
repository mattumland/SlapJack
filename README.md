# SlapJack

SLAPJACK is a fast-paced, two-player card game played locally on a single keyboard.

### Gameplay:

#### Player 1’s keyboard controls:  
* q to deal a card  
* f to slap  
#### Player 2’s keyboard controls:  
* p to deal a card
* j to slap

_Players alternate turns playing cards face-up into the central pile. The pulsing rectangle indicates whose turn it is._
![](assets/README-04c6cc48.png)

#### Any player can slap at any time, with several outcomes:
* If a player slaps when a Jack is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
* If a player slaps when a Double or a pair (two cards of the same number - such as two Aces, or two Fives, or two Queens) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
* If a player slaps when a Sandwich (two cards of the same number - such as two Aces, or two Fives, or two Queens, separated by a different card in the middle) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
* If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.  
_Pop up messages at the top of the screen will highlight the outcome of each slap and provide a heads up if a players acts out of turn._  
![](assets/README-078ab972.png)

#### If one player loses all their cards, they have one chance to not lose and continue the game:
* The player with cards left continues to deal from their hand into the central pile (they are now allowed to deal multiple times in a row!)
* If the player with cards left deals all their cards into the center without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed
* When a Jack is revealed, the player who is out of cards can slap it. The central pile is then their new hand, the game continues as normal.
* If however, the player who is out of cards slaps something that is not a Jack, or if the player who still has cards slaps the Jack first, then the player who is out of cards loses and the game is over!
* Doubles and Sandwiches are not valid when one player is completely out of cards - in this case, only a Jack can save them!
* The only way the player who still has cards can win is by slapping the Jack before the player without cards left does

_A score tracker is provided for each player. The button in the bottom left of the screen will reset the score counter._
![](assets/README-bd25a3c7.png)

## Project Goals

The primary goal of the project was to meet the requirements on the rubric necessary to move on to MOD 2. My personal goals were to focus on planning/psuedocoding and add at least 1 CSS animation to the project.

## Project Wins
While it is yet to be seen how I did in terms of the project rubric, I feel confident that my project is sufficient to show I am ready for the next MOD. I was able to build a functioning app with enough time to add animation, which I attribute to my success in planning and pseudocoding. I spent the first day and half sketching out the app and while my original plan wasn't perfect, it only took two days of coding to have something functional enough to test and debug. This is a big win.

## Project Challenges
Because I spent so much time psuedocoding, the process of writing code included lots of tracking down small syntax errors. Much of these were artifacts from my initial psuedocode and some where hard to track down. This is a good lesson to remember in the future: even if I know what things are supposed to do, I need to go slow when I'm writing code to ensure I don't produce future frustration.

## Tech used
This app uses vanilla javascript, html and css.
