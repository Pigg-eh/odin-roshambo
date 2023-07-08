appendElements () 


  function appendElements () {
    const body = document.body
    const div = document.createElement('div')
    body.append(div)
    div.setAttribute('style','margin-bottom:20px') 
    

    const rock = document.createElement ('button')
    const paper = document.createElement ('button')
    const scissors = document.createElement ('button')

    rock.classList.add ('rock')
    paper.classList.add ('paper')
    scissors.classList.add ('scissors')

    div.textContent = 'Salutations Earth'
    rock.textContent = 'rock'
    paper.textContent= 'paper'
    scissors.textContent= 'scissors'

    body.appendChild(rock)
    body.appendChild(paper)
    body.appendChild(scissors)

    const scoreboard= document.createElement ('div')
    div.appendChild(scoreboard)
     getPlayerChoice()
  } 


function getPlayerChoice () {
    let buttons = document.querySelectorAll('button')

    buttons.forEach((button)=>{
        button.addEventListener ('click', (e) => {
        return playRound((e.target.innerText),getComputerChoice());
    })
    // by the gods it worked... BY THE GODS ITS WORKING
        
});
}

  


function game (playerScore, computerScore){
     
    for (let i = 0; i < 5; i++){ 
        if (i < 5){
            let roundCheck = playRound(getPlayerChoice, getComputerChoice) 
            if (roundCheck===true) {playerScore++}
            if (roundCheck===false) {computerScore++}
        
        console.log(`Player:`+ playerScore)
        console.log(`Computer:`+ computerScore)
        console.log(`round `+ (i +1))
    }else if (i === 5){
       endGame (playerScore,computerScore)
}
}
} //EDITING THIS FUNCTION IT IS RUNNING RANDOMLY

function endGame(playerScore,computerScore) {
    if (playerScore > computerScore){
        console.log('win')
        }else if (playerScore < computerScore){
        console.log('lose')
        }else if (playerScore === computerScore){
        console.log('tie')
        }
    
}



function playRound(playerSelection, computerSelection) {
    
    
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
//may need to edit playRound

function tieRound(){
    return true
}



function getComputerChoice () {
    rand = parseInt(Math.floor (Math.random() *3));
    if (rand === 2) return 'rock';
    if (rand === 1) return 'paper';
    if (rand === 0) return 'scissors';
}




  




        

        

   











/*  
LEARNINGS
- the function must return a console.log or be put in a variable to work i guess?
- if else statements have to be specific if there are layers
*/ 
