appendElements () 
scoreboard ()

  function appendElements () {
    const body = document.body
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    body.append(div)
    body.append(div2)
    div.setAttribute('style','margin-bottom:20px') 
    

    const rock = document.createElement ('button')
    const paper = document.createElement ('button')
    const scissors = document.createElement ('button')


    div.textContent = 'Roshambo Earth'
    rock.textContent = 'rock'
    paper.textContent= 'paper'
    scissors.textContent= 'scissors'

    div2.append(rock)
    div2.appendChild(paper)
    div2.appendChild(scissors)

    

     getPlayerChoice()
  } 

  

  //setTimeout(function(){scoreboard()}, 2500) // worth understanding cb func

  function scoreboard () {
    let scoreboard= document.querySelector ('div')
    const player = document.createElement('div')
    const computer = document.createElement('div')
    scoreboard.appendChild(player)
    scoreboard.appendChild(computer)
    
    player.textContent = 'player'
    computer.textContent = 'comp'
    
  }

function getPlayerChoice () {
    let buttons = document.querySelectorAll('button')

    buttons.forEach((button)=>{
        button.addEventListener ('click', (e) => {
        return playRound((e.target.innerText),getComputerChoice());
    })
    
    // works because I was able to get the string value using (e.target.innerText)  
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
} //EDIT THIS FUNCTION IT IS RUNNING RANDOMLY

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
