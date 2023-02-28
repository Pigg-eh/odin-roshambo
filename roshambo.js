/*
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


function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
            return ('tie')
        }  else if (computerSelection === 'rock') {
            if (playerSelection === 'scissors'){
                alert ('Computer: Rock | You: Scissors')
                return (false);
            } else if (playerSelection === 'paper'){
                alert ('Computer: Rock | You: Paper')
                return (true);
            }
        }  else if (computerSelection === 'paper') {
            if (playerSelection === 'rock'){
                alert ('Computer: Paper | You: Rock')
                return (false);
            } else if (playerSelection === 'scissors'){
                alert ('Computer: Paper | You: Scissors')
                return (true);
            }
        } else  if (computerSelection === 'scissors'){
            if (playerSelection === 'paper'){
                alert ('Computer: Scissors | You: Paper')
                return (false);
            } else if (playerSelection === 'rock'){
                alert ('Computer: Scissors | You: Rock')
                return (true);
            }
        }
        
        } //finally working

        

        function game (playerScore, computerScore){

            for (let i = 0; i < 5; i++){
            if (playRound('tie')){
                alert ('tie!')
                getComputerChoice ()
                getPlayerChoice()
                playRound()
            } else if (playRound ()===true) {
                playerScore ++
                alert ('WINNERINO!')
                getComputerChoice ()
                getPlayerChoice()
                playRound()
            } else if (playRound ()===false){
                computerScore ++
                alert('LOSERINO')
                getComputerChoice ()
                getPlayerChoice()
                playRound()
            }
            Alert (`The score is Player:` + game(playerScore) + `-Computer:` + game(computerScore)) 
            }
        } // function doesnt seem to run 
        



let resulto = playRound(computerSelection, playerSelection)
alert (`Computer picked ` + computerSelection + `. You picked ` + playerSelection+ `. It is a ` + resulto)








/*  
LEARNINGS
- the function must return a console.log or be put in a variable to work i guess?
- if else statements have to be specific if htere are layers
*/ 

// function playRound(computerSelection, playerSelection) {

//     if (computerSelection === playerSelection) {
//             return ('tie')
//         }  else if (computerSelection === 'rock') {
//             if (playerSelection === 'scissors'){
//                 return ('loss');
//             } else if (playerSelection === 'paper'){
//                 return ('win');
//             }
//         }  else if (computerSelection === 'paper') {
//             if (playerSelection === 'rock'){
//                 return ('loss');
//             } else if (playerSelection === 'scissors'){
//                 return ('win');
//             }
//         } else  if (computerSelection === 'scissors'){
//             if (playerSelection === 'paper'){
//                 return ('loss');
//             } else if (playerSelection === 'rock'){
//                 return ('win');
//             }
//         }
        
//         }
