appendElements () 


  function appendElements () {
    const body = document.body
    const div = document.createElement('div')
    body.append(div)
    div.setAttribute('style','margin-bottom:20px') 
    
    const rock = document.createElement ('button')
    const paper = document.createElement ('button')
    const scissors = document.createElement ('button')
    body.append(rock)
    body.append(paper)
    body.append(scissors)

    div.textContent = 'Salutations Earth'
    rock.textContent = 'rock'
    paper.textContent= 'paper'
    scissors.textContent= 'scissors'
    
    const scoreboard= document.createElement ('div')
    div.appendChild(scoreboard)

    //add event listener to connect button to playerChoose
    //add new function for this so functions are more simple
    //
  } 



function playerChoose () {
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
      return playRound(getComputerChoice(), e.target.innerText)
      
      //return somethign to add it to addDiv (rename that  too )
    }); 
  }); 
}

  
game(0,0)

function game (playerScore, computerScore){
     
    for (let i = 0; i < 5; i++){ 
       if (i <5){
        let roundCheck = playRound(getComputerChoice (), getPlayerChoice ()) //zxc was calling function several times, even though it was a conditional check, put it in a variable instead
        if (roundCheck===true) {playerScore++}
        if (roundCheck===false) {computerScore++}

        console.log(`Player:`+ playerScore)
        console.log(`Computer:`+ computerScore)
        console.log(`round `+ (i +1))
       } 
       if (i === 4){
       endGame (playerScore,computerScore)
}
}
}
//test commit

function endGame(playerScore,computerScore) {
    if (playerScore > computerScore){
        console.log('win')
        }else if (playerScore < computerScore){
        console.log('lose')
        }else if (playerScore === computerScore){
        console.log('tie')
        }
}

//playRound(getComputerChoice (), getPlayerChoice ())  //delete later

function playRound(computerSelection, playerSelection) {
    

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
            } 
        }

function tieRound(){
    return true
}



function getComputerChoice () {
    rand = parseInt(Math.floor (Math.random() *3));
    if (rand === 2) return 'rock';
    if (rand === 1) return 'paper';
    if (rand === 0) return 'scissors';
}



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
