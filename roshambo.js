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

game(0,0)
// is supposed to play 5 rounds of playRound()???????
function game (playerScore, computerScore){
    
            
    for (let i = 0; i < 5; i++){
    //    if (i === 0){
    //     playerScore = 0
    //     computerScore = 0
    //    }  **not needed if you define parmeters
       if (i <5){
        let roundCheck = playRound(getComputerChoice (), getPlayerChoice ()) // was calling function several times, even though it was a conditional check, put it in a variable instead
        if (roundCheck===true) {playerScore++}
        if (roundCheck===false) {computerScore++}

        console.log(`Player:`+ playerScore)
        console.log(`Computer:`+ computerScore)
        console.log(`round `+ i)
       } else if (i === 5)
       return (`Final Score Player:`+ playerScore` Computer:` + computerScore)
}
} //check if i is incrementing
// console.log(game())


//**compares computer choice and player choice**
function playRound(computerSelection, playerSelection) {
    //  computerSelection = getComputerChoice()
    //  playerSelection = getPlayerChoice()    XX works but need to use parameters

            if (computerSelection === 'rock') {
                if (playerSelection === 'scissors'){
                    alert ('Computer: Rock | You: Scissors | YOU LOSE')
                    return false;
                } else if (playerSelection === 'paper'){
                    alert ('Computer: Rock | You: Paper | YOU WIN')
                    return true;
                }
            }  else if (computerSelection === 'paper') {
                if (playerSelection === 'rock'){
                    alert ('Computer: Paper | You: Rock | YOU LOSE')
                    return false;
                } else if (playerSelection === 'scissors'){
                    alert ('Computer: Paper | You: Scissors | YOU WIN')
                    return true;
                }
            } else  if (computerSelection === 'scissors'){
                if (playerSelection === 'paper'){
                    alert ('Computer: Scissors | You: Paper | YOU LOSE')
                    return false;
                } else if (playerSelection === 'rock'){
                    alert ('Computer: Scissors | You: Rock | YOU WIN')
                    return true;
                }
            } 
            if (computerSelection === playerSelection) {
                alert ('YOU BOTH PICKED THE SAME | TIE') 
                tieRound()     
            } //finally working
        }

function tieRound(){
    return true
}


// **Gets random input from computer**
function getComputerChoice () {
    rand = parseInt(Math.floor (Math.random() *3));
    if (rand === 2) return 'rock';
    if (rand === 1) return 'paper';
    if (rand === 0) return 'scissors';
}
let computerSelection = getComputerChoice()
console.log(computerSelection)


// **Gets input from player**
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

  

// let playerSelection = getPlayerChoice()
// console.log(playerSelection)



        

        

   



// let resulto = playRound(computerSelection, playerSelection)
// alert (`Computer picked ` + computerSelection + `. You picked ` + playerSelection+ `. It is a ` + resulto)








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
