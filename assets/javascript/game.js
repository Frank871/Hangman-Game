var carwords = ["subaru","fuel","engine","hood","transmission","trunk","computer","tune","modification"];

var Wins = 0;
var currentword = 0;
var numbeofguessesremaining = 12;
var LettersAlreadyGuessed = 0;


// 1.Have game start when any key is pressed,
// 2.The game should pop up with current word, number of guesses remaining and
// letters already guessed.
// 3. Have game pick random words from the array after round is over.
// 4. Best out of 5 rounds wins the game.

document.onkeyup = function(event) {

var userGuess = event.key;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


}







var html = "<p>Press any key to start playing!</p>" +
          "<p>wins: " + Wins + "</p>" +
          "<p>losses: " + Current + word + _____________ + "</p>" +
          "<p>ties: " + number + Of + Guesses + Remaining + "</p>"+
          "<p>ties: " + Letters + Already + Guessed + "</p>";
