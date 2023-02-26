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

3. compare two strings and determine a winner 
4. print out result 
*/


function getComputerChoice () {
    rand = parseInt(Math.floor (Math.random() *3));
    if (rand === 2) return 'rock';
    if (rand === 1) return 'paper';
    if (rand === 0) return 'scissors';
}
let computerSelection = getComputerChoice()
console.log(computerSelection)

function getPlayerChoice () {
    let choose = prompt ('Rock paper scissors')
    let chooseLower = choose.toLowerCase()
    if (chooseLower === 'rock') {
        return 'rock'
    } else if (chooseLower === 'paper') {
        return 'paper'
    } else if (chooseLower === 'scissors'){
        return 'scissors'
    } else {
        return getPlayerChoice();
    }
  } //unga bunga code works
let playerSelection = getPlayerChoice()
console.log(playerSelection)


function round () {
//determine if there is a tie
if (computerSelection === playerSelection) {
    return ('tie')
}  else if (computerSelection === 'rock') {
    if (playerSelection === 'scissors'){
        return ('lose');
    } else {
        return ('win');
    }
}  else if (computerSelection === 'paper') {
    if (playerSelection = 'rock'){
        return ('lose');
    } else {
        return ('win');
    }
} else  {
    if (playerSelection === 'paper'){
        return ('lose');
    } else {
        return ('win');
    }
}

}
let resulto = round()
alert (`Computer picked ` + computerSelection + ` You picked ` + playerSelection+ ` It is a ` + resulto)

//computer picks rock
//computer picks paper
//computer picks scissors 






/* 
LEARNINGS
- the function must return a console.log or be put in a variable to work i guess?
*/ 