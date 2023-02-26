console.log ("So it begins")
/* get getComputerChoice => randomly returns rock paper or scissors
 (debug to make sure it is working properly)

 function that plays a single round of roshambo. 2 parameters 
 playerSelection(case insensitive) and computerSelection- returns a 
 string that declares the winner of the round

return the results of function call not console.lgo

write new function called game(). Call the playRound function inside 
this one to play a 5 round game that keeps score and reports a winner
or loser at the end.
*/

/*
algorithm
1. get input from user (rock paper or scissors) use toUpperCase() or toLowerCase()
    -get input from user 
    -convert to lowercase
    -compare with all lowercase string
    -return result
2. get input from computer player (random) use random function in g keep notes (might 
    need to begin with this one)
    -get a random number between 1 and 3
    -associate number with strings
    -return result ///////////////
3. compare two strings and determine a winner 
4. print out result 
*/


function getComputerChoice () {
    rand = parseInt(Math.floor (Math.random() *3));
    if (rand === 2) return 'rock'
    if (rand === 1) return 'paper'
    if (rand === 0) return 'scissors'   
}
console.log (getComputerChoice())



function getPlayerChoice () {
    let pChoice = prompt ('ROSHAMBO! (Rock, Paper, Scissors)'); 
    pChoice = pChoice.toLowerCase();
    if (pChoice !== 'rock' || 'paper' || 'scissors') {
        let pChoice = prompt ('Please type Rock, Paper, or Scissors)')
    } else {
        return getPlayerChoice (pChoice)    
    } 
    
} //in the right order but not the right inputs
console.log (getPlayerChoice())
//not putting the parenthesis in the console log kills the program for some reason
/* 
    
*/ 